import HeroSectionComponent from './components/hero-section/hero-section.component';
import HomeOurActivitiesComponent from './components/home-our-activities/home-our-activities.component';
import HomeAdvantagesComponent from './components/home-advantages/home-advantages.component';

function HomeComponent() {

    return (
        <>
            <HeroSectionComponent/>
            <HomeOurActivitiesComponent/>
            <HomeAdvantagesComponent/>
        </>
    );
}

export default HomeComponent;
