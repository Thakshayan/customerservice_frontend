import React from 'react';
import ReactDOM from 'react-dom';
import {render,act,screen} from '@testing-library/react';
import PhotoCard from '../../../components/profile/profileCard';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Profile photo component tests",()=>{
    
    
    it('renders without error', () => {
       
          render(
              <BrowserRouter>
                <PhotoCard/>
              </BrowserRouter>
          )
    
    });  
    it('renders the content', () => {
       
      render(
          <BrowserRouter>
            <PhotoCard
              title = {'Logo'}
            />
          </BrowserRouter>
      )

      expect(screen.getByText(/Logo/i)).toBeInTheDocument();

    });  

    // it('renders without error', () => {
       
    //   render(
    //       <BrowserRouter>
    //         <PhotoCard edit={true}/>
    //       </BrowserRouter>
    //   )

      // var button = document.querySelector('#password');

      // jest.useFakeTimers();
      // button.dispatchEvent(createEvent('click'));
      // jest.runAllTimers();

      // expect(window.location.pathname).toEqual('/Worker/edit/password');

    //   const wrapper = shallow(<MemoryRouter>
    //                             <PhotoCard edit={true}/>
    //                           </MemoryRouter>);
    //  expect(wrapper.find(Link).at(0).props().to).toBe('/Worker/edit/password');

    // });  

   
    
  
})

