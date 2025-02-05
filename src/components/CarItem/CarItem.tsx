import React from 'react';
import { Text, Spacer, Block, Flex, Link } from 'vcc-ui';
import Image from 'next/image';
import { Car } from '../../interfaces/cars';
import { RouteTypes } from '../../interfaces/routes';
import { container, textContainer, imageContainer, linkContainer, bodyTypeText, modelTypeText } from './carItem.styles';

type CarProps = {
    car: Car;
};

export const CarItem = ({ car }: CarProps) => {
    const { id, bodyType, modelType, modelName, imageUrl } = car;

    return (
        <Block extend={container}>
            <header>
                <Text subStyle="emphasis" extend={bodyTypeText}>
                    {bodyType}
                </Text>

                <Flex extend={textContainer}>
                    <Text as="h2" variant="hillary" subStyle="emphasis">
                        {modelName}
                    </Text>
                    <Spacer />
                    <Text as="h3" variant="columbus" subStyle="standard" extend={modelTypeText}>
                        {modelType}
                    </Text>
                </Flex>
            </header>

            <Spacer size={4} />

            <Flex extend={imageContainer}>
                <Link href={`${RouteTypes.LEARN}/${id}`}>
                    <Image
                        src={imageUrl}
                        alt={`Volvo car ${bodyType} of model ${modelName} which is a ${modelType}`}
                        layout="responsive"
                        objectFit="contain"
                        width={400}
                        height={300}
                    />
                </Link>
            </Flex>

            <Flex extend={linkContainer}>
                <Link href={`${RouteTypes.LEARN}/${id}`} arrow="right">
                    Learn
                </Link>
                <Link href={`${RouteTypes.SHOP}/${id}`} arrow="right">
                    Shop
                </Link>
            </Flex>
        </Block>
    );
};
