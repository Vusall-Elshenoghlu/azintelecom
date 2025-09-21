import HeroSectionComponent from './components/hero-section/hero-section.component';
import HomeOurActivitiesComponent from './components/home-our-activities/home-our-activities.component';
import HomeAdvantagesComponent from './components/home-advantages/home-advantages.component';
import HomeProjectsComponent from './components/home-projects/home-projects.component';
import HomeNewsComponent from './components/home-news/home-news.component';

function HomeComponent() {

    return (
        <>
            <HeroSectionComponent/>
            <HomeOurActivitiesComponent/>
            <HomeAdvantagesComponent/>
            <HomeProjectsComponent/>
            <HomeNewsComponent/>
        </>
    );
}

export default HomeComponent;
