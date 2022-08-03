import axios from "axios";
import React from "react";
import Pagination from "react-js-pagination";
import { Table } from "react-bootstrap";
function HospitalPage() {
  const [hospital, setHospital] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const cancelToken = React.useRef(null); //ไม่ขึ้นกับการ re-render หน้าใหม่ๆ

  // pagination
  const pageSize = 15;
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);

  const getData = async (page) => {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://api.codingthailand.com/api/hospital2?page=${page}&page_size=${pageSize}`,
        {
          // cancelToken: cancelToken.current.token
        }
      );
      setHospital(resp.data.data);
      setTotal(resp.data.meta.pagination.total);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    // cancelToken.current = axios.CancelToken.source()

    getData(page);

    // ทำตอน หน้านี้ถูกปิดลง
    return () => {
      // console.log('Page are closed');
      // cancelToken.current.cancel()
    };
  }, [page]);

  if (error) {
    return (
      <div className="text-center mt-5">
        <p>เกิดข้อผิดพลาดจาก Server กรุณาลองใหม่</p>
        {/* <p>{error.response.data.message}</p> */}
      </div>
    );
  }

  const handlePageChange = (pageNumber) => { //มันจะ return pageNumber กลับมาให้
    setPage(pageNumber)
    console.log(pageNumber);
  }

  return (
    <>
      <h1>Hopital Page</h1>
      <Table striped bordered size="sm">
        <thead>
          <tr style={{ textAlign: "center" }}>
            <th>id</th>
            <th>code</th>
            <th>ชื่อสถานพยาบาล</th>
          </tr>
        </thead>
        <tbody>
          {hospital.map((item) => {
            return (
              <tr key={item.id} style={{ textAlign: "left" }}>
                <td>{item.id}</td>
                <td>{item.code}</td>
                <td>{item.h_name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br/>
      <Pagination
        activePage={page}
        itemsCountPerPage={pageSize}
        totalItemsCount={total}
        pageRangeDisplayed={15}
        onChange={handlePageChange}
        itemClass='page-item'
        linkClass="page-link"
        prevPageText='ก่อนหน้า'
        nextPageText='ต่อไป'
        firstPageText='หน้าแรก'
        lastPageText='หน้าสุดท้าย'
      />
    </>
  );
}

export default HospitalPage;
