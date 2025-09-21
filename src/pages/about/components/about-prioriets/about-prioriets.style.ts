import {createUseStyles} from 'react-jss';
import background from '../../../../assets/images/statics/about-prioriets-bg.png';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import {breakpoint, transition} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
const styles = {
    wrapper: {
        marginTop: rem(30),
        paddingTop: rem(100),
        width: '100%',
        minHeight: rem(808),
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        borderRadius: rem(48),
        [breakpoint(breakpoints.tabletM)]:{
            paddingTop: rem(50),
            height: 'auto'
        }
    },
    row: {
        marginTop: rem(100),
        [breakpoint(breakpoints.tabletM)]:{
            marginTop: rem(10),
        }
    },
    leftDiv: {
        width: '100%',
        height: rem(402),
        backgroundColor: colors.modernBlue5,
        borderRadius: rem(24),
    },
    leftDivContent: {
        width: '100%',
        height: '80%',
        padding: '96px 24px 40px 24px',
        borderBottom: '1px solid #FFFFFF66',
        transition: 'all 0.5s ease-in-out',
        '& h1': {
            fontWeight: '600',
            fontSize: rem(48),
            lineHeight: rem(64),
            color: colors.modernBlue1,
            marginBottom: rem(25),
            transition: transition('all', 0.5, 'ease-in-out'),
            transform: 'translateX(0)',
        },
        '& h2': {
            fontWeight: '600',
            fontSize: rem(24),
            lineHeight: rem(32),
            color: colors.white,
            marginBottom: rem(5),
            transition: transition('all', 0.5, 'ease-in-out'),
            transform: 'translateX(0)',
        },
        '& p': {
            fontWeight: '500',
            fontSize: rem(15),
            lineHeight: rem(20),
            color: colors.white,
            opacity: 0.8,
            marginBottom: rem(5),
            transition: 'all 0.5s ease-in-out 0.2s',
            transform: 'translateX(0)',
        },
    },
    paginationDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '0 24px',
        height: '20%',
        gap: rem(8),
    },
    paginationDot: {
        width: rem(8),
        height: rem(8),
        borderRadius: '50%',
        backgroundColor: colors.paginationColor,
        cursor: 'pointer',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: 'scale(1)',
        '&:hover': {
            backgroundColor: '#FFFFFF66',
            transform: 'scale(1.2)',
        }
    },
    activeDot: {
        width: rem(32),
        backgroundColor: colors.white,
        borderRadius: rem(4),
        transform: 'scale(1.1)',
    },
    imageDiv: {
        width: rem(802),
        height: '88%',
        borderRadius: rem(24),
        [breakpoint(breakpoints.tabletM)]:{
            width: 'auto',
            height: 'auto',
            marginTop: rem(10),
        }
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: rem(24),
    },
    fadeIn: {
        opacity: 1,
        transform: 'translateX(0)',
        '& h1': {
            transform: 'translateX(0)',
            opacity: 1,
        },
        '& h2': {
            transform: 'translateX(0)',
            opacity: 1,
        },
        '& p': {
            transform: 'translateX(0)',
            opacity: 0.8,
        },
    },
    fadeOut: {
        opacity: 0.7,
        transform: 'translateX(-10px)',
        '& h1': {
            transform: 'translateX(-15px)',
            opacity: 0.5,
        },
        '& h2': {
            transform: 'translateX(-10px)',
            opacity: 0.5,
        },
        '& p': {
            transform: 'translateX(-5px)',
            opacity: 0.3,
        },
    }
};
export const useAboutPriorietsStyles = createUseStyles(styles);