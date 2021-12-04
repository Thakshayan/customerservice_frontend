import React from 'react';
import ReactDOM from 'react-dom';

import {render,act, screen, within, cleanup } from '@testing-library/react';
import {MockedProvider} from "@apollo/client/testing";

import '@testing-library/jest-dom';
import DistrictRow from '../../../../components/serviceprovider/edit/districtRow';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("District Row component tests",()=>{
    it("It renders without crashing", ()=>{
        const {} = render(
            <BrowserRouter>
                < DistrictRow/>
            </BrowserRouter>
            )
    });
    it("It content displayed", ()=>{
        render(
            <BrowserRouter>
                <DistrictRow district="Jaffna"/>
            </BrowserRouter>
            )

        const linkElement = screen.getByText(/Jaffna/i);
        expect(linkElement).toBeInTheDocument();
    });
    
    
})