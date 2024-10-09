import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Countries from './pages/Countries';
import './index.css';
import { CountryContextProvider } from './context/CountryContext';
import Country from './pages/Country';
function App() {
  return (
    <>
      <BrowserRouter>
        <CountryContextProvider>
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/country/:name" element={<Country />} />
          </Routes>
        </CountryContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
