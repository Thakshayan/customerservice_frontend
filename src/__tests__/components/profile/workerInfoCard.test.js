import React from 'react';
import ReactDOM from 'react-dom';
import {render,act,screen} from '@testing-library/react';
import WorkerInfoCard from '../../../components/profile/workerInfoCard';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Worker Information card component tests",()=>{
    it('renders without error', () => { 
          render(
              <BrowserRouter>
                <WorkerInfoCard/>
              </BrowserRouter>
          )
    });  
    it('renders without error', () => { 
        const content =  {
            username:"Vijay Antony",
            contact_no:"123456789",
            no_of_vote:"2"
        }
        render(
            <BrowserRouter>
              <WorkerInfoCard
                    title={"WorkerInfo"}
                    type = {"Moderator"}
                    content = {content}
              />
            </BrowserRouter>
        )

        expect(screen.getByText(/WorkerInfo/)).toBeInTheDocument();
        expect(screen.getByText(/Moderator/)).toBeInTheDocument();
        expect(screen.getByText(/Vijay Antony/)).toBeInTheDocument();
  });  

})

