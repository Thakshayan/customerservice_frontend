import React from 'react';
import ReactDOM from 'react-dom';
import {render,act,screen} from '@testing-library/react';
import MessageBar from '../../../components/message/messageBar'
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import {UPDATE_READ} from "../../../GraphQL/Mutations"
import { object } from 'yup';

describe("MessageBar component tests",()=>{
    
    const mocks = []   

    it('renders without error', () => {
        const component = TestRenderer.create(
          <MockedProvider mocks={mocks} addTypename={false}>
            <MessageBar/>
        </MockedProvider>,
        );
          
    
    });  
    
    it('it contain the contentsr', () => {
        const {getByText} = render(
          <MockedProvider mocks={mocks} addTypename={false}>
            <MessageBar
                By={"ID"}
                message={"This is a sample message"}
            />
        </MockedProvider>,
        );
          
        
        expect(getByText(/This is a sample message/i)).toBeInTheDocument()
        expect(getByText(/ID/i)).toBeInTheDocument()
    
    });     


    it('it contain the contentsr', async () => {

        const mocks = [
            {
              request: {
                query: UPDATE_READ,
                variables: {
                    readMessageId: '61503a308fffd405f8891f1f',
                },
              },
              result: {
                data: {
                    "readMessage": true,
                },
              },
            },
          ];

         const object = {
              _id:'61503a308fffd405f8891f1f'

          }
          await act(async () => render(
          <MockedProvider mocks={mocks} addTypename={false}>
            <MessageBar
                By={"ID"}
                message={"This is a sample message"}
                read = {false}
                object = {object}
            />
        </MockedProvider>
        ))
          
        
        // const button = await screen.getByRole('button' { name: 'confirmRead',hidden:true });
        // button.props.onClick(); 
    
    });     


    
    
})

