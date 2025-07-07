import CardDeck from "../deck/deck";
import { MainPageCards, RouteInitProps } from "../generic/global-properties";

function MainPageCardsDiv(routeProps: RouteInitProps) {
  const cards = MainPageCards;
  return (
    <>
      <CardDeck
        cards={cards}
        routeProps={routeProps}
      ></CardDeck>
    </>
  );
}

export default MainPageCardsDiv;
