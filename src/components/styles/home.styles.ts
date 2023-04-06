import { ExtendCSS, CurrentTheme } from 'vcc-ui';

export const container: ExtendCSS = {
    textAlign: 'center',
    color: '#fff',
    margin: '0 0 20px 0',
};

export const filterContainer: ExtendCSS = {
    margin: '20px 10px 0 10px',
};

export const title: ExtendCSS = {
    fontSize: '2rem !important',
    color: '#fff',
};

export const subTitle: ExtendCSS = ({ theme }: { theme: CurrentTheme }) => ({
    fontSize: '1.4rem !important',
    color: theme.color.foreground.primary,
    fontWeight: 'bold',
});
