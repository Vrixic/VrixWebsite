import "./App.css";
import MainPageCardsDiv from "./main-page/main-page";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      {/* <Suspense fallback={<div>Loading...</div>}>
        {location.pathname === "/" && <MainPageCardsDiv />}
      </Suspense> */}

      <Routes>
        <Route path="/" element={<MainPageCardsDiv />} />
        <Route path="/work-selection" element={<div />} />
      </Routes>
    </div>
  );
}

export default App;
