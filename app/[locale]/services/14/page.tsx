import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
  <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
    <h1 className="text-center text-6xl text-red-600">School Physical</h1>
    <div className="flex w-full flex-col lg:flex-row">
      <img
        src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/School%20Physical.png?t=2024-02-11T07%3A02%3A06.700Z"
        width={1000}
        height={1000}
        alt="cover"
        className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
      />
      <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
        <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
        <p className="text-2xl font-light lg:text-3xl">
          Ensure your child&apos;s readiness for the school year with thorough school
          physicals, covering essential health assessments and immunizations.
        </p>
      </div>
    </div>
    <p className="w-full text-2xl">
      San Miguel Clinic: Your trusted center for school physical exams in Texas
    </p>

    <section className="w-full space-y-3 text-xl">
      <h1 className="w-full text-2xl font-bold text-red-600">
        What are school physicals? School?
      </h1>
      <p>
        School physicals are medical evaluations performed to ensure that
        students are in good health to attend classes. These tests may include:
      </p>
      <ul className="list-disc pl-5">
        <li>Review of medical history</li>
        <li>Measurement of height, weight, and blood pressure </li>
        <li>Eye and hearing exam</li>
        <li>Evaluation of lung function</li>
        <li>
          Testing for diseases such as tuberculosis and anemia (if the school
          requires it)
        </li>
      </ul>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h1 className="w-full text-2xl font-bold text-red-600">
        Why is a school physical important?
      </h1>
      <p>School physicals are important for several reasons:</p>
      <ul className="list-disc pl-5">
        <li>
          They help identify and treat any health problems that a student may
          have.
        </li>
        <li>They can prevent the spread of contagious diseases.</li>
        <li>
          They allow students to participate in sports and extracurricular
          activities.
        </li>
      </ul>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h1 className="w-full text-2xl font-bold text-red-600">
        Where can I take a school physical in Texas?
      </h1>
      <p>
        Clínica San Miguel offers school physicals at the following locations:
      </p>
      <ul className="list-disc pl-5">
        <li>Pasadena, TX</li>
        <li>Fresno, TX</li>
        <li>Channelview, TX</li>
        <li>Houston, TX</li>
        <li>Katy, TX</li>
        <li>Arlington, TX</li>
        <li>Fort Worth, TX</li>
        <li>Dallas, TX</li>
        <li>San Antonio, TX</li>
      </ul>
    </section>

    <h1 className="w-full text-4xl font-bold ">FAQs</h1>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What should I bring to my physical exam appointment?
      </h2>
      <p>
        The physical exam authorization form signed by a parent or guardian Your
        child&apos;s medical history if any.
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        How much does a school physical cost?
      </h2>
      <p>
        The cost of a school physical is $60, ask if there are any promotional
        prices in effect at the time of your visit.
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <b>
        <h2 className="w-full text-2xl font-bold text-red-600">
          How long does it take to get a physical for school?
        </h2>
      </b>
      <p>A school physical usually lasts about 40 minutes.</p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <b>
        <h2 className="w-full text-2xl font-bold text-red-600">
          How long does it take to get a physical for school?
        </h2>
      </b>
      <p>
        You can make an appointment for a school physical by calling our clinic
        or visiting our website. You can also walk in without an appointment.
        Walk-In Clinic.
      </p>
      <p>
        At Clínica San Miguel, we are committed to providing quality medical
        care at affordable prices. For more information about our school
        physicals, please contact us.
      </p>
    </section>

    <section>
      <p>
        <span className="font-bold"> Keywords: </span>
        Physical exam for school, DOT, Clínica San Miguel, Pasadena,
        Channelview, Fresno , Houston, Katy, Arlington, Fort Worth, Dallas, San
        Antonio.
      </p>
    </section>
  </div>
)

export default Home