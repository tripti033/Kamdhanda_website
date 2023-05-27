
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="Kamdhanda - Naukri ki Duniya, Humara Swag!"
        description="Find your dream job with ease, explore opportunities, and stay updated with Kamdhanda!"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Intuitive and Engaging UI"
        description="Enjoy a sleek and modern user interface that makes job searching a pleasure."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Seamless Deployment and Easy Integration"
        description="Get Kamdhanda up and running quickly. Hassle-free integration for job seekers and recruitment agencies."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Two Screens, Limitless Possibilities"
        description="Explore job listings and dive into detailed information for informed decisions."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>©Tripti Verma {" "}
        <span className="bold">
ALL OF THE RIGHTS RESERVED</span>
        </p>
      </div>
    </>
  );
}

export default App;