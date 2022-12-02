import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import Sidebar from './components/SideBar';
import NavbarComponent from './components/Navbar';
import { Col, Container } from 'react-bootstrap';
import { createContext, useEffect, useState } from 'react';
import { getAll } from './services/requests';

export const DataContext = createContext(null);

function App() {
  const [allShipments, setallShipments] = useState([]);
  const [updated, setupdated] = useState({});

  useEffect(() => async () => setallShipments((await getAll("shipments")).data), []);
  return (
    <DataContext.Provider value={[allShipments, setallShipments, updated, setupdated]}>
      <BrowserRouter>
        <div className="App">
          <Container>
            <NavbarComponent />
            <div className='d-flex justify-content-center pt-5'>
              {
                allShipments.length > 0 ? (
                  <>
                    <Col md={3}>
                      <Sidebar />
                    </Col>
                    <Col md={9} className="ps-5 text-start mt-2">
                      <Routes />
                    </Col>
                  </>
                ) : "No shimpent found"
              }
            </div>
          </Container>
        </div>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
