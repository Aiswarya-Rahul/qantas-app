export const sortHotels = (sortType, hotels) => {
  //if hotels is null or of invalid type, return empty array
  if (
    !hotels ||
    !(typeof hotels === "object" && hotels.hasOwnProperty("length"))
  ) {
    return [];
  }

  //clone the array before sorting to avoid mutating
  const sortedList = [...hotels];

  switch (sortType) {
    case "PRICE-DESC":
      sortedList.sort(
        (h1, h2) => h2.offer.displayPrice.amount - h1.offer.displayPrice.amount
      );
      break;

    case "PRICE-ASC":
      sortedList.sort(
        (h1, h2) => h1.offer.displayPrice.amount - h2.offer.displayPrice.amount
      );
      break;

    default:
      return sortedList; // If no sort type matches, return the original list
  }

  return sortedList;
};
