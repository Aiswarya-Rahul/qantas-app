import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect } from "vitest";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import store from "../util/store";
import MOCK_DATA from "../mocks/hotelListMock.json";

describe("Layout", () => {
  it("should render Layout component with a header", () => {
    render(
      <Provider store={store}>
        <Layout />
      </Provider>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should fetch and displays hotels correctly", async () => {
    //Mock fetch API
    global.fetch = vi.fn(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({ results: MOCK_DATA });
        },
      });
    });

    render(
      <Provider store={store}>
        <Layout />
      </Provider>
    );

    const hotelCard = await waitFor(() => screen.getAllByTestId("hotelCard"));
    expect(hotelCard.length).toBe(2);
  });
});
