import raw from "./category.json";
import type { CategoryData, JsonShape } from "@/types/site";

// `satisfies` makes the build fail if category.json stops matching types/site.ts.
const data = (raw satisfies JsonShape<CategoryData>) as unknown as CategoryData;

const sections = data.categories.Travel.sections;

export const common = data.common;
export const templateComponents = data.categories.Travel.templateComponents;

export const headerData = sections.Header.variants.TravelHeader1;
export const heroData = sections.Hero.variants.TravelHero1;
export const aboutData = sections.AboutUs.variants.TravelAboutUs1;
export const servicesData = sections.Services.variants.TravelServices1;
export const packagesData = sections.Packages.variants.TravelPackages1;
export const destinationsData = sections.Destinations.variants.TravelDestinations1;
export const destinationDetailData = sections.DestinationDetail.variants.TravelDestinationDetail1;
export const packageDetailData = sections.PackageDetail.variants.TravelPackageDetail1;
export const testimonialsData = sections.Testimonials.variants.TravelTestimonials1;
export const blogsData = sections.Blogs.variants.TravelBlogs1;
export const blogDetailData = sections.BlogDetail.variants.TravelBlogDetail1;
export const galleryData = sections.Gallery.variants.TravelGallery1;
export const ctaData = sections.Cta.variants.TravelCta1;
export const teamData = sections.Team.variants.TravelTeam1;
export const contactData = sections.Contact.variants.TravelContact1;
export const bookingData = sections.Booking.variants.TravelBooking1;
