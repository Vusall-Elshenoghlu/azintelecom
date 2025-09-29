import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperClass} from 'swiper';
import {A11y, Navigation} from 'swiper/modules';
import {useRef} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import {useFooterUsefulLinksStyles} from './footer-useful-links.style';
import useLocalization from '../../../../../../../assets/lang';
import rinnLogo from '../../../../../../../assets/images/statics/footer-rinn-logo.png';
import rinnLogo2 from '../../../../../../../assets/images/statics/footer-rinn-logo2.png';
import rinnLogo3 from '../../../../../../../assets/images/statics/footer-rinn-logo3.png';
import {ArrowLeft, ArrowRight} from '../../../../../../../assets/images/icons/arrows';
import {
    VisitLinkIcon
} from '../../../../../../../assets/images/icons/footer-icons';


const FooterUsefulLinksComponent = () => {
    const usefulLinks = [
        {
            id: 1,
            title: 'Azərbaycan Respublikasının Prezidenti İlham Əliyev',
            link: 'president.az',
            url: 'https://president.az',
            logo: rinnLogo,
        },
        {
            id: 2,
            title: 'Heydər Əliyev Fondu',
            link: 'heydar-aliyev-foundation.org',
            url: 'https://heydar-aliyev-foundation.org',
            logo: rinnLogo2,
        },
        {
            id: 3,
            title: 'Virtual Qarabağ İnformasiya-Kommunikasiya Texnologiyaları Mərkəzi',
            link: 'virtualqarabag.az',
            url: 'https://virtualqarabag.az',
            logo: rinnLogo3
        },
        {
            id: 4,
            title: 'Əlavə nümunə link',
            link: 'example.az',
            url: 'https://example.az',
            logo: rinnLogo2,
        },
    ];
    const classes = useFooterUsefulLinksStyles();
    const translate = useLocalization();
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);
    return (
        <div className={classes.wrapper}>
            <div className={'container'}>
                <div className={'d-flex justify-between'}>
                    <h1>{translate('footer_useful_title')}</h1>
                    <div className={classes.arrows}>
                        <div className={classes.arrowContainer}>
                            <div ref={prevRef}><ArrowLeft/></div>
                        </div>
                        <div className={classes.arrowContainer}>
                            <div ref={nextRef}><ArrowRight/></div>
                        </div>


                    </div>
                </div>
                <Swiper
                    modules={[A11y, Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={usefulLinks.length > 3}
                    centeredSlides={true}
                    onSwiper={(swiper: SwiperClass) => {
                        setTimeout(() => {
                            if (swiper.params.navigation) {
                                // @ts-ignore
                                swiper.params.navigation.prevEl = prevRef.current;
                                // @ts-ignore
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.destroy();
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }
                        });
                    }}
                    breakpoints={{
                        0: {slidesPerView: 1.1, spaceBetween: 15},
                        768: {slidesPerView: 2, spaceBetween: 20},
                        1200: {slidesPerView: 3, spaceBetween: 30},
                    }}
                >
                    {usefulLinks.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={classes.card}>
                                <div className={classes.logoAndTitle}>

                                    <img src={item.logo} className={classes.logoImage} alt={item.title}/>
                                    <h2>{item.title}</h2>
                                </div>

                                <div className={classes.linkAndIcon}>
                                    <a href={item.url} target='_blank' rel='noreferrer'>
                                        {item.link}
                                    </a>
                                    <VisitLinkIcon/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
export default FooterUsefulLinksComponent;