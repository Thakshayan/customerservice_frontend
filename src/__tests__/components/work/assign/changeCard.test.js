import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import ChangeCard from '../../../../components/work/assign/changeCard';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Assign worker component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <ChangeCard/>
           </BrowserRouter>
           
        )
    });
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <ChangeCard content={[]}/>
           </BrowserRouter>
           
        )
    });
    
})