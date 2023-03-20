import React from 'react';
import { useRouter } from 'next/router';
import { Grid, Row } from 'vcc-ui';

const Learn = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Grid>
            <Row>
                <h1> Learn - {id}</h1>
            </Row>
        </Grid>
    );
};

export default Learn;
