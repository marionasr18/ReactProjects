import { useState, useEffect, useContext, useCallback, React, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import CardItemEdit from "./CardItemEdit";
import { FetchData } from "./functions";


import './app.css'
import { LoadingContext } from "./LoadingContextWrapper";

export default function CardList() {

    const [cards, setCards] = useState([])
    const nav = useNavigate();
    const { isLoading, setIsLoading } = useContext(LoadingContext);

    const handleAdd = () => {
        nav('/profile/add', { state: { id: 0, name: '', imgUrl: '', comment: 0, desc: '', nbOfLike: 0, nbofShares: 0, date: new Date(), add: true } })
    }
    const handleAddSport = () => {
        nav('/profile/view', { state: { id: 0, name: '', imgUrl: '', comment: 0, desc: '', nbOfLike: 0, nbofShares: 0, date: new Date(), add: true } })
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
    const renderedList = useMemo(() =>
        cards.map((item) => {

            let dateForm = item.pl_Date
            //   let dateForm = Date.parse(item.pl_Date)

            return (<CardItemEdit key={item.pl_id} plId={item.pl_id} imgUrl={item.pl_Image} name={item.pl_name} comment={item.pl_Comment} desc={item.pl_Desc} nbOfLike={item.pl_Like} nbofShares={item.pl_Share} date={dateForm} />);
        }), [cards])
    return (
        <div className="container">
            <div  className="row">
                <div className="col-6">  <button onClick={handleAddSport}>Add Sport<i className="add icon"></i></button> </div> </div>
            <div className="row">
                <div className="col-10">
                    <button onClick={handleAdd}>Add Player<i className="add icon"></i></button></div>
                <div className="col-2">
                    <button onClick={logout} >
                        <i className="logout icon"></i>Log out</button></div></div>
            <div className="row">

                {renderedList}
            </div></div>
    )
}
