import AboutAchivementsComponent from './components/about-achivemens/about-achivements.component';
import AboutAzintelecomComponent from './components/about-azintelecom/about-azintelecom.component';
import AboutStructureComponent from './components/about-structure/about-structure.component';
import AboutMainComponent from './components/about-main/about-main.component';
import AboutMissionComponent from './components/about-mission/about-mission.component';
import AboutPriorietsComponent from './components/about-prioriets/about-prioriets.component';

const AboutComponent = () => {
    return (
        <>
            <AboutMainComponent/>
            <AboutAzintelecomComponent/>
            <AboutAchivementsComponent/>
            <AboutStructureComponent/>
            <AboutMissionComponent/>
            <AboutPriorietsComponent/>
        </>
    );
};

export  default AboutComponent;