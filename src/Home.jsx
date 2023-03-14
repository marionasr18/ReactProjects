import { useState, useEffect, useContext, useCallback, React, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import CardItemEdit from "./CardItemEdit";
import { FetchData } from "./functions";


import './app.css'
import { LoadingContext } from "./LoadingContextWrapper";

export default function Home() {

    const [cards, setCards] = useState([])
    const nav = useNavigate();
    const { isLoading, setIsLoading } = useContext(LoadingContext);

    const handlePlayer = () => {
        nav('player')
    }
    const handleAddSport = () => {
        nav('sports')
    }
    const getData = useCallback(async () => {

        setIsLoading(prv => prv + 1)


        let response = await FetchData(`${process.env.PUBLIC_URL}/DataFiles/PlayersData.json`, 'get');

        setCards(response.data)

        setIsLoading(prv => prv - 1)

    }, [])

    useEffect(() => {
        getData();


    }, [])
    const logout = () => {
        localStorage.removeItem('auth')
        sessionStorage.removeItem('item_key');

        nav("/", { replace: true })
    }
   
    return (
       <>
       <div className="row">
        <button onClick={handlePlayer}>Define Player</button>
        <button onClick={handleAddSport}>Define Sports</button>
        <button onClick={handlePlayer}>Define Playground</button>
       </div>
       </> 
    )
}
