import React from 'react';
import ReactDOM from 'react-dom';
import {render,act,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';


window.scrollTo = jest.fn()


describe("Sign up page tests",()=>{
    
    const mocks= []
    
    it('renders without error', async () => {
       
        await act(async () => render(
            <BrowserRouter>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <App/>
                </MockedProvider>
            </BrowserRouter>,
        ));
    
    });  
  
  
})

