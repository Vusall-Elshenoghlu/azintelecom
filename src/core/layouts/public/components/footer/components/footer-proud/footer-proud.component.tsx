import useLocalization from '../../../../../../../assets/lang';
import {useFooterProudStyles} from './footer-proud.style';

const FooterProudComponent = () => {
    const translate = useLocalization();
    const classes = useFooterProudStyles();
    return (
        <div className={classes.wrapper}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-6 col-md-6 col-sm-12'}>
                        <h1 className={classes.title}>{translate('footer_proud_title')}</h1>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterProudComponent;