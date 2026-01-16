
import { NavBar } from './components/NavBar';
import { HomeSection } from './components/HomeSection';
import { AboutSection } from './components/AboutSection';
import { ProgjectSection } from './components/ProgjectSection';
import { ContactSection } from './components/ContactSection';

export const Home = () => {
  return <div className ="min-h-screen">
    {/* Theme */}
  

    {/*background*/}
    {/* Nav Bar*/}
   <NavBar />


    {/* Main Content*/}
    <main>
        <HomeSection />
        <AboutSection />
        <ProgjectSection/>
        
    </main>

    {/* Footer*/}
    <ContactSection/>
  </div>;
}