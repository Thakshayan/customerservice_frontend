import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen} from '@testing-library/react';
import FinishCard from "../../components/finishCard"
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';


describe("Finish card component tests",()=>{
    it("It renders without crashing", ()=>{
       
        render(
            <FinishCard/>
        )            

     
    });


})