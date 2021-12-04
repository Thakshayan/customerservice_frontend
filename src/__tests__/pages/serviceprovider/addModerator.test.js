import React from 'react';
import ReactDOM from 'react-dom';
import {render,act,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import AddModerator from '../../../pages/serviceProvider/addModerator';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

describe("Profile photo component tests",()=>{
    
    const mocks= []
    
    it('renders without error', async () => {
       
        await act(async () => render(
            <BrowserRouter>
                <MockedProvider mocks={mocks} type='Moderator' addTypename={false}>
                    <AddModerator/>
                </MockedProvider>
            </BrowserRouter>,
        ));
    
    });  
  
  
})

