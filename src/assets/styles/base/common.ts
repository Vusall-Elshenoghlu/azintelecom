import fonts from '../abstracts/fonts';
import colors from '../abstracts/color';
import sizes, {breakpoints} from '../abstracts/sizes';
import {rem} from '../abstracts/functions';
import {breakpoint} from '../abstracts/mixins';
import background from '../../images/statics/about-missions-bacground.png';
const commonStyles = {
    '@global': {
        html: {
            fontSize: sizes.base,
        },
        body: {
            fontFamily: fonts.mainFont,
            fontWeight: 400,
            margin: 0,
            backgroundColor: colors.headerNavBg,
            width: '100%',
            minHeight: '100vh',
            padding:rem(15),
            [breakpoint(breakpoints.tabletM)]: {
                padding: rem(0),
            }
        },
        a: {textDecoration: 'none', '&:hover': {color: 'black',},},
        img: {maxWidth: '100%',},
        ul: {listStyleType: 'none', padding: 0, margin: 0,},
        '::-webkit-scrollbar': {width: 7, height: 7,},
        '::-webkit-scrollbar-track': {boxShadow: `inset 0 0 2px ${colors.main}`,},
        '::-webkit-scrollbar-thumb': {background: colors.main,},
    },
};

export default commonStyles;
