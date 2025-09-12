import useLocalization from '../../../../assets/lang';
import {useHeroSectionStyles} from './hero-section.style';

const HeroSectionComponent = () => {
    const translate = useLocalization();
    const classes = useHeroSectionStyles();
    return (
        <div className={classes.wrapper}>
            <div className='container mt-150'>
                <div className={`row ${classes.rows}`}>
                    <div className={'col-lg-8 col-md-6 col-sm-12'}>
                        <h1 className={classes.heroTitle}> {translate('home_hero_title_one')} <br/> <span>{translate('home_hero_title_two')}</span> {translate('home_hero_title_three')}</h1>
                    </div>
                    <div className={'col-lg-4 col-md-6 col-sm-12'}>
                        animation
                    </div>

                </div>
            </div>
        </div>
    );
};
export default HeroSectionComponent;