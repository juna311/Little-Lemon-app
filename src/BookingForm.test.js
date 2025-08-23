import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {

    const mockProps = {
        availableTimes: ["17:00", "18:00", "19:00"],
        date: '',
        time: '17:00',
        guests: '1',
        occasion: 'Birthday',
        dispatch: jest.fn(),
        setDate: jest.fn(),
        setTime: jest.fn(),
        setGuests: jest.fn(),
        setOccasion: jest.fn()
    };

    render(<BookingForm {...mockProps} />);
    
    const labelElement = screen.getByText("Choose date");
    expect(labelElement).toBeInTheDocument();
});