import useLocalization from '../../../../assets/lang';
import {useHomeAdvantagesStyles} from './home-advantages.style';
import TitleOfSectionComponent from '../../../../core/shared/title-of-section/title-of-section.component';
import imageOne from '../../../../assets/images/statics/home-advantage-icon1.png';
import imageTwo from '../../../../assets/images/statics/home-advantages-icon2.png';
import imageThree from '../../../../assets/images/statics/home-advantage-icon3.png';
import imageFour from '../../../../assets/images/statics/home-advantages-icon4.png';

const HomeAdvantagesComponent = () => {
    const translate = useLocalization();
    const advantagesList = [
        {
            icon: imageOne,
            title: translate('home_advantages_experience'),
            description: translate('home_advantages_description2'),
        },
        {
            icon: imageTwo,
            title: translate('home_advantages_innovation'),
            description: translate('home_advantages_description2'),
        },
        {
            icon: imageThree,
            title: translate('home_advantages_biometric'),
            description: translate('home_advantages_description2'),
        },
        {
            icon: imageFour,
            title: translate('home_advantages_safety'),
            description: translate('home_advantages_description2'),
        },

    ];

    const classes = useHomeAdvantagesStyles();
    return (
        <div className={classes.wrapper}>
            <div className={'container pt-100'}>
                <TitleOfSectionComponent title={translate('home_advantages_title')} description={translate('home_advantages_description')} />
            </div>
            <div className={'container-fluid mt-50'}>
                <div className={`${classes.row}`}>
                    {
                        advantagesList.map((advantage, index) => (
                                <div className={classes.card}>
                                    <img src={advantage.icon} alt={advantage.description}/>
                                    <h1>{advantage.title}</h1>
                                    <p>{advantage.description}</p>
                                </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
export default HomeAdvantagesComponent;