import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import background from '../../../../assets/images/statics/home-advanteges-background.png';
import colors from '../../../../assets/styles/abstracts/color';
import {breakpoint, transition} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';

const styles = {
    wrapper: {
        marginTop: rem(20),
        width: '100%',
        height: rem(982),
        borderRadius: rem(48),
        backgroundColor: colors.white,
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        [breakpoint(breakpoints.tabletM)]:{
            height: 'auto',
            paddingBottom: rem(50),
            width: '100%'
        }
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: rem(-15),
        '@media (max-width: 768px)': {
            flexWrap: 'nowrap',
            overflowX: 'scroll',
            marginLeft: 0,
            paddingLeft: rem(15),
            paddingRight: rem(15),
            gap: rem(15),

            '&::-webkit-scrollbar': {
                display: 'none'
            },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none'
        }
    },
    card: {
        width: '25%',
        height: rem(600),
        border: '1px solid #E3E8EF',
        backgroundColor: colors.white,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: rem(25),
        paddingLeft: rem(30),
        overflow: 'hidden',
        position: 'relative',
        transition: transition('all', 0.5, 'ease'),

        // Mobil üçün
        '@media (max-width: 768px)': {
            minWidth: rem(280), // Minimum genişlik
            width: rem(280),    // Sabit genişlik
            flexShrink: 0,      // Kiçilməməsi üçün
            height: rem(400),   // Daha kiçik hündürlük
            paddingLeft: rem(20),
            gap: rem(15)
        },

        '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '0%',
            height: rem(200),
            background: 'radial-gradient(215.08% 100% at 100% 0%, #000000 14%, #335FEE 100%)',
            transform: 'translate(-50%, -50%)',
            transition: transition('width', 0.6, 'ease'),
            borderRadius: '10%',
            zIndex: 1,
        },

        '&:hover::before': {
            width: '150%',
        },
        '& > *': {
            position: 'relative',
            zIndex: 2,
            transition: transition('color', 0.3, 'ease'),
        },

        '& img': {
            width: rem(80),
            height: rem(80),
            transition: transition('all', 0.5, 'ease'),
            position: 'relative',
            zIndex: 2,

            '@media (max-width: 768px)': {
                width: rem(60),
                height: rem(60)
            }
        },
        '& h1': {
            fontWeight: '700',
            fontSize: rem(32),
            lineHeight: rem(40),
            letterSpacing: '-2%',
            position: 'relative',
            zIndex: 2,
            transition: transition('color', 0.3, 'ease'),

            '@media (max-width: 768px)': {
                fontSize: rem(24),
                lineHeight: rem(30)
            }
        },
        '& p': {
            color: colors.textGrayColor7,
            fontWeight: '400',
            fontSize: rem(18),
            lineHeight: rem(28),
            position: 'relative',
            zIndex: 2,
            transition: transition('color', 0.3, 'ease'),

            '@media (max-width: 768px)': {
                fontSize: rem(14),
                lineHeight: rem(22)
            }
        },

        '&:hover': {
            color: colors.white,

            '&::before': {
                width: '150%',
                height: '150%',
            },

            '& img': {
                transform: 'scale(1.3)',
            },
            '& h1': {
                color: colors.white,
            },
            '& p': {
                color: colors.white,
            }
        },
    }
};

export const useHomeAdvantagesStyles = createUseStyles(styles);