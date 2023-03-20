import { IconButton } from 'vcc-ui';

type NextButtonProps = {
    disabled: boolean;
    onClick: () => void;
};

export const NextButton = ({ disabled, onClick }: NextButtonProps) => {
    return (
        <IconButton
            iconName="navigation-chevronforward"
            onClick={onClick}
            variant="outline"
            aria-disabled={disabled}
            aria-label="Next car"
        ></IconButton>
    );
};
