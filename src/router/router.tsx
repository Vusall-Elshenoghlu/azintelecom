import {createBrowserRouter} from 'react-router-dom';
import PublicComponent from 'core/layouts/public/public.component';
import HomeComponent from 'pages/home/home.component';
import {Routes} from './routes';
import NotFound from 'pages/not-found/notfound.component';
import NewsComponent from '../pages/news/news.component';

const router = createBrowserRouter([
    {
        element: <PublicComponent/>,
        children: [
            {
                path: Routes.home,
                element: <HomeComponent/>,
            },
 {
                path: Routes.news,
                element: <NewsComponent/>,
            },


        ],
    },
    {
        path: '*',
        element: <NotFound/>,
    }
], {basename: '/',});

export default router;
