import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Preetika Rao",
      designation: "Actress & Influencer",
      src: "/Preetika.webp",
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Siddhi Sharma",
      designation: "Actress",
      src: "/Siddhi.jpeg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Pooja Hegde",
      designation: "Actress",
      src: "/Pooja.jpg",
    },
    
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Kamya Punjabi",
      designation: "Actress",
      src: "/kamya.jpg",
    }
  ];
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl  mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Word of my <span className="text-yellow-700">Clients.</span>
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}

export default Testimonial
