import {DetailedOffer} from '../../types/offers/detailed-offer.ts';

type OfferInsideProps = {
  offer: DetailedOffer;
};

function OfferInside({offer}: OfferInsideProps) {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {offer.goods.map((good) => (
          <li key={good} className="offer__inside-item">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OfferInside;
