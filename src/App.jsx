import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopInfo from "./Pages/ShopInfo";
import { PaymentPage } from "./Pages/Payment";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import OurLegacy from "./Pages/Legacy";
import CareGuide from "./Pages/CareGuide";
import HomePage from "./Pages/Home";
import FAQ from "./Pages/FAQ";
import { Collection } from "./Pages/Collection"; // ✅ Correct: named export from Collection.jsx

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/fish" element={<Collection />} />{" "}
        {/* ✅ Must be /fish to match Navbar */}
        {/* Other pages */}
        <Route path="/shop-info" element={<ShopInfo />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/legacy" element={<OurLegacy />} />
        <Route path="/care-guides" element={<CareGuide />} />
        <Route path="/faq" element={<FAQ />} />
        {/* Optional: catch-all for 404 */}
        {/* <Route path="*" element={<HomePage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
