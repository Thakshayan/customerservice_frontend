import React from 'react';
import ReactDOM from 'react-dom';
import {render,act,screen} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import AddWorkerForm from '../../../../../components/employee/add/addEmployee';
import userEvent from "@testing-library/user-event";
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

describe("Add employee component tests",()=>{

    const mocks= []

    it("It renders without crashing", async ()=>{
        
        await act(async () => render(
            <BrowserRouter>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <AddWorkerForm/>
                </MockedProvider>
            </BrowserRouter>
          ))
        
        const iconElement = screen.getByTestId('visible');
        
        await userEvent.click(iconElement);
        const password = screen.getByPlaceholderText('Password')
        expect(password.type).toBe('text');
        
    
    });

})