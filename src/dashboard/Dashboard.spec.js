// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';
import Display from '../display/Display';


describe("<Dashboard />", () => {
    it("should show the controls and display", () => {
       const { getByText } = render(<Dashboard/>);

       expect(getByText(/Unlocked/i)).toBeInTheDocument();
       expect(getByText(/Open/i)).toBeInTheDocument();
       expect(getByText(/Lock Gate/i)).toBeInTheDocument();
       expect(getByText(/Close Gate/i)).toBeInTheDocument();
    })
})

describe("<Display/>", () => {
    it("should display that gate is closed if it is locked", () => {
        const { getByText } = render(<Display closed={true}/>)
        expect(getByText(/Closed/i)).toBeInTheDocument();
    })

    it("should display that gate is open if it is unlocked", () => {
        const { getByText } = render(<Display closed={false}/>)
        expect(getByText(/Open/i)).toBeInTheDocument();
    })
})