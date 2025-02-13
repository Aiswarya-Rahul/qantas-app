import HotelCard from "./HotelCard";
import PropTypes from "prop-types";

const HotelList = ({ hotel, offer }) => {
  return (
    <HotelCard
      {...hotel}
      offer={
        offer || {
          name: "No Offer Available",
          displayPrice: { amount: 0, currency: "AUD" },
        }
      }
    />
  );
};

HotelList.propTypes = {
  hotel: PropTypes.shape({
    propertyId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    address: PropTypes.arrayOf(PropTypes.string).isRequired,
    previewImage: PropTypes.shape({
      url: PropTypes.string.isRequired,
      caption: PropTypes.string,
      imageType: PropTypes.string,
    }).isRequired,
    rating: PropTypes.shape({
      ratingValue: PropTypes.number,
      ratingType: PropTypes.string,
    }).isRequired,
  }).isRequired,
  offer: PropTypes.shape({
    promotion: PropTypes.shape({
      title: PropTypes.string,
      type: PropTypes.string,
    }),
    name: PropTypes.string.isRequired,
    displayPrice: PropTypes.shape({
      amount: PropTypes.number,
      currency: PropTypes.string,
    }),
    savings: PropTypes.shape({
      amount: PropTypes.number,
      currency: PropTypes.string,
    }),
    cancellationOption: PropTypes.shape({
      cancellationType: PropTypes.string,
    }),
  }),
};
export default HotelList;
