import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { DataContext } from '../App';
import { getItem } from "../services/requests";

const Detail = () => {
    const { name } = useParams();
    const [shipment, setShipment] = useState([]);
    const [data, setallShipments, updated, setupdated] = useContext(DataContext);
    const [bayCount, setbayCount] = useState(0)
    const [boxes, setboxes] = useState("")

    useEffect(() => async () => setShipment((await getItem("shipments", name)).data), [name])


    useEffect(() => {
        setboxes(shipment[0]?.boxes)
        calculateBay(shipment[0]?.boxes)
    }, [shipment]);

    function calculateBay(boxes) {
        let calculatedBayByUnit = 0;
        let bayCapacity = 10;
        let arrayOfBox = boxes?.split(',');
        if (arrayOfBox) {
            for (let unit of arrayOfBox) {
                if (unit === "") {
                    unit = 0;
                }
                calculatedBayByUnit += parseFloat(unit);
                setbayCount(Math.ceil(calculatedBayByUnit / bayCapacity));
            }
        }
    }

    useEffect(() => {
        let rest = data?.find(d => d?.id == shipment[0]?.id);
        rest = { ...rest, boxes }
        setupdated(rest);
        console.log(rest)
    }, [boxes])

    function handleBoxes(e) {
        let value = ""

        value = e.target.value;
        setboxes(value);
        calculateBay(value);
    }
    return (
        <div>
            {shipment?.length > 0 && shipment?.map(s => (
                <div>
                    <h2>{s?.name}</h2>
                    <a href={`emailto:${s?.email}`}>{s?.email}</a>
                    <p>Number of required cargo bays <b>{bayCount}</b></p>
                    <input type="text" defaultValue={boxes} onChange={handleBoxes} />
                </div>
            ))
            }
        </div>
    )
}

export default Detail