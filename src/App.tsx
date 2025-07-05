import { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router";

const WordSphere = lazy(
  () => import("./work-selection-page/work-selection-page")
);
const MainPage = lazy(() => import("./main-page/main-page"));

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
      <Suspense fallback={<div>Loading...</div>}>
        {routeStateChanged && 
        currentPath === "/" && (
          <MainPage navigate={navigate} />
        )}
        {routeStateChanged && 
        currentPath === "/resume" && (
          <WordSphere />
        )}
      </Suspense>
      <Routes>
        <Route path="/" element={<div className="null" />} />
        <Route path="/resume" element={<div className="null" />} />
      </Routes>
    </div>
  );
}

export default App;
