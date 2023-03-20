import React from 'react';
import { Text, useTheme, Spacer, Block, Flex, Link } from 'vcc-ui';
import Image from 'next/image';
import { Car } from '../../../interfaces/cars';
import { RouteTypes } from '../../../interfaces/routes';
import { container, textContainer, imageContainer, linkContainer, bodyTypeText, modelTypeText } from './carItem.styles';

type CarProps = {
    car: Car;
};

export const CarItem = ({ car }: CarProps) => {
    const theme = useTheme();
    const { id, bodyType, modelType, modelName, imageUrl } = car;

    return (
        <Block extend={container}>
            <header>
                <Text as="h3" subStyle="emphasis" extend={bodyTypeText}>
                    {bodyType}
                </Text>

                <Flex extend={textContainer}>
                    <Text as="h2" variant="hillary" subStyle="emphasis">
                        {modelName}
                    </Text>
                    <Spacer />
                    <Text as="h4" variant="columbus" subStyle="standard" extend={modelTypeText}>
                        {modelType}
                    </Text>
                </Flex>
            </header>

            <Spacer size={4} />

            <Flex extend={imageContainer}>
                <Image
                    src={imageUrl}
                    alt={`Volvo car ${bodyType} of model ${modelName} which is a ${modelType}`}
                    layout="responsive"
                    objectFit="contain"
                    width={400}
                    height={300}
                />
            </Flex>

            <Flex extend={linkContainer}>
                <Link href={`${RouteTypes.LEARN}/${car.id}`} arrow="right">
                    Learn
                </Link>
                <Link href={`${RouteTypes.SHOP}/${car.id}`} arrow="right">
                    Shop
                </Link>
            </Flex>
        </Block>
    );
};
