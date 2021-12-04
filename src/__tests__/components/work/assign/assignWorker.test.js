import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import AssignWorkerForm from '../../../../components/work/assign/assignWorker';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Assign worker component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <AssignWorkerForm state="finished"/>
           </BrowserRouter>
           
        )
        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
    
})