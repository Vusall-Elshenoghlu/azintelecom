import {createUseStyles} from 'react-jss';
import {rem} from '../../../../../../../assets/styles/abstracts/functions';
import {breakpoint} from '../../../../../../../assets/styles/abstracts/mixins';
import {breakpoints} from '../../../../../../../assets/styles/abstracts/sizes';
import colors from '../../../../../../../assets/styles/abstracts/color';
import background from 'assets/images/statics/footer-proud-bg.png';
const styles = {
    wrapper: {
        position: 'relative',
        marginTop: rem(30),
        marginLeft: rem(15),
        paddingTop: rem(55),
        paddingBottom: rem(40),
        width: '100%',
        minHeight: rem(716),
        height: 'auto',
        borderRadius: rem(48),
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            opacity: 0.08,
            borderRadius: rem(48),
            zIndex: -1,
        },

        [breakpoint(breakpoints.tabletM)]: {
            paddingTop: rem(40),
            paddingBottom: rem(30),
            minHeight: 'auto',
            borderRadius: rem(24),
            '&::before': {
                borderRadius: rem(24),
            }
        },
        [breakpoint(breakpoints.mobileL)]: {
            paddingTop: rem(30),
            paddingBottom: rem(20),
            marginTop: rem(20),
            borderRadius: rem(16),
            '&::before': {
                borderRadius: rem(16),
            }
        },

    },
    menuTitle: {
      display: 'none',
      [breakpoint(breakpoints.tabletM)]: {
          display: 'block',
          fontWeight: '400',
          fontSize: rem(12),
          lineHeight: rem(18),
          color: colors.textGrayColor5,
          marginBottom: rem(15),
          marginLeft: rem(15),

      }
    },

    title: {
        color: colors.white,
        fontWeight: '700',
        fontSize: rem(40),
        lineHeight: rem(56),
        marginBottom: rem(5),
        [breakpoint(breakpoints.desktopS)]: {
            fontSize: rem(36),
            lineHeight: rem(50),
        },
        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(20),
            lineHeight: rem(32),
            textAlign: 'left',
            marginLeft: rem(15),

        },
        [breakpoint(breakpoints.mobileL)]: {
            fontSize: rem(20),
            lineHeight: rem(32),
            textAlign: 'left',
            marginLeft: rem(15),

        }
    },

    line: {
        width: '100%',
        height: rem(0),
        marginTop: rem(70),
        marginBottom: rem(70),
        border: `${rem(1)} solid ${colors.textGrayColor7}`,
        [breakpoint(breakpoints.tabletM)]: {
            marginTop: rem(50),
            marginBottom: rem(50),
        },
        [breakpoint(breakpoints.mobileL)]: {
            marginTop: rem(30),
            marginBottom: rem(30),
        }
    },

    menuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        '& li': {
            marginBottom: rem(16),
            [breakpoint(breakpoints.mobileL)]: {
                marginBottom: rem(12),
            }
        }
    },

    menuLink: {
        color: colors.white,
        fontSize: rem(16),
        lineHeight: rem(22),
        '&:hover': {
            opacity: 1,
            color: colors.white,
            textDecoration: 'none'
        },
        [breakpoint(breakpoints.mobileL)]: {
            fontSize: rem(14),
            lineHeight: rem(20),
        },
        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(16),
            lineHeight: rem(22),
            fontWeight: '600',
            letterSpacing: '0%',
            marginLeft: rem(15),
        },

    },

    contactInfo: {
        paddingLeft: rem(20),
        [breakpoint(breakpoints.tabletM)]: {
            paddingLeft: 0,
            marginTop: rem(30),
        },
        [breakpoint(breakpoints.mobileL)]: {
            marginTop: rem(25),
        }
    },

    contactItem: {
        display: 'flex',
        alignItems: 'flex-start',
        marginBottom: rem(24),
        [breakpoint(breakpoints.mobileL)]: {
            marginBottom: rem(20),
        }
    },

    contactIcon: {
        fontSize: rem(20),
        marginRight: rem(12),
        marginTop: rem(2),
        [breakpoint(breakpoints.mobileL)]: {
            fontSize: rem(18),
            marginRight: rem(10),
        },
        [breakpoint(breakpoints.tabletM)]: {
            display: 'none',
        },

    },

    contactText: {
        flex: 1,
        '& p': {
            color: colors.white,
            fontSize: rem(14),
            lineHeight: rem(20),
            margin: 0,

        },
        '& a': {
            fontSize: rem(18),
            lineHeight: rem(20),
            margin: 0,
            [breakpoint(breakpoints.mobileL)]: {
                fontSize: rem(13),
                lineHeight: rem(18),
            },
        },

    },

    phoneLink: {
        color: colors.white,
        textDecoration: 'none',
        fontSize: rem(16),
        lineHeight: rem(24),
        '&:hover': {
            color: colors.white,
            opacity: 0.8,
            textDecoration: 'none'
        },
        [breakpoint(breakpoints.mobileL)]: {
            fontSize: rem(14),
            lineHeight: rem(20),
        }
    },

    rightSection: {
        paddingLeft: rem(20),
        [breakpoint(breakpoints.desktopS)]: {
            paddingLeft: rem(10),
        },
        [breakpoint(breakpoints.tabletM)]: {
            paddingLeft: 0,
            marginTop: rem(30),
        },
        [breakpoint(breakpoints.mobileL)]: {
            marginTop: rem(25),
        }
    },

    contactEmails: {
        marginBottom: rem(40),
        [breakpoint(breakpoints.mobileL)]: {
            marginBottom: rem(30),
        }
    },

    emailItem: {
        marginBottom: rem(24),
        [breakpoint(breakpoints.mobileL)]: {
            marginBottom: rem(20),
        }
    },

    emailTitle: {
        color: colors.white,
        fontSize: rem(14),
        fontWeight: '600',
        lineHeight: rem(20),
        marginBottom: rem(8),
        opacity: 0.8,
        [breakpoint(breakpoints.mobileL)]: {
            fontSize: rem(14),
            marginBottom: rem(6),
        },
        [breakpoint(breakpoints.tabletM)]: {
            fontSize: rem(14),
            marginBottom: rem(6),
            marginTop: rem(-15),
        },

    },

    emailLink: {
        color: colors.white,
        textDecoration: 'none',
        fontSize: rem(16),
        lineHeight: rem(24),
        opacity: 0.8,
        transition: 'opacity 0.3s ease',
        '&:hover': {
            opacity: 1,
            color: colors.white,
            textDecoration: 'none'
        },
        [breakpoint(breakpoints.mobileL)]: {
            fontSize: rem(14),
            lineHeight: rem(20),
        }
    },

    socialMedia: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(16),
        [breakpoint(breakpoints.tabletM)]: {
            display: 'none'
        }
    },

    socialLink: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: rem(40),
        height: rem(40),
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: rem(8),
        color: colors.white,
        textDecoration: 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: colors.white,
            textDecoration: 'none',
            transform: 'translateY(-2px)'
        },
        '& svg': {
            width: rem(20),
            height: rem(20)
        },
        [breakpoint(breakpoints.mobileL)]: {
            width: rem(36),
            height: rem(36),
            '& svg': {
                width: rem(18),
                height: rem(18)
            }
        }
    },

    // Footer bottom
    footerBottom: {
        marginTop: rem(60),
        paddingTop: rem(30),
        borderTop: `${rem(1)} solid ${colors.textGrayColor7}`,
        [breakpoint(breakpoints.tabletM)]: {
            marginTop: rem(20),
            paddingTop: rem(20),
            display: 'flex',
            flexDirection: 'column',
            gap: rem(10),
            justifyContent: 'center',
            alignItems: 'center',

        },
        [breakpoint(breakpoints.mobileL)]: {
            marginTop: rem(30),
            paddingTop: rem(15),
        }
    },

    copyright: {
        color: colors.white,
        fontSize: rem(14),
        lineHeight: rem(20),
        opacity: 0.6,
        margin: 0,
        [breakpoint(breakpoints.mobileL)]: {
            fontSize: rem(12),
            textAlign: 'center',
            marginBottom: rem(10),
        }
    },

    poweredBy: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        [breakpoint(breakpoints.tabletM)]: {
            display: 'none',
        },
        gap: rem(10)
    },

    poweredText: {
        color: colors.white,
        fontSize: rem(15),
        opacity: 0.5,
        marginTop: rem(3),
        [breakpoint(breakpoints.mobileL)]: {
            fontSize: rem(12),
        }
    },
    socialMediaResponsive: {
        display: 'none',
        [breakpoint(breakpoints.tabletM)]: {
            display: 'flex',
            gap: rem(30),
            '& div': {
                width: rem(24),
                height: rem(24),
                marginTop: rem(20),
            },
        }
    }

}as const;

export const useFooterProudStyles = createUseStyles(styles);