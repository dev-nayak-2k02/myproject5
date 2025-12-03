import Navigation from "./components/navigation/navigation";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Product" element={<Product/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
      <Navigation />
    </>
  );
}

export default App;
