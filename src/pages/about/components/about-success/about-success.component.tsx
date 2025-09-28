import useLocalization from '../../../../assets/lang';
import {useAboutSuccessStyles} from './about-success-style';
import TitleOfSectionComponent from '../../../../core/shared/title-of-section/title-of-section.component';
import Button from '../../../../core/shared/button/button.component';
import image from '../../../../assets/images/statics/about-success-hover-image.jpg';
import {ArrowRightUp, ArrowToRightAboutSuccess} from '../../../../assets/images/icons/arrows';

const datas = [
    {
        "title": "\"AzInTelecom\" beynəlxalq Cloud xidmətləri üzrə yeni sertifikat aldı",
        "date": "15 May 2024",
        "category": "İdarəetmə"
    },
    {
        "title": "\"AzInTelecom\" ISO 27001:2022 İnformasiya Təhlükəsizliyi Standartına uyğunluq sertifikatı əldə etdi",
        "date": "02 İyun 2023",
        "category": "İdarəetmə"
    },
    {
        "title": "Şirkət regionda ilk dəfə olaraq Data Mərkəzinin Uptime Institute Tier III sertifikatını aldı",
        "date": "20 Yanvar 2022",
        "category": "İdarəetmə"
    },
    {
        "title": "\"AzInTelecom\" Azərbaycanın Rəqəmsal Transformasiya layihələrində fəal iştirakına görə mükafatlandırıldı",
        "date": "10 Dekabr 2021",
        "category": "İdarəetmə"
    },
    {
        "title": "Biznes Davamlılığı üzrə ISO 22301:2019 sertifikatının qüvvəsi bir daha uzadıldı",
        "date": "04 Aprel 2023",
        "category": "İdarəetmə"
    },
    {
        "title": "\"AzInTelecom\" Veeam Software şirkətinin Qızıl Tərəfdaşı statusunu qazandı",
        "date": "08 Mart 2020",
        "category": "İdarəetmə"
    },
    {
        "title": "Data Mərkəzi ekoloji standartlara uyğunluq üzrə ilk dəfə sertifikat aldı",
        "date": "12 İyul 2021",
        "category": "İdarəetmə"
    },


];

const AboutSuccessComponent = () => {
    const translate = useLocalization();
    const classes = useAboutSuccessStyles();
    return (
        <div className={classes.wrapper}>
            <div className={'container mt-150'}>
                <TitleOfSectionComponent title={translate('about_success_title')}
                                         description={translate('about_success_decsription')} line dark/>

                <div className={'row mt-50'}>
                    <div className={classes.dataContainer}>
                        {
                            datas.map((data, index) => (
                                    <div key={index} className={classes.card}>
                                        <div className={'d-flex justify-between'}>
                                            <div className={classes.content}>
                                                <h2>{data.title}</h2>
                                                <div className={classes.buttons}>
                                                    <Button variant={'primary'} className={classes.button}><p>{data.date}</p></Button>
                                                    <Button variant={'primary'} className={classes.button}><p>{data.category}</p></Button>
                                                </div>
                                            </div>
                                            <div className={classes.imageAndIcon}>
                                                <img src={image} className={classes.imageHover} alt={translate('about_success_title')}/>
                                                <div className={classes.arrowDiv}>
                                                    <div className={classes.arrowRightIcon}><ArrowToRightAboutSuccess/></div>
                                                    <div className={classes.arrowRightUpIcon}><ArrowRightUp/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};
export default AboutSuccessComponent;