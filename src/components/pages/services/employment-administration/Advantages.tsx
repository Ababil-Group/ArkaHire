import { FaRegKeyboard } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaRegObjectUngroup } from "react-icons/fa";

const Advantages = () => {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div className="container grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div className="space-y-5">
          <h2 className="text-4xl font-bold">
            What are the advantages of hiring an agency?
          </h2>
          <p>
            We handle the preparation and submission of all required legal
            documents on behalf of employers and their selected employees.
          </p>
          <p>
            With our extensive experience in this field, we have streamlined our
            processes, offering employers a quick and efficient way to hire.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <FaRegKeyboard className="text-5xl" />
            <h5 className="text-center text-xl font-bold">Expert Guidance</h5>
            <p className="text-center">
              We provide professional support and advice throughout the
              recruitment process, ensuring you make well-informed decisions.
            </p>
          </div>
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <FaRegListAlt className="text-5xl" />
            <h5 className="text-center text-xl font-bold">
              Saving Time and Resources
            </h5>
            <p className="text-center">
              We take care of candidate searches, negotiations, and
              administrative tasks, allowing you to focus on the core areas of
              your business.
            </p>
          </div>
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <FaRegNewspaper className="text-5xl" />
            <h5 className="text-center text-xl font-bold">
              Access to a Wider Market
            </h5>
            <p className="text-center">
              We give you access to a diverse pool of candidates from across the
              globe through our established network.
            </p>
          </div>
          {/* grid item  */}
          <div className="flex flex-col items-center justify-start gap-2 rounded-md bg-white p-10 shadow-lg">
            <FaRegObjectUngroup className="text-5xl" />
            <h5 className="text-center text-xl font-bold">Risk Reduction</h5>
            <p className="text-center">
              We ensure security by thoroughly vetting candidates&apos;
              qualifications and references, reducing the risk of unsuitable
              hires and non-compliance with regulations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
