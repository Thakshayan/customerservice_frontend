import React from 'react';
import ReactDOM from 'react-dom';
import {render,act,screen} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import AddWorkerForm from '../../../../components/employee/add/addEmployee';
import userEvent from "@testing-library/user-event";
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';

describe("Add employee component tests",()=>{

    const mocks= []

    it("It renders without crashing", async ()=>{
        
        await act(async () => render(
            <BrowserRouter>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <AddWorkerForm/>
                </MockedProvider>
            </BrowserRouter>
          ))
    });
    it("It renders without crashing", async ()=>{
        
        await act(async () => render(
            <BrowserRouter>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <AddWorkerForm/>
                </MockedProvider>
            </BrowserRouter>
          ))

          const name = screen.queryByPlaceholderText('Eg: Vijay Antony');
          const nic = screen.queryByPlaceholderText('Eg: 987654321v');
          const phone = screen.queryByPlaceholderText('Phone Number');
          const address = screen.queryByPlaceholderText('Address');
          const email = screen.queryByPlaceholderText('Enter email');
          const password = screen.queryByPlaceholderText('Password');
          const confirmPassword = screen.queryByPlaceholderText('Confirm Password');

          expect(phone.value).toBe('')
          await act(async () => {
              await userEvent.type(phone, '0736892873' );
              await userEvent.type(address, 'Sample Address' );
              await userEvent.type(name, 'Company' );
              await userEvent.type(email, 'Sample@gmail.com' );
              await userEvent.type(nic, '892873094859' );
              await userEvent.type(password, 'AAA3' );
              await userEvent.type(confirmPassword, 'AAA3' );
          })
          
      
          
         
          expect(nic.value).toBe('892873094859')
          expect(address.value).toBe('Sample Address')
          expect(email.value).toBe('Sample@gmail.com')
          expect(name.value).toBe('Company')
          expect(password.value).toBe('AAA3')
          expect(confirmPassword.value).toBe('AAA3')
    });
    
})