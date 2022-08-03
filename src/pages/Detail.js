import React from "react";
import { useParams, useHistory} from "react-router-dom";
import { Table, Spinner, Card, Row, Col, CardGroup, Button, Badge } from "react-bootstrap";
import axios from "axios";
import { format } from "date-fns";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Detail = () => {
  const { id, title } = useParams();
  const history = useHistory();
  const [detail, setDetail] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(); //ไม่ขึ้นกับการ re-render หน้าใหม่ๆ

  const getData = async (id) => {
    try {
      setLoading(true);
      const resp = await axios.get(
        "https://api.codingthailand.com/api/course/" + id,
        {
          // cancelToken: cancelToken.current.token,
        }
      );
      setDetail(resp.data.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    // cancelToken.current = axios.CancelToken.source();

    getData(id);

    // ทำตอน หน้านี้ถูกปิดลง
    return () => {
      // console.log('Page are closed');
      // cancelToken.current.cancel()
    };
  }, [id]); //เพื่อให้ตรวจจับการเปลี่ยนแปลง จากตัวแปร id

  if (error) {
    return (
      <div className="text-center mt-5">
        <p>เกิดข้อผิดพลาดจาก Server กรุณาลองใหม่</p>
        {/* <p>{error.response.data.message}</p> */}
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <br />
        <Button variant="secondary" onClick={()=>{
          history.goBack();
        }}>ย้อนกลับ</Button>{' '}
          <br /><br />
          <h2>
            {title} - {id}
          </h2>
          <Row>
            {detail.length > 0 ? (
              detail.map((item) => {
                return (
                  <Col xs={6} md={4} key={item.ch_id}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{item.ch_title}</Card.Title>
                        <Card.Text>
                          <span>{item.ch_timetotal}</span>
                          <br/>
                          {/* <span>{item.ch_view}</span> */}
                          <Badge pill bg="success">
                            {item.ch_view}
                          </Badge>
                          <br/>
                          <span>{item.ch_dateadd}</span>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </Card.Footer>
                    </Card>
                  </Col>
                );
              })
            ) : (
              <p>ไม่มีวิดีโอ</p>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Detail;
