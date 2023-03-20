import React from 'react';
import { useRouter } from 'next/router';
import { View } from 'vcc-ui';

const Learn = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <View>
            <h1> Learn - {id}</h1>
        </View>
    );
};

export default Learn;
