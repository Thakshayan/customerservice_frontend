import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen,fireEvent,act} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import PasswordChanger from '../../../../components/form/changePassword';
import { MockedProvider } from '@apollo/client/testing';


window.scrollTo = jest.fn();

describe("Signup integration tests",()=>{

    const mocks = []

    it("It selects the services", async ()=>{

        await act(async () => { render(
            <BrowserRouter>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <PasswordChanger/>
                </MockedProvider>
            </BrowserRouter>,
        
        )
    
        const iconElement = screen.getByTestId('visible');
        const password = screen.getByPlaceholderText('Confirm Password')

        await act ( async ()=>{
            await userEvent.click(iconElement);
        })
        
        
        expect(password.type).toBe('text');
        
        await act ( async ()=>{
            await userEvent.click(iconElement);
        })

        expect(password.type).toBe('password');
        
    

    });

        
        

    });

  
})