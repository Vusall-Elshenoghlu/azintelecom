import {createUseStyles} from 'react-jss';
import {rem} from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import {breakpoint, transition} from '../../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../../assets/styles/abstracts/sizes';



const styles = {
    headerSection: {
        backgroundColor: colors.headerNavBg,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 999,
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
    },

    logoImg: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    },

    left: {
        width: rem(201.54),
        height: '100%',
        marginLeft: rem(50),

        [breakpoint(breakpoints.mobileL)]: {
            width: rem(120),
            height: rem(32),
            marginLeft: rem(1),
        },
    },

    navigationWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    navigation: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'auto',
        padding: rem(30),
        height: rem(68),
        borderRadius: rem(48),
        border: '1px solid rgba(255, 255, 255, 0.4)',
        backgroundColor: 'transparent',

        [breakpoint(breakpoints.laptopXL)]: {
            width: rem(550),
            height: rem(60),
        },

        [breakpoint(breakpoints.laptopML)]: {
            width: rem(500),
            height: rem(55),
        },

        [breakpoint(breakpoints.laptopS)]: {
            width: rem(450),
            height: rem(50),
        },
    },

    navItems: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: rem(12),
        listStyle: 'none',
        margin: 0,
        padding: 0,
        flexWrap: 'nowrap',
        '&:hover': {
            color: 'white'
        },

        [breakpoint(breakpoints.laptopXL)]: {
            gap: rem(28),
        },

        [breakpoint(breakpoints.laptopML)]: {
            gap: rem(24),
        },

        [breakpoint(breakpoints.laptopS)]: {
            gap: rem(20),
        },
    },

    navLink: {
        color: colors.activeLiColor,
        fontFamily: fonts.mainFont,
        fontWeight: '400',
        fontSize: rem(15),
        textDecoration: 'none',
        padding: `${rem(8)} ${rem(16)}`,
        borderRadius: rem(4),
        transition: transition('all', 0.3, null),
        whiteSpace: 'nowrap',
        position: 'relative',
        '&:hover': {
            color: colors.white,
        },

        '&::after': {
            content: "''",
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: rem(2),
            backgroundColor: colors.white,
            color: colors.white,
            borderRadius: rem(1),
            transition: 'width 0.3s ease',
        },

        '&:hover::after, &.active::after': {
            width: '100%',
        },

        [breakpoint(breakpoints.laptopXL)]: {
            fontSize: rem(14),
            padding: `${rem(6)} ${rem(12)}`,
        },

        [breakpoint(breakpoints.laptopML)]: {
            fontSize: rem(13),
            padding: `${rem(5)} ${rem(10)}`,
        },

        [breakpoint(breakpoints.laptopS)]: {
            fontSize: rem(12),
            padding: `${rem(4)} ${rem(8)}`,
        },
    },

    rightSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: rem(16),
        height: '100%',

        [breakpoint(breakpoints.mobileL)]: {
            gap: rem(12),
        },
    },

    listContent: {
        position: 'relative',

    },

    selected: {
        cursor: 'pointer',
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: rem(12),
        fontWeight: 700,
        color: 'white',
        transition: transition('all', 0.3, null),
        fontSize: rem(12),
        lineHeight: rem(24),
        letterSpacing: 0,
        paragraphSpacing: rem(12),
        textAlign: 'center',
        border: '1px solid rgba(75, 85, 101, 1)',
        width:rem(72),
        height: rem(44),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(5),



        [breakpoint(1024)]: {
            padding: `${rem(6)} ${rem(10)}`,
            fontSize: rem(13),
            minWidth: rem(36),
        },

        [breakpoint(768)]: {
            padding: `${rem(5)} ${rem(8)}`,
            fontSize: rem(12),
            minWidth: rem(32),
        },

        [breakpoint(480)]: {
            padding: `${rem(4)} ${rem(6)}`,
            fontSize: rem(11),
            minWidth: rem(28),
            borderRadius: rem(4),
        },
    },

    langList: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius: rem(8),
        padding: `${rem(8)} ${rem(5)}`,
        width: rem(72),
        alignItems: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        top: rem(40),
        right: rem(0),
        zIndex: 1000,

        [breakpoint(1024)]: {
            width: rem(55),
            padding: `${rem(6)} ${rem(4)}`,
            top: rem(32),
        },

        [breakpoint(768)]: {
            right: rem(-5),
            width: rem(50),
            padding: `${rem(5)} ${rem(3)}`,
            top: rem(30),
        },

        [breakpoint(480)]: {
            width: rem(45),
            borderRadius: rem(6),
            right: 0,
        },
    },

    langItem: {
        color: '#1D2B36',
        fontWeight: 500,
        fontSize: rem(14),
        cursor: 'pointer',
        padding: `${rem(6)} ${rem(8)}`,
        transition: 'all 0.2s ease',
        textAlign: 'center',
        width: '100%',
        borderRadius: rem(4),

        '&:hover': {
            color: '#2BAAE2',
            backgroundColor: '#f0f8ff',
        },

        [breakpoint(1024)]: {
            fontSize: rem(13),
            padding: `${rem(5)} ${rem(6)}`,
        },

        [breakpoint(768)]: {
            fontSize: rem(12),
            padding: `${rem(4)} ${rem(4)}`,
        },

        [breakpoint(480)]: {
            fontSize: rem(11),
            padding: `${rem(3)} ${rem(2)}`,
        },
    },
    activeLang: {
        color: '#2BAAE2',
        backgroundColor: '#f0f8ff',
    },

    searchIconWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },



    searchIcon: {
        color: colors.white,
        fontSize: rem(24),
        cursor: 'pointer',
        padding: rem(8),
        borderRadius: rem(4),
        transition: transition('all', 0.3, null),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: rem(40),
        minHeight: rem(40),

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transform: 'scale(1.05)',
        },

        [breakpoint(breakpoints.mobileL)]: {
            fontSize: rem(20),
            minWidth: rem(32),
            minHeight: rem(32),
            padding: rem(6),
        },
    },

    menuAndLanguagesWrapper: {
        display: 'flex',
        gap: rem(10),
        marginRight: rem(70)
    },
    hamburger: {
        display: 'none',
        fontSize: rem(24),
        color: colors.activeLiColor,
        cursor: 'pointer',
        padding: rem(8),
        borderRadius: rem(4),
        transition: transition('all', 0.3, null),
        minWidth: rem(40),
        minHeight: rem(40),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        border: 'none',

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: colors.white,
        },

        [breakpoint(breakpoints.tabletM)]: {
            display: 'flex',
        },

        [breakpoint(breakpoints.mobileL)]: {
            fontSize: rem(20),
            padding: rem(6),
            minWidth: rem(32),
            minHeight: rem(32),
        },
    },
}as const;

export const useHeaderNavbarStyles = createUseStyles(styles);