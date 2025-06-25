import React from "react";

const Nav=({cart})=>{
return(    
<React.Fragment>
<div className="navstyle">
    <div className="navleft"> 
        <span><b>Welcome</b></span>
        <span>Home</span>  
        <span>About</span> 
    </div>               
    <div className="cartstyle">🛒 Cart {cart}</div>
</div>
</React.Fragment>
)}
export default Nav;