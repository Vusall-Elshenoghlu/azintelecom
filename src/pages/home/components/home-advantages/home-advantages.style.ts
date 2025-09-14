import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import background from '../../../../assets/images/statics/home-advanteges-background.png';
import colors from '../../../../assets/styles/abstracts/color';
import {transition} from '../../../../assets/styles/abstracts/mixins';

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
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: rem(-15),
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

        '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '0%',
            height: rem(200),
            background: 'radial-gradient(215.08% 100% at 100% 0%, #000000 14%, #335FEE 100%)',

            transform: 'translate(-50%, -50%)',
            transition: transition('width', 0.6, 'ease'), // yalnız width animasiya olunur
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
        },
        '& h1': {
            fontWeight: '700',
            fontSize: rem(32),
            lineHeight: rem(40),
            letterSpacing: '-2%',
            position: 'relative',
            zIndex: 2,
            transition: transition('color', 0.3, 'ease'),
        },
        '& p': {
            color: colors.textGrayColor7,
            fontWeight: '400',
            fontSize: rem(18),
            lineHeight: rem(28),
            position: 'relative',
            zIndex: 2,
            transition: transition('color', 0.3, 'ease'),
        },

        '&:hover': {
            color: colors.white,

            // Pseudo-element hover zamanı genişlənir
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