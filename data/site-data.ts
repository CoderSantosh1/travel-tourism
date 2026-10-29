import type { NavLink, ContactInfo, Service, TourPackage, Destination, Testimonial, BlogPost, Guide } from "@/types/site";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/destinations" },
  { label: "Tour Packages", href: "/tour-packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const quickLinks: NavLink[] = [...navLinks];

export const contact: ContactInfo = {
  address: "123 Ocean Drive, Miami Beach, FL 33139, USA",
  phone: "+1 0000000",
  phone2: "+1 0000000",
  email: "info@xyz.com",
  support: "info@xyz.com",
};

export const services: Service[] = [
  { title: "Flight Booking", icon: "plane", img: "/services/flight-booking.jpg", text: "Find and book the best flight options for your dream destinations at affordable prices." },
  { title: "Hotel Booking", icon: "hotel", img: "/services/hotel-booking.jpg", text: "Choose from a wide range of handpicked hotels for a comfortable and memorable stay." },
  { title: "Tour Packages", icon: "map", img: "/services/tour-packages.jpg", text: "Explore our customized tour packages to top destinations across the world." },
  { title: "Travel Guide", icon: "guide", img: "/services/travel-guide.jpg", text: "Get expert travel guidance, tips and recommendations for a hassle-free journey." },
  { title: "Corporate Travel", icon: "users", img: "/services/corporate-travel.jpg", text: "Reliable and efficient corporate travel solutions for business trips, meetings and events." },
  { title: "Custom Tours", icon: "car", img: "/services/custom-tours.jpg", text: "Plan your own itinerary with our flexible and personalized custom tour services." },
  { title: "Destination Planning", icon: "compass", img: "/services/destination-planning.jpg", text: "Discover handpicked destinations and get complete planning support for a perfect trip." },
  { title: "Travel Events", icon: "calendar", img: "/services/travel-events.jpg", text: "Be a part of our exclusive travel events and experience something beyond the ordinary." },
  { title: "Photo Shoot", icon: "camera", img: "/services/photo-shoot.jpg", text: "Capture your special moments with professional travel photography." },
  { title: "Travel Insurance", icon: "shield", img: "/services/travel-insurance.jpg", text: "Travel with peace of mind with our reliable and affordable travel insurance options." },
  { title: "Visa Assistance", icon: "doc", img: "/services/visa-assistance.jpg", text: "Get complete support for your visa application process with easy documentation." },
  { title: "24/7 Travel Support", icon: "headset", img: "/services/travel-support.jpg", text: "We're always here to help you before, during and after your journey." },
];

export const packages: TourPackage[] = [
  { country: "Thailand", title: "Bangkok & Phuket", img: "/tour-packages/bangkok-phuket.jpg", text: "Explore vibrant cities, stunning beaches and rich culture.", days: "6 Days / 5 Nights" },
  { country: "Malaysia", title: "Langkawi Getaway", img: "/tour-packages/langkawi.jpg", text: "Relax on pristine beaches and discover natural beauty.", days: "5 Days / 4 Nights" },
  { country: "France", title: "Paris City Tour", img: "/tour-packages/paris-city.jpg", text: "Experience art, history and unforgettable landmarks.", days: "7 Days / 6 Nights" },
  { country: "Bali", title: "Island Escape", img: "/tour-packages/island-escape.jpg", homeImg: "/tour-packages/island-escape-home.jpg", text: "Enjoy crystal clear waters, scenic views and exciting activities.", days: "5 Days / 4 Nights" },
  { country: "Dubai", title: "Modern Dubai", img: "/tour-packages/modern-dubai.jpg", text: "Explore modern architecture, luxury shopping and city views.", days: "6 Days / 5 Nights" },
  { country: "Switzerland", title: "Swiss Alps Adventure", img: "/tour-packages/swiss-alps.jpg", text: "Discover snow-capped mountains, lakes and charming villages.", days: "7 Days / 6 Nights" },
  { country: "Singapore", title: "Singapore Explorer", img: "/tour-packages/singapore.jpg", text: "Enjoy modern attractions, shopping and vibrant city life.", days: "5 Days / 4 Nights" },
  { country: "Japan", title: "Discover Japan", img: "/tour-packages/japan.jpg", text: "Experience ancient temples, unique culture and scenic beauty.", days: "6 Days / 5 Nights" },
  { country: "Maldives", title: "Maldives Paradise", img: "/tour-packages/maldives.jpg", text: "Stay in luxury resorts and enjoy clear waters and white beaches.", days: "4 Days / 3 Nights" },
  { country: "Italy", title: "Explore Italy", img: "/tour-packages/italy.jpg", text: "Visit historic cities, charming coastlines and delicious cuisine.", days: "7 Days / 6 Nights" },
  { country: "UK", title: "London Highlights", img: "/tour-packages/london.jpg", text: "Explore iconic landmarks, rich history and vibrant culture.", days: "6 Days / 5 Nights" },
  { country: "USA", title: "New York Explorer", img: "/tour-packages/new-york.jpg", text: "Discover famous landmarks, exciting city life and diverse culture.", days: "5 Days / 4 Nights" },
];

export const destinations: Destination[] = [
  { country: "Italy", title: "San Miguel", img: "/destinations/san-miguel.jpg", text: "Explore historic streets, charming coastlines and vibrant culture." },
  { country: "Dubai", title: "Burj Khalifa", img: "/destinations/burj-khalifa.jpg", text: "Experience modern architecture, luxury and unforgettable city views." },
  { country: "Japan", title: "Kyoto Temple", img: "/destinations/kyoto-temple.jpg", text: "Discover ancient temples, rich traditions and scenic beauty." },
  { country: "Maldives", title: "Maldives Island", img: "/destinations/maldives-island.jpg", text: "Relax on pristine beaches and enjoy crystal clear waters." },
  { country: "France", title: "Paris", img: "/destinations/paris.jpg", text: "Experience romance, art, history and world-famous landmarks." },
  { country: "Switzerland", title: "Interlaken", img: "/destinations/interlaken.jpg", text: "Enjoy breathtaking mountains, lakes and outdoor adventures." },
  { country: "Thailand", title: "Phuket", img: "/destinations/phuket.jpg", text: "Beautiful beaches, vibrant nightlife and amazing island experiences." },
  { country: "Singapore", title: "Marina Bay", img: "/destinations/marina-bay.jpg", text: "Modern attractions, shopping, food and stunning city views." },
  { country: "USA", title: "New York", img: "/destinations/new-york.jpg", text: "Explore iconic landmarks, diverse culture and exciting city life." },
  { country: "Australia", title: "Sydney", img: "/destinations/sydney.jpg", text: "Stunning beaches, famous landmarks and a relaxed coastal lifestyle." },
  { country: "UK", title: "London", img: "/destinations/london.jpg", text: "Rich history, iconic landmarks and a vibrant city experience." },
  { country: "Indonesia", title: "Bali", img: "/destinations/bali.jpg", text: "Tropical beaches, lush landscapes and unique cultural experiences." },
];

export const testimonials: Testimonial[] = [
  { name: "Priya Sharma", city: "New Delhi, India", avatar: "/home/testimonials/avatar-1.jpg", scene: "/home/testimonials/scene-1.jpg", text: "Our trip was perfectly planned and executed. Everything from accommodations to sightseeing was seamless. Truly a memorable experience!" },
  { name: "Rahul Mehta", city: "Mumbai, India", avatar: "/home/testimonials/avatar-2.jpg", scene: "/home/testimonials/scene-2.jpg", text: "Amazing destinations, great planning, and excellent support throughout the journey. The team made our vacation stress-free and truly special." },
  { name: "Anjali Verma", city: "Bengaluru, India", avatar: "/home/testimonials/avatar-3.jpg", scene: "/home/testimonials/scene-3.jpg", text: "We had an incredible family trip! The itinerary was well-organized and the hotels were fantastic. Highly recommend for anyone looking for a hassle-free travel experience." },
];

export const blogs: BlogPost[] = [
  { cat: "Travel Tips", title: "10 Best Destinations for a Summer Vacation", img: "/blog/blog-1.jpg", text: "Explore the top destinations around the world that are perfect for your summer holiday.", date: "12 Oct 2026" },
  { cat: "Destinations", title: "A Complete Guide to Exploring Thailand", img: "/blog/blog-2.jpg", text: "Discover the best places to visit, things to do and travel tips for an amazing Thailand trip.", date: "10 Oct 2026" },
  { cat: "Travel Guide", title: "How to Plan a Perfect Budget Trip", img: "/blog/blog-3.jpg", text: "Learn simple tips to plan a memorable and budget-friendly trip without compromising on fun.", date: "08 Oct 2026" },
  { cat: "Travel Experience", title: "Top 5 Offbeat Destinations You Must Visit", img: "/blog/blog-4.jpg", text: "Escape the crowds and explore these hidden gems for a unique travel experience.", date: "05 Oct 2026" },
  { cat: "Hotel & Stay", title: "Best Resorts for a Relaxing Getaway", img: "/blog/blog-5.jpg", text: "Find the most beautiful resorts perfect for a peaceful and luxurious vacation.", date: "02 Oct 2026" },
  { cat: "Travel Tips", title: "Essential Travel Tips for First-Time Travelers", img: "/blog/blog-6.jpg", text: "Make your first trip easy and stress-free with these essential travel tips.", date: "28 Sep 2026" },
  { cat: "Destinations", title: "Exploring the Beauty of Europe", img: "/blog/blog-7.jpg", text: "A travel guide to the most beautiful cities, culture and experiences across Europe.", date: "25 Sep 2026" },
  { cat: "Travel Guide", title: "Top Beach Destinations for Honeymoon", img: "/blog/blog-8.jpg", text: "Discover the most romantic beach destinations for an unforgettable honeymoon experience.", date: "20 Sep 2026" },
  { cat: "Adventure", title: "Best Places for Adventure Lovers", img: "/blog/blog-9.jpg", text: "From mountain treks to water sports, explore the best adventure destinations worldwide.", date: "18 Sep 2026" },
  { cat: "Travel Experience", title: "A Guide to the Maldives Islands", img: "/blog/blog-10.jpg", text: "Crystal clear waters, luxurious stays and unforgettable experiences await you in the Maldives.", date: "15 Sep 2026" },
  { cat: "Destinations", title: "Top Cultural Destinations in Asia", img: "/blog/blog-11.jpg", text: "Explore the rich culture, history and traditions of Asia's most fascinating destinations.", date: "12 Sep 2026" },
  { cat: "Travel Tips", title: "How to Travel Safely During Your Trip", img: "/blog/blog-12.jpg", text: "Important safety tips to keep in mind while traveling and make your journey smooth and enjoyable.", date: "10 Sep 2026" },
];

export const gallery: string[] = [
  // Page 1
  "/gallery/gallery-1.jpg",
  "/gallery/gallery-2.jpg",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-4.jpg",
  "/gallery/gallery-5.jpg",
  "/gallery/gallery-6.jpg",
  "/gallery/gallery-7.jpg",
  "/gallery/gallery-8.jpg",
  "/gallery/gallery-9.jpg",
  "/gallery/gallery-10.jpg",
  "/gallery/gallery-11.jpg",
  "/gallery/gallery-12.jpg",
  // Page 2
  "/destinations/bali.jpg",
  "/destinations/burj-khalifa.jpg",
  "/destinations/interlaken.jpg",
  "/destinations/kyoto-temple.jpg",
  "/destinations/london.jpg",
  "/destinations/maldives-island.jpg",
  "/destinations/marina-bay.jpg",
  "/destinations/new-york.jpg",
  "/destinations/paris.jpg",
  "/destinations/phuket.jpg",
  "/destinations/san-miguel.jpg",
  "/destinations/sydney.jpg",
  // Page 3
  "/tour-packages/bangkok-phuket.jpg",
  "/tour-packages/island-escape.jpg",
  "/tour-packages/italy.jpg",
  "/tour-packages/japan.jpg",
  "/tour-packages/langkawi.jpg",
  "/tour-packages/london.jpg",
  "/tour-packages/maldives.jpg",
  "/tour-packages/modern-dubai.jpg",
  "/tour-packages/new-york.jpg",
  "/tour-packages/paris-city.jpg",
  "/tour-packages/singapore.jpg",
  "/tour-packages/swiss-alps.jpg",
  // Page 4
  "/blog/blog-1.jpg",
  "/blog/blog-2.jpg",
  "/blog/blog-3.jpg",
  "/blog/blog-4.jpg",
  "/blog/blog-5.jpg",
  "/blog/blog-6.jpg",
  "/blog/blog-7.jpg",
  "/blog/blog-8.jpg",
  "/blog/blog-9.jpg",
  "/blog/blog-10.jpg",
  "/blog/blog-11.jpg",
  "/blog/blog-12.jpg",
];

export const footerServices: string[] = ["Flight Booking", "Hotel Booking", "Tour Packages", "Travel Guide", "Corporate Travel", "Custom Tours"];
export const footerDestinations: string[] = ["Thailand", "Dubai", "Singapore", "Bali", "Maldives", "Europe"];

export const guides: Guide[] = [
  { name: "Priya Sharma", role: "Tour Guide", photo: "/about/guide-1.jpg", cover: "/about/guide-cover-1.jpg", text: "Specializes in beach destinations and cultural tours, ensuring you experience the best of every place." },
  { name: "Rahul Mehta", role: "Tour Guide", photo: "/about/guide-2.jpg", cover: "/about/guide-cover-2.jpg", text: "Adventure travel expert with in-depth knowledge of mountain treks and offbeat destinations." },
  { name: "Anjali Verma", role: "Tour Guide", photo: "/about/guide-3.jpg", cover: "/about/guide-cover-3.jpg", text: "Passionate about helping travelers explore tropical destinations and create unforgettable memories." },
  { name: "Karan Malhotra", role: "Tour Guide", photo: "/about/guide-4.jpg", cover: "/about/guide-cover-4.jpg", text: "Expert in international tours, known for planning smooth and enjoyable travel experiences." },
];
