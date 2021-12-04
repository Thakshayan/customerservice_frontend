import React from 'react';
import ReactDOM from 'react-dom';
import {render,act,screen} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import NewWorkRequest from "../../../../components/work/request/newWorkRequest" 

import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

describe("Request Bar component tests",()=>{

    const mocks= []

    it("It renders without crashing", async ()=>{
        
        await act(async () => render(
            <BrowserRouter>
                <MockedProvider mocks={mocks} addTypename={false}>
                    < NewWorkRequest/>
                </MockedProvider>
            </BrowserRouter>
          ))
    });
    
})