import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { SectionHeading } from "@/components/ui";
import { Reveal, Stagger, StaggerItem, DrawLine } from "@/components/Motion";
import { AnimatedForm, InputField } from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { common, contactData } from "@/data/site-data";

export const metadata = { title: common.contactBreadcrumb.pageTitle };

export default function ContactPage() {
  const { help, touch, form, map } = contactData;
  return (
    <>
      <PageBanner data={common.contactBreadcrumb} />

      <section className="relative overflow-hidden py-20">
        <Image src={help.bgImage} alt="" fill sizes="100vw" className="object-cover opacity-25 blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-mist/95 via-mist/80 to-mist/95" />
        <div className="relative mx-auto max-w-[1100px] px-6">
          <SectionHeading eyebrow={help.subtitle} title={help.title1} accent={help.titleAccent} text={help.description} />
          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {help.cards.map((c) => (
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
        <Image src={touch.bgImage} alt="" fill sizes="100vw" className="object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f3f9fc] via-[#f3f9fc]/95 to-[#f3f9fc]/20" />
        <div className="relative mx-auto max-w-[1200px] px-6">
          <SectionHeading eyebrow={touch.subtitle} title={touch.title1} accent={touch.titleAccent} text={touch.description} />
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.4fr]">
            <Stagger className="divide-y divide-slate-200" stagger={0.12}>
              {touch.details.map((d) => (
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
                <span className="text-sm font-semibold uppercase tracking-wide text-sky">{form.subtitle}</span>
              </div>
              <h3 className="mt-2 font-serif text-4xl font-bold text-navy">{form.title}</h3>
              <p className="mt-3 text-slate-500">{form.description}</p>
              <AnimatedForm className="mt-7 grid gap-5 sm:grid-cols-2" success={form.successMessage}>
                {form.fields.map((f) => <InputField key={f.name} {...f} />)}
                <div className="text-center sm:col-span-2">
                  <button className="group inline-flex items-center gap-3 rounded-full bg-sun px-14 py-4 font-semibold text-navy shadow-lg shadow-sun/40 transition-all hover:-translate-y-0.5 hover:bg-gold">
                    {form.buttonText} <Icon name="send" className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" fill="currentColor" />
                  </button>
                </div>
              </AnimatedForm>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal from="up" className="h-[420px] w-full">
        <iframe
          title={map.title}
          src={map.src}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>
    </>
  );
}
