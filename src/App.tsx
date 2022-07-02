import { Header } from 'components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Index } from 'pages/Index';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          index
          element={<Index />}
        />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
