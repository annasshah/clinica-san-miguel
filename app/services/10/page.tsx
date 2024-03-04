import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
  <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
    <h1 className="text-center text-6xl text-red-600">Pregnancy Services</h1>
    <div className="flex w-full flex-col lg:flex-row">
      <Image
        src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/thyroide.png?t=2024-02-11T07%3A00%3A12.237Z"
        width={1000}
        height={1000}
        alt="cover"
        className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
      />
      <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
        <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
        <p className="text-2xl font-light lg:text-3xl">
          Comprehensive pregnancy care, including prenatal check-ups, ultrasound
          services, and expert guidance to support you through this
          transformative journey.
        </p>
      </div>
    </div>
    <p className="w-full text-2xl">
      San Miguel Clinic: Your Trusted Center for Women
    </p>
    <section className="w-full space-y-3 text-xl">
      <b className="w-full text-2xl font-bold text-red-600">
        Are you pregnant or planning to become pregnant?
      </b>
      <p>
        At San Miguel Clinic, we offer a comprehensive range of prenatal care
        services for Hispanic women, including:
      </p>
      <li>
        <b>Blood pregnancy test:</b>
        This test detects presence of the hormone human chorionic gonadotropin
        (hCG) in the blood, which indicates pregnancy.
      </li>
      <li>
        <b>HCG blood test: </b>
        This test measures the amount of hCG in the blood to determine
        gestational age and pregnancy status.
      </li>
      <li>
        <b>Alpha-fetoprotein and folic acid test:</b>
        This test measures the levels of these two proteins in the blood to
        detect neural tube defects in the baby. Ultrasound.
      </li>
    </section>

    <h1 className="w-full text-4xl font-bold ">FAQs</h1>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        How soon can I take a blood pregnancy test?
      </h2>
      <p>
        The blood pregnancy test can be done as early as 10 days after
        conception.
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        How long do the results take?
      </h2>
      <p>The results are in approximately 20 minutes</p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        How accurate is the HCG blood test?
      </h2>
      <p>The HCG blood test is very accurate, with an accuracy of over 99%.</p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What is the alpha-fetoprotein and folic acid test?
      </h2>
      <p>
        The alpha-fetoprotein and folic acid test is performed between weeks 15
        and 20 of pregnancy to detect defects of the neural tube in the baby.
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What should I do if the Are my test results abnormal?
      </h2>
      <p>
        If your test results are abnormal, your doctor will talk to you about
        additional diagnosis and treatment options.
      </p>
    </section>

    <section>
      <p>
        <span className="font-bold"> Keywords: </span>
        San Clinic Miguel, Pregnancy Blood Test, HCG Blood Test,
        Alpha-Fetoprotein and Folic Acid Test, Prenatal Care, Hispanic Women,
        2777 Shaver St, Pasadena, TX 77502
      </p>
    </section>
  </div>
)

export default Home
