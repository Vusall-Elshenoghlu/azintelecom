import {useAboutPriorietsStyles} from './about-prioriets.style';
import useLocalization from '../../../../assets/lang';
import TitleOfSectionComponent from '../../../../core/shared/title-of-section/title-of-section.component';
import image from '../../../../assets/images/statics/abou-prioriets-image.jpg';
import {useState} from 'react';
const AboutPriorietsComponent = () => {
    const classes = useAboutPriorietsStyles();
    const translate = useLocalization();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const slides = [
        {
            number: translate('about_prioriets_number'),
            fact: translate('about_prioriets_fact'),
            description: translate('about_prioriets_fact_desc')
        },
        {
            number: '02',
            fact: translate('about_prioriets_fact'),
            description: translate('about_prioriets_fact_desc')
        },

    ];
    const handleDotClick = (index: any) => {
        if (index !== currentSlide && !isAnimating) {
            setIsAnimating(true);

            setTimeout(() => {
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 50);
            }, 200);
        }
    };
    return (
        <div className={classes.wrapper}>
            <div className={'container'}>
                <TitleOfSectionComponent line title={translate('about_prioriets_title')}
                                         description={translate('about_prioriets_description')}/>

                <div className={`row ${classes.row}`}>
                    <div className={'col-lg-4 col-md-6 col-sm-12'}>
                        <div className={classes.leftDiv}>
                            <div className={`${classes.leftDivContent} ${isAnimating ? classes.fadeOut : classes.fadeIn}`}>
                                <h1>{slides[currentSlide].number}</h1>
                                <h2>{slides[currentSlide].fact}</h2>
                                <p>{slides[currentSlide].description}</p>
                            </div>
                            <div className={classes.paginationDiv}>
                                {slides.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`${classes.paginationDot} ${
                                            currentSlide === index ? classes.activeDot : ''
                                        }`}
                                        onClick={() => handleDotClick(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={'col-lg-4 col-md-6 col-sm-12'}>
                        <div className={classes.imageDiv}>
                            <img src={image} className={classes.image} alt={translate('about_prioriets_title')}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default AboutPriorietsComponent;