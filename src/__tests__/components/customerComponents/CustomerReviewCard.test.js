import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import CustomerReviewCard from '../../../components/customerComponents/CustomerReviewCard';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("CustomerReviewCard component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <CustomerReviewCard/>
           </BrowserRouter>
           
        )

    });
    
})