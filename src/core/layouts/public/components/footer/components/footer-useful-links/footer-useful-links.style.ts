import {createUseStyles} from 'react-jss';
import {rem} from '../../../../../../../assets/styles/abstracts/functions';
import colors from '../../../../../../../assets/styles/abstracts/color';

const styles = {
    wrapper: {
        width: '100%',
        height: rem(544),
        borderRadius: rem(48),
        paddingTop: rem(100),
        '& h1': {
            fontWeight: '700',
            fontSize: rem(40),
            lineHeight: rem(56),
            background: 'linear-gradient(90deg, #FFFFFF 0%, #697586 25.24%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        }
    },
    arrows: {
        display: 'flex',
        gap: rem(10)
    },
    arrowContainer: {
        width: rem(48),
        height: rem(48),
        borderRadius: rem(12),
        padding: rem(12),
        backgroundColor: colors.textGrayColor8,
        cursor: 'pointer',
    },
    card: {
        width: rem(352),
        height: rem(184),
        marginTop: rem(70),
        borderRadius: rem(24),
        padding: rem(24),
        display: 'flex',
        flexDirection: 'column',
        gap: rem(20),
        backgroundColor: colors.textGrayColor9,
        '& h2': {
            fontWeight: '600',
            fontSize: rem(16),
            lineHeight: rem(22),
            color: colors.textGrayColor1,
        }
    },
    logoAndTitle: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(6),
    },
    logo: {
        width: rem(80),
        height: rem(80),
    },
    linkAndIcon: {
        width: '100%',
        height: rem(36),
        backgroundColor: colors.textGrayColor8,
        borderRadius: rem(8),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: rem(10),
        '& a': {
            color: colors.textGrayColor2,
            fontSize: rem(14)
        }
    }

};

export const useFooterUsefulLinksStyles = createUseStyles(styles);