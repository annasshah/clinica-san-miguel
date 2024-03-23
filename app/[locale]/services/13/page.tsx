import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
  <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
    <h1 className="text-center text-6xl text-red-600">Prenatal Care</h1>
    <div className="flex w-full flex-col lg:flex-row">
      <Image
        src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Prenatal%20care.png?t=2024-02-11T07%3A01%3A56.078Z"
        width={1000}
        height={1000}
        alt="cover"
        className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
      />
      <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
        <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
        <p className="text-2xl font-light lg:text-3xl">
          Dedicated prenatal care services, offering guidance, monitoring, and
          support for a healthy pregnancy and safe delivery.
        </p>
      </div>
    </div>
    <p className="w-full text-2xl">
      San Miguel Clinic: Prenatal Care for the Health of Mother and Baby
    </p>

    <section className="w-full space-y-3 text-xl">
      <h1 className="w-full text-2xl font-bold text-red-600">
        What is Prenatal care ?
      </h1>
      <p>
        Prenatal care is the medical care a woman receives during pregnancy. It
        is important for the health of mother and baby. During prenatal visits,
        the doctor or nurse will:
      </p>
      <ul className="list-disc pl-5">
        <li>Monitor you and your baby&apos;s health.</li>
        <li>Give you information about the pregnancy.</li>
        <li>
          Recommend important blood tests to diagnose any preventive health
          issues for you and your baby.
        </li>
      </ul>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h1 className="w-full text-2xl font-bold text-red-600">
        Which Are prenatal lab tests?
      </h1>
      <p>
        Prenatal lab tests help determine the health of the mother and baby.
        Some of the most common tests include:
      </p>
      <ul className="list-disc pl-5">
        <li>
          <b>Blood test:</b> to check blood type, iron level, blood count, red
          and white blood cells, and the detection of diseases such as
          gestational diabetes and syphilis.
        </li>
        <li>
          <b>Urinalysis:</b> to detect urine infections and proteins in the
          urine.
        </li>
        <li>
          <b>Non-invasive prenatal testing (NIPT):</b> to detect chromosomal
          abnormalities in the baby. Folic acid test.
        </li>
        <li>
          <b>Pregnancy test (HCG)</b>
        </li>
      </ul>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h1 className="w-full text-2xl font-bold text-red-600">
        What are prenatal ultrasounds?
      </h1>
      <p>
        Prenatal ultrasounds are images of the baby in the womb. They are used
        to:
      </p>
      <ul className="list-disc pl-5">
        <li>Confirm pregnancy.</li>
        <li>Determine the gestational age of the baby.</li>
        <li>Evaluate the growth and development of the baby.</li>
        <li>Detect congenital anomalies.</li>
      </ul>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h1 className="w-full text-2xl font-bold text-red-600">
        Why is it important to have prenatal health care?
      </h1>
      <p>Prenatal health care is important to:</p>
      <ul className="list-disc pl-5">
        <li>
          Reduce the risk of complications during pregnancy and childbirth.
        </li>
        <li>Ensure a healthy birth.</li>
        <li>Detect and treat health problems in mother and baby.</li>
      </ul>
    </section>

    <h1 className="w-full text-4xl font-bold ">FAQs</h1>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        When should I start receiving prenatal care?
      </h2>
      <p>
        Ideally, you should start receiving prenatal care as soon as you know
        you are pregnant.
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        How often should I have prenatal visits?
      </h2>
      <p>
        The frequency of prenatal visits will depend on the health of you and
        your baby. Visits typically occur monthly during the first and second
        trimesters, and every two weeks during the third trimester.
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What should I bring to my prenatal visits?
      </h2>
      <p>To your prenatal visits, you should bring:</p>
      <ul className="list-disc pl-5">
        <li>Your ID card.</li>
        <li>Your medical history.</li>
        <li>A list of the medications you take.</li>
        <li>Any questions you have.</li>
      </ul>
    </section>

    <section>
      <p>
        <span className="font-bold"> Keywords: </span>
        Prenatal care, San Miguel Clinic, Pregnancy, Examinations prenatal
        laboratory, Prenatal ultrasounds, Mother&apos;s health, Baby&apos;s health,
        Healthy birth
      </p>
    </section>
  </div>
)

export default Home
