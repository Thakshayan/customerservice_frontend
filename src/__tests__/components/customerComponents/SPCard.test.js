import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import SPCard from '../../../components/customerComponents/SPCard';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("SPCard component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <SPCard/>
           </BrowserRouter>
           
        )

    });
    
})