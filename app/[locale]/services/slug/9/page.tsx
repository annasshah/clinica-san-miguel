import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
  <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
    <h1 className="text-center text-6xl text-red-600">
      High Cholesterol and Triglycerides
    </h1>
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
          Holistic management of high cholesterol and triglyceride levels
          through lifestyle modifications, medication, and ongoing monitoring
          for cardiovascular health.
        </p>
      </div>
    </div>
    <p className="w-full text-2xl">
      San Miguel Clinic: Experts in the treatment of high cholesterol and
      triglycerides
    </p>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What do we offer?
      </h2>
      <li>
        Personalized medical consultation: We evaluate your medical history,
        perform physical and laboratory, and we offer you an individualized
        treatment plan.
      </li>
      <li>
        Treatments: We offer a variety of treatment options, including changes
        in diet, exercise, medications and, in some cases, surgery.
      </li>
      <li>
        Follow-up: We monitor your progress closely and give you the support you
        need to achieve your health goals.
      </li>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">Diagnosis</h2>
      <p>
        Usually in A blood test to monitor cholesterol levels, called a
        “lipidogram” or “lipid profile,” reports the following:
      </p>
      <li>Cholesterol total</li>
      <li>LDL Cholesterol</li>
      <li>HDL Cholesterol</li>
      <li>Triglycerides: a type of blood fat</li>
      <p>
        Your health provider at Clinica San Miguel will call you once the
        results are in and will explain and answer your questions.
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Children and cholesterol testing
      </h2>
      <p>
        For most For children, the National Heart, Lung, and Blood Institute
        recommends cholesterol screening between ages 9 and 11, followed by
        repeat screening every five years.
      </p>

      <p>
        Yes If your child has a family history of early-onset heart disease or a
        personal history of obesity or diabetes, the doctor may recommend
        cholesterol testing at an earlier age or more frequently.
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">Treatment</h2>
      <p>
        The main measure to reduce high cholesterol is to change your lifestyle;
        . for example, start exercising more or eating healthier. However, if
        you have already made these major lifestyle changes and your cholesterol
        levels are still high, your doctor may recommend that you take
        medication.
      </p>
      <p>
        The fact that Whether a medication or combination of medications is
        recommended to you depends on several factors, including personal risk
        factors, age, health, and possible side effects.. Some common options
        are:
      </p>
      <li>
        <b>Statins.</b> Statins block a substance that needs the liver to
        produce cholesterol. This causes the liver to remove cholesterol from
        the blood.. Possible options include atorvastatin (Lipitor), fluvastatin
        (Lescol), lovastatin (Altoprev), pitavastatin (Livalo), pravastatin
        (Pravachol), rosuvastatin (Crestor), and simvastatin (Zocor).
      </li>
      <li>
        <b>Cholesterol absorption inhibitors.</b> The small intestine absorbs
        the cholesterol you ingest with food and released into the bloodstream.
        The drug ezetimibe (Zetia) helps lower blood cholesterol by limiting the
        absorption of cholesterol from the diet. Ezetimibe can be used with a
        statin medication.
      </li>
      <li>
        <b>Bemptedoic acid.</b> This new drug works like statins, but is less
        likely to cause muscle pain. Adding bempedoic acid (Nexletol) to a
        maximum dose of statins may help significantly reduce low-density
        lipoproteins. There is also a combination tablet containing bempedoic
        acid and ezetimibe (Nexlizet).
      </li>
      <li>
        <b>Fixative resins of bile acids.</b> The liver uses cholesterol to make
        bile acids, a substance needed to digest food.. Cholestyramine
        (Prevalite), colesevelam (Welchol), and colestipol (Colestid) help lower
        cholesterol indirectly by binding to bile acids. This causes the liver
        to use excess cholesterol to make more bile acids, which lowers the
        blood cholesterol level.
      </li>
      <li>
        <b>PCSK9 Inhibitors.</b> These medications help the liver absorb more
        LDL cholesterol, which reduces the amount of cholesterol circulating in
        the blood. Alirocumab (Praluent) and evolocumab (Repatha) may be used
        for people with a genetic condition that causes very high levels of LDL
        or for people with a history of coronary heart disease and intolerance
        to statins or other cholesterol medications. They are injected under the
        skin every few weeks and are expensive.
      </li>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Triglyceride medications high
      </h2>
      <p>If you also have high triglycerides, your doctor may prescribe:</p>

      <li>
        <b>Fibrates.</b> The drugs fenofibrate (TriCor, Fenoglide, and others)
        and gemfibrozil (Lopid) decrease hepatic production of very low-density
        lipoprotein cholesterol and speed up the removal of triglycerides from
        the blood. Very low-density lipoprotein cholesterol contains mainly
        triglycerides. Using Fibrates together with statins may increase the
        risk of statin side effects.
      </li>
      <li>
        <b>Niacin.</b> Niacin limits the liver&apos;s ability to produce LDL and VLDL
        cholesterol. But niacin offers no more benefits than statins. Niacin has
        also been linked to liver damage and stroke, so most doctors now only
        recommend it for people who can&apos;t take statins.
      </li>
      <li>
        <b>Supplements with omega 3 fatty acids.</b> Supplements with omega 3
        fatty acids can help you lower triglycerides. You can buy them with and
        without a prescription. If you decide to take over-the-counter
        supplements, get approval from a doctor first. Supplements with omega 3
        fatty acids may affect other medications you are taking.
      </li>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Tolerance varies
      </h2>
      <p>
        Tolerance to medications varies from person to person. Common side
        effects of statins are muscle pain and muscle damage, reversible memory
        loss and confusion, and an increase in blood sugar.. If you decide to
        take cholesterol medications, your doctor may recommend liver function
        tests to monitor the effect of the medications on the liver.
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Children and cholesterol treatment
      </h2>
      <p>
        Tolerance to medications varies from person to person. Common side
        effects of statins are muscle pain and muscle damage, reversible memory
        loss and confusion, and an increase in blood sugar.. If you decide to
        take cholesterol medications, your doctor may recommend liver function
        tests to monitor the effect of the medications on the liver.
      </p>
    </section>

    <h1 className="w-full text-4xl font-bold ">FAQs</h1>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What are the cholesterol and triglycerides?
      </h2>
      <li>
        Cholesterol is a fatty substance found in the blood. The body needs
        cholesterol to function properly, but high levels can increase the risk
        of heart disease.
      </li>
      <li>
        Triglycerides are another type of fat found in the blood. High
        triglyceride levels can also increase the risk of heart disease.
      </li>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What are the symptoms of high cholesterol and triglycerides?
      </h2>
      <li>
        There are usually no symptoms. The only way to know if you have high
        cholesterol and triglycerides is through a blood test.
      </li>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What causes high cholesterol and triglycerides?
      </h2>
      <li>
        Diet, lack of exercise, Genetics and certain medical conditions can
        contribute to high cholesterol and triglyceride levels.
      </li>
    </section>

    <section>
      <p>
        <span className="font-bold"> Keywords: </span>
        High cholesterol, High triglycerides, Cholesterol treatment, Cholesterol
        prevention, Clínica San Miguel, Fresno, TX, Clinica Hispana , Hispanic
        Clinic near me, Clinic for Hispanics, Walk-in Clinic
      </p>
    </section>
  </div>
)

export default Home
