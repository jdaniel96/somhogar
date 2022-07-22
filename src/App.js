import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { HomeView } from "./views/HomeView";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navBar/navBar";
import { Footer } from "./components/footer/footer";
import { PropertiesView } from "./views/PropertiesView";
import { PropertyView } from "./views/PropertyView";
import { RentView } from "./views/RentView";
import { SellView } from "./views/SellView";
import { NotFound } from "./components/404notfound/404";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/properties" element={<PropertiesView />} />
        <Route path="/rent" element={<RentView />} />
        <Route path="/sell" element={<SellView />} />
        <Route path="/rent/property/:id" element={<PropertyView />} />
        <Route path="/sell/property/:id" element={<PropertyView />} />
        <Route path="/properties/property/:id" element={<PropertyView />} />
        <Route path="/property/:id" element={<PropertyView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
