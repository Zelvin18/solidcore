import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Gallery",
  description:
    "A look at SolidCore's fleet and work on the ground — branded concrete mixer trucks, high-rise pumps, cement, steel rods and logistics across Uganda.",
  alternates: { canonical: "/gallery" },
};

const shots = [
  { src: "/gallery/mixer-branded-1.jpeg", tag: "Mixer Fleet", span: "lg:row-span-2" },
  { src: "/gallery/pump-2.jpg", tag: "High-rise Pumping" },
  { src: "/gallery/mixer-branded-2.jpeg", tag: "10m³ Mixer" },
  { src: "/gallery/pour-1.jpg", tag: "On-site Pour", span: "lg:row-span-2" },
  { src: "/gallery/cement-3.jpg", tag: "Cement Supply" },
  { src: "/gallery/steel-main.jpg", tag: "Steel Rods", span: "lg:row-span-2" },
  { src: "/gallery/logistics-1.jpg", tag: "Haulage" },
  { src: "/gallery/mixer-3.jpeg", tag: "Mixer Fleet" },
  { src: "/gallery/pump-1.jpg", tag: "Boom Pump", span: "lg:row-span-2" },
  { src: "/gallery/steel-2.jpg", tag: "Reinforcement Bars" },
  { src: "/gallery/pour-3.jpg", tag: "Placement" },
  { src: "/gallery/cement-1.jpg", tag: "Cement" },
  { src: "/gallery/logistics-2.jpg", tag: "Logistics Truck" },
  { src: "/gallery/pump-3.jpg", tag: "Line Pump" },
  { src: "/gallery/steel-1.jpg", tag: "Steel Bars" },
  { src: "/gallery/mixer-1.jpeg", tag: "Mixer Fleet" },
  { src: "/gallery/pour-2.jpg", tag: "On-site" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our fleet and work, on the ground"
        description="From branded mixer trucks to high-rise pours and cross-country haulage — a look at SolidCore in action."
        image="/gallery/pump-2.jpg"
        crumb="Gallery"
      />

      {/* Video feature */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-card ring-1 ring-navy-100">
              <video
                className="aspect-video w-full bg-navy-950 object-cover"
                src="/gallery/mixer-video.mp4"
                controls
                muted
                playsInline
                preload="metadata"
                poster="/gallery/pour-1.jpg"
              />
            </div>
            <p className="mt-4 text-center text-sm font-medium text-navy-500">
              SolidCore concrete operation — mixing and placement in motion
            </p>
          </Reveal>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="pb-8">
        <div className="container-x">
          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {shots.map((s, i) => (
              <Reveal
                key={s.src + i}
                delay={(i % 4) * 60}
                className={`group relative overflow-hidden rounded-2xl shadow-sm ${s.span || ""}`}
              >
                <Image
                  src={s.src}
                  alt={s.tag}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 translate-y-2 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy-700 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  {s.tag}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Like what you see? Let's build together."
        text="Request a quotation for any of our services and put this fleet to work on your project."
      />
    </>
  );
}
