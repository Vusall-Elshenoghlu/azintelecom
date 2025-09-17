import {rem} from 'assets/styles/abstracts/functions';
import {createUseStyles} from 'react-jss';
import background from 'assets/images/statics/footer-bg-effect.png';
const styles = {
    container: {
        height: 'auto',
        width: '100%',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: rem(-15),
},
};

export const useFooterStyles = createUseStyles(styles);
