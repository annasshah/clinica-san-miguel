import Image from "next/image";
// import Link from 'next/link'

const Home = () => (
  <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
    <h1 className="text-center text-6xl text-red-600">Hypertension</h1>
    <div className="flex w-full flex-col lg:flex-row">
      <Image
        src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/bloodtest.png?t=2024-02-18T11%3A20%3A20.307Z"
        width={1000}
        height={1000}
        alt="cover"
        className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
      />
      <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
        <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
        <p className="text-2xl font-light lg:text-3xl">
          Expert management of hypertension, combining lifestyle modifications
          and medication for optimal blood pressure control.
        </p>
      </div>
    </div>
    <p className="w-full text-2xl">
      Clínica San Miguel: Your ally for comprehensive well-being
    </p>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What are blood tests?
      </h2>
      <ol className="w-full">
        Blood tests are tests performed on a sample of your blood to evaluate
        your health. These tests can help diagnose diseases, monitor your
        health, and manage treatment for certain conditions.
      </ol>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Why is it important to have blood tests?
      </h2>
      <ol className="w-full">
        Blood tests are an important tool for the early detection of diseases,
        even before symptoms appear. They can also help determine the cause of
        symptoms you are already experiencing, such as fatigue, pain, or weight
        loss.
      </ol>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        How to prepare for a blood test?
      </h2>
      <ol className="w-full">
        In general, no special preparation is required for most blood tests.
        However, it is important that you follow your doctor&apos;s instructions
        regarding fasting or stopping certain medications before the exam.
      </ol>
      <h2 className="w-full text-2xl font-bold text-red-600">
        Recommendations:
      </h2>
      <ul className="w-full translate-x-7 list-disc">
        <li>
          Consult with your doctor at Clínica San Miguel to determine which
          blood tests are right for you.
        </li>
        <li>
          Tell us about any medications you are taking, including vitamins and
          supplements.
        </li>
        <li>
          If you feel nervous or anxious about the exam , breathe deeply and try
          to relax.
        </li>
      </ul>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Health benefits
      </h2>
      <ul className="w-full translate-x-7 list-disc">
        <li>Early detection of diseases.</li>
        <li>Health status monitoring.</li>
        <li>Treatment control of diseases.</li>
        <li>Prevention of complications.</li>
        <li>Improvement of quality of life</li>{" "}
      </ul>
      <h2 className="w-full text-2xl font-bold text-red-600">
        How quickly will my test results be available?
      </h2>
      <p className="w-full list-disc">
        Blood test results are generally available in 24-48 hours
      </p>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        How much do blood tests cost?
      </h2>
      <p className="w-full list-disc">
        The cost of blood tests varies depending on the type of exam you take.
        Check with your health insurance to see if it covers the costs of the
        test.
      </p>
    </section>
    <h1 className="bold w-full text-2xl font-bold">Wart Removal FAQs:</h1>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What should I do if my test results are abnormal?
      </h2>
      <p className="w-full list-disc">
        If your test results are abnormal, your doctor will tell you and explain
        what it means for your health.
      </p>
    </section>

    <h1 className="bold w-full text-2xl font-bold">
      Types of blood tests we offer:
    </h1>
    <p className="w-full list-disc">
      Blood tests are a fundamental tool for the diagnosis and monitoring of a
      wide variety of diseases and conditions. They can be performed to:
    </p>

    <ol className="w-full">
      Blood tests are tests performed on a sample of your blood to evaluate your
      health. These tests can help diagnose diseases, monitor your health, and
      manage treatment for certain conditions.
    </ol>
    <ul className="w-full translate-x-7 list-disc">
      <li>Glucose: to detect diabetes.</li>
      <li>
        Cholesterol and triglycerides: to assess the risk of heart disease .
      </li>
      <li>Hormones: to evaluate thyroid function, fertility, etc.</li>
      <li>Electrolytes: to control the balance of sodium, potassium, etc.</li>
      <li>Proteins: to evaluate kidney and liver function, etc.</li>{" "}
    </ul>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Detect infections:
      </h2>
      <ul className="w-full translate-x-7 list-disc">
        <li>Blood culture: to detect bacteria in the blood.</li>
        <li>
          Serological tests: to detect antibodies against viruses, bacteria or
          parasites.
        </li>
      </ul>
      <p className="w-full list-disc">
        If your test results are abnormal, your doctor will tell you and explain
        what it means for your health.
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Is it Is the procedure painful?
      </h2>
      <p className="w-full list-disc">
        Local anesthesia numbs the area, so the procedure is not painful.
      </p>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        How many sessions are needed?
      </h2>
      <p className="w-full list-disc">
        In most cases, a single session is enough to delete la verruga.
      </p>
    </section>
    <section className="w-full space-y-3 text-xl">
      <div>
        <h2 className="w-full text-2xl font-bold text-red-600">
          Nutrition tips for weight loss
        </h2>
        <br></br>
        <ul className="w-full translate-x-7 list-disc">
          <li>Eat whole, unprocessed foods.</li>
          <li>Limit sugar and refined carbohydrates.</li>
          <li>Choose lean proteins and healthy fats.</li>
        </ul>
      </div>
      <p>
        <span className="font-bold"> Keywords: </span>
        blood test, health problems, early detection of diseases, blood tests,
        thyroid test, cholesterol test, exam triglyceride test, diabetes test,
        sexually transmitted disease (STD) test, pregnancy test, prostate test.
        blood, sugar test, iron test
      </p>
    </section>
  </div>
);

export default Home;