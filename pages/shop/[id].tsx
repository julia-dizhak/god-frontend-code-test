import React from 'react';
import { useRouter } from 'next/router';
import { View } from 'vcc-ui';

const Shop = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <View>
            <h1> Shop | {id}</h1>
        </View>
    );
};

export default Shop;
