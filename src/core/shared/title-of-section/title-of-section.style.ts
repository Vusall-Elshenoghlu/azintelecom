import {createUseStyles} from 'react-jss';
import {rem} from '../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../assets/styles/abstracts/sizes';

const styles = {
    activitiesText: {
        fontWeight: '700',
        fontSize: rem(35),
        lineHeight:rem(56),
        letterSpacing: '0%',
        verticalAlignment: 'Middle',
        background: 'linear-gradient(90deg, #121926 20.87%, #697586 52.17%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        [breakpoint(breakpoints.tabletM)]: {
            fontWeight: '600',
            fontSize: rem(24),
            lineHeight:rem(32),
            letterSpacing: '0%',
            verticalAlignment: 'Middle',
            background: 'linear-gradient(90deg, #121212 0%, #444444 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        }
    },
};
export const useTitleOfSectionStyles = createUseStyles(styles);