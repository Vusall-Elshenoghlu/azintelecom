import {useAboutStructureStyles} from './about-structure.style';
import useLocalization from '../../../../assets/lang';
import directorImg from '../../../../assets/images/statics/about-director-acintelecom.png';
import {useState} from 'react';

const AboutStructureComponent = () => {
    const classes = useAboutStructureStyles();
    const translate = useLocalization();
    const [activeIndex, setActiveIndex] = useState(0);

    const employersList = [
        {
            id: 1,
            name: translate('about_structure_team_employer1'),
            description: translate('about_structure_team_employer1_prof'),
        },
        {
            id: 2,
            name: translate('about_structure_team_employer2'),
            description: translate('about_structure_team_employer2_prof'),
        },
        {
            id: 3,
            name: translate('about_structure_team_employer3'),
            description: translate('about_structure_team_employer3_prof'),
        },
        {
            id: 4,
            name: translate('about_structure_team_employer4'),
            description: translate('about_structure_team_employer4_prof'),
        },
        {
            id: 5,
            name: translate('about_structure_team_employer4'),
            description: translate('about_structure_team_employer4_prof'),
        },
        {
            id: 6,
            name: translate('about_structure_team_employer4'),
            description: translate('about_structure_team_employer4_prof'),
        },

    ];
    return (
        <div className={classes.wrapper}>
            <div className={'container pt-100'}>
                <div className={'row'}>
                    <div className={'col-lg-7 col-md-6 col-sm-12'}>
                        <h1>{translate('about_structure_title')}</h1>
                        <div className={classes.lineAndText}>
                            <div className={classes.line}></div>
                            <h3>{translate('about_structure_description')}</h3>
                        </div>
                        <div className={`mt-50 mx-20 ${classes.employersContainer}`}>
                            {
                                employersList.map((employer) => (
                                    <div
                                        key={employer.id}
                                        onMouseEnter={() => setActiveIndex(employer.id)}
                                        onClick={() => setActiveIndex(employer.id)}
                                        className={activeIndex === employer.id ? classes.activeDiv : classes.mapDiv}
                                    >
                                        <h1>{employer.name}</h1>
                                        <p>{employer.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className={'col-lg-5 col-md-6 col-sm-12'}>
                        <img className={classes.directorImg} src={directorImg} alt={employersList[0].name}/>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default AboutStructureComponent;