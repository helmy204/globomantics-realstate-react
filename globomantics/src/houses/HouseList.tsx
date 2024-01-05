import Row from 'react-bootstrap/Row';
import HouseRow from './HouseRow';
import { useState } from 'react';

const housesArray = [
    {
        id: 1,
        address: "12 Valley of Kings, Geneva",
        country: "Switzerland",
        price: 90000
    },
    {
        id: 2,
        address: "89 Road of Forks, Bern",
        country: "Switzerland",
        price: 500000
    }
]

const HouseList = () => {

    const [houses, setHouses] = useState(housesArray);

    const addHouse = () => {
        setHouses([
            ...houses,
            {
                id: 3,
                address: "32 Valley Way, New York",
                country: "USA",
                price: 1000000
            }
        ]);
    };

    return (
        <>
            <Row className='mb-2'>
                <h5 className='themeFontColor text-center'>
                    Houses currently on the market
                </h5>
            </Row>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    { houses.map(h => <HouseRow key={h.id} house={h} />) }
                </tbody>
            </table>
            <button onClick={addHouse} className='btn btn-primary'>Add</button>
        </>
    );
};

export default HouseList;