import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopInfo from "./Pages/ShopInfo";
import { PaymentPage } from "./Pages/Payment";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import OurLegacy from "./Pages/Legacy";
import CareGuide from "./Pages/CareGuide";
import HomePage from "./Pages/Home";
import FAQ from "./Pages/FAQ";

// (leave these commented until pages exist)
// import CollectionPage from "./Pages/Collection";
// import FishDetailsPage from "./Pages/FishDetails";
import FishDetail from "./Pages/Details";
import { Collection } from "./Pages/Collection"; // ✅ Correct: named export from Collection.jsx

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Main routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/fish" element={<Collection />} />{" "}
        <Route path="/fish/:slug" element={<FishDetail />} />
        {/* ✅ Must be /fish to match Navbar */}
        {/* Other pages */}
        <Route path="/shop-info" element={<ShopInfo />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/legacy" element={<OurLegacy />} />
        <Route path="/care-guides" element={<CareGuide />} />
        <Route path="/faq" element={<FAQ />} />


        {/* Future routes */}
        {/* <Route path="/collection" element={<CollectionPage />} /> */}
        {/* <Route path="/fish/:id" element={<FishDetailsPage />} /> */}
=======
        {/* Optional: catch-all for 404 */}
        {/* <Route path="*" element={<HomePage />} /> */}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
