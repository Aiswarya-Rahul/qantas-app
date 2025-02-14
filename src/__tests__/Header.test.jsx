import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { describe, expect } from "vitest";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../util/store";

describe("Header", () => {
  it("should render Header copmonent", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should display hotel count as 4 when passing 4", async () => {
    render(
      <Provider store={store}>
        <Header hotelCount={4} />
      </Provider>
    );

    const totalHotels = await waitFor(
      () => screen.getByTestId("totalHotels").textContent
    );

    expect(parseInt(totalHotels.trim())).toBe(4);
  });

  it("should render sort dropdown", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const dropDown = screen.getByRole("select");
    expect(dropDown).toBeInTheDocument();
  });

  it("should contain the right sorting options", () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const selectOptions = screen.getAllByTestId("select-option");

    expect(selectOptions[0].value).toBe("PRICE-DESC");
    expect(selectOptions[1].value).toBe("PRICE-ASC");
  });
});
