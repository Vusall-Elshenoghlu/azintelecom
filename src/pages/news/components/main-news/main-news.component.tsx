import {useNewsQuery} from '../../actions/news.queries';

const MainNewsComponent = () => {
    const{data: news, isLoading} = useNewsQuery();
    console.log(news);
    return (
        <>

        </>
    );
};

export  default MainNewsComponent;