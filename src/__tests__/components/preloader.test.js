import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import Preloader from '../../components/preloader';
import '@testing-library/jest-dom';


describe("Preloader component tests",()=>{
    it("It renders without crashing", ()=>{
        render(
            <Preloader/>  
        )
    });
    
})