import React from 'react';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from './api.js';
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

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        
        const formData = {
            date,
            time,
            guests,
            occasion
        };
        
        if (submitAPI(formData)) {
            navigate('/booking-confirmed', { 
                state: { bookingData: formData } 
            });
        }
    }

    const isFormValid = date && time && guests;

    return (
        <form onSubmit={handleSubmit} className='booking-form' aria-label="Reservation form">
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                value={date} 
                onChange={handleDateChange} 
                min={new Date().toISOString().split('T')[0]}
                aria-describedby="date-help"
                aria-required="true"
            />
            <div id="date-help" className="sr-only">Select a date for your reservation</div>
            
            <label htmlFor="res-time">Choose time</label>
            <select 
                id="res-time" 
                value={time} 
                onChange={handleTimeChange}
                aria-describedby="time-help"
                aria-required="true"
            >
                {availableTimes.map((time)=>(<option key={time} value={time}>{time}</option>))}
            </select>
            <div id="time-help" className="sr-only">Select an available time for your reservation</div>
            
            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                value={guests} 
                onChange={handleGuests}
                aria-describedby="guests-help"
                aria-required="true"
            />
            <div id="guests-help" className="sr-only">Enter the number of guests (1-10)</div>
            
            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion" 
                value={occasion} 
                onChange={handleOccasion}
                aria-describedby="occasion-help"
            >
                <option value="">Select an occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <div id="occasion-help" className="sr-only">Select the occasion for your reservation (optional)</div>
            
            <Button 
                type='submit' 
                className='reserve' 
                disabled={!isFormValid}
                aria-describedby="submit-help"
            >
                Make Your reservation
            </Button>
            <div id="submit-help" className="sr-only">
                {!isFormValid ? "Please fill in all required fields to submit your reservation" : "Submit your reservation"}
            </div>
        </form>
    );
}