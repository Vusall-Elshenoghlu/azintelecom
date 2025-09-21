import {useAboutMainStyles} from './about-main.style';
import {HomeMenuIcon, SmallLeftIcon} from '../../../../assets/images/icons/left-menu';
import useLocalization from '../../../../assets/lang';

const AboutMainComponent = () => {
    const classes = useAboutMainStyles();
    const translate = useLocalization();

    return (
        <div className={classes.wrapper}>
            <div className={classes.homeDiv}>
                <HomeMenuIcon/>
                <SmallLeftIcon/>
                <span>{translate('footer_about')}</span>
                <SmallLeftIcon/>
                <h2>{translate('about_main_title')}</h2>
            </div>

            <div className={classes.contentWrapper}>
                <h1>{translate('about_main_title')}</h1>
                <p>{translate('about_main_description')}</p>
            </div>
        </div>
    );
};

export default AboutMainComponent;


