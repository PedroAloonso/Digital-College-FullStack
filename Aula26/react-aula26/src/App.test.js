import { render, screen } from "@testing-library/react";
import App from "./App";
import { useState } from "react";

const [a, setA] = useState("a");

test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
