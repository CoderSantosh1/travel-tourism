import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { SectionHeading } from "@/components/ui";
import { Reveal, Parallax } from "@/components/Motion";
import { AnimatedForm, InputField } from "@/components/ContactForm";
import { packages, destinations } from "@/data/site-data";
import Icon from "@/components/Icon";

export const metadata = { title: "Booking" };

export default function BookingPage() {
  return (
    <>
      <PageBanner title="Booking" />
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e8f4fb] to-mist">
        <div className="absolute inset-y-0 right-0 hidden w-[45%] lg:block">
          <Parallax speed={40} className="absolute -inset-y-16 inset-x-0">
            <Image src="/booking/side.jpg" alt="Traveller relaxing on a jetty" fill sizes="45vw" className="object-cover" />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-r from-[#e8f4fb] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1300px] px-6 py-20">
          <div className="max-w-[740px]">
            <SectionHeading
              eyebrow="Book Now"
              title="Plan Your Next"
              accent="Adventure"
              text="Fill out the form below and our travel experts will get back to you with the best packages and offers tailored to your needs."
            />
            <Reveal from="up" delay={0.2} className="mt-10 rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(11,37,69,0.12)] sm:p-7">
              <AnimatedForm className="grid gap-5 sm:grid-cols-2" success="Booking request received! Our travel expert will contact you soon.">
                <InputField name="name" kind="name" icon="user" placeholder="Enter Your Name" label="Your name" required />
                <InputField name="email" kind="email" icon="mail" placeholder="Enter Your Email" label="Your email" required />
                <InputField name="phone" kind="phone" icon="phone" placeholder="Enter Your Mobile Number" label="Your mobile number" required />
                <InputField name="travelers" kind="select" icon="users" placeholder="Number of Travelers" label="The number of travelers" required options={["1", "2", "3", "4", "5", "6+"]} />
                <InputField name="date" kind="date" icon="calendar" placeholder="Travel Date" label="Your travel date" required />
                <InputField name="destination" kind="select" icon="pin" placeholder="Select Destination" label="A destination" required options={destinations.map((d) => `${d.title}, ${d.country}`)} />
                <InputField name="package" kind="select" icon="briefcase" placeholder="Select Tour Package" options={packages.map((p) => p.title)} className="sm:col-span-2" />
                <InputField name="message" kind="message" icon="message" placeholder="Write Your Message..." className="sm:col-span-2" />
                <button className="group relative overflow-hidden rounded-full bg-sun py-4 text-xl font-semibold text-navy shadow-lg shadow-sun/40 transition-transform hover:-translate-y-0.5 sm:col-span-2">
                  <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-500 group-hover:translate-x-0" />
                  <span className="relative flex items-center justify-center gap-3">
                    <Icon name="send" className="h-6 w-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" fill="currentColor" /> Book Now
                  </span>
                </button>
              </AnimatedForm>
            </Reveal>
          </div>
        </div>
        <div className="relative h-72 lg:hidden">
          <Image src="/booking/side.jpg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
      </section>
    </>
  );
}
