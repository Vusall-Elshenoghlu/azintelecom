import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import background from '../../../../assets/images/statics/home-advanteges-background.png';
import {breakpoint, transition} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';

const styles = {
    wrapper: {
        marginTop: rem(20),
        width: '100%',
        minHeight: rem(808),
        height: 'auto',
        borderRadius: rem(48),
        backgroundColor: colors.white,
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        '& h1': {
            fontSize: rem(40),
            fontWeight: '700',
            background: 'linear-gradient(90deg, #121926 20.87%, #697586 52.17%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        }
    },
    lineAndText: {
        marginTop: rem(30),
        marginLeft: rem(50),
        display: 'flex',
        alignItems: 'center',
        gap: rem(30),
        '& h3': {
            fontSize: rem(24),
            fontWeight: '400',
            lineHeight: rem(32),
            background: 'radial-gradient(50% 50% at 50% 59.37%, #090909 0%, #616161 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            [breakpoint(breakpoints.tabletM)]: {
                fontSize: rem(14),
                marginTop: rem(30)
            },
        },
        [breakpoint(breakpoints.tabletM)]: {
            marginLeft: rem(20),
            marginTop: rem(-20),
            gap: rem(10),

        }
    },

    line: {
        height: rem(0),
        width: rem(130),
        border: `${rem(1)} solid ${colors.border}`,
        [breakpoint(breakpoints.tabletM)]: {
            width: rem(40),
            marginTop: rem(30)
        }
    },
    mapDiv: {
        width: '100%',
        height: rem(112),
        padding: rem(6),
        paddingTop: rem(24),
        borderBottom: '1px solid #E3E8EF',
        '& h1': {
            fontSize: rem(32),
            fontWeight: '600',
            lineHeight: rem(40),
            background: 'linear-gradient(90deg, #202939 40%, #697586 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        '& p': {
            fontSize: rem(15),
            fontWeight: '400',
            lineHeight: rem(20),
            color: colors.textGrayColor5
        },
    },
    activeDiv: {
        width: '100%',
        height: '100%',
        borderRadius: '0 16px 16px 0',
        borderLeft: '8px solid #0F62FE',
        padding: '24px 32px 24px 32px',
        transition: transition('all', 0.5, 'ease'),
        cursor: 'pointer',
        backgroundColor: colors.modernBlue1,
        zIndex: 10,
        position: 'relative',
        '& p': {
            fontSize: rem(15),
            fontWeight: '400',
            lineHeight: rem(20),
            color: colors.textGrayColor5
        },
        [breakpoint(breakpoints.tabletM)]: {
            width: '100%',
            height: 'auto',
            borderRadius: rem(16),
            border: '2px dotted #1570EF',
            borderLeft: '4px solid #1570EF',
            padding: rem(24),
            marginBottom: rem(16),
        },
    },
    employersContainer: {
        maxHeight: rem(410),
        overflowY: 'auto',
        paddingRight: '10px',

        scrollbarWidth: 'none',
        msOverflowStyle: 'none',

        '&::-webkit-scrollbar': {
            display: 'none'
        },

    },
    directorImg: {
        borderRadius: rem(24),
        marginTop: rem(100),
        [breakpoint(breakpoints.tabletM)]: {
            display: 'none',
        }
    }
};
export const useAboutStructureStyles = createUseStyles(styles);