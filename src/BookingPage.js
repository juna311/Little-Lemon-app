import React, { useState, useReducer} from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './api'; 

export function initializeTimes() {
    const today = new Date();
    return fetchAPI(today); 
}

export function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            const selectedDate = new Date(action.payload); 
            return fetchAPI(selectedDate);
        default:
            return state;
    }
}

export default function BookingPage() {

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState('1');
    const [occasion, setOccasion] = useState('Birthday');
    return (

        <div className='booking-page'>
            <div className='container'>
                <BookingForm 
                    availableTimes={availableTimes}
                    date={date}
                    time={time}
                    guests={guests}
                    occasion={occasion}
                    dispatch={dispatch}
                    setDate={setDate}
                    setTime={setTime}
                    setGuests={setGuests}
                    setOccasion={setOccasion}
                />
            </div>
        </div>
    );
}
