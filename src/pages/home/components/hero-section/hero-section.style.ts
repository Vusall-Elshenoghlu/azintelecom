import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
// import colors from '../../../../assets/styles/abstracts/color';
// import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
// import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
import backgroundImage from '../../../../assets/images/statics/background.jpg';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';

const styles = {
    wrapper: {
        width: '100%',
        height: rem(982),
        paddingTop: rem(100),
        borderRadius: '0px 0px 40px 40px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        [breakpoint(breakpoints.tabletM)]: {
            height: rem(768),
        }
    },
    rows: {
        [breakpoint(breakpoints.tabletM)]: {
            display: 'flex',
            flexDirection: 'column-reverse',
        }
    },
    heroTitle: {
        color: 'white !important',
        background: 'radial-gradient(79.02% 175.6% at 0% 50%, #FFFFFF 30%, #4B5565 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: '400',
        fontSize: rem(56),
        lineHeight: rem(72),
        letterSpacing: '0%',
        '& span': {
            fontWeight: '800',
        },
        [breakpoint(breakpoints.tabletM)]: {
            marginTop: rem(250),
            fontSize: rem(24),
            lineHeight: rem(40),
        }
    }

};

export const useHeroSectionStyles = createUseStyles(styles);