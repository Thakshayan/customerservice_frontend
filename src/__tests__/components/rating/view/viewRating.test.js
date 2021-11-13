import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';


import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import ViewEdit from '../../../../components/rating/view/viewRating';


describe("View Edit component tests",()=>{

    // const setState = jest.fn();
    // // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // const useStateMock: any = (initState: any) => [initState, setState];

    // afterEach(() => {
    //   jest.clearAllMocks();
    // });



    it("It renders without crashing", ()=>{
        render(
            <BrowserRouter>
                <ViewEdit/>
           </BrowserRouter>
           
        )
        // const linkElement = screen.getByText(/New Messages/i);
        // expect(linkElement).toBeInTheDocument();
    });
    // it("It renders without crashing", ()=>{
    //     jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    //       const wrapper = shallow(<ViewEdit {...props} />);
    //       // trigger setState somehow
    //       expect(setState).toHaveBeenCalledTimes(1);
    // });
    
})