import React from 'react';
import ReactDOM from 'react-dom';
import {render,act,screen} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import { MockedProvider } from '@apollo/client/testing';
import WorkProgress from '../../../components/customerComponents/WorkProgress';

describe("schedule Form component tests",()=>{
    const mocks= []
    
    it('renders without error', async () => {
       
        await act(async () => render(
            <BrowserRouter>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <WorkProgress/>
                </MockedProvider>
            </BrowserRouter>,
        ));
    
    });  
    
})