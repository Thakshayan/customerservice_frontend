import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import RemoveEmployeeCard from '../../../../components/employee/remove/removeEmployee';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Remove employee card component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <RemoveEmployeeCard/>
           </BrowserRouter>
           
        )
    });
    it("It renders without content", ()=>{
        render(
            <BrowserRouter>
                <RemoveEmployeeCard/>
           </BrowserRouter>
           
            
        )
        const linkElementUsername = screen.getByText(/No matches/i);
        expect(linkElementUsername ).toBeInTheDocument();
    });
    
})