// Remove any react-router-dom mocks from here
jest.mock('./api', () => ({
    fetchAPI: jest.fn()
}));

import { initializeTimes, updateTimes } from './BookingPage';
import { fetchAPI } from './api';

test('initializeTimes returns the correct times', () => {
    fetchAPI.mockReturnValue(["17:00", "18:00", "19:00", "20:00"]);
    
    const result = initializeTimes();
    
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(result).toEqual(["17:00", "18:00", "19:00", "20:00"]);
});

test('updateTimes returns the correct times', () => {
    fetchAPI.mockReturnValue(["18:00", "19:00", "20:00"]);
    
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: 'UPDATE_TIMES', payload: '2024-01-15' };
    
    const result = updateTimes(initialState, action);
    
    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(result).toEqual(["18:00", "19:00", "20:00"]);
});