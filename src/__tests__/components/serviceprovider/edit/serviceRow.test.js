import React from 'react';
import ReactDOM from 'react-dom';

import {render,act, screen, within, cleanup } from '@testing-library/react';
import {MockedProvider} from "@apollo/client/testing";

import '@testing-library/jest-dom';
import ServiceRow from '../../../../components/serviceprovider/edit/serviceRow';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Service Row component tests",()=>{
    
    it("It renders without crashing", ()=>{
        const {} = render(
            <BrowserRouter>
                <ServiceRow/>
            </BrowserRouter>
            )
    });
    it("It content displayed", ()=>{
        render(
            <BrowserRouter>
                <ServiceRow service="painting"/>
            </BrowserRouter>
            )

        const linkElement = screen.getByText(/painting/i);
        expect(linkElement).toBeInTheDocument();
    });

    
    
})