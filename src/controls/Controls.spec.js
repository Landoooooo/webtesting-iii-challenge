// Test away!
import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Controls from './Controls';

afterEach(cleanup)

describe("<Controls/>", () => {
    it("should provide buttons to toggle the closed and locked states", () => {
        const { getByText } = render(<Controls/>)

        const lockButton = getByText(/Lock Gate/i);
        const closeButton = getByText(/Close Gate/i);

        expect(lockButton).toBeInTheDocument();
        expect(closeButton).toBeInTheDocument();
    })

    it("should provide buttons to toggle the unlock and open states", () => {
        const { getByText } = render(<Controls locked={true} closed={true}/>)

        const unlockButton = getByText(/Unlock Gate/i)
        const openButton = getByText(/Open Gate/i)

        expect(unlockButton).toBeInTheDocument();
        expect(openButton).toBeInTheDocument();
    })

    it("should have the locked toggle button as disabled if the gate is open", () => {
        const { getByText } = render(<Controls/>)

        expect(getByText(/Lock Gate/i)).toBeDisabled();
    })

    it("should have the locked toggle button as disabled if the gate is open", () => {
        const { getByText } = render(<Controls locked={true} close={false}/>)

        expect(getByText(/Close Gate/i)).toBeDisabled();
    })
});