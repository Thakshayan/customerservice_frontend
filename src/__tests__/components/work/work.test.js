import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import WorkProfile from "../../../components/work/work";


describe("Work component tests",()=>{
    window.scrollTo = jest.fn()
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <WorkProfile/>
           </BrowserRouter>
           
        )
    });
    
})