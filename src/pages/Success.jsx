import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div 
    style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }}>
        <img src='https://image.pngaaa.com/743/6496743-middle.png' alt=''
        style={{width:"60px"}}
        />
        <button 
        style={{
            border: "none",
            width: 120,
            marginTop: "10px",
            borderRadius: 5,
            padding: "10px",
            fontSize: "20px",
            // backgroundColor: "teal",
            color: "black",
            fontWeight: "600",
            cursor: "pointer"
        }}>
         Successful
        </button>

      <div style={{marginTop: "10px",marginBottom: "20px",fontSize: "20px", fontWeight: "200"}}> Your Order is placed. Thank you for choosing Logo.
      </div>
        <Link to='/'>
        <button 
        style={{
          border: "none",
          width: 190,
            marginTop: "10px",
            borderRadius: 5,
            padding: "10px",
            fontSize: "20px",
            backgroundColor: "teal",
            color: "white",
            fontWeight: "600",
            cursor: "pointer"
          }}>
         Continue Shopping
        </button>
          </Link>
    </div>
  )
}

export default Success
