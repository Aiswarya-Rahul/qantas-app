import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import HotelList from "../components/HotelList";
import MOCK_HOTEL from "../mocks/hotelMock.json";
import MOCK_OFFER from "../mocks/offerMock.json";

describe("HotelList", () => {
  it("renders HotelList component with valid hotel data", () => {
    render(<HotelList hotel={MOCK_HOTEL} offer={MOCK_OFFER} />);
    expect(screen.getByText(MOCK_HOTEL.title)).toBeInTheDocument();

    expect(screen.getByText(MOCK_OFFER.name)).toBeInTheDocument();
  });

  it("renders the hotel's rating correctly", () => {
    render(<HotelList hotel={MOCK_HOTEL} offer={MOCK_OFFER} />);

    const rating = screen.getByTestId("ratingSpan");
    expect(rating.style._values["--rating"]).toBe(
      MOCK_HOTEL.rating.ratingValue
    );
  });
});
