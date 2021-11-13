import React from 'react';
import ReactDOM from 'react-dom';
import {render,act,screen} from '@testing-library/react';
import Messager from '../../../components/message/messager'
import '@testing-library/jest-dom';
import Router, { BrowserRouter } from "react-router-dom";
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';


jest.mock("react-router", () => ({
    ...jest.requireActual("react-router"),
    useParams: jest.fn(),
   }));

describe("Messager component tests",()=>{
    
    const mocks = []   
    
    it('renders without error', () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1234' })
        const component = TestRenderer.create(
            <BrowserRouter>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <Messager/>
                </MockedProvider>
            </BrowserRouter>,
        );
    });  
    
    
    
    
})

