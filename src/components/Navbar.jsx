import React, { useContext, useState } from 'react'
import { Button, Container, Form, Navbar } from 'react-bootstrap'
import { DataContext } from '../App';
import { getAll, updateItem } from '../services/requests';
import "./navbar.css";

const NavbarComponent = () => {
    // const [allShipments, setallShipments] = useState([]);
    const [data, setallShipments, updated] = useContext(DataContext);
    async function loadShipments() {
        setallShipments((await getAll("shipments")).data)
    }

    async function saveShipment() {
        await updateItem("shipments", updated?.id, updated)
    }
    async function filterShipment() {
        // await filterItem("shipments")
    }
    return (
        <div>
            <Navbar bg="light" expand="lg" className='navbar-c'>
                <Container fluid>
                    <Navbar.Brand href="/">Cargo Planner</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <div className='w-100 d-flex justify-content-center'>
                            <Form className="d-flex w-50">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    onChange={filterShipment}
                                />
                                {/* <Button variant="outline-success">Search</Button> */}
                            </Form>
                        </div>

                        <Button variant="outline-success" onClick={loadShipments}>Load</Button>
                        <Button variant="outline-success ms-3" onClick={saveShipment}>Save</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent