import Hero from "./(Pages)/Hero/page";
import Services from "./(Pages)/Services/page";
import Testimonial from "./(Pages)/Testimonials/page";
import Work from "./(Pages)/Work/page";

export default function Home() {
  return (
    <>
      <div className="px-[5%] w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] md:hidden lg:hidden 2xl:hidden">
        <Hero />
        <Services />
        <Testimonial />
        <Work />
      </div>
      <div className="hidden md:h-screen md:w-full md:grid md:place-items-center">
        <p className="text-2xl">This Website is not made for Large Screens</p>
      </div>
    </>
  );
}
