import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen,act} from '@testing-library/react';
import { HashRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import OwnerRegistrationForm from '../../../components/form/ownerRegistrationForm';
import userEvent from "@testing-library/user-event";
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

describe("Owner Registration Form component tests",()=>{

    let container = null;


    it("It renders without crashing",async ()=>{
        await act(async () => render(
            <BrowserRouter>
                <OwnerRegistrationForm />  
            </BrowserRouter>,
        ));
    });
    it("It renders without crashing",async ()=>{
    
      
            render(
                <BrowserRouter>
                <OwnerRegistrationForm/>
            </BrowserRouter>,
            );
    

            
            const userName = screen.queryByPlaceholderText('Eg: Jhon Wick');
            const nic = screen.queryByPlaceholderText('Eg: 987654321v');
            const phone = screen.queryByPlaceholderText('Eg: 0758994321');

            expect(phone.value).toBe('')
            await act(async () => {
                await userEvent.type(phone, '0748393874' );
                await userEvent.type(userName, 'User' );
                await userEvent.type(nic, '167890125v' );
            })


            expect(userName.value).toBe('User')
            expect(nic.value).toBe('167890125v')

       
           
            


        
        
    });


    
})