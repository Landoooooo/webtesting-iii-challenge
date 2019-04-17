import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';
// Test away!
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