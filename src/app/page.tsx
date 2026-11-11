import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { PortfolioAction } from "@/components/portfolio-action";
import {
  ArrowUpRight,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  ServiceIcon,
  TelegramIcon,
} from "@/components/portfolio-icons";
import {
  profile,
  projects,
  services,
  statistics,
  technologies,
  type Project,
} from "@/data/portfolio";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contacts", href: "#contact" },
];

function ProjectTags({ items }: { items: string[] }) {
  return (
    <ul className="project-tags" aria-label="Technologies">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function ProjectPreview({ image, className }: { image: Project["image"]; className?: string }) {
  const { overlay, alt, ...baseImage } = image;

  if (!overlay) {
    return <Image {...baseImage} alt={alt} unoptimized className={className} />;
  }

  return (
    <div className="project-image-stack">
      <Image {...baseImage} alt={alt} unoptimized className="project-image-base" />
      <Image {...overlay} alt={overlay.alt} unoptimized className="project-image-overlay" />
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <article className={project.image.overlay ? "project project--stacked" : "project"} aria-labelledby={project.id}>
      <div className="project-copy">
        <h3 id={project.id}>{project.title}</h3>
        <ProjectTags items={project.technologies} />
        <p className="body-copy">{project.description}</p>
        <div className="project-actions">
          <PortfolioAction
            href={project.repositoryUrl}
            className="button button-primary"
            label="View GitHub"
            accessibleLabel={"View GitHub for " + project.title}
            title={project.title + " on GitHub"}
          >
            <p>The repository link will be available when this sample project is replaced.</p>
          </PortfolioAction>
          <PortfolioAction
            href={project.demoUrl}
            className="project-link"
            label={<>View project <ArrowUpRight /></>}
            accessibleLabel={"View project: " + project.title}
            title={project.title}
          >
            <ProjectPreview image={project.image} className="dialog-preview" />
            <ProjectTags items={project.technologies} />
            <p>{project.description}</p>
          </PortfolioAction>
        </div>
      </div>
      <div className="project-media">
        <ProjectPreview image={project.image} />
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header id="home" className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#home">{profile.name}</a>
          <nav className="site-nav" aria-label="Main navigation">
            {navigation.map(({ href, label }) => <a href={href} key={href}>{label}</a>)}
          </nav>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="hero-greeting">Hello<span>.</span></p>
              <p className="line-label hero-intro">I’m {profile.firstName}</p>
              <h1 id="hero-title">{profile.role}</h1>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Got a project?</a>
                <PortfolioAction
                  href={profile.resumeUrl}
                  className="button button-outline"
                  label="My resume"
                  title={profile.name}
                >
                  <p className="resume-role">{profile.role} · Sample resume</p>
                  <p>{profile.bio}</p>
                  <ProjectTags items={technologies} />
                </PortfolioAction>
              </div>
            </div>
          </div>
          <div className="hero-art">
            <Image
              {...profile.portrait}
              className="hero-portrait"
              fetchPriority="high"
              loading="eager"
              unoptimized
            />
          </div>
        </section>

        <div className="technology-strip">
          <ul className="container technology-list" aria-label="Technology stack">
            {technologies.map((technology) => <li key={technology}>{technology}</li>)}
          </ul>
        </div>
        <div className="social-links">
            <a
              className="social-link"
              href={profile.email ? "mailto:" + profile.email : "#contact"}
              aria-label="Email"
            >
              <MailIcon />
            </a>
            <PortfolioAction
              href={profile.githubUrl}
              className="social-link social-github"
              label={<GitHubIcon />}
              accessibleLabel="GitHub profile"
              title="GitHub"
            >
              <p>The GitHub profile will be linked when the demo content is updated.</p>
            </PortfolioAction>
            <PortfolioAction
              href={profile.linkedinUrl}
              className="social-link"
              label={<LinkedInIcon />}
              accessibleLabel="LinkedIn profile"
              title="LinkedIn"
            >
              <p>The LinkedIn profile will be linked when the demo content is updated.</p>
            </PortfolioAction>
            <a className="social-link" href={profile.instagramUrl} aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a className="social-link" href={profile.telegramUrl} aria-label="Telegram">
              <TelegramIcon />
            </a>
            <a className="social-link" href={"tel:" + profile.tel} aria-label={"Call " + profile.name}>
              <PhoneIcon />
            </a>
          </div>

        <section className="container about" id="about" aria-labelledby="about-title">
          <ul className="service-list" aria-label="Services">
            {services.map(({ icon, label }) => (
              <li key={icon}>
                <ServiceIcon name={icon} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <div className="about-copy">
            <h2 id="about-title">About me</h2>
            <p className="body-copy">{profile.bio}</p>
            <dl className="statistics">
              {statistics.map(({ value, suffix, label }) => (
                <div className="statistic" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}<span>{suffix}</span></dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="container projects" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <div className="project-list">
            {projects.map((project) => <ProjectRow key={project.id} project={project} />)}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <a className="wordmark" href="#home">{profile.name}</a>
          <p>Designed with love, all rights reserved for {profile.name}.</p>
          <div className="social-links">
            <a
              className="social-link"
              href={profile.email ? "mailto:" + profile.email : "#contact"}
              aria-label="Email"
            >
              <MailIcon />
            </a>
            <PortfolioAction
              href={profile.githubUrl}
              className="social-link social-github"
              label={<GitHubIcon />}
              accessibleLabel="GitHub profile"
              title="GitHub"
            >
              <p>The GitHub profile will be linked when the demo content is updated.</p>
            </PortfolioAction>
            <PortfolioAction
              href={profile.linkedinUrl}
              className="social-link"
              label={<LinkedInIcon />}
              accessibleLabel="LinkedIn profile"
              title="LinkedIn"
            >
              <p>The LinkedIn profile will be linked when the demo content is updated.</p>
            </PortfolioAction>
            <a className="social-link" href={profile.instagramUrl} aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a className="social-link" href={profile.telegramUrl} aria-label="Telegram">
              <TelegramIcon />
            </a>
            <a className="social-link" href={"tel:" + profile.tel} aria-label={"Call " + profile.name}>
              <PhoneIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
