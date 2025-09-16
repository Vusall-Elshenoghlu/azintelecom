import {createUseStyles} from 'react-jss';
import {rem} from '../../../../../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../../../../assets/styles/abstracts/sizes';
import colors from '../../../../../../../assets/styles/abstracts/color';

const styles = {
    wrapper: {
        marginTop: rem(30),
        paddingTop: rem(55),
        width: '100%',
        minHeight: rem(716),
        height: 'auto',
        backgroundColor: 'transparent',
        borderRadius: rem(48),
    },
    title: {
        color: colors.white,
        fontWeight: '700',
        fontSize: rem(40),
        lineHeight: rem(56)
    }
};
export const useFooterProudStyles = createUseStyles(styles);