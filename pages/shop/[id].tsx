import React from "react";
import {useRouter} from "next/router";
import {Grid, Row} from "vcc-ui";

export default function Shop() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Grid>
        <Row>
          <h1>          Shop - {id}</h1>
          </Row>
        </Grid>
  
    );
}
