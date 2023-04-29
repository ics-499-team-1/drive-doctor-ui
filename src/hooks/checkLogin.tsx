import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function checkLogin() {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("access_token") === "") {
            navigate("/login")
        }
    })
}
export default checkLogin;