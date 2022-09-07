import './App.css';
import {
  BrowserRouter, Routes,
  Route, Navigate,
} from "react-router-dom";
import Home from './components/home';
import ContactUs from './components/contactUs';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}