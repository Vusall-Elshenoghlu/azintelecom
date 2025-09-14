import useLocalization from '../../../../assets/lang';
import {useAboutAzintelecomStyles} from './about-azintelecom.style';
import TitleOfSectionComponent from '../../../../core/shared/title-of-section/title-of-section.component';
import imageSrc from '../../../../assets/images/statics/about-azintelecom.png';
const AboutAzintelecomComponent = () => {
    const translate= useLocalization();
    const classes = useAboutAzintelecomStyles();
    return (
        <div className={classes.wrapper}>
            <div className={'container'}>
                <TitleOfSectionComponent line title={translate('about_azintelecom_title')} description={translate('about_azintelecom_description')} />
                <div className={'row mt-50'}>
                    <div className={'col-lg-5.5 col-md-6 col-sm-12'}>
                        <img className={classes.image} src={imageSrc} alt={imageSrc}/>
                    </div>
                    <div className={'col-lg-6.5 col-md-6 col-sm-12'}>
                        <p>{translate('about_azintelecom_paragraph')}</p>
                    </div>
                
                </div>
            </div>
        </div>
    );
};
export default AboutAzintelecomComponent;