import CustomNavbar from './components/CustomNavbar'; // Adjust the relative path as necessary
import Section from './components/Section';
 import './App.css';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServiceSection';
import TeamSection from './components/TeamSection';
import ExerciseSection from './components/ExerciseSection';
function App() {
  return (
    <div>
      <CustomNavbar />
      <Section/>
      <AboutSection/>
      <ServicesSection/>
      <TeamSection/>
      <ExerciseSection/>
    </div>
  );
}

export default App;
