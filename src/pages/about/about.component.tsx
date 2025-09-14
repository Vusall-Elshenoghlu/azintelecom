import AboutAchivementsComponent from './components/about-achivemens/about-achivements.component';
import AboutAzintelecomComponent from './components/about-azintelecom/about-azintelecom.component';
import AboutStructureComponent from './components/about-structure/about-structure.component';

const AboutComponent = () => {
    return (
        <>
            <AboutAzintelecomComponent/>
            <AboutAchivementsComponent/>
            <AboutStructureComponent/>
        </>
    );
};

export  default AboutComponent;