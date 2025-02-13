import { describe, it } from "vitest";
import { sortHotels } from "../util/sortHotel";
import MOCK_DATA from "../mocks/hotelListMock.json";

describe("sortHotel", () => {
  it("should return empty array when no hotel list", () => {
    expect(sortHotels("PRICE-DESC", [])).toStrictEqual([]);
  });

  it("should return the same hotelList when no sortType", () => {
    expect(sortHotels(null, MOCK_DATA)).toStrictEqual(MOCK_DATA);
  });

  it("should sort hotels by price in ascending order", () => {
    const sortedHotels = sortHotels("PRICE-ASC", MOCK_DATA);
    expect(sortedHotels[0].offer.displayPrice.amount).toBeLessThanOrEqual(
      sortedHotels[1].offer.displayPrice.amount
    );
  });

  it("should sort hotels by price in descending order", () => {
    const sortedHotels = sortHotels("PRICE-DESC", MOCK_DATA);
    expect(sortedHotels[0].offer.displayPrice.amount).toBeGreaterThanOrEqual(
      sortedHotels[1].offer.displayPrice.amount
    );
  });

  it("should return an empty array if the input hotel list is null", () => {
    expect(sortHotels("PRICE-DESC", null)).toStrictEqual([]);
  });

  it("should return an empty array if the input hotel list is not an array", () => {
    expect(sortHotels("PRICE-DESC", "invalid_data")).toStrictEqual([]);
  });

  it("should not mutate the original hotel list", () => {
    const originalData = [...MOCK_DATA]; // copy original data
    sortHotels("PRICE_DESC", originalData);
    expect(MOCK_DATA).toStrictEqual(originalData); // ensure it's unchanged
  });
});
