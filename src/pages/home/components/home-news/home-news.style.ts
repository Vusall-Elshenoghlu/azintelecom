import {createUseStyles} from 'react-jss';
import bacground from 'assets/images/statics/home-news-bg.png';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';

const styles = {
    wrapper: {
        width: '100%',
        marginTop: rem(30),
        marginBottom: rem(15),
        height: rem(984),
        borderRadius: rem(48),
        backgroundImage: `url(${bacground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
        '& h1': {
            fontSize: rem(40),
            fontWeight: '700',
            lineHeight: rem(56),
            background: 'linear-gradient(90deg, #FFFFFF 0%, #697586 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        '& p': {
            fontSize: rem(18),
            fontWeight: '400',
            lineHeight: rem(28),
            background: 'radial-gradient(134.91% 134.91% at -34.91% 100%, #697586 0%, #FFFFFF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft: 'auto'
        },

    },
    titleImage: {},
    mainDiv: {
        width: '100%',
        height: rem(194),
        backgroundColor: colors.textGrayColor8,
        marginTop: rem(10),
        borderRadius: rem(24),
        padding: rem(24),
        '& h2': {
            marginTop: rem(15),
            fontSize: rem(20),
            fontWeight: '600',
            lineHeight: rem(32),
            color: colors.white,
        }
    },
    newsAndDate: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(10),
        '& h4': {
            fontSize: rem(15),
            fontWeight: '400',
            lineHeight: rem(20),
            color: colors.white,
        },
        '& h5': {
            fontSize: rem(15),
            fontWeight: '400',
            lineHeight: rem(20),
            color: colors.white,
            opacity: 0.6
        },

    },
    dot: {
        width: rem(6),
        height: rem(6),
        backgroundColor: colors.white,
        borderRadius: '100%',
    },
    card: {
        marginBottom: rem(15),
        width: '100%',
        height: rem(180),
        borderRadius: rem(24),
        backgroundColor: colors.textGrayColor8,
        display: 'flex',
    },
    mapImage: {
        borderRadius: '24px 0 0 24px'
    },
    rightDiv: {
        padding: rem(15),
        '& h3': {
            fontSize: rem(16),
            fontWeight: '600',
            lineHeight: rem(26),
            color: colors.white,
        }
    },
    smallNewsAndDate: {
        display: 'flex',
        alignItems: 'center',
        padding: rem(15),
        gap: rem(10),
        '& h4': {
            fontSize: rem(12),
            fontWeight: '400',
            lineHeight: rem(18),
            color: colors.white,
        },
        '& h5': {
            fontSize: rem(12),
            fontWeight: '400',
            lineHeight: rem(18),
            color: colors.white,
            opacity: 0.6
        },
    },
    smallDot: {
        width: rem(4),
        height: rem(4),
        backgroundColor: colors.white,
        borderRadius: '100%',
    }

};
export const useHomeNewsStyles = createUseStyles(styles);