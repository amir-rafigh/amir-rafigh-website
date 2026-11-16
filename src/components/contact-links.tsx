import { CopyEmailButton } from "@/components/copy-email-button";
import { ArrowUpRight, GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon, PhoneIcon, TelegramIcon } from "@/components/portfolio-icons";
import { profile } from "@/data/portfolio";
import type { PortfolioCopy } from "@/data/portfolio-locales";

function getContactMethods(copy: PortfolioCopy) {
  const text = copy.contactLinks;
  return [
    { id: "email", label: copy.email, action: text.emailAction, hint: text.emailHint,
      value: profile.email, href: profile.email ? `mailto:${profile.email}` : "", Icon: MailIcon, external: false },
    { id: "telegram", label: copy.telegram, action: text.telegramAction, hint: text.telegramHint,
      value: profile.telegramUrl ? `@${profile.telegramUrl.replace(/\/$/, "").split("/").pop()}` : "",
      href: profile.telegramUrl, Icon: TelegramIcon, external: true },
    { id: "phone", label: text.phone, action: text.phoneAction, hint: text.phoneHint,
      value: profile.tel, href: profile.tel ? `tel:${profile.tel}` : "", Icon: PhoneIcon, external: false },
  ].filter(({ href }) => Boolean(href));
}

export function QuickContactLinks({ copy, mobile = false }: { copy: PortfolioCopy; mobile?: boolean }) {
  return (
    <nav className={mobile ? "mobile-contact-bar" : "quick-contact-links"} aria-label={copy.contactLinks.direct}>
      {getContactMethods(copy).map(({ id, label, action, href, Icon, external }) => (
        <a key={id} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
          <Icon />
          <span>{mobile ? label : action}</span>
          {external && <span className="sr-only"> ({copy.contactLinks.newTab})</span>}
        </a>
      ))}
    </nav>
  );
}

export function SocialLinks({ copy }: { copy: PortfolioCopy }) {
  const links = [
    { label: copy.contactLinks.linkedin, href: profile.linkedinUrl, Icon: LinkedInIcon },
    { label: copy.contactLinks.github, href: profile.githubUrl, Icon: GitHubIcon },
    { label: copy.instagram, href: profile.instagramUrl, Icon: InstagramIcon },
  ].filter(({ href }) => Boolean(href));

  return (
    <nav className="social-links" aria-label={copy.contactLinks.profiles}>
      {links.map(({ label, href, Icon }) => (
        <a key={href} className="social-link" href={href} target="_blank" rel="noopener noreferrer">
          <Icon />
          <span>{label}</span>
          <ArrowUpRight />
          <span className="sr-only"> ({copy.contactLinks.newTab})</span>
        </a>
      ))}
    </nav>
  );
}

export function ContactSection({ copy }: { copy: PortfolioCopy }) {
  return (
    <>
      <div className="contact-heading">
        <p className="line-label">{copy.contact}</p>
        <h2 id="contact-title">{copy.haveProject} {copy.letsTalk}</h2>
        <p className="contact-description">{copy.contactLinks.intro}</p>
      </div>
      <div className="contact-methods">
        {getContactMethods(copy).map(({ id, label, action, hint, value, href, Icon, external }) => (
          <div className={`contact-card contact-card--${id}`} key={id}>
            <a className="contact-card-link" href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
              <span className="contact-card-heading"><span className="contact-icon"><Icon /></span><span>{label}</span></span>
              <bdi className="contact-value" dir="ltr">{value}</bdi>
              <span className="contact-hint">{hint}</span>
              <span className="contact-card-action">{action}<ArrowUpRight /></span>
              {external && <span className="sr-only"> ({copy.contactLinks.newTab})</span>}
            </a>
            {id === "email" && <CopyEmailButton email={value} label={copy.contactLinks.copyEmail} copiedLabel={copy.contactLinks.copied} errorMessage={copy.contactLinks.copyFailed} />}
          </div>
        ))}
      </div>
      <div className="contact-profiles">
        <p>{copy.contactLinks.profiles}</p>
        <SocialLinks copy={copy} />
      </div>
    </>
  );
}
