import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import ListUsers from "./pages/ListUsers";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Modal from "./components/Modal";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <main className="app-container-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/new" element={<AddUser />} />
            <Route path="/users/list" element={<ListUsers />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toast position="bottom-right" />
        <Modal />
      </BrowserRouter>
    </div>
  );
}

export default App;
