export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Destinations", href: "/destinations" },
  { label: "Tour Packages", href: "/tour-packages" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const quickLinks = [...navLinks.slice(0, 5), { label: "Gallery", href: "/gallery" }, ...navLinks.slice(5)];

export const contact = {
  address: "123 Travel Street, New Delhi, India - 110001",
  phone: "+91 98765 43210",
  phone2: "+91 98765 43211",
  email: "info@touravibe.com",
  support: "support@touravibe.com",
};

export const services = [
  { title: "Flight Booking", icon: "plane", img: "/images/services/flight-booking.jpg", text: "Find and book the best flight options for your dream destinations at affordable prices." },
  { title: "Hotel Booking", icon: "hotel", img: "/images/services/hotel-booking.jpg", text: "Choose from a wide range of handpicked hotels for a comfortable and memorable stay." },
  { title: "Tour Packages", icon: "map", img: "/images/services/tour-packages.jpg", text: "Explore our customized tour packages to top destinations across the world." },
  { title: "Travel Guide", icon: "guide", img: "/images/services/travel-guide.jpg", text: "Get expert travel guidance, tips and recommendations for a hassle-free journey." },
  { title: "Corporate Travel", icon: "users", img: "/images/services/corporate-travel.jpg", text: "Reliable and efficient corporate travel solutions for business trips, meetings and events." },
  { title: "Custom Tours", icon: "car", img: "/images/services/custom-tours.jpg", text: "Plan your own itinerary with our flexible and personalized custom tour services." },
  { title: "Destination Planning", icon: "compass", img: "/images/services/destination-planning.jpg", text: "Discover handpicked destinations and get complete planning support for a perfect trip." },
  { title: "Travel Events", icon: "calendar", img: "/images/services/travel-events.jpg", text: "Be a part of our exclusive travel events and experience something beyond the ordinary." },
  { title: "Photo Shoot", icon: "camera", img: "/images/services/photo-shoot.jpg", text: "Capture your special moments with professional travel photography." },
  { title: "Travel Insurance", icon: "shield", img: "/images/services/travel-insurance.jpg", text: "Travel with peace of mind with our reliable and affordable travel insurance options." },
  { title: "Visa Assistance", icon: "doc", img: "/images/services/visa-assistance.jpg", text: "Get complete support for your visa application process with easy documentation." },
  { title: "24/7 Travel Support", icon: "headset", img: "/images/services/travel-support.jpg", text: "We're always here to help you before, during and after your journey." },
];

export const packages = [
  { country: "Thailand", title: "Bangkok & Phuket", img: "/images/packages/bangkok-phuket.jpg", text: "Explore vibrant cities, stunning beaches and rich culture.", days: "6 Days / 5 Nights" },
  { country: "Malaysia", title: "Langkawi Getaway", img: "/images/packages/langkawi.jpg", text: "Relax on pristine beaches and discover natural beauty.", days: "5 Days / 4 Nights" },
  { country: "France", title: "Paris City Tour", img: "/images/packages/paris-city.jpg", text: "Experience art, history and unforgettable landmarks.", days: "7 Days / 6 Nights" },
  { country: "Bali", title: "Island Escape", img: "/images/packages/island-escape.jpg", homeImg: "/images/packages/island-escape-home.jpg", text: "Enjoy crystal clear waters, scenic views and exciting activities.", days: "5 Days / 4 Nights" },
  { country: "Dubai", title: "Modern Dubai", img: "/images/packages/modern-dubai.jpg", text: "Explore modern architecture, luxury shopping and city views.", days: "6 Days / 5 Nights" },
  { country: "Switzerland", title: "Swiss Alps Adventure", img: "/images/packages/swiss-alps.jpg", text: "Discover snow-capped mountains, lakes and charming villages.", days: "7 Days / 6 Nights" },
  { country: "Singapore", title: "Singapore Explorer", img: "/images/packages/singapore.jpg", text: "Enjoy modern attractions, shopping and vibrant city life.", days: "5 Days / 4 Nights" },
  { country: "Japan", title: "Discover Japan", img: "/images/packages/japan.jpg", text: "Experience ancient temples, unique culture and scenic beauty.", days: "6 Days / 5 Nights" },
  { country: "Maldives", title: "Maldives Paradise", img: "/images/packages/maldives.jpg", text: "Stay in luxury resorts and enjoy clear waters and white beaches.", days: "4 Days / 3 Nights" },
  { country: "Italy", title: "Explore Italy", img: "/images/packages/italy.jpg", text: "Visit historic cities, charming coastlines and delicious cuisine.", days: "7 Days / 6 Nights" },
  { country: "UK", title: "London Highlights", img: "/images/packages/london.jpg", text: "Explore iconic landmarks, rich history and vibrant culture.", days: "6 Days / 5 Nights" },
  { country: "USA", title: "New York Explorer", img: "/images/packages/new-york.jpg", text: "Discover famous landmarks, exciting city life and diverse culture.", days: "5 Days / 4 Nights" },
];

export const destinations = [
  { country: "Italy", title: "San Miguel", img: "/images/destinations/san-miguel.jpg", text: "Explore historic streets, charming coastlines and vibrant culture." },
  { country: "Dubai", title: "Burj Khalifa", img: "/images/destinations/burj-khalifa.jpg", text: "Experience modern architecture, luxury and unforgettable city views." },
  { country: "Japan", title: "Kyoto Temple", img: "/images/destinations/kyoto-temple.jpg", text: "Discover ancient temples, rich traditions and scenic beauty." },
  { country: "Maldives", title: "Maldives Island", img: "/images/destinations/maldives-island.jpg", text: "Relax on pristine beaches and enjoy crystal clear waters." },
  { country: "France", title: "Paris", img: "/images/destinations/paris.jpg", text: "Experience romance, art, history and world-famous landmarks." },
  { country: "Switzerland", title: "Interlaken", img: "/images/destinations/interlaken.jpg", text: "Enjoy breathtaking mountains, lakes and outdoor adventures." },
  { country: "Thailand", title: "Phuket", img: "/images/destinations/phuket.jpg", text: "Beautiful beaches, vibrant nightlife and amazing island experiences." },
  { country: "Singapore", title: "Marina Bay", img: "/images/destinations/marina-bay.jpg", text: "Modern attractions, shopping, food and stunning city views." },
  { country: "USA", title: "New York", img: "/images/destinations/new-york.jpg", text: "Explore iconic landmarks, diverse culture and exciting city life." },
  { country: "Australia", title: "Sydney", img: "/images/destinations/sydney.jpg", text: "Stunning beaches, famous landmarks and a relaxed coastal lifestyle." },
  { country: "UK", title: "London", img: "/images/destinations/london.jpg", text: "Rich history, iconic landmarks and a vibrant city experience." },
  { country: "Indonesia", title: "Bali", img: "/images/destinations/bali.jpg", text: "Tropical beaches, lush landscapes and unique cultural experiences." },
];

export const testimonials = [
  { name: "Priya Sharma", city: "New Delhi, India", avatar: "/images/testimonials/avatar-1.jpg", scene: "/images/testimonials/scene-1.jpg", text: "Our trip was perfectly planned and executed. Everything from accommodations to sightseeing was seamless. Truly a memorable experience!" },
  { name: "Rahul Mehta", city: "Mumbai, India", avatar: "/images/testimonials/avatar-2.jpg", scene: "/images/testimonials/scene-2.jpg", text: "Amazing destinations, great planning, and excellent support throughout the journey. The team made our vacation stress-free and truly special." },
  { name: "Anjali Verma", city: "Bengaluru, India", avatar: "/images/testimonials/avatar-3.jpg", scene: "/images/testimonials/scene-3.jpg", text: "We had an incredible family trip! The itinerary was well-organized and the hotels were fantastic. Highly recommend for anyone looking for a hassle-free travel experience." },
];

export const blogs = [
  { cat: "Travel Tips", title: "10 Best Destinations for a Summer Vacation", img: "/images/blog/blog-1.jpg", text: "Explore the top destinations around the world that are perfect for your summer holiday.", date: "12 Oct 2026" },
  { cat: "Destinations", title: "A Complete Guide to Exploring Thailand", img: "/images/blog/blog-2.jpg", text: "Discover the best places to visit, things to do and travel tips for an amazing Thailand trip.", date: "10 Oct 2026" },
  { cat: "Travel Guide", title: "How to Plan a Perfect Budget Trip", img: "/images/blog/blog-3.jpg", text: "Learn simple tips to plan a memorable and budget-friendly trip without compromising on fun.", date: "08 Oct 2026" },
  { cat: "Travel Experience", title: "Top 5 Offbeat Destinations You Must Visit", img: "/images/blog/blog-4.jpg", text: "Escape the crowds and explore these hidden gems for a unique travel experience.", date: "05 Oct 2026" },
  { cat: "Hotel & Stay", title: "Best Resorts for a Relaxing Getaway", img: "/images/blog/blog-5.jpg", text: "Find the most beautiful resorts perfect for a peaceful and luxurious vacation.", date: "02 Oct 2026" },
  { cat: "Travel Tips", title: "Essential Travel Tips for First-Time Travelers", img: "/images/blog/blog-6.jpg", text: "Make your first trip easy and stress-free with these essential travel tips.", date: "28 Sep 2026" },
  { cat: "Destinations", title: "Exploring the Beauty of Europe", img: "/images/blog/blog-7.jpg", text: "A travel guide to the most beautiful cities, culture and experiences across Europe.", date: "25 Sep 2026" },
  { cat: "Travel Guide", title: "Top Beach Destinations for Honeymoon", img: "/images/blog/blog-8.jpg", text: "Discover the most romantic beach destinations for an unforgettable honeymoon experience.", date: "20 Sep 2026" },
  { cat: "Adventure", title: "Best Places for Adventure Lovers", img: "/images/blog/blog-9.jpg", text: "From mountain treks to water sports, explore the best adventure destinations worldwide.", date: "18 Sep 2026" },
  { cat: "Travel Experience", title: "A Guide to the Maldives Islands", img: "/images/blog/blog-10.jpg", text: "Crystal clear waters, luxurious stays and unforgettable experiences await you in the Maldives.", date: "15 Sep 2026" },
  { cat: "Destinations", title: "Top Cultural Destinations in Asia", img: "/images/blog/blog-11.jpg", text: "Explore the rich culture, history and traditions of Asia's most fascinating destinations.", date: "12 Sep 2026" },
  { cat: "Travel Tips", title: "How to Travel Safely During Your Trip", img: "/images/blog/blog-12.jpg", text: "Important safety tips to keep in mind while traveling and make your journey smooth and enjoyable.", date: "10 Sep 2026" },
];

export const gallery = Array.from({ length: 12 }, (_, i) => `/images/gallery/gallery-${i + 1}.jpg`);

export const footerServices = ["Flight Booking", "Hotel Booking", "Tour Packages", "Travel Guide", "Corporate Travel", "Custom Tours"];
export const footerDestinations = ["Thailand", "Dubai", "Singapore", "Bali", "Maldives", "Europe"];
