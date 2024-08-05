import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const isDeveloperPage = location.pathname === "/Developer";

  return (
    <>
      {!isMainPage && !isDeveloperPage && <NavBar />}
      <ScrollToTop />
      <div className="outlet-background">
        <Outlet />
      </div>
      {!isMainPage && !isDeveloperPage && <Footer />}
    </>
  );
}

export default App;
