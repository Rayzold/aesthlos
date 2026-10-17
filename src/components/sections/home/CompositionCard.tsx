import Link from "next/link";
import TiltedCard from "@/components/ui/TiltedCard";

/** Square composition tile with a small 3D tilt (≤8°), 1px grey frame and caption, as on the live homepage. */
export default function CompositionCard({ href, image, title }: { href: string; image: string; title: string }) {
  return (
    <Link href={href} className="group block focus-visible:outline-offset-4">
      <div className="aspect-square border border-grey-line">
        <TiltedCard
          imageSrc={image.replace(/\.webp$/, "-w400.webp")}
          altText=""
          containerWidth="100%"
          containerHeight="100%"
          imageWidth="100%"
          imageHeight="100%"
          rotateAmplitude={8}
          scaleOnHover={1.03}
          radius={0}
          glare={0.12}
          glareColor="#FFC824"
          shadow={0.3}
          parallax={0.5}
          flipOnClick={false}
          gyroscope={false}
          intro={false}
          showTooltip={false}
        />
      </div>
      <span className="mt-3 block text-center text-[16px] leading-[22px] text-white transition-colors duration-300 group-hover:text-gold sm:text-[18px]">
        {title}
      </span>
    </Link>
  );
}
