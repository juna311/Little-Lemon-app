import { initializeTimes, updateTimes } from './BookingPage'; // Add this import

test('initializeTimes returns the correct times', () => {
    const result = initializeTimes();
    expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test('updateTimes returns the correct times', () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: 'UPDATE_TIMES', payload: '2024-01-15' };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
});