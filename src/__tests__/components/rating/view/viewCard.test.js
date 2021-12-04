import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ViewCard from '../../../../components/rating/view/viewCard';


describe("View Card component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <ViewCard/>
           </BrowserRouter>
           
        )
    });
    it("It contains the content", ()=>{
        render(
            <BrowserRouter>
                <ViewCard
                    message = "This is a sample message"
                    
                />
           </BrowserRouter>
           
        )
        const linkElement = screen.getByText(/This is a sample message/i);
        expect(linkElement).toBeInTheDocument();
    });
    
})