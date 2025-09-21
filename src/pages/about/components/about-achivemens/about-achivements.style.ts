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
        backgroundColor: 'transparent',
        [breakpoint(breakpoints.tabletM)]: {
            height: '100%',
            minHeight: rem(800),

        }
    },
    splineWrapper: {
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        borderRadius: rem(48),
    },

    spline: {
        width: '100%',
        height: '100%',
        opacity: 0.5,
        [breakpoint(breakpoints.tabletM)]: {
            height: '90% !important',
            width: '100% !important',
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
        lineHeight: rem(56),
        letterSpacing: '0%',
        verticalAlignment: 'Middle',
        background: 'linear-gradient(90deg, #FFFFFF 0%, #697586 25.24%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        [breakpoint(breakpoints.tabletM)]: {
            fontWeight: '600',
            fontSize: rem(24),
            lineHeight: rem(32),
            letterSpacing: '0%',
            verticalAlignment: 'Middle',
            backgroundColor: 'transparent',
            color: `${colors.white} !important`,
            marginTop: rem(-45),
        }
    },
    lineAndText: {
        marginTop: rem(30),
        marginLeft: rem(250),
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
                fontSize: rem(16),
                marginTop: rem(20),
                color: colors.textGrayColor3
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
        marginTop: rem(160),
        width: '100%',
        height: '100%',
        display: 'flex',
        gap: rem(25),
        [breakpoint(breakpoints.tabletM)]: {
            display: 'none',
        }
    },
    ballon: {
        width: rem(290),
        height: rem(290),
        borderRadius: '100%',
        backgroundColor: colors.modernBlue5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: colors.white,
        '& h1': {
            fontWeight: '700',
            fontSize: rem(35),
            lineHeight: rem(43),
            letterSpacing: '-2%',
        },
        '& p': {
            fontWeight: '400',
            fontSize: rem(17),
            lineHeight: rem(26),
            letterSpacing: '0',
            color: colors.white,
            opacity: '0.8'
        }
    },

    // Mobile/Tablet version - cards
    mobileCards: {
        display: 'none',
        [breakpoint(breakpoints.tabletM)]: {
            display: 'flex',
            flexDirection: 'column',
            marginRight: rem(30),
            marginTop: rem(50),
            padding: `0 ${rem(20)}`,
        },
        [breakpoint(breakpoints.mobileL)]: {
            gridTemplateColumns: '1fr',
            gap: rem(15),
            marginTop: rem(40),
        }
    },
    mobileCard: {
        backgroundColor: '#36415266',
        borderRadius: rem(16),
        width: rem(145),
        height: rem(135),
        padding: rem(24),
        marginTop: rem(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        color: colors.white,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        '& h2': {
            fontWeight: '700',
            fontSize: rem(24),
            lineHeight: rem(36),
            margin: `0 0 ${rem(8)} 0`,
            letterSpacing: '-1%',
        },
        '& p': {
            fontWeight: '400',
            fontSize: rem(12),
            lineHeight: rem(22),
            margin: 0,
            color: colors.white,
            opacity: '0.85'
        },
        [breakpoint(breakpoints.mobileL)]: {
            padding: rem(20),
            '& h2': {
                fontSize: rem(24),
                lineHeight: rem(32),
            },
            '& p': {
                fontSize: rem(14),
                lineHeight: rem(20),
            }
        }
    }
};

export const useAboutAchivementStyles = createUseStyles(styles);