import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';

const styles = {
    wrapper: {
        marginTop: rem(50),
        paddingTop: rem(100),
        width: '100%',
        minHeight: rem(952),
        height: 'auto',
        borderRadius: rem(48),
        backgroundColor: colors.white,
        position: 'relative',
    },
    leftImg: {
        width: '100%',
        height: rem(600),
        '& img': {
            width: '100%',
            height: '100%',
            borderRadius: rem(24),
        }
    },
    loremTitle: {
        fontWeight: '700',
        fontSize: rem(24),
        lineHeight: rem(32),
        color: colors.textGrayColor7,
    },
    cards: {
        width: '75%',
        height: rem(250),
        position: 'absolute',
        top: '57%',
        paddingLeft: rem(50),
        [breakpoint(breakpoints.tabletM)]: {
            width: '90%',
            paddingLeft: rem(25),
            top: '60%',
        }
    },
    card: {
        width: '100%',
        height: rem(186),
        borderRadius: rem(20),
        border: '1px solid #E3E8EF',
        backgroundColor: colors.textGrayColor50,
        padding: rem(24),
        display: 'flex',
        flexDirection: 'column',
        '& h1': {
            fontWeight: '700',
            fontSize: rem(20),
            lineHeight: rem(26),
            letterSpacing: '0%',
        }
    },
    buttons: {
        display: 'flex',
        gap: rem(16),
        marginTop: 'auto',
    },
    navigationContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: rem(30),
        [breakpoint(breakpoints.tabletM)]: {
            flexDirection: 'column-reverse',
            gap: rem(20),
            alignItems: 'flex-start',
        }
    },
    arrowContainer: {
        display: 'flex',
        gap: rem(16),
    },
    arrow: {
        cursor: 'pointer',
        '& svg': {
            width: rem(24),
            height: rem(24),
        }
    },
    pagination: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: '600',
        fontSize: rem(16),
        color: colors.textGrayColor7,
    },
    paginationCurrent: {
        color: colors.textGrayColor8,
        fontSize: rem(18),
        fontWeight: '700',
    },
    paginationDivider: {
        margin: `0 ${rem(8)}`,
        color: colors.textGrayColor5,
    },
    paginationTotal: {
        color: colors.textGrayColor5,
    }
};

export const useHomeProjectsStyles = createUseStyles(styles);