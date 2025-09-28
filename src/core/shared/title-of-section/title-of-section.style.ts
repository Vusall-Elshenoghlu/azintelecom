import {createUseStyles} from 'react-jss';
import {rem} from '../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../assets/styles/abstracts/sizes';
import colors from '../../../assets/styles/abstracts/color';
import {TitleOfSectionProps} from './title-of-section';

const styles = {
    row: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    activitiesText: ({dark}: { dark?: boolean }) => ({
        fontWeight: '700',
        fontSize: rem(30),
        lineHeight: rem(56),
        letterSpacing: '0%',
        verticalAlignment: 'Middle',
        background: dark
            ? 'linear-gradient(90deg, #FFFFFF 22.54%, #697586 56.36%)'
            : 'linear-gradient(90deg, #121926 20.87%, #697586 52.17%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        [breakpoint(breakpoints.tabletM)]: {
            fontWeight: '600',
            fontSize: rem(24),
            lineHeight: rem(32),
            marginLeft: rem(15),
            letterSpacing: '0%',
            verticalAlignment: 'Middle',
            background: dark
                ? 'linear-gradient(90deg, #FFFFFF 22.54%, #697586 56.36%)'
                : 'linear-gradient(90deg, #121212 0%, #444444 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        }
    }),
    rightColumn: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    lineAndText: ({dark}: { dark?: boolean }) => ({
        width: 'auto',
        height: 'auto',
        marginLeft: 'auto',
        paddingLeft: 'auto',
        marginTop: rem(50),
        display: 'flex',
        alignItems: 'center',
        gap: rem(30),
        '& h3': {
            fontSize: rem(24),
            fontWeight: '400',
            lineHeight: rem(32),
            background: dark ?
                'radial-gradient(56.96% 56.96% at 50% 59.38%, #FFFFFF 47%, #697586 100%)'
                : 'radial-gradient(50% 50% at 50% 59.37%, #090909 0%, #616161 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft: 'auto',
            [breakpoint(breakpoints.tabletM)]: {
                fontSize: rem(14),
                marginTop: rem(30),
            },
        },
        [breakpoint(breakpoints.tabletM)]: {
            marginTop: rem(-20),
            gap: rem(0),

        }
    }),

    line: ({dark}: { dark?: boolean }) => ({
        height: rem(0),
        width: rem(130),
        border: `${rem(1)} solid ${dark ? '#202939' : colors.textGrayColor8}`,
        marginLeft: 'auto',
        [breakpoint(breakpoints.tabletM)]: {
            width: rem(40),
            marginTop: rem(30),
            marginRight: rem(-30),
        }
    }),

    description: ({dark, underline}: TitleOfSectionProps) => ({
        width: 'auto',
        fontWeight: '400',
        fontSize: rem(18),
        lineHeight: rem(28),
        letterSpacing: rem(0),
        horizontalAlignment: 'right',
        verticalAlignment: 'middle',
        background: dark
            ? 'radial-gradient(56.96% 56.96% at 50% 59.38%, #FFFFFF 47%, #697586 100%)'
            : 'radial-gradient(278.27% 278.27% at -178.27% 100%, #111111 0%, #A5A5A5 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textDecoration: underline ? 'underline' : 'none',
        backgroundColor: 'red !important',
        marginLeft: 'auto',
    }),

};
export const useTitleOfSectionStyles = createUseStyles(styles);