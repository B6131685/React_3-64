import React from "react";
import { Table, Spinner, Badge } from "react-bootstrap";
import axios from "axios";
import { format } from "date-fns";
import { BsEyeFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
function ProductPage() {
  const [product, setProduct] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(null);  //ไม่ขึ้นกับการ re-render หน้าใหม่ๆ


  const getCourse = async () => {
    try {
      setLoading(true);
      const resp = await axios.get("https://api.codingthailand.com/api/course",{
        // cancelToken: cancelToken.current.token
      });
      setProduct(resp.data.data);
    } catch (error) {
        console.log(error);
        setError(error)
    } finally {
      setLoading(false);
    }
  };

  

  React.useEffect(() => {
    // cancelToken.current = axios.CancelToken.source()
    
    getCourse();

    return ()=>{
      // ทำตอน หน้านี้ถูกปิดลง
        // console.log('Page are closed');
        // cancelToken.current.cancel()
    }
  }, []);

  if(error){
    return (
        <div className="text-center mt-5">
            <p>เกิดข้อผิดพลาดจาก Server กรุณาลองใหม่</p>
            {/* <p>{error.response.data.message}</p> */}
        </div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>สินค้า</h2>
          { loading && (
            <Spinner animation="border" variant="primary" />
          )}
          <Table striped bordered hover>
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th>id</th>
                <th>course</th>
                <th>view</th>
                <th>วันที่ออกจำหน่าย</th>
                <th>รูป</th>
                <th>เครื่องมือ</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item) => {
                return (
                  <tr key={item.id} style={{ textAlign: "center" }}>
                    <td>{item.id}</td>
                    <td>
                      <h4>{item.title}</h4>
                      <br />
                      {item.detail}
                    </td>
                    <td>
                      <Badge pill bg="success">
                          {item.view}
                      </Badge>
                      </td>
                    <td>{format(new Date(item.date), "dd MMM yyyy")}</td>
                    <td style={{ textAlign: "center" }}>
                      <img src={item.picture} width="110px" />
                    </td>
                    <td>
                        <Link to={`/detail/${item.id}/title/${item.title}`}> 
                            <BsEyeFill />
                        </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
