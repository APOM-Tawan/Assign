import React from "react";
import {useParams} from "react-router-dom";

function Profile() {

    const {id} = useParams();
    return(
        <>
            <h1>This Student ID of user is {id}</h1>
        </>
    );
}
export default Profile;