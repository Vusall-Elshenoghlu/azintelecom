import {useMemo, useState} from 'react';
import {NavLink} from 'react-router-dom';
import Logo from 'assets/images/statics/Logo.png';
import HeaderModalComponent from '../header-modal/header-modal.component';
import useLocalization from '../../../../../assets/lang';
import {Routes} from 'router/routes';
import {useHeaderNavbarStyles} from './header-navbar.style';
import {SearchIcon} from '../../../../../assets/images/icons/search-icon';
import {ILang} from '../../../../../assets/lang/lang';
import {environment} from '../../../../configs/app.config';
import {useDispatch, useSelector} from 'react-redux';
import {ILanguages, IState} from '../../../../../store/store';
import {setLocale} from '../../../../../store/store.reducer';
import {useStore} from '../../../../../store/store.config';
import {MenuIcon} from '../../../../../assets/images/icons/menu-icon';
import {ArrowSmallDown} from '../../../../../assets/images/icons/arrows';

const HeaderNavbarComponent = () => {
    const classes = useHeaderNavbarStyles();
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const locale = useSelector((state: IState) => state.locale);
    const translate = useLocalization();
    const languages = useStore('languages');
    const dispatch = useDispatch();

    const currentLang = useMemo(() => {
        return localStorage.getItem(`${environment.applicationName}-locale`) as ILang || 'az';
    }, [locale]);

    const navLinks = [
        {to: Routes.home, label: translate('navbar_home')},
        {to: Routes.about, label: translate('navbar_about')},
        {to: Routes.products, label: translate('navbar_products')},
        {to: Routes.partners, label: translate('navbar_partners')},
        {to: Routes.contact, label: translate('navbar_contact')},
    ];

    return (
        <header className={classes.headerSection}>
            <div className='container-fluid px-30'>
                <div className='row align-items-center'>
                    <div className='col-6 col-lg-2 py-35'>
                        <div className={classes.left}>
                            <NavLink to={Routes.default}>
                                <img className={classes.logoImg} src={Logo} alt='logo'/>
                            </NavLink>
                        </div>
                    </div>

                    <div className='col-lg-8 d-none d-lg-block py-30'>
                        <div className={classes.navigationWrapper}>
                            <nav className={classes.navigation}>
                                <ul className={`${classes.navItems} d-flex`}>
                                    {navLinks.map(({to, label}) => (
                                        <li key={to}>
                                            <NavLink
                                                className={classes.navLink}
                                                to={to}
                                            >
                                                {label}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div className='col-6 col-lg-2 py-35'>
                        <div className={classes.rightSection}>
                            <div className={classes.menuAndLanguagesWrapper}>
                                <div className={`${classes.listContent} me-3 position-relative d-none d-lg-block`}>
                                    <div
                                        onClick={() => setIsOpen(!isOpen)}
                                        className={`${classes.selected} cursor-pointer`}
                                    >
                                        {currentLang.toUpperCase()}
                                        <ArrowSmallDown/>
                                    </div>
                                    {isOpen && (
                                        <ul className={`${classes.langList} position-absolute list-unstyled`}>
                                            {languages.map((item: ILanguages) => (
                                                <li
                                                    key={item.key}
                                                    className={`${classes.langItem} ${currentLang === item.key ? classes.activeLang : ''} cursor-pointer`}
                                                    onClick={() => {
                                                        dispatch(setLocale(item.key));
                                                        setIsOpen(false);
                                                    }}
                                                >
                                                    {item.value}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className={'d-none d-lg-block'}>
                                    <MenuIcon/>
                                </div>
                            </div>
                            <div className={`${classes.searchIconWrapper} me-3 d-block d-lg-none cursor-pointer`}>
                                <SearchIcon/>
                            </div>

                            <div
                                onClick={() => setIsOpenMenu(prev => !prev)}
                                className={classes.hamburger}
                            >
                                &#9776;
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isOpenMenu && (
                <HeaderModalComponent setIsOpenMenu={setIsOpenMenu}
                />
            )}
        </header>
    );
};

export default HeaderNavbarComponent;