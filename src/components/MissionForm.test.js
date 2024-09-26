import React from 'react';
import { render, screen } from '@testing-library/react';
import MissionForm from './MissionForm';
import userEvent from '@testing-library/user-event';

describe('Sanity Check', () => {
    test('1. Renders without errors', () => {
        render(<MissionForm />);
    })   
})

describe('Button Tests', () => {
    test('2. Renders Loading Message when isFetchingData is true', () => {
        render(<MissionForm isFetchingData={true} />);
        const value = screen.queryByText(/we are fetching data/);
        expect(value).toBeVisible();
    })
    test('3. Displays button if isFetchingData is false', () => {
        render(<MissionForm isFetchingData={false} />);
        const value = screen.queryByText(/get data/i);
        const button = screen.getByRole('button')
        expect(value).toBeVisible();
        expect(button).toBeVisible();
    })
})

describe('Data Tests', () => {
    test('4. Calls getData when button is clicked', () => {
        const fakeGetData = jest.fn();

        render(<MissionForm isFetchingData={false} getData={fakeGetData} />)
        const button = screen.queryByRole('button');
        userEvent.click(button)
        //console.log(fakeGetData.mock)
        expect(fakeGetData.mock.results.length).toBe(1);
    })
    
})

