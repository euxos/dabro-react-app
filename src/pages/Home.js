import React from "react";
import { Container, Row } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';


const Home = () => {

    const products = useSelector(store => store.products);

    return (
        <Container>
            <Row>

            </Row>
        </Container>
    );
};

export default Home;