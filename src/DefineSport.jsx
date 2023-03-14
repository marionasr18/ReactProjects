import React, { useCallback, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import FileDialogue from './FileDialogue';

export default function DefineSport() {
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
    return (<>
        <div className='row mt-2'>
            <div className='title'>Sport Definition</div>
            <div className='col-2'> Sport Code</div>
            <div className='col-4'>
                <input type="number" name="comment" value={obj.comment} onChange={handleInputChange} />
                </div>
        </div>

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

    </>)
}





