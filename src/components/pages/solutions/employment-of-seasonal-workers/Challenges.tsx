import Image from "next/image";

const Challenges = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col items-center gap-20 lg:flex-row">
        <div>
          <Image
            className="h-auto max-w-[390px] rounded-2xl"
            src="/images/seasonal-challenge.jpg"
            alt="Challenges"
            height={575}
            width={390}
          />
        </div>
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">
            Challenges in Finding Seasonal Workers
          </h2>

          <p className="border-l-2 border-l-black pl-5 font-bold">
            The problem of finding seasonal workers in Croatia, especially in
            industries such as tourism, catering, agriculture, and construction,
            is multifaceted and often represents a significant challenge for
            employers.
          </p>

          <p>
            The hospitality industry is more subject to seasonal changes than
            ever before, compared to any other sphere of activity.
          </p>
          <p>
            Most of our clients during the first quarter cannot accurately
            predict the number and need for external or foreign workers during
            the high season.
          </p>
          <p>
            The situation in which most resorts, hotels, and restaurants make
            last-minute hiring decisions results in a sudden increase in demand
            for workers. This further results in the market’s unwillingness to
            meet that demand immediately. Namely, from the moment of signing the
            contract with the Employment Agency, it takes a month or even two
            until the foreign workers arrive at their workplace. Finding
            workers, testing qualifications, interviewing, paperwork and similar
            processes take up most of that time.
          </p>
          <p>
            Therefore, we offer you a solution that eliminates the risks of long
            waits and delays in the arrival of workers: outsourcing of labor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
