import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import zoom from '../../assets/zoom.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/CHANDAN2901/Cineverse"
          h3="MOVIX"
          p="IMDB Alternate"
        />
        <ProjectCard
          src={zoom}
          link="https://github.com/CHANDAN2901/zoom_clone"
          h3="Zoom Clone"
          p="Meeting App"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/CHANDAN2901/slack-bot"
          h3="FitGuru"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
