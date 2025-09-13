import {useNewsQuery} from '../../actions/news.queries';
import {useCallback, useEffect, useState} from 'react';
import useLocalization from '../../../../assets/lang';
import {INews} from '../../news';
import {Card, Pagination, Spin} from 'antd';
import {Link} from 'react-router-dom';
import {useNewsStyles} from './main-news.style';

const MainNewsComponent = () => {
    const{data: news, isLoading} = useNewsQuery();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12;
    const classes = useNewsStyles();
    const [filter, setFilter] = useState('');
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
    const handleOnChangeEvent = useCallback((e: any) => {
        const value = e.target.value;
        setFilter(value);
        const filtered = news.filter((news: INews) =>
            news.description.toLowerCase().includes(value.toLowerCase())
        );
        setDatas(filtered);
    }, []);
    if (isLoading) {
        return <Spin tip='Loading...'/>;
    }

    const paginatedData = datas?.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );
    return (
        <div className='container'>
            <div className={'row'}>
                {paginatedData?.map((item) => (
                    <Link to={`${item.id}`}>
                        <div className={'col-lg-4 col-md-6 col-sm-12'} key={item.id}>
                            <Card className={classes.card}>
                                <img
                                    src={item.image}
                                    className={classes.cardImage}
                                    alt={item.image || 'News'}
                                />
                                <p>{item.description}</p>
                                {item.date && <div className={classes.date}>{item.date}</div>}
                            </Card>
                        </div>
                    </Link>
                ))}
            </div>
            <div>
                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={news?.length || 0}
                    onChange={(page) => setCurrentPage(page)}
                    simple = {isMobile}
                    className ={classes.pagination}
                />
            </div>
        </div>
    );
};

export  default MainNewsComponent;