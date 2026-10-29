import type { IconName } from "@/components/Icon";

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  phone2: string;
  email: string;
  support: string;
}

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
