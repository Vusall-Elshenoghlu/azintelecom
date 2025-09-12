import {useTitleOfSectionStyles} from './title-of-section.style';
import {ReactNode} from 'react';
interface Props {
    children: ReactNode;
}
const TitleOfSectionComponent = ({children}: Props) => {
    const classes = useTitleOfSectionStyles();
    return (
        <h1 className={classes.activitiesText}>{children}</h1>

    );
};
export default TitleOfSectionComponent;