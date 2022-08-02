import React from "react";
import { useNavigate } from "react-router-dom";

const CardItemEdit = ({ plId, name, imgUrl, comment, desc, nbOfLike, nbofShares, date }) => {
    // console.log('Date12121', date)

    const nav = useNavigate();

    const handleEdit = () => {
        nav('/profile/edit', { state: { id: plId, name: name, imgUrl: imgUrl, comment: comment, desc: desc, nbOfLike: nbOfLike, nbofShares: nbofShares, date: Date.parse(date), add: false } })
    }


    return (
        <div className="col">
            <div className="ui card">
                <div className=" ui image">
                    <img src={imgUrl} alt="Error"></img>
                </div>
                <div className="content">
                    <span href="" className="header">{name}</span>
                    <div className="meta">
                        <span className="date">{date}</span>
                    </div>
                    <div className="description">
                        {desc}
                    </div>
                </div>
                <div className="extra content">
                    <span >
                        <i className="user icon"></i>
                        6
                    </span>
                    <span>
                        <i className="comment icon"></i>
                        {comment}
                    </span>
                    <span>
                        <i className="heart icon" ></i>
                        {nbOfLike}

                    </span>
                    <span>
                        <i className="share icon" ></i>
                        {nbofShares}
                    </span>
                    <span>
                        <i className="edit icon" onClick={handleEdit}></i>
                    </span>
                </div>
            </div></div>
    )



}
export default CardItemEdit;