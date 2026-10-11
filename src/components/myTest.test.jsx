import {screen, render, fireEvent} from "@testing-library/react";
import Reservations from "./Reservations";

describe("Reservations component", () => {
    test("renders without crashing", () => {
        render(<Reservations />);
        const headingElement = screen.getByText("Book Your Reservations");
        expect(headingElement).toBeInTheDocument();
    });
});