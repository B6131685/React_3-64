import React from 'react'
import PropTypes from 'prop-types';
// function Footer( { content, postcode } ) {
function Footer( props ) {
let { content, postcode } = props
    
    const divStyle = {
        color: 'blue',
        marginBottom: '30px' //not have margin-buttom in JSX ? or React ?
    }

    return (
    <div >
        <div style={{fontSize:'35px'}}> Footer</div>
        <br></br>

        props Form Parent Component : {props.content}
        <br></br>
        <div style={divStyle}>

        get form destructuring
        <br></br> 
        conten : { content }
        <br></br> 
        postcode : {postcode}
        </div>
    </div>
  )
}

Footer.propTypes = {
    content: PropTypes.string,
    postcode: PropTypes.number
};

export default Footer