import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { SectionHeading } from "@/components/ui";
import { Reveal, Stagger, StaggerItem, DrawLine } from "@/components/Motion";
import { AnimatedForm, InputField } from "@/components/ContactForm";
import Icon from "@/components/Icon";

export const metadata = { title: "Contact Us" };

const cards = [
  { icon: "pin", title: "Office Address", lines: ["123 Travel Street,", "Connaught Place, New Delhi,", "Delhi 110001, India"] },
  { icon: "phone", title: "Phone Call", lines: ["+91 98765 43210", "+91 98765 43211"] },
  { icon: "mail", title: "E-Mail Us", lines: ["info@touravibe.com", "support@touravibe.com"] },
  { icon: "headset", title: "Supports", lines: ["24/7 customer support team", "ready to assist you."] },
];

const details = [
  { icon: "pin", title: "Our Office Address", lines: ["123 Travel Street, Connaught Place,", "New Delhi, Delhi 110001, India"] },
  { icon: "phone", title: "Phone Call", lines: ["+91 98765 43210", "+91 98765 43211"] },
  { icon: "mail", title: "E-Mail Us", lines: ["info@touravibe.com", "support@touravibe.com"] },
  { icon: "headset", title: "Supports", lines: ["24/7 customer support team", "ready to assist you."] },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />

      <section className="relative overflow-hidden py-20">
        <Image src="/images/gallery/gallery-2.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25 blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-mist/95 via-mist/80 to-mist/95" />
        <div className="relative mx-auto max-w-[1100px] px-6">
          <SectionHeading eyebrow="Get In Touch" title="We're Here to" accent="Help You" text="Have questions or need assistance with your travel plans? Our team is always ready to help you with the best travel solutions." />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c) => (
              <StaggerItem key={c.title} from="flip">
                <div className="group relative h-full rounded-xl bg-white/95 px-5 pb-7 pt-14 text-center shadow-[0_10px_35px_rgba(11,37,69,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(27,163,198,0.2)]">
                  <span className="absolute -top-9 left-1/2 grid h-[70px] w-[70px] -translate-x-1/2 place-items-center rounded-full border-4 border-white bg-[#d9f2fa] text-sky shadow-md transition-all duration-500 group-hover:bg-sky group-hover:text-white">
                    <Icon name={c.icon} className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-navy">{c.title}</h3>
                  <div className="mt-3 text-[15px] leading-relaxed text-slate-500">
                    {c.lines.map((l) => <p key={l}>{l}</p>)}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <Image src="/images/blog-detail/main.jpg" alt="" fill sizes="100vw" className="object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f3f9fc] via-[#f3f9fc]/95 to-[#f3f9fc]/20" />
        <div className="relative mx-auto max-w-[1200px] px-6">
          <SectionHeading eyebrow="Contact Us" title="Get in" accent="Touch" text="Have a question or need help planning your next trip? We’re here to assist you with the best travel solutions." />
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.4fr]">
            <Stagger className="divide-y divide-slate-200" stagger={0.12}>
              {details.map((d) => (
                <StaggerItem key={d.title} from="left" className="group flex gap-6 py-6 first:pt-0">
                  <span className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full bg-[#d9f2fa] text-sky transition-all duration-500 group-hover:scale-110 group-hover:bg-sky group-hover:text-white">
                    <Icon name={d.icon} className="h-8 w-8" />
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-navy">{d.title}</h3>
                    <div className="mt-1 text-lg text-slate-500">
                      {d.lines.map((l) => <p key={l}>{l}</p>)}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal from="right" className="rounded-2xl bg-white p-8 shadow-[0_20px_60px_rgba(11,37,69,0.12)] sm:p-11">
              <div className="flex items-center gap-3">
                <DrawLine className="h-[2px] w-9 bg-gold" />
                <span className="text-sm font-semibold uppercase tracking-wide text-sky">Send us a message</span>
              </div>
              <h3 className="mt-2 font-serif text-4xl font-bold text-navy">We’d Love to Hear from You</h3>
              <p className="mt-3 text-slate-500">Fill out the form below and our team will get back to you shortly.</p>
              <AnimatedForm className="mt-7 grid gap-5 sm:grid-cols-2" success="Message sent! We’ll get back to you shortly.">
                <InputField icon="user" placeholder="Enter Your Name" required />
                <InputField icon="mail" type="email" placeholder="Enter Your Email" required />
                <InputField icon="list" select placeholder="Select Subject" options={["Tour Packages", "Flight Booking", "Hotel Booking", "Visa Assistance", "Other"]} className="sm:col-span-2" />
                <InputField icon="message" textarea placeholder="Write Message" className="sm:col-span-2" />
                <div className="text-center sm:col-span-2">
                  <button className="group inline-flex items-center gap-3 rounded-full bg-sun px-14 py-4 font-semibold text-navy shadow-lg shadow-sun/40 transition-all hover:-translate-y-0.5 hover:bg-gold">
                    Send Message <Icon name="send" className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" fill="currentColor" />
                  </button>
                </div>
              </AnimatedForm>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal from="up" className="h-[420px] w-full">
        <iframe
          title="TourAvibe office location"
          src="https://www.google.com/maps?q=Connaught+Place,+New+Delhi&z=5&output=embed"
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>
    </>
  );
}
