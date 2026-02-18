import Image from "next/image";

const BrandLogos = () => {
  return (
    <section className="py-10 pb-20">
      <div className="container">
        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <Image
              className="h-auto w-full"
              src="/images/brands/1.png"
              alt="Brand"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto w-full"
              src="/images/brands/2.png"
              alt="Brand"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto w-full"
              src="/images/brands/3.png"
              alt="Brand"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto w-full"
              src="/images/brands/4.png"
              alt="Brand"
              width={200}
              height={200}
            />
          </div>
          <div>
            <Image
              className="h-auto w-full"
              src="/images/brands/5.png"
              alt="Brand"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
