import React from 'react';
import { useRouter } from 'next/router';
import { View, Link } from 'vcc-ui';

const Learn = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <View>
            <h1> Learn | {id}</h1>

            <Link type="button" onClick={() => router.back()} arrow="left">
                go back
            </Link>
        </View>
    );
};

export default Learn;
