import {useHomeAboutUsStyles} from './home-our-activities.style';
import useLocalization from '../../../../assets/lang';
import {useState} from 'react';
import {SimaImza} from '../../../../assets/images/icons/sima-icons';
import TitleOfSectionComponent from '../../../../core/shared/title-of-section/title-of-section.component';

const HomeOurActivitiesComponent = () => {
    const translate = useLocalization();
    const activitiesList = [
        {
            title: translate('home_activities_citizen'),
            description: translate('home_activities_citizen_desc'),
        },
        {
            title: translate('home_activities_owner'),
            description: translate('home_activities_citizen_desc'),
        },
        {
            title: translate('home_activities_legal_person'),
            description: translate('home_activities_citizen_desc'),
        },
        {
            title: translate('home_activities_government'),
            description: translate('home_activities_citizen_desc'),
        },

    ];
    const classes = useHomeAboutUsStyles();
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className={classes.wrapper}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <TitleOfSectionComponent>
                            {translate('home_activities_title')}
                        </TitleOfSectionComponent>
                        <div className={'mt-100'}>
                            {
                                activitiesList.map((item, index) => (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        className={activeIndex === index ? classes.activeDiv : classes.hideDiv}
                                    >
                                        <div className={classes.titleAndDesc}>
                                            <h1>{item.title}</h1>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))}

                        </div>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12 mt-70'}>
                            <div className={classes.lineAndText}>
                                <div className={classes.line}>

                                </div>
                                <h3>{translate('home_activites_heading')}</h3>
                            </div>
                        <div className={classes.rightDiv}>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeOurActivitiesComponent;