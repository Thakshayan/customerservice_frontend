import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import Empty from "../../components/Empty"
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Empty component tests",()=>{
    it("It renders without crashing", ()=>{
       
        render(
            <Empty/>
        )            

     
    });
    it("It display the content without crashing", ()=>{
       
        render(
             <Empty 
                message='No results Found'
             />
         )            

     const linkElement = screen.getByText(/No results Found/i);
     expect(linkElement).toBeInTheDocument();
 });
    
})