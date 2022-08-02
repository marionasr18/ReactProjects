import React, { useState, useCallback, useEffect, useContext } from "react";
import { FetchData } from "./functions";
import { useNavigate } from "react-router-dom"
import './app.css'
import { LoadingContext } from "./LoadingContextWrapper";




const Login = () => {

    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');

    const [role, setRole] = useState('')
    const [users, setUsers] = useState([]);
    const nav = useNavigate();
    const { setIsLoading } = useContext(LoadingContext);

    const getData = useCallback(async () => {
        let response = await FetchData("/DataFiles/Users.json", 'get');

        setUsers(response.data)

    }, [])

    useEffect(() => {
        getData();


    }, [])


    const handleChangePs = useCallback(
        (e) => {
            setPass(e.target.value)
            // console.log(pass)
        }, [pass])
    const handleChangeNm = useCallback((e) => {


        setUname(e.target.value)
        // console.log(uname)


    }, [uname])


    async function handleSubmit(e) {
        e.preventDefault();




        const userData = users.find((user) => user.username === uname);

        // Compare user info

        if (userData) {
            setRole(userData)
            if (userData.pass !== pass) {
                // Invalid password
                alert("Invalid pass")
            } else {
                setIsLoading(prv => prv + 1);
                setTimeout(() => {
                    setIsLoading(prv => prv - 1)
                    localStorage.setItem('auth', btoa(JSON.stringify(userData)))
                    sessionStorage.setItem("item_key", userData.role);

                    nav("/profile", { replace: true })


                }, 2000)



            }
        } else {
            // Username not found
            alert("Invalid Username")
        }
    }
    const handleSignUp = useCallback(() => {
        nav('/signUp')
    }, [])
    return (
        <div className="ui container" id="cont">

            <form className="ui large form">
                <div className="ui staged segment">
                    <label htmlFor="inputName">Username</label>
                    <input className="field" value={uname} type="text" name="inputName" onChange={handleChangeNm} />

                    <label htmlFor="inputPass">Password</label>
                    <input className="field" value={pass} type="password" name="inputPass" onChange={handleChangePs} />
                </div>

                <button className="ui teal large fluid button" onClick={handleSubmit}>Login</button>
            </form>
            <br />
            <button onClick={handleSignUp}>Sign up</button>
        </div >
    )
}
export default Login;