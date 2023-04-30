import React from 'react'

const Footer = () => {
  return (
    <footer style={{
        position:"fixed",
        bottom:"0",
        width:"100%",
        height:"60px",
        marginBottom:"0",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        background:"#1A2735",
        color:"whitesmoke"
    }}>
        <p className='text-center'>All Rights Reserved. Copyright © Manivannan FoodWorks Ltd.</p>     
    </footer>
  )
}

export default Footer
