import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import RatingList from '../../../../../components/customerComponents/rating/ratingSection/ratingList';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Rating List component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <RatingList/>
           </BrowserRouter>
           
        )

    });
    
})