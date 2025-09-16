import {useTitleOfSectionStyles} from './title-of-section.style';
import {TitleOfSectionProps} from './title-of-section';


const TitleOfSectionComponent = ({title, description, line, children}: TitleOfSectionProps) => {
    const classes = useTitleOfSectionStyles();
    return (
        <div className={`row ${classes.row}`}>
            <div className={line ? 'col-lg-5 col-md-6 col-sm-12' : 'col-lg-6 col-md-6 col-sm-12'}>
                <h1 className={classes.activitiesText}>{title}</h1>
            </div>
            <div className={line ? 'col-lg-7 col-md-6 col-sm-12' : 'col-lg-6 col-md-6 col-sm-12'}>
                {line ? (
                    <div className={classes.lineAndText}>
                        <div className={classes.line}></div>
                        <h3>{description}</h3>
                    </div>
                ) : <h5 className={classes.description}>{description}</h5>
                }
            </div>

        </div>

    );
};
export default TitleOfSectionComponent;