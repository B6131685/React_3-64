import React, {useState, useEffect} from 'react'

function Sidebar() {
    
    // let fullname = 'Jhin'
    // [fullname, setFullname] desturcturingArray
    const [fullname, setFullname] = useState('Lux')
    const [lastname, setlastname] = useState('sett')


    useEffect( ()=>{
        // setcountRender(countRender+1);
        console.log('use effect working')
    })

    
    // [] ใส่แบบนี้จะทำงานแค่ 1 รอบ
    useEffect( ()=>{
        // setcountRender(countRender+1);
        console.log('One time useEffect')
    }, [])  

    useEffect( ()=>{
        // setcountRender(countRender+1);
        console.log('lastname Change')
    }, [lastname])  
    

    const changeName = () =>{
        if(fullname === 'Lux') setFullname('Jhin')

        if(fullname === 'Jhin') setFullname('Lux')
    }

    const changeLastName = () =>{
        if(lastname === 'sett') setlastname('Master yi')

        if(lastname === 'Master yi') setlastname('sett')
    }

    return (
    <>
        <div>name: {fullname}</div>
        <div>lastname: {lastname}</div>
 
        <button onClick={changeName}> changeName </button>

        <button onClick={changeLastName}> changeLastname </button>
    </>
  )
}

export default Sidebar