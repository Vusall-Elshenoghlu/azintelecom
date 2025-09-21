import {createUseStyles} from 'react-jss';
import background from '../../../../assets/images/statics/background.jpg';
import {rem} from '../../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
import colors from '../../../../assets/styles/abstracts/color';
const styles = {
    wrapper: {
        minHeight: rem(584),
        height: 'auto',
        marginBottom: rem(30),
        borderRadius: rem(48),
        width: '100%',
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
    },
    secondBg: {
        position: 'absolute',
        top: -120,
    },
    homeDiv: {

        display: 'flex',
        alignItems: 'center',
        gap: rem(20),
        color: colors.textGrayColor4,
        fontSize: rem(14),
        [breakpoint(breakpoints.tabletM)]: {
            top: rem(20),
            left: rem(20),
            gap: rem(20),
            fontSize: rem(12),
            marginLeft: rem(10),
        },
        '& h2': {
            color: colors.modernBlue5,
            fontWeight: '700',
            fontSize: rem(14),
            lineHeight: rem(20),
            margin: 0,
            [breakpoint(breakpoints.tabletM)]: {
                fontSize: rem(12),
                lineHeight: rem(16),
            },
        }
    },
    date: {
        fontWeight: '400',
        fontSize: rem(14),
        lineHeight: rem(18),
        letterSpacing: '0%',
        color: colors.white
    },
    heading: {
        marginTop: rem(16),
        fontWeight: '600',
        fontSize: rem(32),
        lineHeight: rem(40),
        color: colors.white,
    },
    tag: {
        marginTop: rem(16),
        fontWeight: '400',
        fontSize: rem(16),
        lineHeight: rem(28),
        color: colors.white,
    },
    detailed: {
        width: rem(151),
        height: rem(56),
        borderRadius: rem(48),
        color: colors.white,
        border: 'none',
        cursor: 'pointer',
        marginTop: rem(10),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(5),
        '& p': {
            fontSize: rem(15),
            fontWeight: '500',
            lineHeight: rem(20),
        }
    },
    image: {
        width: rem(496),
        height: rem(360),
        borderRadius: rem(24),
        marginLeft: 'auto',
    }
};

export const useNewsHeroStyles = createUseStyles(styles);