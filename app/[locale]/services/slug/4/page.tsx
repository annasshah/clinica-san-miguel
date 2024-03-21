import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
  <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
    <h1 className="text-center text-6xl text-red-600">Seniors</h1>
    <div className="flex w-full flex-col lg:flex-row">
      <Image
        src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Seniors.png?t=2024-02-11T06%3A58%3A42.789Z
        "
        width={1000}
        height={1000}
        alt="cover"
        className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
      />
      <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
        <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
        <p className="text-2xl font-light lg:text-3xl">
          Tailored healthcare services for seniors, prioritizing preventative
          care, chronic disease management, and promoting overall well-being in
          the golden years.
        </p>
      </div>
    </div>
    <p className="w-full text-2xl">
      San Miguel Clinic: Quality medical care for older adults in Houston
    </p>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What should I do if I have cold or flu symptoms?
      </h2>
      <ol className="w-full">
        Call our clinic to schedule an appointment. Our doctor will examine you
        and prescribe the appropriate treatment.
      </ol>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What What should I do if I have allergies?
      </h2>
      {/* <p className="w-full">Semaglutide works in several ways:</p> */}
      <ul className="w-full translate-x-7 list-disc">
        <li>
          Call our clinic to schedule an appointment. Our doctor will help you
          identify the source of your allergies and recommend treatment.
        </li>
      </ul>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What should I do if I need a laboratory test?
      </h2>
      <p className="w-full">
        You do not need an appointment for laboratory tests. Simply come to our
        San Miguel clinic during office hours Monday to Friday from 9am to 8pm.
        Saturdays and Sundays from 10am to 5pm. We open 7 days a week! . We are
        Walk-In Clinic.
      </p>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What should I do if I have a chronic illness?
      </h2>
      <p className="w-full list-disc">
        Call our clinic to schedule an appointment with our specialist doctor.
        Our medical team will help you manage your disease and improve your
        quality of life.
      </p>
      <ul className="w-full translate-x-7 list-disc">
        <li>Combine treatment with a healthy diet and regular exercise.</li>
        <li>Drink plenty of water.</li>
        <li>Tell your doctor about any other medications you are taking.</li>
      </ul>
    </section>

    <section>
      <p>
        <span className="font-bold"> Keywords: </span>
        San Miguel Clinic, senior health care, Houston, preventive care,
        diagnosis, treatment, diseases, laboratory tests, geriatrics,
        cardiology, neurology, physical therapy, flu, cold, allergies, diabetes
        , hypertension, cholesterol, osteoporosis. We hope to help you take care
        of your health.
      </p>
    </section>
  </div>
)

export default Home
