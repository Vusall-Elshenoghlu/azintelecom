import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import {transition} from '../../../../assets/styles/abstracts/mixins';
import background from '../../../../assets/images/statics/footer-proud-bg.png';
const styles = {
    wrapper: {
        width: '100%',
        height: rem(1214),
        border: '1px solid #36415266',
    },
    dataContainer: {
        maxHeight: rem(810),
        marginTop: rem(40),
        width: '100%',
        overflowY: 'auto',
        paddingRight: '10px',

        scrollbarWidth: 'none',
        msOverflowStyle: 'none',

        '&::-webkit-scrollbar': {
            display: 'none'
        },
    },
    card: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: rem(202),
        backgroundColor: 'transparent',
        borderBottom: '1px solid #364152',
        transition: transition('all', 0.3, 'ease-out'),
        '&:hover': {
            paddingLeft: rem(20),
            paddingRight: rem(20),
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                opacity: 0.08,
                borderRadius: rem(48),
                zIndex: -1,
            },
        },
        '&:hover $imageHover': {
            opacity: 1,
            transform: 'scale(1)',
            marginTop: rem(-30),
            zIndex: 999

        },
        '&:hover $arrowRightIcon': {
            display: 'none',
        },
        '&:hover $arrowRightUpIcon': {
            display: 'block',
        },
        '&:hover $arrowDiv': {
            backgroundColor: `${colors.white} !important`,
            opacity: 1,
        },



    },
    content: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: rem(20),
        paddingBottom: rem(16),
        paddingTop: rem(26),
        '& h2': {
            fontWeight: '600',
            fontSize: rem(21),
            lineHeight: rem(32),
            color: colors.white,
        }
    },
    buttons: {
        display: 'flex',
        gap: rem(10),
    },
    button: {
        height: rem(25),
        display: 'flex',
        gap: rem(10),
        backgroundColor: colors.textGrayColor8,
        color: colors.white,
        '& p': {
            color: colors.textGrayColor2,
            fontWeight: '400',
            fontSize: rem(12),
            lineHeight: rem(18)
        }
    },
    imageAndIcon: {
        display: 'flex',
        gap: rem(55),
    },

    imageHover: {
        width: rem(320),
        height: rem(200),
        opacity: 0,
        transform: 'scale(0.8)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        display: 'block',
    },
    arrowDiv: {
        width: rem(56),
        height: rem(56),
        borderRadius: rem(100),
        backgroundColor: colors.textGrayColor2,
        opacity: 0.4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },
    arrowRightUpIcon: {
        display: 'none',
    },
    arrowRightIcon: {
        display: 'block',
    },


};
export const useAboutSuccessStyles = createUseStyles(styles);