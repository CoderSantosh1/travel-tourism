import type { IconName } from "@/components/Icon";

/* ---------------- shared building blocks ---------------- */

export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export interface ButtonLink {
  text: string;
  url: string;
}

export interface ImageRef {
  src: string;
  alt: string;
}

/** Eyebrow + two-tone heading + intro used at the top of most sections. */
export interface SectionIntro {
  subtitle: string;
  title1: string;
  titleAccent: string;
  description: string;
}

export interface TitledText {
  title: string;
  text: string;
}

export interface IconFact {
  icon: IconName;
  label: string;
  value: string;
}

/* ---------------- forms ---------------- */

export type FieldKind = "name" | "email" | "phone" | "date" | "travelers" | "select" | "message";

export interface FormField {
  name: string;
  kind: FieldKind;
  icon: IconName;
  placeholder: string;
  /** Used in "Please enter …" messages; defaults to the placeholder. */
  label?: string;
  required?: boolean;
  options?: string[];
  rows?: number;
  /** Spans both columns in two-column forms. */
  fullWidth?: boolean;
}

export interface FormConfig {
  buttonText: string;
  successMessage: string;
  fields: FormField[];
}

export interface EnquiryFormData extends FormConfig {
  title: string;
  subtitle: string;
  sendIcon: boolean;
}

export interface ValidationMessages {
  requiredText: string;
  requiredSelect: string;
  nameMin: string;
  nameChars: string;
  nameMax: string;
  email: string;
  phone: string;
  datePast: string;
  travelersRange: string;
  messageMin: string;
  messageMax: string;
  fallbackLabel: string;
}

/* ---------------- common ---------------- */

export interface SeoData {
  titleDefault: string;
  titleTemplate: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  phoneUrl: string;
  phone2: string;
  email: string;
  emailUrl: string;
  support: string;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  description: string;
  quickLinksTitle: string;
  quickLinks: LinkItem[];
  servicesTitle: string;
  servicesLinks: LinkItem[];
  destinationsTitle: string;
  destinationsLinks: LinkItem[];
  /** "{year}" is replaced with the current year. */
  copyrightText: string;
}

export interface Breadcrumb {
  title: string;
  /** Browser tab title. */
  pageTitle: string;
  bgImage: string;
  /** Breadcrumb label when it differs from the title. */
  crumb?: string;
}

export interface CommonData {
  seo: SeoData;
  contactInfo: ContactInfo;
  Footer: FooterData;
  breadcrumbHomeLabel: string;
  aboutBreadcrumb: Breadcrumb;
  servicesBreadcrumb: Breadcrumb;
  destinationsBreadcrumb: Breadcrumb;
  destinationDetailBreadcrumb: Breadcrumb;
  galleryBreadcrumb: Breadcrumb;
  packagesBreadcrumb: Breadcrumb;
  packageDetailBreadcrumb: Breadcrumb;
  blogBreadcrumb: Breadcrumb;
  blogDetailBreadcrumb: Breadcrumb;
  contactBreadcrumb: Breadcrumb;
  bookingBreadcrumb: Breadcrumb;
  validationMessages: ValidationMessages;
}

/* ---------------- list items ---------------- */

export interface Service {
  title: string;
  icon: IconName;
  img: string;
  text: string;
}

export interface TourPackage {
  country: string;
  title: string;
  img: string;
  homeImg?: string;
  text: string;
  days: string;
}

export interface Destination {
  country: string;
  title: string;
  img: string;
  text: string;
}

export interface Testimonial {
  name: string;
  city: string;
  avatar: string;
  scene: string;
  text: string;
}

export interface BlogPost {
  cat: string;
  title: string;
  img: string;
  text: string;
  date: string;
}

export interface Guide {
  name: string;
  role: string;
  photo: string;
  cover: string;
  text: string;
}

export interface PopularPlace {
  name: string;
  trips: number;
  img: string;
}

export interface PopularData {
  title: string;
  tripsLabel: string;
  url: string;
  items: PopularPlace[];
}

export interface ImageCard {
  img: string;
  title: string;
  text: string;
}

export interface ContactCard {
  icon: IconName;
  title: string;
  lines: string[];
}

export interface RecentPost {
  title: string;
  date: string;
  img: string;
}

export interface ItineraryDay {
  title: string;
  text: string;
  img: string;
}

/* ---------------- section variants ---------------- */

export interface HeaderData {
  logo: string;
  logoAlt: string;
  navLinks: LinkItem[];
  bookingButton: ButtonLink;
}

export interface HeroData {
  subtitle: string;
  title1: string;
  titleHighlight: string;
  title2: string;
  description: string;
  slides: string[];
  primaryButton: ButtonLink;
  secondaryButton: ButtonLink;
}

export interface AboutFeature {
  icon: IconName;
  title: string;
  text: string;
  tone: "sky" | "gold";
}

export interface AboutData {
  subtitle: string;
  title1: string;
  titleAccent: string;
  badge: string;
  mainImage: ImageRef;
  smallImage: ImageRef;
  descriptions: string[];
  features: AboutFeature[];
}

export interface ServicesData extends SectionIntro {
  readMore: ButtonLink;
  services: Service[];
}

export interface PackagesData extends SectionIntro {
  button: ButtonLink;
  badgeText: string;
  details: ButtonLink;
  packages: TourPackage[];
}

export interface DestinationsData extends SectionIntro {
  button: ButtonLink;
  details: ButtonLink;
  destinations: Destination[];
}

export interface DestinationDetailData {
  images: string[];
  location: string;
  title: string;
  intro: string;
  goodToKnow: { title: string; facts: IconFact[] };
  whyVisit: TitledText;
  quote: string;
  experiences: { title: string; items: ImageCard[] };
  finalThoughts: TitledText;
  info: {
    title: string;
    items: IconFact[];
    ratingLabel: string;
    ratingStars: number;
    ratingText: string;
  };
  enquiry: EnquiryFormData;
  popular: PopularData;
}

export interface PackageDetailData extends SectionIntro {
  image: ImageRef;
  location: string;
  title: string;
  price: string;
  priceUnit: string;
  duration: string;
  cities: string;
  ratingText: string;
  overview: string;
  itineraryTitle: string;
  itinerary: ItineraryDay[];
  highlightsTitle: string;
  highlights: { icon: IconName; label: string }[];
  enquiry: EnquiryFormData;
  popular: PopularData;
}

export interface TestimonialsData extends SectionIntro {
  testimonials: Testimonial[];
}

export interface BlogsData extends SectionIntro {
  homeSubtitle: string;
  button: ButtonLink;
  details: ButtonLink;
  blogs: BlogPost[];
}

export interface BlogDetailData {
  image: ImageRef;
  date: string;
  author: string;
  category: string;
  title: string;
  intro: string;
  whyVisit: TitledText;
  images: string[];
  topDestinations: TitledText;
  quote: string;
  tips: { title: string; items: string[] };
  finalThoughts: TitledText;
  bottomImage: string;
  recent: { title: string; url: string; items: RecentPost[] };
}

export interface GalleryData extends SectionIntro {
  imageAltPrefix: string;
  images: string[];
}

export interface CtaData extends SectionIntro {
  button: ButtonLink;
  image: ImageRef;
}

export interface TeamData extends SectionIntro {
  members: Guide[];
}

export interface ContactData {
  help: SectionIntro & { bgImage: string; cards: ContactCard[] };
  touch: SectionIntro & { bgImage: string; details: ContactCard[] };
  form: FormConfig & { subtitle: string; title: string; description: string };
  map: { title: string; src: string };
}

export interface BookingData extends SectionIntro {
  image: ImageRef;
  form: FormConfig;
}

/* ---------------- category.json ---------------- */

/** One section: `{ variants: { TravelHero1: {...} } }`. */
interface Section<Name extends string, Data> {
  variants: Record<Name, Data>;
}

export interface TravelSections {
  Header: Section<"TravelHeader1", HeaderData>;
  Hero: Section<"TravelHero1", HeroData>;
  AboutUs: Section<"TravelAboutUs1", AboutData>;
  Services: Section<"TravelServices1", ServicesData>;
  Packages: Section<"TravelPackages1", PackagesData>;
  Destinations: Section<"TravelDestinations1", DestinationsData>;
  DestinationDetail: Section<"TravelDestinationDetail1", DestinationDetailData>;
  PackageDetail: Section<"TravelPackageDetail1", PackageDetailData>;
  Testimonials: Section<"TravelTestimonials1", TestimonialsData>;
  Blogs: Section<"TravelBlogs1", BlogsData>;
  BlogDetail: Section<"TravelBlogDetail1", BlogDetailData>;
  Gallery: Section<"TravelGallery1", GalleryData>;
  Cta: Section<"TravelCta1", CtaData>;
  Team: Section<"TravelTeam1", TeamData>;
  Contact: Section<"TravelContact1", ContactData>;
  Booking: Section<"TravelBooking1", BookingData>;
}

export interface TemplateComponent {
  key: string;
  component: string;
  props?: Record<string, string | boolean>;
}

export interface TemplateComponents {
  shared: { Header: string; Footer: string };
  pages: Record<string, { components: TemplateComponent[] }>;
}

export interface CategoryData {
  common: CommonData;
  categories: {
    Travel: {
      sections: TravelSections;
      templateComponents: TemplateComponents;
    };
  };
}

/**
 * What the JSON import looks like to TypeScript: JSON has no literal types, so icon
 * names and other string unions widen to `string`. Everything else is still checked.
 */
export type JsonShape<T> = T extends string
  ? string
  : T extends (infer U)[]
    ? JsonShape<U>[]
    : T extends object
      ? { [K in keyof T]: JsonShape<T[K]> }
      : T;
