import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import HotelCard from "../components/HotelCard";
import MOCK_HOTEL_CARD from "../mocks/mockHotelCard.json";

describe("HotelCard", () => {
  it("renders HotelCard component", () => {
    render(<HotelCard {...MOCK_HOTEL_CARD} />);
    expect(screen.getByTestId("hotelCard")).toBeInTheDocument();
  });

  it("displays the hotel title correctly", () => {
    render(<HotelCard {...MOCK_HOTEL_CARD} />);
    expect(
      screen.getByText("PARKROYAL Darling Harbour Sydney")
    ).toBeInTheDocument();
  });

  it("displays the hotel address correctly", () => {
    render(<HotelCard {...MOCK_HOTEL_CARD} />);
    expect(screen.getByTestId("hotelAddressSpan")).toHaveTextContent(
      "150 Day Street, Sydney"
    );
  });

  it("displays the rating when provided", () => {
    render(<HotelCard {...MOCK_HOTEL_CARD} />);
    expect(screen.getByTestId("ratingSpan")).toBeInTheDocument();
  });

  it("does not display rating when not provided", () => {
    const { rating, ...hotelWithoutRating } = MOCK_HOTEL_CARD;
    render(<HotelCard {...hotelWithoutRating} />);
    expect(screen.queryByTestId("ratingSpan")).not.toBeInTheDocument();
  });

  it("displays the promotion title when available", () => {
    render(<HotelCard {...MOCK_HOTEL_CARD} />);
    expect(screen.getByText("Exclusive Deal")).toBeInTheDocument();
  });

  it("does not display a promotion title when there is none", () => {
    const hotelWithoutPromo = {
      ...MOCK_HOTEL_CARD,
      offer: { ...MOCK_HOTEL_CARD.offer, promotion: {} },
    };
    render(<HotelCard {...hotelWithoutPromo} />);
    expect(screen.queryByText("Special Offer")).not.toBeInTheDocument();
  });

  it("displays the Free Cancellation link when available", () => {
    render(<HotelCard {...MOCK_HOTEL_CARD} />);
    expect(screen.getByText("Free Cancellation")).toBeInTheDocument();
  });

  it("doesn't display the Free Cancellation link when not available", () => {
    const hotelWithoutCancellation = {
      ...MOCK_HOTEL_CARD,
      offer: { ...MOCK_HOTEL_CARD.offer, cancellationOption: {} },
    };
    render(<HotelCard {...hotelWithoutCancellation} />);
    expect(screen.queryByText("Free Cancellation")).not.toBeInTheDocument();
  });

  it("displays price and savings correctly", () => {
    render(<HotelCard {...MOCK_HOTEL_CARD} />);
    expect(screen.getByText("1 night total (AUD)")).toBeInTheDocument();
    expect(screen.getByText("$ 535")).toBeInTheDocument();
    expect(screen.getByText("Save $28~")).toBeInTheDocument();
  });
});
