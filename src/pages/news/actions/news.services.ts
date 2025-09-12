import {mockData} from './mock';
import {NewsModel} from '../model/news.model';

export const getNews = async (): Promise<any> => {
    const datas = mockData;
    return datas.map((item:any)=>new NewsModel(item));
};