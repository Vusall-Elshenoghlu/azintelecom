import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import background from '../../../../assets/images/statics/about-missions-bacground.png';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';

const styles = {
    wrapper: {
        width: '100%',
        minHeight: rem(952),
        height: 'auto',
        borderRadius: rem(48),
        marginTop: rem(20),
        backgroundColor: 'transparent',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        paddingTop: rem(100),
        '& h1': {
            fontWeight: '700',
            fontSize: rem(40),
            lineHeight: rem(56),
            marginLeft: rem(28),
            letterSpacing: '0%',
            background: 'linear-gradient(90deg, #FFFFFF 22.54%, #697586 56.36%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            [breakpoint(breakpoints.tabletM)]: {
                fontSize: rem(24),
                lineHeight: rem(32),
                marginLeft: rem(28),
                paddingBottom: rem(-100)
            }
        },
        '& h2': {
            fontWeight: '700',
            fontSize: rem(24),
            lineHeight: rem(32),
            marginLeft: rem(28),
            letterSpacing: '0%',
            color: colors.white,
            [breakpoint(breakpoints.tabletM)]: {
                fontSize: rem(16),
                lineHeight: rem(22),
                marginLeft: rem(28),
            }
        },

        '& p': {
            fontWeight: '400',
            fontSize: rem(24),
            lineHeight: rem(32),
            marginLeft: rem(28),
            marginTop: rem(10),
            marginBottom: rem(10),
            letterSpacing: '0%',
            color: colors.textGrayColor3,
            [breakpoint(breakpoints.tabletM)]: {
                fontSize: rem(14),
                lineHeight: rem(18),
                marginLeft: rem(28),
            }
        },
        '& img': {
            width: '100%',
            height: rem(360),
            borderRadius: rem(32),
            background: 'linear-gradient(203.3deg, #0D131D 34.63%, #7892B8 100%)',
            padding: rem(2),
            marginTop: rem(10),
            boxSizing: 'border-box',
            [breakpoint(breakpoints.tabletM)]: {
                width: '100%',
                height: rem(232),
            }

        },
    },
    row: {
        [breakpoint(breakpoints.tabletM)]: {
            '& .col-lg-6:nth-child(3)': { // tək nömrəli divlər (1, 3)
                order: 3,
            },

        }
    }
};

export const useAboutMissionStyles = createUseStyles(styles);