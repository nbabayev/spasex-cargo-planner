import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../App';
import { getAll } from '../services/requests';
import "./shipment.css"

const Shipments = () => {
    const [data, setallShipments] = useContext(DataContext);

    let layout = data?.length > 0 ? data?.map(s => (
        <div className='mb-3'>
            <h2><Link to="/detail" className='shipment-name'>{s?.name}</Link></h2>
            <div>

                <b>Email: </b><a href={`mailto:${s?.email}`}>{s?.email}</a>
            </div>
            <div>

                <b>Boxes: </b>{s?.boxes}
            </div>
        </div>
    )) : "No shipment found"


    return (
        <div>
            {layout}
        </div>
    )
}

export default Shipments