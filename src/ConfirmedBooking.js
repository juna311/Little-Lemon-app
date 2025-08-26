import { useLocation } from 'react-router-dom';

export default function ConfirmedBooking() {
    const location = useLocation();
    const bookingData = location.state?.bookingData;
    
    return (
        <div className="confirmed-booking">
            <div className="container">
                <h1>Booking Confirmed!</h1>
                <p>Your reservation has been successfully confirmed.</p>
                {bookingData && (
                    <div className='booking-details'>
                        <p>Date: {bookingData.date}</p>
                        <p>Time: {bookingData.time}</p>
                        <p>Guests: {bookingData.guests}</p>
                        <p>Occasion: {bookingData.occasion}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
