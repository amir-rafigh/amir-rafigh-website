import Image from "next/image";
import { ContactSection, QuickContactLinks, SocialLinks } from "@/components/contact-links";
import { PortfolioAction } from "@/components/portfolio-action";
import {
  ArrowUpRight,
  ServiceIcon,
} from "@/components/portfolio-icons";
import { technologies, type Project } from "@/data/portfolio";
import { getPortfolio, portfolioCopy, type Locale, type PortfolioCopy } from "@/data/portfolio-locales";

function ProjectTags({ items, label }: { items: string[]; label: string }) {
  return (
    <ul className="project-tags" aria-label={label}>
      {items.map((item) => <li key={item} dir="ltr" lang="en">{item}</li>)}
    </ul>
  );
}

function ProjectPreview({ image, className }: { image: Project["image"]; className?: string }) {
  const { overlay, companion, alt, ...baseImage } = image;

  if (companion) {
    const baseRatio = baseImage.width / baseImage.height;
    const companionRatio = companion.width / companion.height;

    return (
      <div
        className="project-image-pair"
        style={{ gridTemplateColumns: `minmax(0, ${baseRatio}fr) minmax(0, ${companionRatio}fr)` }}
      >
        <Image {...baseImage} alt={alt} unoptimized />
        <Image {...companion} alt={companion.alt} unoptimized />
      </div>
    );
  }

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

function ProjectRow({ project, copy }: { project: Project; copy: PortfolioCopy }) {
  let className = "project";
  if (project.image.overlay) className += " project--stacked";
  if (project.image.companion) className += " project--paired";

  return (
    <article className={className} aria-labelledby={project.id}>
      <div className="project-copy">
        <h3 id={project.id}>{project.title}</h3>
        <ProjectTags items={project.technologies} label={copy.technologies} />
        <p className="body-copy">{project.description}</p>
        <div className="project-actions">
          {(!project.demoLinks?.length || project.repositoryUrl) && (
            <PortfolioAction
              href={project.repositoryUrl}
              className="button button-primary"
              label={copy.github}
              accessibleLabel={copy.githubFor + " " + project.title}
              title={project.title + " " + copy.onGithub}
              closeLabel={copy.close}
            >
              <p>{copy.repositoryNotice}</p>
            </PortfolioAction>
          )}
          {project.demoLinks?.length ? (
            project.demoLinks.map(({ label, href }) => (
              <a key={href} className="project-link" href={href}>
                {label} <ArrowUpRight />
              </a>
            ))
          ) : (
            <PortfolioAction
              href={project.demoUrl}
              className="project-link"
              label={<>{copy.viewProject} <ArrowUpRight /></>}
              accessibleLabel={copy.projectFor + " " + project.title}
              title={project.title}
              closeLabel={copy.close}
            >
              <ProjectPreview image={project.image} className="dialog-preview" />
              <ProjectTags items={project.technologies} label={copy.technologies} />
              <p>{project.description}</p>
            </PortfolioAction>
          )}
        </div>
      </div>
      <div className="project-media">
        <ProjectPreview image={project.image} />
      </div>
    </article>
  );
}

export function PortfolioPage({ locale }: { locale: Locale }) {
  const { profile, projects, services, statistics } = getPortfolio(locale);
  const copy = portfolioCopy[locale];
  const navigation = [
    { label: copy.home, href: "#home" },
    { label: copy.about, href: "#about" },
    { label: copy.projects, href: "#projects" },
    { label: copy.contact, href: "#contact" },
  ];

  return (
    <>
      <a className="skip-link" href="#main-content">{copy.skip}</a>
      <header id="home" className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#home">{profile.name}</a>
          <nav className="site-nav" aria-label={copy.navigation}>
            {navigation.map(({ href, label }) => <a href={href} key={href}>{label}</a>)}
            <a className="language-link" href={copy.languageHref} hrefLang={locale === "fa" ? "en" : "fa"} lang={locale === "fa" ? "en" : "fa"} aria-label={copy.languageLabel}>
              {copy.language}
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="hero-greeting">{copy.greeting}<span>.</span></p>
              <p className="line-label hero-intro">{copy.intro} {profile.firstName}{locale === "fa" ? " هستم" : ""}</p>
              <h1 id="hero-title">{profile.role}</h1>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">{copy.projectPrompt}</a>
                <PortfolioAction
                  href={profile.resumeUrl}
                  className="button button-outline"
                  label={copy.resume}
                  title={profile.name}
                  closeLabel={copy.close}
                >
                  <p className="resume-role">{profile.role} · {copy.sampleResume}</p>
                  <p>{profile.bio}</p>
                  <ProjectTags items={technologies} label={copy.technologies} />
                </PortfolioAction>
              </div>
              <QuickContactLinks copy={copy} />
            </div>
          </div>
          <div className="hero-art">
            <Image
              {...profile.portrait}
              alt={profile.portrait.alt}
              className="hero-portrait"
              fetchPriority="high"
              loading="eager"
              unoptimized
            />
          </div>
        </section>

        <div className="technology-strip">
          <ul className="container technology-list" aria-label={copy.technologyStack}>
            {technologies.map((technology) => <li key={technology} dir="ltr" lang="en">{technology}</li>)}
          </ul>
        </div>

        <section className="container about" id="about" aria-labelledby="about-title">
          <ul className="service-list" aria-label={copy.services}>
            {services.map(({ icon, label }) => (
              <li key={icon}>
                <ServiceIcon name={icon} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <div className="about-copy">
            <h2 id="about-title">{copy.aboutMe}</h2>
            <p className="body-copy">{profile.bio}</p>
            <dl className="statistics">
              {statistics.map(({ value, suffix, label }) => (
                <div className="statistic" key={label}>
                  <dt>{label}</dt>
                  <dd><bdi dir="ltr">{value.toLocaleString(locale)}<span>{suffix}</span></bdi></dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="container projects" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">{copy.projects}</h2>
          <div className="project-list">
            {projects.map((project) => <ProjectRow key={project.id} project={project} copy={copy} />)}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <ContactSection copy={copy} />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <a className="wordmark" href="#home">{profile.name}</a>
          <p>{copy.footer} {profile.name}.</p>
          <SocialLinks copy={copy} />
        </div>
      </footer>
      <QuickContactLinks copy={copy} mobile />
    </>
  );
}
