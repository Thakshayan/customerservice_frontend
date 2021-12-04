import React from 'react';
import ReactDOM from 'react-dom';
import {render,act,screen} from '@testing-library/react';
import ProfileCard from '../../../components/profile/profileCard';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Profile card component tests",()=>{
    
    
    it('renders without error', () => {
       
          render(
              <BrowserRouter>
                <ProfileCard/>
              </BrowserRouter>
          )
    
    });  

    it('renders contents', () => {
       
        render(
            <BrowserRouter>
              <ProfileCard
                name="Jhon ma"
                nic = "123456789098"
                contact = '1234567890'
                address = "Sample Address"
              />
            </BrowserRouter>
        )
  
  });  
    
 


    
    
})

