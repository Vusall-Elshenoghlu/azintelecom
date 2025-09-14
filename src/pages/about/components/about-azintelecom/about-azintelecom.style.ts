import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import background from '../../../../assets/images/statics/about-background.png';
import colors from '../../../../assets/styles/abstracts/color';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';

const styles = {
    wrapper: {
        width: '100%',
        minHeight: rem(682),
        height: 'auto',
        borderRadius: rem(48),
        paddingTop: rem(100),
        backgroundColor: colors.white,
        background: 'radial-gradient(100% 100% at 50% 0%, #D0E2FF 0%, #FFFFFF 80%)',
        backgroundSize: 'contain',
        backgroundPosition: 'center, center',
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundBlendMode: 'high',
        backgroundImage: `url(${background})`,
        [breakpoint(breakpoints.tabletM)]: {
            paddingTop: rem(30),
            paddingBottom: rem(18),
        },
        '& p': {
            fontWeight: '500',
            fontSize: rem(18),
            lineHeight: rem(25),
            background: 'radial-gradient(68.46% 68.46% at 50% 59.38%, #090909 0%, #55617A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            [breakpoint(breakpoints.tabletM)]: {
                fontSize: rem(16),
            },

}
    },
    image: {
        width: rem(500),
        height: rem(350),
        borderRadius: rem(24),
    }
};
export const useAboutAzintelecomStyles = createUseStyles(styles);