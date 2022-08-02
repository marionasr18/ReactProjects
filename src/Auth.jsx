import React, { useContext, useState, useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'


export function Auth() {
    const navigate = useNavigate();
    const location = useLocation();



    useEffect(() => {

        if (location.pathname === "signUp") {
            navigate('/signUp', { replace: true })
        }
        else if (!localStorage.getItem('auth')) {
            navigate('/login', { replace: true })
        }
        else {
            if (location.pathname === '/') {
                navigate('/profile')
            }
        }
    }, [location.pathname])
    useEffect(() => {


        if (sessionStorage.getItem("item_key") === 'regular') {

            navigate('/profile', { replace: true })

        }
    }, [location.pathname])



    return (
        <Outlet />
    )
}
