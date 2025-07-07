
import CardDeck from "../deck/deck";
import { ProfessionalPageCards, RouteInitProps } from "../generic/global-properties";

function ProfessionalPageCardsDiv(routeProps: RouteInitProps) {
  const cards = ProfessionalPageCards;
  return (
    <>
      <CardDeck
        cards={cards}
        routeProps={routeProps}
      ></CardDeck>
    </>
  );
}

export default ProfessionalPageCardsDiv;
