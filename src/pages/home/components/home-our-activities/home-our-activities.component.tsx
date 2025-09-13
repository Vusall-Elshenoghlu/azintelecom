import {useHomeAboutUsStyles} from './home-our-activities.style';
import useLocalization from '../../../../assets/lang';
import {useState} from 'react';
import TitleOfSectionComponent from '../../../../core/shared/title-of-section/title-of-section.component';
import {IActivitiesList, IRightContentList} from './home-our-activities';
import {SimaImza, SimaToken} from '../../../../assets/images/icons/sima-icons';
import shadowOne from '../../../../assets/images/statics/home-activities-shadow-one.png';
import shadowTwo from '../../../../assets/images/statics/home-activities-shadow-two.png';
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

    const rightContentList = [
        {
            image: <SimaImza/>,
            description: translate('home_activities_description'),
        },
        {
            image: <SimaToken/>,
            description: translate('home_activities_description'),
        },

    ];
    const classes = useHomeAboutUsStyles();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={classes.wrapper}>
            <div className={'container'}>
                <div className={'row'}>
                   <div className={'col-lg-5 col-md-6 col-sm-12'}>
                       <TitleOfSectionComponent>
                           {translate('home_activities_title')}
                       </TitleOfSectionComponent>
                   </div>
                    <div className={'col-lg-7 col-md-6 col-sm-12 mt-30'}>
                        <div className={classes.lineAndText}>
                            <div className={classes.line}></div>
                            <h3>{translate('home_activites_heading')}</h3>
                        </div>
                   </div>

                </div>
                <div className={'row'}>
                    <div className={'col-lg-5 col-md-6 col-sm-12'}>
                        <div className={classes.leftDiv}>
                            {activitiesList.map((item: IActivitiesList, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onClick={() => setActiveIndex(index)}
                                    className={activeIndex === index ? classes.activeDiv : classes.hideDiv}
                                >
                                    <div className={classes.titleAndDesc}>
                                        <div className={classes.titleWithIcon}>
                                            <h1>{item.title}</h1>
                                            <div className={classes.arrowIcon}></div>
                                        </div>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={'col-lg-7 col-md-6 col-sm-12 mt-100'}>
                        <div className={classes.rightDiv}>
                            <img className={classes.imageOne} src={shadowOne}/>
                            <img className={classes.imageTwo} src={shadowTwo}/>

                            {rightContentList.map((item: IRightContentList, index) => (
                                <div key={index} className={classes.rightContent}>
                                    <div>
                                        {item.image}
                                    </div>
                                    <h3 className={'mt-20'}>{item.description}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeOurActivitiesComponent;