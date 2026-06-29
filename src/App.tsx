import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Sketch from './components/Sketch';
import Video from './components/Video';

interface Project {
  name: string;
  stack: string;
  date: string;
  bullets: string[];
  video?: string;
}

function getAge(): number {
  const today = new Date();
  const birth = new Date(2004, 6, 31);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
}

function App() {
  const { t, i18n } = useTranslation();
  const [openProjects, setOpenProjects] = useState<Record<number, boolean>>({});
  const [openActivity, setOpenActivity] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const toggleProject = (i: number) => {
    setOpenProjects(prev => ({ ...prev, [i]: !prev[i] }));
  };

  const isSpanish = i18n.language.startsWith('es');
  const age = getAge();

  const projectVideos: Record<number, string> = {
    0: '/videos/pay-and-pray-demo.mp4',
    1: '/videos/snippet-searcher-demo.mp4',
    3: '/videos/sonora-demo.mp4',
  };

  const projects: Project[] = [1, 2, 3, 4, 5].map((n, i) => ({
    name: t(`sections.project_${n}_name`),
    stack: t(`sections.project_${n}_stack`),
    date: t(`sections.project_${n}_date`),
    bullets: (t(`sections.project_${n}_bullets`, { returnObjects: true }) as string[]),
    video: projectVideos[i],
  }));

  const activityBullets = t('sections.activity_1_bullets', { returnObjects: true }) as string[];

  return (
    <div className="app-container">

      <nav className="top-nav">
        <div className="nav-links">
          <a href="#about">{t('nav.about')}</a>
          <a href="#education">{t('nav.education')}</a>
          <a href="#projects">{t('nav.projects')}</a>
          <a href="#activities">{t('nav.activities')}</a>
          <a href="#skills">{t('nav.skills')}</a>
          <a href="#contact">{t('nav.contact')}</a>
          <a
            href="https://github.com/julian-ritondale"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            href={isSpanish ? '/cv-es.pdf' : '/cv-en.pdf'}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </div>
      </nav>

      <div className="header-art">
        <div className="sketch-wrapper">
          <Sketch />
          <div className="quote-block">
            <span className="quote-text">{t('sections.quote')}</span>
            <span className="quote-attribution">{t('sections.quote_author')}</span>
          </div>
        </div>
      </div>

      <main className="content">

        <section className="portfolio-section" id="about">
          <h2>{t('sections.about_title')}</h2>
          <div className="reflections">
            <p className="section-desc">{t('sections.about_desc_1')}</p>
            <p className="section-desc">{t('sections.about_desc_2')}</p>
          </div>
          <div className="about-info">
            <span className="about-name">{t('sections.name')}</span>
            <span className="about-detail">{age} {t('sections.years_old')}</span>
            <span className="about-detail">34.6037°S, 58.3816°W (Buenos Aires, Argentina)</span>
          </div>
        </section>

        <section className="portfolio-section" id="education">
          <h2>{t('sections.education_title')}</h2>
          <div className="reflections">
            <p className="section-desc">{t('sections.education_desc_1')}</p>
            <p className="section-desc">{t('sections.education_desc_2')}</p>
          </div>
          <div className="edu-entry">
            <div className="edu-header">
              <span className="edu-uni">{t('sections.education_uni')}</span>
              <span className="edu-date">{t('sections.education_time')}</span>
            </div>
            <div className="edu-degree">{t('sections.education_degree')}</div>
          </div>
        </section>

        <section className="portfolio-section" id="projects">
          <h2>{t('sections.projects_title')}</h2>
          <div className="reflections">
            <p className="section-desc">{t('sections.projects_desc_1')}</p>
            <p className="section-desc">{t('sections.projects_desc_2')}</p>
          </div>
          <div className="projects-list">
            {projects.map((proj, i) => (
              <div className="project-entry" key={i}>
                <div
                  className="project-summary-wrapper"
                  onClick={() => toggleProject(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && toggleProject(i)}
                >
                  <div className="project-header">
                    <span className="project-name">
                      {proj.name}
                    </span>
                    <span className="project-date">{proj.date}</span>
                  </div>
                  <div className="details-stack">{proj.stack}</div>
                </div>
                {openProjects[i] && (
                  <div className="project-body">
                    {proj.video && (
                      <Video
                        src={proj.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    )}
                    <ul className="bullet-list">
                      {proj.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="portfolio-section" id="activities">
          <h2>{t('sections.activities_title')}</h2>
          <div className="reflections">
            <p className="section-desc">{t('sections.activities_desc')}</p>
          </div>
          <div className="activity-entry">
            <div
              className="activity-summary-wrapper"
              onClick={() => setOpenActivity(!openActivity)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setOpenActivity(!openActivity)}
            >
              <div className="activity-header">
                <span className="activity-name">
                  <span className="activity-title">{t('sections.activity_1_name')}</span>
                  <span className="activity-label">{t('sections.activity_1_label')}</span>
                </span>
                <span className="activity-meta">
                  <span className="activity-place">{t('sections.activity_1_place')}</span>
                  <span className="activity-date">{t('sections.activity_1_date')}</span>
                </span>
              </div>
              <div className="activity-note">{t('sections.activity_1_note')}</div>
            </div>
            {openActivity && (
              <div className="project-body">
                <Video
                  src="/videos/scout-demo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <ul className="bullet-list">
                  {activityBullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        <section className="portfolio-section" id="skills">
          <h2>{t('sections.skills_title')}</h2>
          <div className="skills-list">
            <div className="skill-row">
              <span className="skill-label">{t('sections.skills_languages_label')}:</span>
              <span className="skill-value">{t('sections.skills_languages')}</span>
            </div>
            <div className="skill-row">
              <span className="skill-label">{t('sections.skills_frameworks_label')}:</span>
              <span className="skill-value">{t('sections.skills_frameworks')}</span>
            </div>
            <div className="skill-row">
              <span className="skill-label">{t('sections.skills_tools_label')}:</span>
              <span className="skill-value">{t('sections.skills_tools')}</span>
            </div>
          </div>
        </section>

        <section className="portfolio-section" id="contact">
          <h2>{t('sections.contact_title')}</h2>
          <div className="reflections">
            <p className="section-desc">{t('sections.contact_desc')}</p>
          </div>
          <div className="contact-block">
            <div className="contact-name">{t('sections.name')}</div>
            <div className="contact-links">
              <span className="contact-plain">{t('sections.phone')}</span>
              <a href={`mailto:${t('sections.email')}`}>{t('sections.email')}</a>
              <a href={`https://${t('sections.linkedin')}`} target="_blank" rel="noopener noreferrer">{t('sections.linkedin')}</a>
            </div>
          </div>
        </section>

      </main>

      <button className="lang-toggle" onClick={toggleLanguage} id="lang-toggle-btn">
        {isSpanish ? 'EN' : 'ES'}
      </button>

    </div>
  );
}

export default App;