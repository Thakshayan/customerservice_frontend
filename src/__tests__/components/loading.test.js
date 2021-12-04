import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import Loading from "../../components/loading"
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Loading component tests",()=>{
    it("It renders without crashing", ()=>{
       
            const div= document.createElement('div');
        
            ReactDOM.render(
                <Loading
            />,div
           
        )            

        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
    
})