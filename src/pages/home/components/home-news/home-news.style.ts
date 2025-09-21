import {createUseStyles} from 'react-jss';
import bacground from 'assets/images/statics/home-news-bg.png';
import {rem} from '../../../../assets/styles/abstracts/functions';
const styles = {
    wrapper: {
        width: '100%',
        marginTop: rem(30),
        marginBottom: rem(15),
        margin: rem(-15),
        height: rem(984),
        backgroundImage: `url(${bacground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
    }


};
export const useHomeNewsStyles = createUseStyles(styles);