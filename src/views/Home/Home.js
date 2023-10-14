import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"


const Home = (()=>{
    return (
       
        <div>
            <h1 className="home">Home</h1>
            <Link to = "/posts" className="postlink">➡Tap Here</Link>
        </div>
        
       
       
    )
})
export default Home;