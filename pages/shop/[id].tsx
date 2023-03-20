import React from 'react';
import { useRouter } from 'next/router';
import { Grid, Row } from 'vcc-ui';

const Shop = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Grid>
            <Row>
                <h1> Shop - {id}</h1>
            </Row>
        </Grid>
    );
};

export default Shop;
