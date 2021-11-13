import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen,fireEvent,act} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import OwnerRegisterForm from '../../components/form/ownerRegistrationForm';


describe("Message component tests",()=>{

    const services = ['painting','masonary','plumbing']

    it("It renders without crashing", async ()=>{
        await act(async () => render(
            <BrowserRouter>
                <OwnerRegisterForm
                    services={services}
                    districts = {[]}
                    myServiceArray ={[]}
                    workRangeArray ={[]}
                    memberships ={[]}
                />
           </BrowserRouter>
           
        ));

        const selectElement = await screen.getByTestId('services')
        const buttonElement = await screen.getByTestId('service-button')
        //fireEvent.change(selectElement,{target:{value:'painting'}})
        fireEvent.click(buttonElement)
        //console.log(selectElement)
        //const divElement = screen.getByText(/painting/i)
        // expect(divElement).toBeInTheDocument()
    });
    
})