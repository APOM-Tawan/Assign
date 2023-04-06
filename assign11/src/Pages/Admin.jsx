import React from "react";
import {useNavigate} from 'react-router-dom';
import profile from '../assets/Profile.jpg'

function Admin({ isLoggedIn, setIsLoggedIn}) {
    const navigate = useNavigate();
    return (
        <>
            <img src={profile} alt="profile picture"></img>
            <h1 style={{
                margin: "10px auto",
                display: "flex",
            }}>This is Admin Page</h1>
            <button style={{
                margin: "5px auto",
                display: "flex",
                backgroundImage: "linear-gradient(to right, #3acadf, #651fff 95%)",
                color: "white",
                padding: "10px ",
                borderRadius: "5px",
                border: "none",
                fontWeight: "bold",
                fontSize: "13px",
                width: "5%",
                alignItems: "center",
                justifyContent: "center",
            }} onClick={() => navigate("/")}>Logout</button>
        </>
    );
}

export default Admin;