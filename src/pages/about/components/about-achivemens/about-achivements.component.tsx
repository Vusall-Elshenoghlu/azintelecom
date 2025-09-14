import Spline from '@splinetool/react-spline';
import {useAboutAchivementStyles} from './about-achivements.style';
import useLocalization from '../../../../assets/lang';


const AboutAchivementsComponent = () => {
    const classes = useAboutAchivementStyles();
    const translate = useLocalization();
    return (
        <div className={classes.wrapper}>
            <div className='fixed inset-0 z-0'>
                <Spline className={classes.spline} scene='https://prod.spline.design/xEov8w9BUQbdNLU3/scene.splinecode'/>
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
                        {/*<div className={classes.ballonOne}>*/}

                        {/*</div>*/}
                        {/*<div className={classes.ballonTwo}>*/}

                        {/*</div>*/}
                        {/*<div className={classes.ballonThree}>*/}

                        {/*</div>*/}
                        {/*<div className={classes.ballonFour}>*/}

                        {/*</div>*/}

                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutAchivementsComponent;