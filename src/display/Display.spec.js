import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

afterEach(cleanup)
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

    it("should default to the red-led class when locked/close", () => {
        const { getByText } = render(<Display closed={true} locked={true}/>)
        expect(getByText(/locked/i)).toHaveClass('led red-led')
    })

    it("should default to the green-led class when unlocked/open", () => {
        const { getByText } = render(<Display closed={false} locked={false}/>);
        expect(getByText(/open/i)).toHaveClass('led green-led')
    })
})