import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";

const WhoWeAre = () => {
  return (
    <section className="py-20">
      <FadeInUpWithSlowBounce className="container max-w-[1100px] space-y-6">
        <h6 className="font-bold">WHO ARE WE?</h6>
        <h2 className="text-4xl font-bold">International Employment Agency</h2>
        <p>
          We assist our international clients in finding suitable employment
          opportunities, including those within Europe, by carefully matching
          them to positions that align with their qualifications. Additionally,
          we ensure that the companies we partner with not only respect but also
          reward their workforce fairly.
        </p>
        <p>
          For our employer clients, we meticulously source and secure qualified
          workers that meet their specific requirements, reducing concerns about
          labor turnover. This approach guarantees a stable workforce to meet
          project or seasonal needs, both locally and internationally. As a
          result, our clients can expect timely project delivery without
          unnecessary disruptions.
        </p>
        <p>
          We offer a comprehensive solution for recruiting and hiring
          high-quality talent, aiming to foster a productive and harmonious work
          environment for both employers and employees across the globe.
        </p>
      </FadeInUpWithSlowBounce>
    </section>
  );
};

export default WhoWeAre;
