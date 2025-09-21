import useLocalization from '../../../../assets/lang';
import {useHomeNewsStyles} from './home-news.style';

const HomeNewsComponent = () => {
    const translate = useLocalization();
    const classes = useHomeNewsStyles();
    return (
        <div className={classes.wrapper}>

        </div>
    );
};
export default HomeNewsComponent;