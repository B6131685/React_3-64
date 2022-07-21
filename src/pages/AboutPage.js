import React from 'react'
// import React, {useState} from 'react'
import axios from 'axios'
function AboutPage() {
  const [version, setVersion] = React.useState('0.0.0');

  const getVersion = async function getVersion() {
    const resp = await axios.get('https://api.codingthailand.com/api/version')
    // console.log(resp.data.data.version);
    setVersion(resp.data.data.version);
  }

  React.useEffect( ()=>{
    //  async function getVersion() {
    //   const resp = await axios.get('https://api.codingthailand.com/api/version')
    //   console.log(resp.data.data.version);
    //   setVersion(resp.data.data.version);
    // }

    getVersion();
  },[])

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h2>เกี่ยวกับเรา</h2>
                <p>
                  Backend API Version: {version}
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutPage