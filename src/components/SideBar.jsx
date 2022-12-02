import React, { useContext, useState } from 'react'
import { ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { DataContext } from '../App';
import "./sidebar.css"
const Sidebar = () => {
    const [data, setallShipments] = useContext(DataContext);
    const companies = JSON.parse(localStorage.getItem("companies"));


    return (
        // active = { active }
        <ListGroup as="ul" className="list-company">
            {
                data?.length > 0 && data?.map(c => (
                    <ListGroup.Item as="li" key={c?.id}>
                        <Link to={`/${c?.name}`}>{c?.name}</Link>

                    </ListGroup.Item>
                ))
            }
        </ListGroup>
    )
}

export default Sidebar;