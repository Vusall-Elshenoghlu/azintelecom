import {createUseStyles} from 'react-jss';
import {rem} from '../../../assets/styles/abstracts/functions';

const styles = {
    activitiesText: {
        fontWeight: 'bold',
        fontSize: rem(40),
        lineHeight:rem(56),
        letterSpacing: '0%',
        verticalAlignment: 'Middle',
    },
};
export const useTitleOfSectionStyles = createUseStyles(styles);