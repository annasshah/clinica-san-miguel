import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
  <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
    <h1 className="text-center text-6xl text-red-600">PSA Test</h1>
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
          Prostate-specific antigen (PSA) testing for early detection of
          prostate issues, ensuring proactive and effective management.
        </p>
      </div>
    </div>
    <p className="w-full text-2xl">
      San Miguel Clinic: Your Nearest Hispanic Clinic for Prostate Blood Test
    </p>
    <section className="w-full space-y-3 text-xl">
      <b className="w-full text-2xl font-bold text-red-600">
        What is a prostate blood test?
      </b>
      <p>
        The prostate blood test, also known as PSA (prostate-specific antigen),
        is a simple test that measures the amount of PSA in the blood. PSA is a
        protein produced by the prostate, a walnut-sized gland located beneath
        the bladder in men.
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <b className="w-full text-2xl font-bold text-red-600">
        Why is it important to have a prostate blood test?
      </b>
      <p>
        Prostate blood test can help detect prostate cancer prostate at an early
        stage, when it is most treatable. Prostate cancer is the most common
        cancer in men after skin cancer.{' '}
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <b className="w-full text-2xl font-bold text-red-600">
        At what age should I have a prostate blood test?
      </b>
      <p>
        The American Cancer Society recommends that men age 50 and older have a
        prostate blood test annually. Black men or men with a family history of
        prostate cancer should begin screening at age 45.{' '}
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <b className="w-full text-2xl font-bold text-red-600">
        What should I do if my prostate blood test is high?
      </b>
      <p>
        A high PSA result does not necessarily mean that I have prostate cancer.
        There are other conditions that can cause an increase in PSA, such as
        prostatitis (inflammation of the prostate) or benign prostatic
        hyperplasia (enlargement of the prostate).. If your PSA test is high,
        your doctor will recommend more tests to determine the cause.
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h1 className="w-full text-2xl font-bold text-red-600">
        Prostate cancer preventive care:
      </h1>
      <li>
        <b>Maintaining a healthy diet: </b>A diet rich in fruits , vegetables
        and whole grains can help reduce the risk of prostate cancer.
      </li>
      <li>
        <b>Avoid being overweight: </b>Obesity increases the risk of prostate
        cancer
      </li>
      <li>
        <b>Exercise regularly: </b>Regular exercise can help reduce the risk of
        prostate cancer.
      </li>
      <li>
        <b>Don't smoke: </b>Smoking increases the risk of prostate cancer.
      </li>
      <li>
        <b>Limit alcohol consumption: </b>Excessive alcohol consumption
        increases the risk of prostate cancer .
      </li>
    </section>

    <h1 className="w-full text-4xl font-bold ">FAQs</h1>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        How painful is the prostate blood test?
      </h2>
      <p>
        The prostate blood test is a simple and painless test. A small amount of
        blood is drawn from a vein in the arm.
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        How much does the test cost? prostate in blood?
      </h2>
      <p>The cost of the prostate exam in has a value of $70</p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Where can I get the prostate blood test?
      </h2>
      <p>
        The prostate blood test can be done in Clinics San Miguel opens 7 days a
        week, no appointment necessary. Are. Walk-In Clinic.
      </p>
    </section>

    <section>
      <p>
        <span className="font-bold"> Keywords: </span>
        Prostate blood test, PSA, Prostate cancer, Men, Early detection,
        Prevention , San Miguel Clinic, Pasadena, Texas, Prostate Specific
        Antigen (PSA) Blood Test
      </p>
    </section>
  </div>
)

export default Home
