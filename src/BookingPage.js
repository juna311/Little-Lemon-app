import React, { useState, useReducer} from 'react';
import BookingForm from './BookingForm';


export function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
}

export function updateTimes(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // For now, return the same times regardless of date
            return state;
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
