import React from 'react';
import ReactDOM from 'react-dom';
import {render,act, screen, within, cleanup } from '@testing-library/react';
import {MockedProvider} from "@apollo/client/testing";

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import SuccessPage from "../../pages/success"

afterEach(cleanup);

describe("success page tests", ()=>{
    it("It renders without crashing", async()=>{

        const {getByText} = render(
        <BrowserRouter>
            <MockedProvider>
                <SuccessPage/>
            </MockedProvider>
        </BrowserRouter>
        )
        
        expect(getByText("Request is sucessfully submitted")).toBeInTheDocument();
    });
    it("It content presents in it", async()=>{

        const {getByText} = render(
        <BrowserRouter>
            <MockedProvider>
                <SuccessPage/>
            </MockedProvider>
        </BrowserRouter>
        )
        
        expect(getByText("Request is sucessfully submitted")).toBeInTheDocument();
        expect(getByText("Success")).toBeInTheDocument();
    });
    
})