import { proxy } from "valtio";
import "./App.css";
import WorkSelectionItemsPage from "./work-selection-page/work-selection-page";
import MainPageCardsDiv from "./main-page/main-page";

type StateType = {
  clicked: number | null;
  urls: string[];
};

const state = proxy<StateType>({
  clicked: null,
  urls: [1, 2, 3, 4].map((u) => `/${u}.jpg`),
});

function App() {
  const handleSwipeRight = (cardIndex: number, cardUrl: string) => {
    console.log(`Liked card ${cardIndex} with url ${cardUrl}!`)
  }
  return (
     <MainPageCardsDiv onSwipeRight={handleSwipeRight} />
  );
}

export default App;
