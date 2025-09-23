import {useNewsHeroStyles} from './news-hero.style';
import useLocalization from '../../../../assets/lang';
import secondBg from '../../../../assets/images/statics/hero-section-bg-lines.png';
import {HomeMenuIcon, SmallLeftIcon} from '../../../../assets/images/icons/left-menu';
import image from '../../../../assets/images/statics/news-hero-image.png';
import Button from '../../../../core/shared/button/button.component';
import { ArrowToRight} from '../../../../assets/images/icons/arrows';
const NewsHeroComponent = () => {
    const classes = useNewsHeroStyles();
    const translate = useLocalization();
    return (
        <div className={classes.wrapper}>
            <img src={secondBg} className={classes.secondBg} alt={translate('news_main_title')}/>
            <div className={'container mt-150'}>
                <div className={classes.homeDiv}>
                    <HomeMenuIcon/>
                    <SmallLeftIcon/>
                    <span>{translate('footer_media')}</span>
                    <SmallLeftIcon/>
                    <h2>{translate('news_hero_title')}</h2>
                </div>

                <div className={'row'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12 mt-70'}>
                        <p className={classes.date}>{translate('news_hero_date')}</p>
                        <h1 className={classes.heading}>{translate('news_hero_heading')}</h1>
                        <h5 className={classes.tag}>{translate('news_hero_tag')}</h5>
                        <Button variant={'base'} className={classes.detailed} >
                            <p>{translate('news_hero_expand')}</p>
                            <ArrowToRight/>
                        </Button>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <img src={image} className={classes.image} alt={translate('news_hero_title')}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsHeroComponent;