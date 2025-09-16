import Spline from '@splinetool/react-spline';
import {useAboutAchivementStyles} from './about-achivements.style';
import useLocalization from '../../../../assets/lang';

const AboutAchivementsComponent = () => {
    const classes = useAboutAchivementStyles();
    const translate = useLocalization();
    const ballonList = [
        {
            id: 1,
            title: translate('about_achievements_sponsor'),
            count: translate('about_achievements_sponsor_count')
        },
        {
            id: 2,
            title: translate('about_achievements_area'),
            count: translate('about_achievements_area_count')
        },
        {
            id: 3,
            title: translate('about_achievements_specialist'),
            count: translate('about_achievements_specialist_count')
        },
        {
            id: 4,
            title: translate('about_achievements_sertificates'),
            count: translate('about_achievements_sertificates_count')
        },

    ];
    return (
        <div className={classes.wrapper}>
            <div className='fixed inset-0 z-0'>
                <Spline className={classes.spline}
                        scene='https://prod.spline.design/xEov8w9BUQbdNLU3/scene.splinecode'/>
            </div>
            <div className={classes.mainDiv}>
                <div className={'container'}>
                    <div className={'row mt-100'}>
                        <div className={'col-lg-5 col-md-6 col-sm-12'}>
                            <h1 className={classes.activitiesText}>{translate('about_achievements_title')}</h1>
                        </div>
                        <div className={'col-lg-7 col-md-6 col-sm-12'}>
                            <div className={classes.lineAndText}>
                                <div className={classes.line}></div>
                                <h3>{translate('about_achievements_description')}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={classes.ballons}>
                        {
                            ballonList.map((ballon, index) => (
                                <div className={`${classes.ballon} ${classes['ballon' + ballon.id]}`} key={ballon.id}>
                                    <h1>{ballon.count}</h1>
                                    <p>{ballon.title}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutAchivementsComponent;