import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App'

import { fetchMissions } from './api/fetchMissions';
jest.mock('./api/fetchMissions');

describe('', () => {
    // test('1. When button is clicked, get missions', async () =>  {
    //     render(<App/>);
    //     const button = screen.getByRole('button');
    //     userEvent.click(button);
    //     const missions = await screen.findAllByTestId('mission');
    //     expect(missions).toBeTruthy();
    // })
    
    test('should ', async () => {
        fetchMissions.mockResolvedValueOnce({
            data: [
                {   mission_id: '1',
                    mission_name: 'Mission 1'
                },
                {   mission_id: '2',
                    mission_name: 'Mission 2'
                },
                {   mission_id: '3',
                    mission_name: 'Mission 3'
                }
            ]
        });
        render(<App/>);
        const button = screen.getByRole('button');
        userEvent.click(button);
        await waitFor (() => {
            const missions = screen.queryAllByTestId('mission');
            expect(missions).toHaveLength(3)
        })
        
    })
    
})
