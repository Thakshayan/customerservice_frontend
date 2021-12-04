import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import EditEmployeeInfo from '../../../../components/employee/edit/editWorkerInfo';

import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

describe("Edit employee password component tests",()=>{


    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <EditEmployeeInfo/>  
            </BrowserRouter>,
        );
        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });

    
})