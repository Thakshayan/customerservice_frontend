import React from 'react';
import ReactDOM from 'react-dom';

import {render,act, screen, within, cleanup } from '@testing-library/react';
import {MockedProvider} from "@apollo/client/testing";

import '@testing-library/jest-dom';
import ButtonCard from "../../components/buttonCard"
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Add Employee component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <ButtonCard/>
            </BrowserRouter>
            )
    });
    

    
    
})