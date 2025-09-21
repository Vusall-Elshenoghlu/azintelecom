import useLocalization from '../../../../../../../assets/lang';
import {useFooterProudStyles} from './footer-proud.style';
import {
    AzsoftWareIcon,
    CallingIcon,
    FacebookIcon,
    InstagramIcon, LinkedinIcon,
    LocationIcon
} from '../../../../../../../assets/images/icons/footer-icons';
const FooterProudComponent = () => {
    const translate = useLocalization();
    const classes = useFooterProudStyles();
    const date = new Date().getFullYear();
    console.log(date);
    return (
        <div className={classes.wrapper}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-7 col-md-8 col-sm-12'}>
                        <h1 className={classes.title}>{translate('footer_proud_title1')}</h1>
                        <h1 className={classes.title}>{translate('footer_proud_title2')}</h1>
                    </div>
                </div>

                <div className={classes.line}></div>

                <div className={'row'}>
                    <div className={'col-lg-4 col-md-6 col-sm-6 col-6'}>
                        <h5 className={classes.menuTitle}>{translate('footer_media')}</h5>
                        <div className={'row'}>
                            <div className={'col-lg-6 col-md-12 col-sm-6'}>
                                <ul className={classes.menuList}>
                                    <li><a href='#' className={classes.menuLink}>{translate('footer_main')}</a></li>
                                    <li><a href='#' className={classes.menuLink}>{translate('footer_about')}</a></li>
                                    <li><a href='#' className={classes.menuLink}>{translate('footer_services')}</a></li>
                                    <li><a href='#' className={classes.menuLink}>{translate('footer_media')}</a></li>
                                </ul>
                            </div>
                            <div className={'col-lg-6 col-md-12 col-sm-6'}>
                                <ul className={classes.menuList}>
                                    <li><a href='#' className={classes.menuLink}>{translate('footer_career')}</a></li>
                                    <li><a href='#' className={classes.menuLink}>{translate('footer_account')}</a></li>
                                    <li><a href='#' className={classes.menuLink}>{translate('footer_contact')}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={'col-lg-8 col-md-6 col-sm-6 col-6'}>
                        <div className={'row'}>
                            <div className={'col-lg-6 col-md-6 col-sm-12'}>
                                <div className={classes.contactInfo}>
                                    <div className={classes.contactItem}>
                                        <div className={classes.contactIcon}><LocationIcon/></div>
                                        <div className={classes.contactText}>
                                            <p>{translate('footer_address_line1')}</p>
                                            <p>{translate('footer_address_line2')}</p>
                                        </div>
                                    </div>

                                    <div className={classes.contactItem}>
                                        <div className={classes.contactIcon}><CallingIcon/></div>
                                        <div className={classes.contactText}>
                                            <a href='#' className={classes.phoneLink}>{translate('footer_phone_company')}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'col-lg-6 col-md-6 col-sm-12'}>
                                <div className={classes.rightSection}>
                                    <div className={classes.contactEmails}>
                                        <div className={classes.emailItem}>
                                            <h4 className={classes.emailTitle}>{translate('footer_write_us')}</h4>
                                            <a href='mailto:info@azintelecom.az' className={classes.emailLink}>
                                                {translate('footer_contact_company')}
                                            </a>
                                        </div>

                                        <div className={classes.emailItem}>
                                            <h4 className={classes.emailTitle}>{translate('footer_join_us')}</h4>
                                            <a href='mailto:jobs@azintelecom.az' className={classes.emailLink}>
                                                {translate('footer_contact_company_job')}
                                            </a>
                                        </div>
                                    </div>

                                    <div className={classes.socialMedia}>
                                        <FacebookIcon/>
                                        <InstagramIcon/>
                                        <LinkedinIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className={classes.footerBottom}>
                    <div className={classes.socialMediaResponsive}>
                        <div><FacebookIcon/></div>
                        <div><InstagramIcon/></div>
                        <div><LinkedinIcon/></div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-lg-6 col-md-6 col-sm-12'}>
                            <p className={classes.copyright}>
                                {date} © Azintelecom. {translate('footer_all_rights')}
                            </p>
                        </div>
                        <div className={'col-lg-6 col-md-6 col-sm-12'}>
                            <div className={classes.poweredBy}>
                                <span className={classes.poweredText}>{translate('footer_site')} </span>
                                <AzsoftWareIcon/>
                                <span className={classes.poweredText}> {translate('footer_by_developed')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterProudComponent;