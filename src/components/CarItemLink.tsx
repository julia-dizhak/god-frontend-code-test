import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Text, useTheme } from 'vcc-ui';
import chevronSmall from '/docs/chevron-small.svg';

type CarItemLinkProps = {
    route: string;
    text: string;
};

export const CarListItemLink = ({ route, text }: CarItemLinkProps) => {
    const theme = useTheme();

    return (
        <Link href={route}>
            <Text
                as="span"
                subStyle="inline-link"
                variant="amundsen"
                extend={{
                    fontSize: '0.4rem',
                    textTransform: 'uppercase',
                    color: `${theme.color.foreground.action}`,
                    cursor: 'pointer',
                }}
            >
                {text}
                <Image alt="chevron" src={chevronSmall} height={13} width={20} />
            </Text>
        </Link>
    );
};
