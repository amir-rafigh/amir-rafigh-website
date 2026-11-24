import { profile, projects, services, statistics, type Project } from "./portfolio";

export type Locale = "en" | "fa";

export const portfolioCopy = {
  en: {
    home: "Home", about: "About", projects: "Projects", contact: "Contacts",
    skip: "Skip to content", navigation: "Main navigation", technologies: "Technologies",
    greeting: "Hello", intro: "I’m", projectPrompt: "Got a project?", resume: "My resume",
    sampleResume: "Sample resume", technologyStack: "Technology stack", services: "Services",
    aboutMe: "About me", viewProject: "View project",
    age: "Age", yearsOld: "years old", degree: "Education",
    projectFor: "View project:",
    scanProject: "Scan to open on your phone",
    qrCode: "QR code",
    githubNotice: "The GitHub profile will be linked when the demo content is updated.",
    linkedinNotice: "The LinkedIn profile will be linked when the demo content is updated.",
    email: "Email", githubProfile: "GitHub profile", linkedinProfile: "LinkedIn profile",
    instagram: "Instagram", telegram: "Telegram", call: "Call", close: "Close dialog",
    footer: "Designed with love, all rights reserved for",
    language: "فارسی", languageLabel: "مشاهدهٔ نسخهٔ فارسی", languageHref: "/persian",
    name: "Name", message: "Message", submit: "Submit", haveProject: "Have a project?",
    letsTalk: "Let’s talk!", requiredFeedback: "Enter your name and a message.",
    submittedFeedback: "Demo submitted. This form is for preview only.",
    contactLinks: {
      direct: "Contact me directly", profiles: "Find me online", newTab: "opens in a new tab",
      intro: "Have a project or a role in mind? Choose the way that works best for you to get in touch.",
      emailAction: "Send an email", telegramAction: "Message on Telegram", phoneAction: "Call me",
      phone: "Phone", linkedin: "LinkedIn", github: "GitHub",
      emailHint: "For project briefs and job opportunities",
      telegramHint: "Start a conversation directly",
      phoneHint: "Prefer a call? Let’s talk.",
      copyEmail: "Copy email", copied: "Email copied", copyFailed: "Couldn’t copy. Select the email address above to copy it manually.",
    },
  },
  fa: {
    home: "خانه", about: "درباره من", projects: "پروژه‌ها", contact: "تماس",
    skip: "رفتن به محتوای اصلی", navigation: "منوی اصلی", technologies: "فناوری‌ها",
    greeting: "سلام", intro: "من", projectPrompt: "پروژه‌ای دارید؟", resume: "رزومه من",
    sampleResume: "پیش‌نمایش رزومه", technologyStack: "فناوری‌های مورد استفاده", services: "خدمات",
    aboutMe: "درباره من", viewProject: "مشاهده پروژه",
    age: "سن", yearsOld: "سال", degree: "مدرک تحصیلی",
    projectFor: "مشاهدهٔ پروژهٔ",
    scanProject: "برای باز کردن در موبایل اسکن کنید",
    qrCode: "کد QR",
    githubNotice: "پس از به‌روزرسانی محتوای نمونه، پیوند پروفایل گیت‌هاب اضافه می‌شود.",
    linkedinNotice: "پس از به‌روزرسانی محتوای نمونه، پیوند پروفایل لینکدین اضافه می‌شود.",
    email: "ایمیل", githubProfile: "پروفایل گیت‌هاب", linkedinProfile: "پروفایل لینکدین",
    instagram: "اینستاگرام", telegram: "تلگرام", call: "تماس با", close: "بستن پنجره",
    footer: "طراحی‌شده با عشق؛ تمامی حقوق محفوظ است برای",
    language: "English", languageLabel: "View the English version", languageHref: "/",
    name: "نام", message: "پیام", submit: "ارسال", haveProject: "پروژه‌ای دارید؟",
    letsTalk: "بیایید صحبت کنیم!", requiredFeedback: "لطفاً نام و پیام خود را وارد کنید.",
    submittedFeedback: "فرم به‌صورت آزمایشی ثبت شد. این فرم فقط برای پیش‌نمایش است و پیامی ارسال نمی‌کند.",
    contactLinks: {
      direct: "ارتباط مستقیم با من", profiles: "در شبکه‌های اجتماعی", newTab: "در زبانهٔ جدید باز می‌شود",
      intro: "برای صحبت دربارهٔ یک پروژه یا فرصت شغلی، از هر راهی که برایتان راحت‌تر است با من در ارتباط باشید.",
      emailAction: "ارسال ایمیل", telegramAction: "پیام در تلگرام", phoneAction: "تماس تلفنی",
      phone: "تلفن", linkedin: "لینکدین", github: "گیت‌هاب",
      emailHint: "برای پیشنهاد همکاری و جزئیات پروژه",
      telegramHint: "برای شروع یک گفت‌وگوی مستقیم",
      phoneHint: "گفت‌وگوی تلفنی را ترجیح می‌دهید؟",
      copyEmail: "کپی ایمیل", copied: "ایمیل کپی شد", copyFailed: "کپی انجام نشد. برای کپی دستی، آدرس ایمیل بالا را انتخاب کنید.",
    },
  },
};

export type PortfolioCopy = typeof portfolioCopy.en;

export const persianProfile = {
  ...profile,
  name: "امیر رفیق",
  firstName: "امیر",
  role: "مهندس نرم‌افزار",
  degree: "کارشناسی مهندسی کامپیوتر",
  bio: "من مهندس نرم‌افزار هستم و به طراحی و ساخت برنامه‌های تحت وب مقیاس‌پذیر، کارآمد و کاربرمحور علاقه دارم. با استفاده از اصول مهندسی و تفکر سیستمی ایده‌های پیچیده را به راهکارهای دیجیتال و قابل اعتماد تبدیل می‌کنم.",
  portrait: { ...profile.portrait, alt: "امیر رفیق با عینک آفتابی در کنار دریا" },
};

type ProjectTranslation = {
  title: string;
  description: string;
  alt: string;
  overlayAlt?: string;
  companionAlt?: string;
  demoLabels?: string[];
};

const projectTranslations: Record<string, ProjectTranslation> = {
  "shared-workspace-app": {
    title: "رزرو فضای کار اشتراکی و رویدادها",
    description: "یک برنامه تحت وب فارسی برای فضای کار اشتراکی. مشتریان می‌توانند وضعیت میزها و اتاق‌های جلسه را بررسی کنند، درخواست رزرو ثبت و پیگیری کنند و در رویدادها نام‌نویسی کنند یا به فهرست انتظار بپیوندند. کارکنان درخواست‌ها را در داشبوردی جداگانه بررسی می‌کنند و سامانه پس از تأیید، یک میز یا اتاق آزاد را اختصاص می‌دهد و از رزرو هم‌زمان آن جلوگیری می‌کند.",
    alt: "صفحهٔ اصلی فارسی فضای کار اشتراکی با نمایش اتاق جلسه و میز اشتراکی",
    overlayAlt: "صفحهٔ رزرو اتاق جلسه با گزینه‌های انتخاب تاریخ و ساعت شروع",
    demoLabels: ["آدرس وب", " آدرس ادمین پنل"],
  },
  roboolift: {
    title: "روبولیفت (ROBOOLIFT)",
    description: "روبولیفت یک پلتفرم تحت وب است که به تیم‌های پروژه در طراحی آسانسور و درخواست خدمات مهندسی کمک می‌کند. پیش‌نمایش‌های بصری و محاسبات اولیهٔ آن نشان می‌دهند چه آسانسوری در فضای چاه موجود قابل اجراست و به برآورد ابعاد کابین، ظرفیت و فواصل ایمنی مورد نیاز کمک می‌کنند. تیم‌ها می‌توانند برای پروژهٔ خود، نقشه‌ها و مشخصات فنی متناسب با ابعاد و شرایط چاه دریافت کنند، کابین سفارش دهند یا نقشه‌های موجود را برای بررسی مهندسی ارسال کنند.",
    alt: "رابط طراحی سریع روبولیفت با نمای ایزومتریک چاه آسانسور در کنار ورودی‌های پروژه",
  },
  "food-menus": {
    title: "منوی دیجیتال رستوران و کافه",
    description: "دو منوی دیجیتال فارسی برای کازا ایتالی و کافه قلی‌وند. مشتریان می‌توانند با فیلتر دسته‌بندی‌ها و اسلایدرهای تصویری، انواع پیتزا، دسر و نوشیدنی را بررسی کنند. هر منو هویت بصری ویژهٔ خود را دارد و با چیدمان واکنش‌گرا و انیمیشن‌های جابه‌جایی، مرور منو را در موبایل روان و راحت می‌کند.",
    alt: "منوی سبزرنگ پیتزای کازا ایتالی و منوی مشکی و قرمز دسر کافه قلی‌وند در کنار هم",
    demoLabels: ["کازا ایتالی", "کافه قلی‌وند"],
  },
  "qeytran-restaurant": {
    title: "وب‌سایت و منوی دیجیتال رستوران قیطران",
    description: "یک وب‌سایت فارسی برای رستوران قیطران که صفحهٔ معرفی رستوران را به منوی دیجیتال تعاملی آن پیوند می‌دهد. مهمانان می‌توانند دسته‌بندی غذاها و تصاویر هر غذا را مرور کنند و ترکیبات، قیمت، تعداد نفرات و زمان آماده‌سازی را ببینند. ترکیب رنگ‌های کرم و زرشکی، هویت بصری رستوران را در هر دو صفحه حفظ می‌کند و چیدمان راست‌به‌چپ و واکنش‌گرا، مرور صفحات را در موبایل آسان می‌سازد.",
    alt: "صفحهٔ معرفی رستوران قیطران در موبایل با تایپوگرافی کرم و زرشکی و تصویر بشقاب کباب ایرانی",
    companionAlt: "منوی دیجیتال قیطران با دسته‌بندی غذاها، تصویر چلوکباب سلطانی، ترکیبات و قیمت",
    demoLabels: ["معرفی رستوران", "منوی دیجیتال"],
  },
  "cake-ordering-app": {
    title: "سفارش آنلاین کیک",
    description: "یک برنامه ارسال سفارش آنلاین کیک که مشتریان را در انتخاب و شخصی‌سازی کیک مراسمشان راهنمایی می‌کند. مشتریان می‌توانند طرح‌های کیک را مرور و فیلتر کنند، تعداد مهمانان و رنگ کیک را مشخص کنند و پیام دلخواهشان را اضافه کنند. پیش‌نمایش تصویری و خلاصهٔ سفارش، امکان بازبینی انتخاب‌ها را فراهم می‌کنند.",
    alt: "صفحهٔ اصلی سفارش کیک فارسی با تصویر یک کیک صورتی چندطبقه",
    overlayAlt: "صفحهٔ شخصی‌سازی کیک با گزینه‌های تعداد مهمانان، رنگ و پیام دلخواه",
  },
  "retail-landing-pages": {
    title: "صفحات معرفی فروشگاه‌های محلی",
    description: "دو صفحهٔ معرفی فارسی برای هم‌مکتب کیچن، فروشگاه لوازم آشپزخانه، و رفیق صادقی، فروشندهٔ عسل طبیعی سبلان. هر صفحه فروشگاه را معرفی می‌کند و دسترسی سریع به تماس تلفنی، مسیریابی و شبکه‌های اجتماعی را در اختیار بازدیدکنندگان قرار می‌دهد.",
    alt: "صفحهٔ موبایل هم‌مکتب کیچن با نمایش لوازم آشپزخانه و پیوندهای مسیریابی و تماس",
    companionAlt: "صفحهٔ موبایل رفیق صادقی با عسل سبلان، اطلاعات فروشگاه و پیوندهای شبکه‌های اجتماعی",
    demoLabels: ["هم‌مکتب کیچن", "عسل سبلان"],
  },
};

// Keep assets, technologies, contact details and URLs shared with the English portfolio.
export function getPortfolio(locale: Locale) {
  if (locale === "en") return { profile, projects, services, statistics };

  const translatedProjects: Project[] = projects.map((project) => {
    const translation = projectTranslations[project.id];
    if (!translation) return project;

    return {
      ...project,
      title: translation.title,
      description: translation.description,
      image: {
        ...project.image,
        alt: translation.alt,
        overlay: project.image.overlay && {
          ...project.image.overlay,
          alt: translation.overlayAlt ?? project.image.overlay.alt,
        },
        companion: project.image.companion && {
          ...project.image.companion,
          alt: translation.companionAlt ?? project.image.companion.alt,
        },
      },
      demoLinks: project.demoLinks?.map((link, index) => ({
        ...link,
        label: translation.demoLabels?.[index] ?? link.label,
      })),
    };
  });

  const serviceLabels = { website: "توسعهٔ وب‌سایت", app: "توسعهٔ اپلیکیشن", hosting: "میزبانی وب‌سایت" };
  const statisticLabels = ["پروژهٔ تکمیل‌شده", "سال تجربه"];

  return {
    profile: persianProfile,
    projects: translatedProjects,
    services: services.map((service) => ({ ...service, label: serviceLabels[service.icon] })),
    statistics: statistics.map((statistic, index) => ({ ...statistic, label: statisticLabels[index] })),
  };
}
