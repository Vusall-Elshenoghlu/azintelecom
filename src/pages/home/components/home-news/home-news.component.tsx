import useLocalization from '../../../../assets/lang';
import {useHomeNewsStyles} from './home-news.style';
import image1 from '../../../../assets/images/statics/home-news-image1.png';
import image2 from '../../../../assets/images/statics/home-news-image2.png';
import image3 from '../../../../assets/images/statics/home-news-image3.png';
import image4 from '../../../../assets/images/statics/home-news-image4.png';
const HomeNewsComponent = () => {
    const translate = useLocalization();
    const newsList = [
        {
            id: 1,
            image:  image2,
            title: translate('home_news_title'),
            date: translate('home_news_date'),
            description: translate('home_news_all_description')
        },
        {
            id: 2,
            image:  image3,
            title: translate('home_news_title'),
            date: translate('home_news_date'),
            description: translate('home_news_all_description')
        },
        {
            id: 3,
            image:  image4,
            title: translate('home_news_title'),
            date: translate('home_news_date'),
            description: translate('home_news_all_description')
        },

    ];
    const classes = useHomeNewsStyles();
    return (
        <div className={classes.wrapper}>
            <div className={'container pt-100'}>
                <div className={'row d-flex'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <h1>{translate('home_news_title')}</h1>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end'}>
                        <p>{translate('home_news_all_news')}</p>
                    </div>
                </div>
                <div className={'row mt-50'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <img className={classes.titleImage} src={image1} alt={translate('home_news_title')} />
                        <div className={classes.mainDiv}>
                            <div className={classes.newsAndDate}>
                                <h4>{translate('home_news_title')}</h4>
                                <div className={classes.dot}></div>
                                <h5>{translate('home_news_date')}</h5>
                            </div>
                            <h2>{translate('home_news_main_desc')}</h2>
                        </div>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        {
                            newsList.map((item, index) => (
                                <div className={classes.card} key={index}>
                                    <img className={classes.mapImage} src={item.image} alt={item.title}/>
                                    <div className={classes.rightDiv}>
                                        <div className={classes.smallNewsAndDate}>
                                            <h4>{translate('home_news_title')}</h4>
                                            <div className={classes.smallDot}></div>
                                            <h5>{translate('home_news_date')}</h5>
                                        </div>
                                        <h3>{item.description}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};
export default HomeNewsComponent;