import { IconButton } from 'vcc-ui';

type PrevButtonProps = {
    disabled: boolean;
    onClick: () => void;
};

export const PrevButton = ({ disabled, onClick }: PrevButtonProps) => {
    return (
        <IconButton
            iconName="navigation-chevronback"
            onClick={onClick}
            variant="outline"
            aria-disabled={disabled}
            aria-label="Previous car"
        ></IconButton>
    );
};
