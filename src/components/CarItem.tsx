import React from 'react';
import Link from 'next/link';
import { Grid, Row, Col, Text, useTheme, Spacer } from 'vcc-ui';
import { Car } from '../../pages/api/cars';
import Image from 'next/image';
import { CarListItemLink } from './CarItemLink';

type CarProps = {
    car: Car;
};

export enum RouteTypes {
    LEARN = '/learn',
    SHOP = '/shop',
}

export const CarItem = ({ car }: CarProps) => {
    const theme = useTheme();

    return (
        <div>
            <header>
                <Text
                    as="h3"
                    subStyle="emphasis"
                    extend={{ color: theme.color.foreground.secondary, textTransform: 'uppercase' }}
                >
                    {car.bodyType}
                </Text>

                <Text as="h2" variant="hillary" subStyle="emphasis">
                    {car.modelName}
                    <Text
                        as="h4"
                        variant="columbus"
                        subStyle="standard"
                        extend={{ color: theme.color.foreground.secondary }}
                    >
                        {car.modelType}
                    </Text>
                </Text>
            </header>

            <Spacer />

            <Image
                src={car.imageUrl}
                alt={car.modelName}
                width="400"
                height="300"
                layout="responsive"
                objectFit="contain"
            />
            <Spacer />

            <aside>
                <Grid>
                    <Row align="center">
                        <Col size={6}>
                            {' '}
                            <CarListItemLink route={`${RouteTypes.LEARN}/${car.id}`} text="Learn" />
                        </Col>
                        <Col size={6}>
                            {' '}
                            <CarListItemLink route={`${RouteTypes.SHOP}/${car.id}`} text="Shop" />
                        </Col>
                    </Row>
                </Grid>
            </aside>
        </div>
    );
};
