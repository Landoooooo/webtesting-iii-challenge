// Test away
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';


describe("<Dashboard />", () => {
    it("should show the controls and display", () => {
       const { getByText } = render(<Dashboard/>);

       expect(getByText(/Unlocked/i)).toBeInTheDocument();
       expect(getByText(/Open/i)).toBeInTheDocument();
       expect(getByText(/Lock Gate/i)).toBeInTheDocument();
       expect(getByText(/Close Gate/i)).toBeInTheDocument();
    })
})
