import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import background from '../../../../assets/images/statics/background.jpg';
import colors from '../../../../assets/styles/abstracts/color';

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
        gap: rem(20),
        justifyContent: 'center',
        alignItems: 'center',
        '& h1': {
            fontWeight: '700',
            fontSize: rem(48),
            lineHeight: rem(64),
            background: 'linear-gradient(90deg, #FFFFFF 40%, #697586 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        '& p': {
            fontWeight: '400',
            fontSize: rem(16),
            lineHeight: rem(24),
            background: 'linear-gradient(90deg, #FFFFFF 40%, #697586 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: colors.white,
            opacity: '50%'
        },

    },
    homeDiv: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(15),
        color: colors.textGrayColor4,
        '& h2': {
            color: colors.modernBlue5,
            fontWeight: '700',
            fontSize: rem(14),
            lineHeight: rem(20),
        }
    }
};
export const useAboutMainStyles = createUseStyles(styles);