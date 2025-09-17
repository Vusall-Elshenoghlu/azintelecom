import {useFooterStyles} from './footer.style';
import FooterUsefulLinksComponent from './components/footer-useful-links/footer-useful-links.component';
import FooterProudComponent from './components/footer-proud/footer-proud.component';

const FooterComponent = () => {
    const classes = useFooterStyles();
    return (
        <div className={classes.container}>
            <FooterUsefulLinksComponent/>
            <FooterProudComponent/>
        </div>
    );
};


export default FooterComponent;
