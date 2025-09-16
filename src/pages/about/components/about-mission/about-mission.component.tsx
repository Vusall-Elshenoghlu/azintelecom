import useLocalization from '../../../../assets/lang';
import {useAboutMissionStyles} from './about-mission.style';
import missionImage from '../../../../assets/images/statics/about-mission.jpg';
import missionImage2 from '../../../../assets/images/statics/about-mission2.jpg';

const AboutMissionComponent = () => {

    const translate = useLocalization();
    const classes = useAboutMissionStyles();
    return (
        <div className={classes.wrapper}>
            <div className={'container'}>
                <div className={`row ${classes.row}`}>
                    <div className={'col-lg-6 col-md-6 col-sm-12 mt-50'}>
                        <h1>{translate('about_mission_title1')}</h1>
                        <p>{translate('about_mission_description1')}</p>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <img src={missionImage} alt={translate('about_mission_title1')}/>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <img src={missionImage2} alt={translate('about_mission_title1')}/>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12 mt-50'}>
                        <h1>{translate('about_mission_title2')}</h1>
                        <p>{translate('about_mission_description2')}</p>
                        <h2>{translate('about_mission_proud')}</h2>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AboutMissionComponent;