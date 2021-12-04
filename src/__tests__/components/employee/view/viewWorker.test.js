import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import ViewWorker from '../../../../components/employee/view/viewWorker';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Remove change card component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <ViewWorker content={[]}/>
           </BrowserRouter>
           
        )
    });

    
    
})