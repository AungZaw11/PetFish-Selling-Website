import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopInfo from "./Pages/ShopInfo";
import { PaymentPage } from "./Pages/Payment";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import OurLegacy from "./Pages/Legacy";
import CareGuide from "./Pages/CareGuide"; // ✅ default import
import HomePage from "./Pages/Home";
import FAQ from "./Pages/FAQ";
// import CollectionPage from "./CollectionPage";
// import FishDetailsPage from "./FishDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/shop-info" element={<ShopInfo />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/legacy" element={<OurLegacy />} />
        <Route path="/care-guides" element={<CareGuide />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<FAQ />} />
        {/* <Route path="/collection" element={<CollectionPage />} /> */}
        {/* <Route path="/fish/:id" element={<FishDetailsPage />} /> */}
        {/* ✅ matches default export */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
