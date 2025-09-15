import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import {breakpoint, transition} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
import gridImage from '../../../../assets/images/statics/grid.png';
import gridPhoneImage from '../../../../assets/images/statics/grid-mobile.png';

const styles = {
    wrapper: {
        marginTop: rem(20),
        width: '100%',
        height: rem(974),
        borderRadius: rem(48),
        backgroundColor: colors.white,
        paddingTop: rem(120),
        position: 'relative',
        backgroundImage: `url(${gridImage}), url(${gridImage})`,
        backgroundPosition: 'top 40px left -120px, bottom 0px right -100px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${rem(550)} ${rem(550)}`,
        [breakpoint(breakpoints.tabletM)]: {
            height: 'auto',
            marginTop: rem(80),
            paddingBottom: rem(40),
            paddingTop: rem(40),
            borderRadius: rem(24),
            backgroundImage: `url(${gridPhoneImage}), url(${gridPhoneImage})`,
            backgroundPosition: 'top 40px left -120px, bottom 0px right -100px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${rem(220)} ${rem(220)}`,
        },
    },
    leftDiv: {
        marginTop: rem(100),
        [breakpoint(breakpoints.tabletM)]: {
            marginTop: rem(50),
        },
    },

    activeDiv: {
        width: rem(392),
        height: rem(142),
        borderRadius: '0 16px 16px 0',
        backgroundColor: colors.txtGray,
        borderLeft: '4px solid #1570EF',
        padding: '24px 32px 24px 32px',
        transition: transition('all', 0.5, 'ease'),
        cursor: 'pointer',
        zIndex: 10,
        position: 'relative',
        [breakpoint(breakpoints.tabletM)]: {
            width: '100%',
            height: 'auto',
            borderRadius: rem(16),
            border: '2px dotted #1570EF',
            borderLeft: '4px solid #1570EF',
            padding: rem(24),
            marginBottom: rem(16),
        },
    },

    hideDiv: {
        width: rem(392),
        height: rem(142),
        backgroundColor: colors.white,
        padding: '24px 24px 24px 0',
        cursor: 'pointer',
        zIndex: 10,
        position: 'relative',
        [breakpoint(breakpoints.tabletM)]: {
            width: '100%',
            height: 'auto',
            border: '2px dotted #E0E0E0',
            borderRadius: rem(16),
            padding: rem(24),
            marginBottom: rem(16),
            backgroundColor: colors.white,

        },
    },

    titleAndDesc: {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(16),
        '& h1': {
            fontSize: rem(24),
            fontWeight: '600',
            lineHeight: rem(32),
            color: colors.textGrayColor8,
            [breakpoint(breakpoints.tabletM)]: {
                fontSize: rem(20),
                lineHeight: rem(28),
            },
        },
        '& p': {
            fontSize: rem(16),
            fontWeight: '400',
            lineHeight: rem(32),
            color: colors.textGrayColor5,
            [breakpoint(breakpoints.tabletM)]: {
                fontSize: rem(14),
                lineHeight: rem(24),
            },
        },
    },

    rightDiv: {
        width: '100%',
        maxWidth: rem(704),
        height: rem(582),
        borderRadius: rem(40),
        padding: '40px 32px 40px 32px',
        border: '4px solid #557EBE',
        backgroundColor: colors.white,
        position: 'relative',
        [breakpoint(breakpoints.tabletM)]: {
            display: 'none',
        },
    },
    imageOne: {
        position: 'absolute',
        left: -28
    },
    imageTwo: {
        position: 'absolute',
        left: -50,
        bottom: 90,
    },

    titleWithIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [breakpoint(breakpoints.tabletM)]: {
            '& h1': {
                flex: 1,
            },
        },
    },

    arrowIcon: {
        display: 'none',
        [breakpoint(breakpoints.tabletM)]: {
            display: 'block',
            width: rem(20),
            height: rem(20),
            '&:after': {
                content: '"→"',
                fontSize: rem(18),
                color: colors.textGrayColor5,
            },
        },
    },
    rightContent: {
        width: '100%',
        marginTop: rem(10),
        height: rem(144),
        borderRadius: rem(16),
        border: '1px solid #E3E8EF',
        padding: rem(16),
        '& h3': {
            color: colors.textGrayColor5,
            fontSize: rem(16),
            fontWeight: '400',
            letterSpacing: '0%',
        }
    }

} as const;

export const useHomeAboutUsStyles = createUseStyles(styles);