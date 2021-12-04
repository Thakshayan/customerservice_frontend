import React from 'react';
import ReactDOM from 'react-dom';
import {render,act,screen} from '@testing-library/react';
import SpProfile from '../../../../components/profile/serviceprovider/profile';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Profile photo component tests",()=>{
    it('renders without error', () => { 
          render(
              <BrowserRouter>
                <SpProfile/>
              </BrowserRouter>
          )
    });  

})

