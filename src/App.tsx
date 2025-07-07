import { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router";
import LoadingScreen from "./loading-screen/loading-screen";
import { delay } from "./generic/global-properties";
// import WordSphere from "./work-selection-page/work-selection-page";

const ProfessionalPage = lazy(
  () => import("./professional-page/professional-page")
);
export const MainPage = lazy(() =>
  delay(2000).then(() => import("./main-page/main-page"))
);

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [routeStateChanged, setRouteStateChanged] = useState(true);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== currentPath) {
      console.log(`Unmounting from ${currentPath}`);
      // Unmount current page data
      setRouteStateChanged(false);
      setCurrentPath(location.pathname);

      // Slight delay to allow unmount before remount
      setTimeout(() => {
        console.log(`Mounting  to ${location.pathname}`);
        setRouteStateChanged(true);
      }, 1000); // You could increase this if needed (e.g. 100ms)
    }
  }, [location.pathname, currentPath]);

  return (
    <div>
      <Suspense fallback={<LoadingScreen></LoadingScreen>}>
        {routeStateChanged && currentPath === "/" && (
          <MainPage navigate={navigate} />
        )}
        {routeStateChanged && currentPath === "/professional" && (
          <ProfessionalPage navigate={navigate} />
        )}
      </Suspense>
      <Routes>
        <Route path="/" element={<div className="null" />} />
        <Route path="/professional" element={<div className="null" />} />
      </Routes>
    </div>
  );
}

export default App;
