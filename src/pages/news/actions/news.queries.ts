import {useQuery} from 'react-query';
import {getNews} from './news.services';

export const useNewsQuery = () => {
    return useQuery({
        queryKey: ['newsQuery'],
        queryFn: getNews
    });
};