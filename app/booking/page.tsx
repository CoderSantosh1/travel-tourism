import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { SectionHeading } from "@/components/ui";
import { Reveal, Parallax } from "@/components/Motion";
import { AnimatedForm, InputField } from "@/components/ContactForm";
import { common, bookingData as data } from "@/data/site-data";
import Icon from "@/components/Icon";

export const metadata = { title: common.bookingBreadcrumb.pageTitle };

export default function BookingPage() {
  return (
    <>
      <PageBanner data={common.bookingBreadcrumb} />
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e8f4fb] to-mist">
        <div className="absolute inset-y-0 right-0 hidden w-[45%] lg:block">
          <Parallax speed={40} className="absolute -inset-y-16 inset-x-0">
            <Image src={data.image.src} alt={data.image.alt} fill sizes="45vw" className="object-cover" />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-r from-[#e8f4fb] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1300px] px-6 py-20">
          <div className="max-w-[740px]">
            <SectionHeading
              eyebrow={data.subtitle}
              title={data.title1}
              accent={data.titleAccent}
              text={data.description}
            />
            <Reveal from="up" delay={0.2} className="mt-10 rounded-2xl bg-white p-6 shadow-[0_20px_60px_rgba(11,37,69,0.12)] sm:p-7">
              <AnimatedForm className="grid gap-5 sm:grid-cols-2" success={data.form.successMessage}>
                {data.form.fields.map((f) => <InputField key={f.name} {...f} />)}
                <button className="group relative overflow-hidden rounded-full bg-sun py-4 text-xl font-semibold text-navy shadow-lg shadow-sun/40 transition-transform hover:-translate-y-0.5 sm:col-span-2">
                  <span className="absolute inset-0 -translate-x-full bg-gold transition-transform duration-500 group-hover:translate-x-0" />
                  <span className="relative flex items-center justify-center gap-3">
                    <Icon name="send" className="h-6 w-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" fill="currentColor" /> {data.form.buttonText}
                  </span>
                </button>
              </AnimatedForm>
            </Reveal>
          </div>
        </div>
        <div className="relative h-72 lg:hidden">
          <Image src={data.image.src} alt="" fill sizes="100vw" className="object-cover" />
        </div>
      </section>
    </>
  );
}
