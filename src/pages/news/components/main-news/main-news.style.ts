import {createUseStyles} from 'react-jss';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../assets/styles/abstracts/sizes';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
const styles = {
    wrapper: {
        width: '100%',
        minHeight: rem(1996),
        backgroundColor: colors.white,
        borderRadius: rem(40),
        '& h1': {
            fontWeight: '700',
            fontSize: rem(40),
            lineHeight: rem(56),
            background: 'linear-gradient(90deg, #121926 9.99%, #697586 25.24%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',

}
    },
    card: {
        width: rem(344),
        height: rem(415),
        backgroundColor: colors.white,
        borderRadius: rem(28),
        display: 'flex',
        flexDirection: 'column',
        gap: rem(15),
        '& h4': {
            color: colors.textGrayColor5,
            fontSize: rem(16),
            fontWeight: 'bold',
            margin: 0,
            lineHeight: 1.4,
        },
        '& p': {
            color: colors.descriptionColor,
            fontSize: rem(14),
            fontWeight: 'normal',
            margin: 0,
            lineHeight: 1.5,
            flex: 1,
        },
        '& .date': {
            color: colors.textGrayColor8,
            fontSize: rem(12),
            marginTop: 'auto',
        },
        [breakpoint(breakpoints.tabletM)]: {
            width: rem(300),
        }
    },
    iconAndYear: {
        width: rem(240),
        height: rem(58),
        display: 'flex',
        gap: rem(15),
        marginLeft: 'auto',
    },
    iconDiv: {
        height: rem(56),
        width: rem(56),
        backgroundColor: colors.textGrayColor1,
        borderRadius: rem(12),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    yearDiv: {
        height: rem(58),
        width: rem(167),
        backgroundColor: colors.textGrayColor1,
        borderRadius: rem(12),

    },
    cardImage: {
        width: rem(364),
        height: rem(246),
        borderRadius: rem(21),
        objectFit: 'cover',
    },
    date: {
        marginTop: '7%',
        color: colors.mainGreen
    },
    pagination: {
        marginTop: rem(40),
        display: 'flex',
        justifyContent: 'center',
        marginBottom: rem(30),
        [breakpoint(breakpoints.tabletM)]: {
            width: rem(300),
            marginTop: rem(15),
            marginBottom: rem(15),
            marginLeft: rem(40),

        }
    }
};
export const useNewsStyles = createUseStyles(styles);