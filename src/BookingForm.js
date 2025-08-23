import React from 'react';
import Button from './Button.js';

export default function BookingForm({ availableTimes, date, time, guests, occasion, dispatch, setDate, setTime, setGuests, setOccasion }) {


    function handleDateChange(e) {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ 
            type: 'UPDATE_TIMES', 
            payload: newDate 
        });
    }
    function handleTimeChange(e) {
        setTime(e.target.value);
    }
    function handleGuests(e) {
        setGuests(e.target.value);
    }
    function handleOccasion(e) {
        setOccasion(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        alert(`Date: ${date}, Time: ${time}, Guests: ${guests}, Occasion: ${occasion}`)
    }

    const isFormValid = date && time && guests;

    return (
        <form onSubmit={handleSubmit}  className='booking-form'
        >
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange}/>
            
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={handleTimeChange}>
                {availableTimes.map((time)=>(<option key={time} value={time}>{time}</option>))}
            </select>
            
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuests}/>
            
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleOccasion}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            
            <Button type='submit' className='reserve' disabled={!isFormValid}>Make Your reservation</Button>
        </form>
    );
}