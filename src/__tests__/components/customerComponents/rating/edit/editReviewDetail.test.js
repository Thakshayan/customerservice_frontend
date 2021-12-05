import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import EditReviewDetail from '../../../../../components/customerComponents/rating/edit/editReviewDetail';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Rating List component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <EditReviewDetail/>
           </BrowserRouter>
           
        )

    });
    
})