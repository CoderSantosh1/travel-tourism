import Image from "next/image";
import PageBanner from "@/components/PageBanner";
import { EnquiryCard, PopularList } from "@/components/Sidebar";
import { Reveal, Stagger, StaggerItem, DrawLine, SplitText } from "@/components/Motion";
import { BlockTitle } from "@/components/ui";
import Icon, { Stars } from "@/components/Icon";
import { common, destinationDetailData as data } from "@/data/site-data";
import DetailGallery from "@/components/DetailGallery";

export const metadata = { title: common.destinationDetailBreadcrumb.pageTitle };

export default function DestinationDetailPage() {
  return (
    <>
      <PageBanner data={common.destinationDetailBreadcrumb} />
      <section className="bg-mist py-16">
        <div className="mx-auto grid max-w-[1300px] gap-10 px-6 lg:grid-cols-[1fr_390px]">
          <div>
            <DetailGallery images={data.images} />

            <Reveal className="mt-8 flex items-center gap-2 font-semibold uppercase text-sky">
              <Icon name="pin" className="h-5 w-5" /> {data.location}
            </Reveal>
            <h2 className="mt-2 font-serif text-4xl font-bold leading-tight text-navy sm:text-5xl">
              <SplitText text={data.title} />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {data.intro}
              </p>
            </Reveal>

            <Reveal className="mt-8 rounded-xl bg-[#e6f2fb] p-8">
              <BlockTitle>{data.goodToKnow.title}</BlockTitle>
              <Stagger className="mt-6 grid gap-6 sm:grid-cols-2" stagger={0.08}>
                {data.goodToKnow.facts.map(({ icon, label, value }) => (
                  <StaggerItem key={label} className="group flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy text-white transition-transform duration-500 group-hover:rotate-[360deg] group-hover:bg-sky">
                      <Icon name={icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-navy">{label}</p>
                      <p className="text-slate-600">{value}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </Reveal>

            <Reveal className="mt-10">
              <BlockTitle>{data.whyVisit.title}</BlockTitle>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {data.whyVisit.text}
              </p>
            </Reveal>

            <Reveal from="zoom" className="mt-8 flex gap-6 rounded-xl bg-[#e6f2fb] p-7">
              <Icon name="quote" className="h-14 w-14 shrink-0 text-sky/70" fill="currentColor" strokeWidth={0} />
              <p className="font-serif text-2xl italic leading-snug text-navy">{data.quote}</p>
            </Reveal>

            <Reveal className="mt-10"><BlockTitle>{data.experiences.title}</BlockTitle></Reveal>
            <Stagger className="mt-6 grid gap-6 sm:grid-cols-3">
              {data.experiences.items.map((e) => (
                <StaggerItem key={e.title} className="group">
                  <div className="shine relative h-40 overflow-hidden rounded-xl shadow-md">
                    <Image src={e.img} alt={e.title} fill sizes="300px" className="object-cover transition-transform duration-700 group-hover:scale-115" />
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-navy transition-colors group-hover:text-sky">{e.title}</h4>
                  <p className="mt-1 text-muted">{e.text}</p>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal className="mt-10">
              <BlockTitle>{data.finalThoughts.title}</BlockTitle>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                {data.finalThoughts.text}
              </p>
            </Reveal>
          </div>

          <aside className="space-y-8">
            <Reveal from="right" className="rounded-xl bg-white p-6 shadow-[0_10px_35px_rgba(11,37,69,0.08)]">
              <h3 className="font-serif text-3xl font-bold text-navy">{data.info.title}</h3>
              <DrawLine className="mt-2 h-[3px] w-14 rounded bg-gold" />
              <ul className="mt-5 divide-y divide-slate-100">
                {data.info.items.map(({ icon, label, value }) => (
                  <li key={label} className="grid grid-cols-[28px_130px_1fr] items-start gap-2 py-3 text-[15px]">
                    <Icon name={icon} className="mt-0.5 h-5 w-5 text-navy" />
                    <span className="font-medium text-navy">{label}</span>
                    <span className="text-slate-500">{value}</span>
                  </li>
                ))}
                <li className="grid grid-cols-[28px_130px_1fr] items-center gap-2 py-3 text-[15px]">
                  <Icon name="star" className="h-5 w-5 text-navy" />
                  <span className="font-medium text-navy">{data.info.ratingLabel}</span>
                  <span className="flex items-center gap-2 text-slate-500"><Stars count={data.info.ratingStars} /> {data.info.ratingText}</span>
                </li>
              </ul>
            </Reveal>
            <EnquiryCard form={data.enquiry} />
            <PopularList data={data.popular} />
          </aside>
        </div>
      </section>
    </>
  );
}
