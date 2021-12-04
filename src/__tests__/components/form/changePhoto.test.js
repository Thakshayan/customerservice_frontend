import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen,act} from '@testing-library/react';
import { HashRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import PhotoUpdate from '../../../components/form/changePhoto';
import userEvent from "@testing-library/user-event";
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

describe("Photo Update component tests",()=>{


    it("It renders without crashing",async ()=>{
        await act(async () => render(
            <BrowserRouter>
                <PhotoUpdate/>  
            </BrowserRouter>,
        ));
        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });



    
})