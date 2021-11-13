import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import EditEmployee from '../../../../components/employee/edit/editEmployee';

import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

describe("Add employee component tests",()=>{


    it("It renders without crashing", ()=>{
        
        render(
            <BrowserRouter>
               
                    <EditEmployee/>
                
            </BrowserRouter>,
        );
        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
    
})