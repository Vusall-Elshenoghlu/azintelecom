import {useNewsQuery} from '../../actions/news.queries';
import {useCallback, useEffect, useState} from 'react';
import useLocalization from '../../../../assets/lang';
import {INews} from '../../news';
import {Pagination, Spin, Select} from 'antd';
import {Link} from 'react-router-dom';
import {useNewsStyles} from './main-news.style';
import {NewsSearchIcon} from '../../../../assets/images/icons/menu-icon';

const {Option} = Select;

const MainNewsComponent = () => {
    const{data: news, isLoading} = useNewsQuery();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12;
    const classes = useNewsStyles();
    const [filter, setFilter] = useState('');
    const [yearFilter, setYearFilter] = useState('all'); // Yeni state year üçün
    const translate = useLocalization();
    const [isMobile, setMobile] = useState(false);
    const [datas, setDatas] = useState<INews[]>([]);

    useEffect(() => {
        if (news) {
            setDatas(news);
        }
    }, [news]);

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mətn və il filterlərini eyni vaxtda tətbiq etmək üçün useEffect
    useEffect(() => {
        if (!news) return;

        let filtered = news;

        // Mətn filtri tətbiq et
        if (filter) {
            filtered = filtered.filter((item: INews) =>
                item.description.toLowerCase().includes(filter.toLowerCase())
            );
        }

        // İl filtri tətbiq et
        if (yearFilter !== 'all') {
            filtered = filtered.filter((item: INews) =>
                item.year.toString() === yearFilter
            );
        }

        setDatas(filtered);
        setCurrentPage(1); // Filterlədikdən sonra səhifəni yenidən 1-ə çevir
    }, [news, filter, yearFilter]);

    const handleOnChangeEvent = useCallback((e: any) => {
        setFilter(e.target.value);
    }, []);

    // Unikal illəri çıxarmaq üçün funksiya
    const getUniqueYears = useCallback(() => {
        if (!news) return [];
        const years = news.map((item: INews) => item.year);
        return [...new Set(years)].sort((a, b) => b - a); // Azalan sıra ilə
    }, [news]);

    const handleYearChange = (value: string) => {
        setYearFilter(value);
    };

    if (isLoading) {
        return <Spin tip='Loading...'/>;
    }

    const paginatedData = datas?.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <div className={classes.wrapper}>
            <div className='container pt-100'>
                <div className={'row  mb-50'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <h1>{translate('news_main_title')}</h1>
                    </div>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <div className={classes.iconAndYear}>
                            <div className={classes.iconDiv}>
                                <NewsSearchIcon/>
                            </div>
                            <div className={classes.yearDiv}>
                                <Select
                                    value={yearFilter}
                                    onChange={handleYearChange}
                                    style={{ width: '100%', height: '100%' }}
                                    placeholder="İl seçin"
                                    size="large"
                                >
                                    <Option value="all">Bütün illər</Option>
                                    {getUniqueYears().map((year) => (
                                        <Option key={year} value={year.toString()}>
                                            {year}
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'row'}>
                    {paginatedData?.map((item) => (
                        <Link to={`${item.id}`} key={item.id}>
                            <div className={'col-lg-4 col-md-6 col-sm-12'}>
                                <div className={classes.card}>
                                    <img
                                        src={item.image}
                                        className={classes.cardImage}
                                        alt={item.image || 'News'}
                                    />
                                    {item.date && <div className={classes.date}>{item.date}</div>}
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div>
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={datas?.length || 0}
                        onChange={(page) => setCurrentPage(page)}
                        simple = {isMobile}
                        className ={classes.pagination}
                    />
                </div>
            </div>
        </div>
    );
};

export default MainNewsComponent;