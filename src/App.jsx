import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopInfo from "./Pages/ShopInfo";
import { PaymentPage } from "./Pages/Payment";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import OurLegacy from "./Pages/Legacy";
import CareGuide from "./Pages/CareGuide"; // ✅ default import

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ShopInfo />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/legacy" element={<OurLegacy />} />
        <Route path="/care-guides" element={<CareGuide />} />{" "}
        {/* ✅ matches default export */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
