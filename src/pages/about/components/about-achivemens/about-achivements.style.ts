import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';

const styles = {
    wrapper: {
        width: '100%',
        height: rem(808),
        borderRadius: rem(48),
        position: 'relative',
    },
    spline: {
        height: rem(808),
        [breakpoint(breakpoints.tabletM)]: {
            height: '800px !important',

        }
    },
    mainDiv: {
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundColor: 'transparent',
        position: 'absolute',

    },
    activitiesText: {
        fontWeight: '700',
        fontSize: rem(35),
        lineHeight:rem(56),
        letterSpacing: '0%',
        verticalAlignment: 'Middle',
        background: 'linear-gradient(90deg, #FFFFFF 0%, #697586 25.24%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        [breakpoint(breakpoints.tabletM)]: {
            fontWeight: '600',
            fontSize: rem(24),
            lineHeight:rem(32),
            letterSpacing: '0%',
            verticalAlignment: 'Middle',
            background: 'linear-gradient(90deg, #121212 0%, #444444 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        }
    },
    lineAndText: {
        marginTop: rem(30),
        marginLeft : rem(250),
        display: 'flex',
        alignItems: 'center',
        gap: rem(30),
        '& h3': {
            fontSize: rem(18),
            fontWeight: '400',
            lineHeight: rem(32),
            background: 'radial-gradient(278.27% 278.27% at -178.27% 100%, #111111 0%, #A5A5A5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            direction: 'rtl',
            [breakpoint(breakpoints.tabletM)]: {
                fontSize: rem(14),
            },
        },
        [breakpoint(breakpoints.tabletM)]: {
            marginLeft: rem(20),
            marginTop: rem(-20),
            gap: rem(10),

        }
    },

    line: {
        height: rem(0),
        width: rem(130),
        border: `${rem(1)} solid ${colors.border}`,
        [breakpoint(breakpoints.tabletM)]: {
            width: rem(40)
        }
    },
    ballons: {
        marginTop: rem(60),
        width: '100%',
        height: '100%',
        backgroundColor: 'red !important',
    }
};
export const useAboutAchivementStyles = createUseStyles(styles);