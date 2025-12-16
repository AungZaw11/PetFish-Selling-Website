import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopInfo from "./Pages/ShopInfo";
import { PaymentPage } from "./Pages/Payment";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import OurLegacy from "./Pages/Legacy";
import CareGuide from "./Pages/CareGuide"; // ✅ default import
<<<<<<< HEAD
import HomePage from "./Pages/Home";
// import CollectionPage from "./CollectionPage";
// import FishDetailsPage from "./FishDetailsPage";

=======
import FAQ from "./Pages/FAQ";
>>>>>>> 007de5991eb1570f325cfdf64364e530c84bc8b7

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/shop-info" element={<ShopInfo />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/legacy" element={<OurLegacy />} />
        <Route path="/care-guides" element={<CareGuide />} />{" "}
<<<<<<< HEAD
        <Route path="/" element={<HomePage />} />
      {/* <Route path="/collection" element={<CollectionPage />} />
      <Route path="/fish/:id" element={<FishDetailsPage />} /> */}

=======
        <Route path="/faq" element={<FAQ />} />{" "}
>>>>>>> 007de5991eb1570f325cfdf64364e530c84bc8b7
        {/* ✅ matches default export */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
