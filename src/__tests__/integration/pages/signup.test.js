import React from 'react';
import ReactDOM from 'react-dom';
import {render,screen,fireEvent,act} from '@testing-library/react';

import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import SignUp from '../../../pages/signup';
import { MockedProvider } from '@apollo/client/testing';
import { GET_SIGNUP } from '../../../GraphQL/Queries';

window.scrollTo = jest.fn();

describe("Signup integration tests",()=>{

    const mocks = [
        {
            request: {
              query: GET_SIGNUP,
            },
            result: {
                data: {
                    "showDistricts": [
                      {
                        "_id": "6149f4746b2f3f0bc8c66254",
                        "districtName": "ampara"
                      },
                      {
                        "_id": "6149f4e16b2f3f0bc8c6625d",
                        "districtName": "anuradhapura"
                      },
                      {
                        "_id": "614a04148dd2fd1f649746fc",
                        "districtName": "badulla"
                      },
                      {
                        "_id": "6149f4986b2f3f0bc8c66257",
                        "districtName": "batticaloa"
                      },
                      {
                        "_id": "614a043e8dd2fd1f64974702",
                        "districtName": "colombo"
                      },
                      {
                        "_id": "614a03e38dd2fd1f649746f3",
                        "districtName": "galle"
                      },
                      {
                        "_id": "614a04488dd2fd1f64974705",
                        "districtName": "gampaha"
                      },
                      {
                        "_id": "614a03ee8dd2fd1f649746f6",
                        "districtName": "hambantota"
                      },
                      {
                        "_id": "6149f5486b2f3f0bc8c66269",
                        "districtName": "jaffna"
                      },
                      {
                        "_id": "614a04528dd2fd1f64974708",
                        "districtName": "kalutara"
                      },
                      {
                        "_id": "6149ece26b2f3f0bc8c6624b",
                        "districtName": "kandy"
                      },
                      {
                        "_id": "614a03bb8dd2fd1f649746f0",
                        "districtName": "kegalle"
                      },
                      {
                        "_id": "6149f5536b2f3f0bc8c6626c",
                        "districtName": "kilinochchi"
                      },
                      {
                        "_id": "6149f51a6b2f3f0bc8c66263",
                        "districtName": "kurunegala"
                      },
                      {
                        "_id": "614a03688dd2fd1f649746e4",
                        "districtName": "mannar"
                      },
                      {
                        "_id": "6149ece96b2f3f0bc8c6624e",
                        "districtName": "matale"
                      },
                      {
                        "_id": "614a03f88dd2fd1f649746f9",
                        "districtName": "matara"
                      },
                      {
                        "_id": "614a041e8dd2fd1f649746ff",
                        "districtName": "monaragala"
                      },
                      {
                        "_id": "614a03768dd2fd1f649746e7",
                        "districtName": "mullaitivu"
                      },
                      {
                        "_id": "6149ecfb6b2f3f0bc8c66251",
                        "districtName": "nuwaraeliya"
                      },
                      {
                        "_id": "6149f4f06b2f3f0bc8c66260",
                        "districtName": "polonnaruwa"
                      },
                      {
                        "_id": "6149f5256b2f3f0bc8c66266",
                        "districtName": "puttalam"
                      },
                      {
                        "_id": "614a03ae8dd2fd1f649746ed",
                        "districtName": "ratnapura"
                      },
                      {
                        "_id": "6149f4a66b2f3f0bc8c6625a",
                        "districtName": "trincomalee"
                      },
                      {
                        "_id": "614a03858dd2fd1f649746ea",
                        "districtName": "vavuniya"
                      }
                    ],
                    "getServices": [
                      {
                        "_id": "614a07a14d0c9321d435a38d",
                        "service_name": "carpentry"
                      },
                      {
                        "_id": "614a065b4d0c9321d435a385",
                        "service_name": "masonry"
                      },
                      {
                        "_id": "614a06284d0c9321d435a381",
                        "service_name": "painting"
                      },
                      {
                        "_id": "614a06854d0c9321d435a389",
                        "service_name": "plumbing"
                      },
                      {
                        "_id": "614a06714d0c9321d435a387",
                        "service_name": "wiring"
                      }
                    ],
                    "getMemberships": [
                      {
                        "_id": "614a2bac6954f61728f55f78",
                        "membership_name": "platinum",
                        "membership_period": 3,
                        "membership_value": 100,
                        "description": "none"
                      },
                      {
                        "_id": "614a2bbc6954f61728f55f7a",
                        "membership_name": "gold",
                        "membership_period": 2,
                        "membership_value": 50,
                        "description": "none"
                      },
                      {
                        "_id": "614a2bca6954f61728f55f7c",
                        "membership_name": "silver",
                        "membership_period": 1,
                        "membership_value": 25,
                        "description": "none"
                      }
                    ]
                  }
            },
          },
    ]

    it("It selects the services", async ()=>{

        await act(async () => render(
            <BrowserRouter>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <SignUp/>
                </MockedProvider>
            </BrowserRouter>,
           
        ));

        await new Promise(resolve => setTimeout(resolve, 0));

        const selectElement = await screen.getByTestId('services')
        const buttonElement = await screen.getByTestId('service-button')
        await fireEvent.change(selectElement,{target:{value:'painting'}})
        userEvent.selectOptions(screen.getByTestId('services'), [ 'painting' ])
        expect(selectElement.value).toBe('painting')

        userEvent.click(buttonElement)
        expect(selectElement.value).toBe('')

    });

    it("It selects the districts", async ()=>{

        await act(async () => render(
            <BrowserRouter>
                <MockedProvider mocks={mocks} addTypename={false}>
                    <SignUp/>
                </MockedProvider>
            </BrowserRouter>,
           
        ));

        await new Promise(resolve => setTimeout(resolve, 0));

        const selectElement = await screen.getByTestId('districts')
        const buttonElement = await screen.getByTestId('district-button')
        await act( async ()=>{
          await fireEvent.change(selectElement,{target:{value:'jaffna'}})
          
        })
        
        userEvent.selectOptions(screen.getByTestId('districts'), [ 'jaffna' ])
        expect(selectElement.value).toBe('jaffna')

        await act( async ()=>{
          userEvent.click(buttonElement)
        })
        expect(selectElement.value).toBe('')

    });
    
    
})