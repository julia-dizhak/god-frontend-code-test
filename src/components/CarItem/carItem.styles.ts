import { ExtendCSS, CurrentTheme } from 'vcc-ui';

export const container: ExtendCSS = {
    backgroundColor: '#fff',
};

export const textContainer: ExtendCSS = {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
};

export const imageContainer: ExtendCSS = {
    border: 0,
    margin: '14px 0 0 0',
};

export const linkContainer: ExtendCSS = {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-evenly',
    padding: '0 0 40px 0',
};

export const bodyTypeText: ExtendCSS = ({ theme }: { theme: CurrentTheme }) => ({
    color: theme.color.foreground.secondary,
    textTransform: 'uppercase',
});

export const modelTypeText: ExtendCSS = ({ theme }: { theme: CurrentTheme }) => ({
    color: theme.color.foreground.secondary,
});
