import style from "./HotelCard.module.css";
import PropTypes from "prop-types";
const HotelCard = ({
  propertyId,
  title,
  previewImage,
  rating,
  address,
  offer,
}) => {
  const { url, caption } = previewImage || {};
  const { ratingType, ratingValue } = rating || {};
  const hotelAddress = address.join(",");
  const {
    promotion,
    name: promoName,
    cancellationOption,
    displayPrice,
    savings,
  } = offer || {};
  const { title: promoTitle } = promotion || {};
  const { cancellationType } = cancellationOption || {};
  const { currency, amount } = displayPrice || {};
  const savingsAmount = savings?.amount;

  return (
    <div className={style.content}>
      <div className={style.imageDiv}>
        <img
          className={style.hotelImage}
          src={url}
          alt={caption || "Hotel Image"}
        />
        {promoTitle && <span className={style.promoName}>{promoTitle}</span>}
      </div>
      <div id={propertyId} className={style.hotelDetailsDiv}>
        <div>
          <div className={style.hotelNameRating}>
            <label className={style.hotelName}>{title}</label>
            {ratingValue && (
              <span
                data-testid="ratingSpan"
                className={`${style[ratingType]} ${style.rating}`}
                style={{ "--rating": ratingValue }}
              />
            )}
          </div>
          <div className={style.hotelAddressDiv}>
            <span data-testid="hotelAddressSpan" className={style.hotelAddress}>
              {hotelAddress}
            </span>
          </div>
          <div className={style.redLinkDiv}>
            <a className={style.redLink} href="#">
              {promoName}
            </a>
          </div>

          {cancellationType === "FREE_CANCELLATION" && (
            <div className={style.greenLinkDiv}>
              <a className={style.greenLink} href="#">
                Free Cancellation
              </a>
            </div>
          )}
        </div>
        <div id="hotelPrice" className={style.hotelPriceDiv}>
          <div>
            <span className={style.pricePerUnit}>
              1 night total ({currency})
            </span>
          </div>
          <div>
            <span className={style.price}>$ {amount} </span>
          </div>
          <div>
            {savings && (
              <span className={style.offer}>Save ${savingsAmount}~ </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

HotelCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

  previewImage: PropTypes.shape({
    url: PropTypes.string.isRequired,
    caption: PropTypes.string,
  }).isRequired,
  rating: PropTypes.shape({
    ratingType: PropTypes.string,
    ratingValue: PropTypes.number,
  }),
  address: PropTypes.arrayOf(PropTypes.string).isRequired,
  offer: PropTypes.shape({
    promotion: PropTypes.shape({
      title: PropTypes.string,
      type: PropTypes.string,
    }),
    name: PropTypes.string,
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

export default HotelCard;
