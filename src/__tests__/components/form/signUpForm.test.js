import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen,act} from '@testing-library/react';
import { HashRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import SignUpForm from '../../../components/form/SignUpForm';
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
    

            
            const phone = screen.queryByPlaceholderText('Phone Number');
            const address = screen.queryByPlaceholderText('Address');
            const bankAcc = screen.queryByPlaceholderText('Bank Account Number');
            const name = screen.queryByPlaceholderText('Eg: Painting Pvt Ltd');
            const password = screen.queryByPlaceholderText('Password');
            const confirmPassword = screen.queryByPlaceholderText('Confirm Password');

            expect(phone.value).toBe('')
            await act(async () => {
                await userEvent.type(phone, '0736892873' );
                await userEvent.type(address, 'Sample Address' );
                await userEvent.type(name, 'Company' );
                await userEvent.type(bankAcc, '892873' );
                await userEvent.type(password, 'AAA3' );
                await userEvent.type(confirmPassword, 'AAA3' );
            })
            
        
            
           
            expect(bankAcc.value).toBe('892873')
            expect(address.value).toBe('Sample Address')
            expect(name.value).toBe('Company')
            expect(password.value).toBe('AAA3')
            expect(confirmPassword.value).toBe('AAA3')
       
           
            


        
        
    });


    
})