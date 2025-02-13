import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should render App component with a header", () => {
    render(<App />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });
});
