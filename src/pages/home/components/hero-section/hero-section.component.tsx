import useLocalization from '../../../../assets/lang';
import {useHeroSectionStyles} from './hero-section.style';
import Spline from '@splinetool/react-spline';
import {useEffect, useRef} from 'react';
const HeroSectionComponent = () => {
    const translate = useLocalization();
    const classes = useHeroSectionStyles();
    return (
        <div className={classes.wrapper}>
            <div className='container mt-150'>
                <div className={`row ${classes.rows}`}>
                    <div className={'col-lg-8 col-md-6 col-sm-12 order-2'}>
                        <h1 className={classes.heroTitle}> {translate('home_hero_title_one')} <br/> <span>{translate('home_hero_title_two')}</span> {translate('home_hero_title_three')}</h1>
                    </div>
                    <div className={'col-lg-4 col-md-6 col-sm-12 order-1'}>
                        <div className={classes.spline}>
                                <Spline
                                    scene='https://prod.spline.design/tjfbxRJab2n4sj3v/scene.splinecode'
                                />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default HeroSectionComponent;