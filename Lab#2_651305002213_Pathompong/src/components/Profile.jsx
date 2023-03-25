import "./Profile.css";
import profile from'../image/profile.jpg';
import React from "react";

function Profile(){
    return(
        <div className="layout">
        <img src={profile} alt="profile"/>
        <h1 className="name">Pathompong Chamchoy</h1>
        <hr></hr>
        </div>
    )
}
export default Profile