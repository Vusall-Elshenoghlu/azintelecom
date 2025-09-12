import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';

const styles = {

    wrapper: {
        marginTop: rem(20),
        width: '100%',
        height: rem(974),
        borderRadius: rem(48),
        backgroundColor: colors.white,
        paddingTop: rem(120),
        [breakpoint(breakpoints.tabletM)]: {
            marginTop: rem(120),
        },
        [breakpoint(breakpoints.mobileL)]: {
            height: 'auto',
            marginTop: rem(80),
            paddingBottom: rem(40),
        },
    },
    activeDiv: {
        width: rem(392),
        height: rem(142),
        borderRadius: '0 16px 16px 0',
        backgroundColor: colors.txtGray,
        borderLeft: '4px solid #1570EF',
        padding: '24px 32px 24px 32px',
        transition: 'all 0.5s ease',
        cursor: 'pointer',
    },
    hideDiv: {
        width: rem(392),
        height: rem(142),
        backgroundColor: colors.white,
        padding: '24px 24px 24px 0',
        cursor: 'pointer',
    },
    titleAndDesc: {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(16),
        '& h1': {
            fontSize: rem(24),
            fontWeight: '600',
            lineHeight: rem(32),
            color: colors.textGrayColor8
        },
        '& p': {
            fontSize: rem(16),
            fontWeight: '400',
            lineHeight: rem(32),
            color: colors.textGrayColor5
        },

    },
    rightDiv: {
        marginTop: rem(50),
        width: 'auto',
        maxWidth: rem(704),
        height: rem(582),
        borderRadius: rem(40),
        padding: '40px 32px 40px 32px',
        border: '4px solid #557EBE'
    },
    lineAndText: {
        display: 'flex',
        gap: rem(10),
        '& h3': {
            fontSize: rem(24),
            fontWeight: '400',
            lineHeight: rem(32),
            background: 'radial-gradient(50% 50% at 50% 59.37%, #090909 0%, #616161 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',

        }
    },
    line: {

    }

} as const;

export const useHomeAboutUsStyles = createUseStyles(styles);
