import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen,act} from '@testing-library/react';
import { HashRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import SignInForm from '../../../components/form/signInForm';
import userEvent from "@testing-library/user-event";
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

describe("Signup Form component tests",()=>{

    let container = null;


    it("It renders without crashing",async ()=>{
        await act(async () => render(
            <BrowserRouter>
                <SignInForm/>  
            </BrowserRouter>,
        ));
    });
    it("It renders without crashing",async ()=>{
    
      
            render(
                <BrowserRouter>
                <SignInForm/>
            </BrowserRouter>,
            );
    

            
            const userName = screen.queryByPlaceholderText('User ID');
            const password = screen.queryByPlaceholderText('Password');

            await act(async () => {
                await userEvent.type(userName, 'User' );
                await userEvent.type(password, 'AAA3' );
            })


            expect(userName.value).toBe('User')
            expect(password.value).toBe('AAA3')

       
           
            


        
        
    });


    
})