import React from 'react';
import ReactDOM from 'react-dom';
import {render,act,screen} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import AddWorkerForm from '../../../../components/employee/add/addEmployee';

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
    });
    
})