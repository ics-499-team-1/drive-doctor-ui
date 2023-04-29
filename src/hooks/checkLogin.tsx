import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetToken } from '../services/LocalStorageService';

function checkLogin() {
    const navigate = useNavigate();

    useEffect(() => {
        if (GetToken() === null) {
            navigate("/login")
        }
    })
}
export default checkLogin;