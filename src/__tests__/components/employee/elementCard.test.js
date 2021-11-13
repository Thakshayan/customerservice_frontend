import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import ElementCard from '../../../components/employee/elementCard';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Remove change card component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <ElementCard content={[]}/>
           </BrowserRouter>
           
        )
    });

    
    
})