import React, { useCallback, useDebugValue, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import FileDialogue from './FileDialogue';

export default function DefinePlayer() {
    const location = useLocation();
    const nav = useNavigate()

    // console.log({ location })

    const [obj, setObj] = useState({ ...location.state });
    const initialState = { ...location.state };
    const [selectedDate, setSelectedDate] = useState(obj.date);
    const handleInputChange = e => {

        setObj(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }
    const handleSave = useCallback((e) => {
        e.preventDefault()
        obj.date = selectedDate;
        if (obj.add === true) {


            console.log(obj)
            nav('/profile')
        } else {

            console.log(obj)
            nav('/profile')
        }
    }, [obj])

    const handleCancel = useCallback((e) => {
        e.preventDefault()
        nav('/profile')
    }, [])
    const handleClear = useCallback((e) => {
        setObj({})

    }, [])

    const handleUndo = (e) => {
        try {
            e.preventDefault();
            setObj(initialState);
        } catch (error) {
            alert(error)
        }
    }

    const onUpld = useCallback((imageUrl) => setObj({ ...obj, imgUrl: imageUrl }), [])
    return (
        <div className='container'>
            <form className='ui form'>
                <div className="field">
                    <label>Id</label>
                    <input type="number" name="id" value={obj.id} onChange={handleInputChange} />
                </div>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" value={obj.name} onChange={handleInputChange} />
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className="field">
                            <label>Like</label>
                            <input type="number" name="nbOfLike" value={obj.nbOfLike} onChange={handleInputChange} /></div></div>
                    <div className='col'><div className="field">
                        <label>Share</label>
                        <input type="number" name="nbofShares" value={obj.nbofShares} onChange={handleInputChange} />
                    </div></div>

                    <div className='col'> <div className="field">
                        <label>Comment</label>
                        <input type="number" name="comment" value={obj.comment} onChange={handleInputChange} />
                    </div></div></div>

                <div className="field">
                    <label>Description</label>
                    <input type="text" name="desc" value={obj.desc} onChange={handleInputChange} />
                </div>
                <div className="field">
                    <label>Date</label>
                    {/* {console.log('selectedDate======== ', selectedDate)} */}
                    <div>
                        <DatePicker
                            onChange={(selectedDate) => {
                                setSelectedDate(selectedDate)
                            }
                            }
                            selected={selectedDate}
                        /></div>

                </div>
                <div className=" ui small image">
                    <FileDialogue imgUrl={obj.imgUrl} onUpload={onUpld} />

                </div>
                <br />
                <br />



                <div className='row'>
                    <div className='col'>
                        <button onClick={handleSave} >Save<i className="save icon"></i></button></div>

                    <div className='col'>
                        <button onClick={handleUndo} >Undo<i className="undo icon"></i></button></div>
                    <div className='col'>
                        <button onClick={handleCancel} >Cancel<i className="cancel icon"></i></button></div>
                    <div className='col'>
                        <button onClick={handleClear} >Clear<i className="trash icon"></i></button></div>
                </div>
            </form>

        </div>
    )
}





