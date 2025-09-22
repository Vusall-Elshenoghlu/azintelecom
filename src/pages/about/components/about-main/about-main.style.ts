import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import background from '../../../../assets/images/statics/background.jpg';
import colors from '../../../../assets/styles/abstracts/color';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
const styles = {
    wrapper: {
        width: '100%',
        height: rem(520),
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0px 0px 32px 32px',
        marginBottom: rem(20),
        padding: rem(20),
        position: 'relative',
        [breakpoint(breakpoints.tabletM)]: {
            height: rem(400),
            padding: rem(20),
        },
    },

    homeDiv: {
        position: 'absolute',
        top: '30%',
        left: '40%',
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

    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        maxWidth: rem(800),
        gap: rem(16),
        [breakpoint(breakpoints.tabletM)]: {
            maxWidth: '90%',
            gap: rem(12),
        },

        '& h1': {
            fontWeight: '700',
            fontSize: rem(48),
            lineHeight: rem(64),
            background: 'linear-gradient(90deg, #FFFFFF 40%, #697586 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: 0,
            [breakpoint(breakpoints.tabletM)]: {
                fontWeight: '600',
                fontSize: rem(28),
                lineHeight: rem(36),
            },
            [breakpoint(breakpoints.mobileL)]: {
                fontSize: rem(24),
                lineHeight: rem(32),
            },
        },

        '& p': {
            fontWeight: '400',
            fontSize: rem(16),
            lineHeight: rem(24),
            background: 'linear-gradient(90deg, #FFFFFF 60%, #697586 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: 0,
            maxWidth: rem(600),
            [breakpoint(breakpoints.tabletM)]: {
                fontSize: rem(14),
                lineHeight: rem(20),
                maxWidth: '100%',
            },
        },
    }
};
export const useAboutMainStyles = createUseStyles(styles);