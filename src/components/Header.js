import React from 'react'
import { Tite } from '../styles/styleComponent'

function Header() {

    let companyname = 'Thailand';  
    let num = 10;
    const showMessage = () =>{
        return companyname+'.com'
    }
    let isLogin = true;

    //use with Dom Event
    const alertMe = ()=>{
        alert('you click button')
    }


    // render list HTML
    const Products = [
        {id: 1, name:'coke'},
        {id: 2, name:'pepsi'},
        {id: 3, name:'Som'},
    ]


  return (
    <div>
        <Tite> Stype component with Style Libary</Tite>
        <h3> example</h3>
        <br />

        <h3>call variable {companyname}</h3>
        <br />
        <h3>call function {showMessage()}</h3> 
        <br />
        
        {isLogin && (
                <>
                    <p> test condition rendering </p>
                </>
        )}
        <br />
        {/* Dom Event */}
        <button onClick={alertMe}>alert</button>
        
        <br />
        {/* list item with map */}
        <ul>
        { Products.map(( product, index )=>{
            return (
                <li key={product.id}>  {product.name} </li>
            )
        }            
        ) }    
        </ul>

        <br/>

        call variable and use with expression <h3>{num + 2}</h3> 
        <hr/>

    </div>
  )
}

export default Header