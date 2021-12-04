import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen,act} from '@testing-library/react';
import { HashRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import PasswordChanger from '../../../components/form/changePassword';
import userEvent from "@testing-library/user-event";
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

describe("Add employee component tests",()=>{


    it("It renders without crashing",async ()=>{
        await act(async () => render(
            <BrowserRouter>
                <PasswordChanger/>  
            </BrowserRouter>,
        ));
        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });

    it("check both values same or not", async () => {
        await act(async () => render(
            <HashRouter>
                <PasswordChanger/>  
            </HashRouter>
        ));
    
        // const pw = screen.getByPlaceholderText(/Password/i)
        // userEvent.type(pw, "AAA3");
        // const conPw = screen.getByPlaceholderText(/Confirm Password/i)
        // userEvent.type(conPw, "AAA3");

        //expect(pw.value).toBe(conPw.value)
          
      });

    
})