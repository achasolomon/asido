import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[180px] lg:h-[540px] overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Asido Foundation Team"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
    </section>
  );
}