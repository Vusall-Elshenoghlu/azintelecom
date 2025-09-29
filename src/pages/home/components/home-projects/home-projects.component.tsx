import {useHomeProjectsStyles} from './home-projects.style';
import useLocalization from '../../../../assets/lang';
import TitleOfSectionComponent from '../../../../core/shared/title-of-section/title-of-section.component';
import imageSrc from '../../../../assets/images/statics/home-projects-img.png';
import {useRef, useState} from 'react';
import {A11y, Navigation} from 'swiper/modules';
import {Swiper as SwiperClass} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Button from '../../../../core/shared/button/button.component';
import {
    ArrowLeft,
    ArrowSmallLeft,
    ArrowSmallRight,
    ArrowToLefts,
    ArrowToRights
} from '../../../../assets/images/icons/arrows';

const projectsData = [
    {
        id: 1,
        title: `"AzInTelecom MMC" jurnalistlər üçün təlim keçirdi`,
        description: 'Lorem ipsum dolor sit amet consectetur. Massa at varius dolor in dui bibendum turpis.',
        date: '04 Aprel 2023',
        category: 'Təhsil layihələri'
    },
    {
        id: 2,
        title: 'AzInTelecom-un nümayəndələri GITEX Global 2023 sərgisində',
        description: 'Lorem ipsum dolor sit amet consectetur. Massa at varius dolor in dui bibendum turpis.',
        date: '04 Aprel 2023',
        category: 'Sərgi iştirakı'
    },
    {
        id: 3,
        title: 'AzInTelecom-un Hökümət binası layihəsi beynəlxalq müsabiqədə çempion olub',
        description: 'Lorem ipsum dolor sit amet consectetur. Massa at varius dolor in dui bibendum turpis.',
        date: '04 Aprel 2023',
        category: 'Nailiyyətlər'
    },
    {
        id: 4,
        title: 'Yeni texnologiyalar və innovasiyalar',
        description: 'Lorem ipsum dolor sit amet consectetur. Massa at varius dolor in dui bibendum turpis.',
        date: '04 Aprel 2023',
        category: 'İnnovasiyalar'
    },
    {
        id: 5,
        title: 'Beynəlxalq əməkdaşlıq layihələri',
        description: 'Lorem ipsum dolor sit amet consectetur. Massa at varius dolor in dui bibendum turpis.',
        date: '04 Aprel 2023',
        category: 'Əməkdaşlıq'
    }
];

const HomeProjectsComponent = () => {
    const classes = useHomeProjectsStyles();
    const translate = useLocalization();
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const slidesPerView = 3;
    const maxSlide = Math.max(0, projectsData.length - slidesPerView);

    const nextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const prevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    return (
        <div className={classes.wrapper}>
            <div className={'container'}>
                <TitleOfSectionComponent title={translate('home_projects_title')}
                                         description={translate('home_projects_description')} underline/>

                <div className='row mt-50'>
                    <div className='col-lg-6 col-md-6 col-sm-12'>
                        <div className={classes.leftImg}>
                            <img src={imageSrc} alt={translate('home_projects_title')}/>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 pt-100'>
                        <h1 className={classes.loremTitle}>{translate('home_projects_description2')}</h1>
                    </div>
                </div>

                <div className={classes.cards}>
                    <div className={classes.navigationContainer}>
                        <div className={classes.pagination}>
                            <span className={classes.paginationCurrent}>01</span>
                            <span className={classes.paginationDivider}>/</span>
                            <span className={classes.paginationTotal}>02</span>
                        </div>

                    </div>

                    <Swiper
                        modules={[A11y, Navigation]}
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={projectsData.length > 3}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        breakpoints={{
                            0: {slidesPerView: 1, spaceBetween: 15},
                            768: {slidesPerView: 2, spaceBetween: 20},
                            1200: {slidesPerView: 3, spaceBetween: 30},
                        }}
                    >
                        {projectsData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className={classes.card}>
                                    <h1>{item.title}</h1>
                                    <div className={classes.buttons}>
                                        <Button variant={'primary'}>
                                            {item.date}
                                        </Button>
                                        <Button variant={'primary'}>
                                            {item.category}
                                        </Button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={classes.arrowContainer}>
                        <div
                            ref={prevRef}
                            className={classes.arrow}
                            onClick={prevSlide}
                        >
                            <ArrowToLefts/>
                        </div>
                        <div
                            ref={nextRef}
                            className={classes.arrow}
                            onClick={nextSlide}
                        >
                            <ArrowToRights/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProjectsComponent;