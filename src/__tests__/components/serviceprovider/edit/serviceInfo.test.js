import React from 'react';
import ReactDOM from 'react-dom';

import {render,act, screen, within, cleanup } from '@testing-library/react';
import {MockedProvider} from "@apollo/client/testing";

import '@testing-library/jest-dom';
import ServiceInfo from '../../../../components/serviceprovider/edit/serviceInfo';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Service Info component tests",()=>{
    
    it("It renders without crashing", ()=>{
        const {} = render(
            <BrowserRouter>
                <ServiceInfo/>
            </BrowserRouter>
            )
    });
    
    
})