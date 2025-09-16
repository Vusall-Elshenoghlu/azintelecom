import {createUseStyles} from 'react-jss';
import {rem} from '../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../assets/styles/abstracts/sizes';
import colors from '../../../assets/styles/abstracts/color';

const styles = {
    row: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    activitiesText: {
        fontWeight: '700',
        fontSize: rem(30),
        lineHeight: rem(56),
        letterSpacing: '0%',
        verticalAlignment: 'Middle',
        background: 'linear-gradient(90deg, #121926 20.87%, #697586 52.17%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        [breakpoint(breakpoints.tabletM)]: {
            fontWeight: '600',
            fontSize: rem(24),
            lineHeight: rem(32),
            marginLeft: rem(15),
            letterSpacing: '0%',
            verticalAlignment: 'Middle',
            background: 'linear-gradient(90deg, #121212 0%, #444444 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',

        }
    },
    lineAndText: {
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
            background: 'linear-gradient(90deg, #121926 20.87%, #697586 52.17%)',
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
    },

    line: {
        height: rem(0),
        width: rem(130),
        border: `${rem(1)} solid ${colors.border}`,
        marginLeft: 'auto',
        [breakpoint(breakpoints.tabletM)]: {
            width: rem(40),
            marginTop: rem(30),
            marginRight: rem(-30),
        }
    },
    description: {
        width: 'auto !important',
        textAlign: 'right',
        fontWeight: '400',
        fontSize: rem(18),
        lineHeight: rem(28),
        letterSpacing: rem(0),
        horizontalAlignment: 'right',
        verticalAlignment: 'middle',
        background: 'radial-gradient(278.27% 278.27% at -178.27% 100%, #111111 0%, #A5A5A5 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginLeft: 'auto',
    }
};
export const useTitleOfSectionStyles = createUseStyles(styles);