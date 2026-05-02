export interface HeroStatsItem {
  value: string;
  label: string;
  /** Figma mobile may shorten the stat label vs desktop — omit if same everywhere */
  mobileLabel?: string;
}

export interface HeroContent {
  headline: string;
  subtext: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  image: { src: string; alt: string };
  stats: HeroStatsItem[];
}

export interface AboutContent {
  headline: string;
  body: string;
}

export interface OfferingItem {
  title: string;
  description: string;
  /** Local or remote path for the card image */
  image: string;
}

export interface OfferingsContent {
  headline: string;
  subtext: string;
  items: OfferingItem[];
}

export interface CreativeWorkVideoItem {
  title: string;
  youtubeUrl: string;
  thumbnail: string;
}

export interface CreativeWorkContent {
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
  videos: CreativeWorkVideoItem[];
}

export interface TestimonialItem {
  name: string;
  location: string;
  quote: string;
  clientType: string;
  avatar: string;
}

export interface TestimonialsContent {
  headline: string;
  subtext: string;
  loadMoreLabel: string;
  initialCount: number;
  items: TestimonialItem[];
}

export interface ResourceItem {
  title: string;
  description: string;
  image: string;
  badge?: string;
  linkUrl: string;
}

export interface ResourcesContent {
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
  items: ResourceItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqContent {
  /** Desktop / long heading (Figma desktop frame) */
  headline: string;
  /** Short heading for small screens (Figma mobile: "FAQ") */
  headlineMobile: string;
  subtext: string;
  items: FaqItem[];
}

export interface FinalCtaContent {
  headline: string;
  subtext: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  backgroundImage: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ContactContent {
  email: string;
  phone: string;
  social: SocialLink[];
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface NavContent {
  logo: {
    wordmark: string;
    markSrc: string;
  };
  links: NavLinkItem[];
  cta: { label: string; href: string };
  menuIconSrc: string;
}

export interface SiteContent {
  nav: NavContent;
  hero: HeroContent;
  about: AboutContent;
  offerings: OfferingsContent;
  creativeWork: CreativeWorkContent;
  testimonials: TestimonialsContent;
  resources: ResourcesContent;
  faq: FaqContent;
  finalCta: FinalCtaContent;
  contact: ContactContent;
  footer: { copyright: string };
}

export const siteContent: SiteContent = {
  nav: {
    logo: {
      wordmark: "rangi",
      markSrc: "/images/nav/logo-mark.svg",
    },
    links: [
      { label: "About", href: "#about" },
      { label: "Offerings", href: "#offerings" },
      { label: "Work", href: "#work" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Resources", href: "#resources" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Contact me", href: "#contact" },
    menuIconSrc: "/images/nav/menu-icon.svg",
  },
  hero: {
    headline:
      "Heal your body.\nExpress your truth.\nTransform with Dance Movement.",
    subtext:
      "Discover how movement can unlock emotional healing, spark creativity, and reconnect you with your authentic self — in a safe and supportive space.",
    ctaPrimary: { label: "Book a session", href: "#contact" },
    ctaSecondary: { label: "Discover my work", href: "#work" },
    image: {
      src: "/images/placeholders/hero.png",
      alt: "Rangi Fernando in nature",
    },
    stats: [
      {
        value: "1500+",
        label: "Students & participant",
        mobileLabel: "Students",
      },
      { value: "30+", label: "Corporate sessions" },
    ],
  },
  about: {
    headline:
      "I’m Rangi Fernando, a Dance Movement Therapist, educator, and creative guide.",
    body: "My journey began with a love for dance and grew into a calling: using movement as a tool for healing, connection, and transformation.",
  },
  offerings: {
    headline: "My offerings",
    subtext: "Therapy, growth, and expression – designed for you.",
    items: [
      {
        title: "Retreats",
        description:
          "Immersive journeys blending dance, mindfulness, and nature for renewal.",
        image: "/images/offerings/offering-retreats.png",
      },
      {
        title: "Corporate Sessions",
        description:
          "Wellness-focused experiences to help teams reduce stress, bond, and connect.",
        image: "/images/offerings/offering-corporate.png",
      },
      {
        title: "Individual\u00a0Workshops",
        description:
          "Personalized sessions carefully tailored to your needs, emotions, and goals.",
        image: "/images/offerings/offering-individual.png",
      },
      {
        title: "Group Workshops",
        description:
          "Interactive group experiences that inspire, energize, and build connection.",
        image: "/images/offerings/offering-group.png",
      },
    ],
  },
  creativeWork: {
    headline: "My creative work",
    subtext: "Beyond therapy, I share my creative journey through YouTube.",
    ctaLabel: "View all on YouTube",
    ctaHref: "https://youtube.com/@rangifernando",
    videos: [
      {
        title: "Creative work video 1",
        youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_PLACEHOLDER_1",
        thumbnail: "/images/creative-work/video-2.png",
      },
      {
        title: "Creative work video 2",
        youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_PLACEHOLDER_2",
        thumbnail: "/images/creative-work/video-2.png",
      },
      {
        title: "Creative work video 3",
        youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_PLACEHOLDER_3",
        thumbnail: "/images/creative-work/video-2.png",
      },
      {
        title: "Creative work video 4",
        youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_PLACEHOLDER_4",
        thumbnail: "/images/creative-work/video-2.png",
      },
      {
        title: "Creative work video 5",
        youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_PLACEHOLDER_5",
        thumbnail: "/images/creative-work/video-2.png",
      },
    ],
  },
  testimonials: {
    headline: "Testimonials",
    subtext: "Stories of healing through movement.",
    loadMoreLabel: "Load more testimonials",
    initialCount: 6,
    items: [
      {
        name: "Amaya Perera",
        location: "Colombo",
        quote:
          "“Rangi creates such a safe and supportive space. Every session helped me release emotions I didn’t even realize I was holding onto. I feel lighter, calmer, and more connected to myself.”",
        clientType: "- Individual Client",
        avatar: "/images/placeholders/avatar.png",
      },
      {
        name: "Nishani Fernando",
        location: "Wellness Retreat 2024",
        quote:
          "“The retreat was life-changing. Between the dance sessions, mindfulness practices, and being surrounded by nature, I left feeling completely renewed. It gave me tools I still use every day.”",
        clientType: "- Retreat Participant",
        avatar: "/images/placeholders/avatar.png",
      },
      {
        name: "Shalini Jayawardena",
        location: "HR Manager, TechCorp",
        quote:
          "“The retreat was life-changing. Between the dance sessions, mindfulness practices, and being surrounded by nature, I left feeling completely renewed. It gave me tools I still use every day.”",
        clientType: "- Corporate Client",
        avatar: "/images/placeholders/avatar.png",
      },
      {
        name: "Ruwani Dias",
        location: "Group Workshop 2023",
        quote:
          "“I was nervous to join at first, but the group energy was amazing. The way Rangi guided us made it easy to express myself through movement. I felt free and joyful again.”",
        clientType: "- Group Workshop Attendee",
        avatar: "/images/placeholders/avatar.png",
      },
      {
        name: "Tharushi Senanayake",
        location: "Regular Participant",
        quote:
          "“I’ve attended multiple sessions with Rangi, and each time I discover something new about myself. Her gentle yet powerful approach has truly helped me grow emotionally and creatively.”",
        clientType: "- Long-term Participant",
        avatar: "/images/placeholders/avatar.png",
      },
      {
        name: "Pavani Wickramasinghe",
        location: "Wellness Retreat 2025",
        quote:
          "“The retreat gave me the space to slow down, reconnect with my body, and truly listen to myself. Rangi’s guidance was gentle yet powerful, and I left feeling grounded and deeply refreshed.”",
        clientType: "- Retreat Participant",
        avatar: "/images/placeholders/avatar.png",
      },
    ],
  },
  resources: {
    headline: "Resources",
    subtext: "Free tools to support your journey.",
    ctaLabel: "View my blog",
    ctaHref: "#blog",
    items: [
      {
        title: "Embodied Grounding",
        description: "Simple practices for daily regulation.",
        image: "/images/resources/resource-1.png",
        badge: "eBook",
        linkUrl: "#resource-embodied-grounding",
      },
      {
        title: "The Moving Journal",
        description: "Daily reflections through mindful movement.",
        image: "/images/resources/resource-2.png",
        linkUrl: "#resource-moving-journal",
      },
      {
        title: "Dance & Mindfulness",
        description: "Breathing and movement practices for inner calm.",
        image: "/images/resources/resource-3.png",
        linkUrl: "#resource-dance-mindfulness",
      },
      {
        title: "Creative Release",
        description: "Exercises to unlock expression and joy.",
        image: "/images/resources/resource-4.png",
        linkUrl: "#resource-creative-release",
      },
    ],
  },
  faq: {
    headline: "Frequently asked questions",
    headlineMobile: "FAQ",
    subtext: "Answers to help you feel confident before joining a session.",
    items: [
      {
        question: "What is Dance Movement Therapy?",
        answer: "[Answer to be added]",
      },
      {
        question: "Do I need dance experience to join?",
        answer: "[Answer to be added]",
      },
      {
        question: "What should I wear to a session or workshop?",
        answer: "[Answer to be added]",
      },
      {
        question: "How do corporate sessions work?",
        answer: "[Answer to be added]",
      },
      {
        question: "How can I book a retreat or workshop?",
        answer: "[Answer to be added]",
      },
    ],
  },
  finalCta: {
    headline: "Ready to Begin Your Journey?",
    subtext:
      "Take the first step toward healing, creativity, and self-discovery. Book your session today and reconnect with your true self.",
    ctaPrimary: { label: "Book a session", href: "#contact" },
    ctaSecondary: {
      label: "Watch my journey",
      href: "https://youtube.com/@rangifernando",
    },
    backgroundImage: "/images/cta-background.png",
  },
  contact: {
    email: "hello@rangifernando.example",
    phone: "+94 00 000 0000",
    social: [
      { label: "Instagram", href: "https://instagram.com/" },
      { label: "YouTube", href: "https://www.youtube.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
    ],
  },
  footer: {
    copyright: "© 2025 Rangi Fernando. Website by MindfulUX Studio.",
  },
};
