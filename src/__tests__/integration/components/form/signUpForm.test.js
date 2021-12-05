import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen,act} from '@testing-library/react';
import { HashRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import SignUpForm from '../../../../components/form/signUpForm';
import userEvent from "@testing-library/user-event";
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

describe("Signup Form component tests",()=>{

    let container = null;


    it("It renders without crashing",async ()=>{
        await act(async () => render(
            <BrowserRouter>
                <SignUpForm/>  
            </BrowserRouter>,
        ));
    });
    it("It renders without crashing",async ()=>{
    
      
            render(
                <BrowserRouter>
                <SignUpForm/>
            </BrowserRouter>,
            );

        const iconElement = screen.getByTestId('visible');
        const password = screen.getByPlaceholderText('Password')

        await act ( async ()=>{
            await userEvent.click(iconElement);
        })
        
        
        expect(password.type).toBe('text');
        
        await act ( async ()=>{
            await userEvent.click(iconElement);
        })

        expect(password.type).toBe('password');
        
    


       
        
    });


    
})