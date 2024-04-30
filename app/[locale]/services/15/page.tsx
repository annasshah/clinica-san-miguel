import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">ECG</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/EKG.png"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Servicios de electrocardiograma (ECG) de última generación para
            evaluaciones precisas de la salud cardíaca, ayudando en el
            diagnóstico y manejo de condiciones cardíacas.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
        Clínica San Miguel: Examen de Electrocardiograma (ECG)
      </p>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          ¿Qué es un ECG?
        </h1>
        <p>
          Un ECG es una prueba que registra la actividad eléctrica del corazón.
          Se realiza colocando electrodos en el pecho, los brazos y las piernas.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          ¿Por qué debería hacerme un ECG?
        </h1>
        <p>
          Su médico puede ordenar un ECG si tiene síntomas de problemas
          cardíacos, como dolor en el pecho, dificultad para respirar o mareos.
          También se puede realizar un ECG como parte de un examen físico de
          rutina.
        </p>
        <p>
          El equipo de la Clínica San Miguel en 14510 S Josey Ln, Farmers
          Branch, TX 75234, puede recomendar un electrocardiograma si tiene
          síntomas de problemas cardíacos, como:
        </p>
        <ul className="list-disc pl-5">
          <li>Palpitaciones</li>
          <li>Mareos</li>
          <li>Falta de aliento</li>
          <li>Pulso aumentado</li>
          <li>Fatiga</li>
          <li>Debilidad</li>
          <li>Mareo</li>
          <li>Dolor en el pecho</li>
        </ul>
        <p>
          Las enfermedades cardíacas suelen ser hereditarias. Si tiene
          antecedentes familiares de enfermedades cardíacas, ataques cardíacos u
          otros trastornos cardiovasculares, un ECG proporciona a su médico la
          información que necesita para crear un plan de salud cardíaca
          individualizado para usted.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          ¿Cómo se realiza un ECG?
        </h1>
        <p>Un ECG solo tarda unos minutos en completarse.</p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          ¿Qué debo hacer para prepararme para un ECG?
        </h1>
        <p>
          No necesita hacer nada especial para prepararse para un ECG. Sin
          embargo, es importante informar a su médico sobre cualquier
          medicamento que esté tomando.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          ¿Qué significan los resultados del ECG?
        </h1>
        <p>
          Un ECG es una prueba que registra la actividad eléctrica del corazón.
          Se realiza colocando electrodos en el pecho, los brazos y las piernas.
        </p>
        <ul>
          <li>
            <b>Ritmo cardíaco anormal</b>Las arritmias son problemas de ritmo
            cardíaco anormal que ocurren debido a alteraciones en las señales
            eléctricas del corazón.
          </li>
          <li>
            <b>Problemas estructurales</b>Defectos cardíacos, cámaras cardíacas
            agrandadas y otros problemas pueden causar anormalidades
            estructurales que pueden requerir tratamiento adicional.
          </li>
          <li>
            <b>Ritmo cardíaco anormal</b>Si su pulso es demasiado lento o
            demasiado rápido para registrar con precisión su ritmo cardíaco, el
            equipo puede ordenar un electrocardiograma para investigar el
            problema.
          </li>
          <li>
            <b>Flujo sanguíneo deficiente</b>Los síntomas como dolor en el pecho
            pueden ser signos reveladores de un flujo sanguíneo deficiente hacia
            el corazón. Un ECG puede ayudar a determinar si su corazón está
            recibiendo el oxígeno que necesita para funcionar correctamente.
          </li>
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          ¿Por qué elegir Clínica San Miguel?
        </h1>
        <p>
          En la Clínica San Miguel en 14510 S Josey Ln, Farmers Branch, TX
          75234, ofrecemos ECG de alta calidad a un precio asequible. Contamos
          con un equipo de médicos y técnicos experimentados que están dedicados
          a brindarle la mejor atención posible.
        </p>
        <p>También tenemos ubicaciones en:</p>

        <li>Pasadena, TX</li>
        <li>Channelview, TX</li>
        <li>Fresno, TX</li>
        <li>Houston, TX</li>
        <li>Katy, TX</li>
        <li>Arlington, TX</li>
        <li>Fort Worth, TX</li>
        <li>Dallas, TX</li>
        <li>San Antonio, TX</li>

        <p>
          Si tiene síntomas de problemas cardíacos o si su médico le ha
          recomendado un ECG, comuníquese con Clínica San Miguel hoy mismo.
          Ofrecemos ECG de alta calidad a un precio asequible.
        </p>
      </section>

      <section>
        <p>
          <span className="font-bold"> Palabras clave: </span>
          Clínica San Miguel, Clínica en 14510 S Josey Ln, Farmers Branch, TX
          75234, Clínica en Farmers Branch, Clínica Hispana, Clínica Hispana
          cerca de mí, Clínica sin cita previa, ECG, Electrocardiograma, ¿Qué es
          un electrocardiograma?, Problemas cardíacos, Dolor en el corazón,
          Farmers Branch, TX
        </p>
      </section>
    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">EKG</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/EKG.png"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            State-of-the-art electrocardiogram (EKG) services for accurate heart
            health assessments, aiding in the diagnosis and management of
            cardiac conditions.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
        San Miguel Clinic: Electrocardiogram (EKG) Examination
      </p>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          What is a EKG?
        </h1>
        <p>
          An EKG is a test that records the electrical activity of the heart. It
          is done by placing electrodes on the chest, arms and legs.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          Why should I have an EKG?
        </h1>
        <p>
          Your doctor may order an EKG if you have symptoms of heart problems,
          such as chest pain, difficulty breathing, or dizziness. An EKG may
          also be performed as part of a routine physical exam.
        </p>
        <p>
          The team at Clínica San Miguel at 14510 S Josey Ln, Farmers Branch, TX
          75234, may recommend an electrocardiogram if you have symptoms of
          heart problems, such as:
        </p>
        <ul className="list-disc pl-5">
          <li>Heart palpitations</li>
          <li>Dizziness</li>
          <li>Shortness of breath</li>
          <li>increased pulse</li>
          <li>Fatigue</li>
          <li>Weakness</li>
          <li>Lightheadedness</li>
          <li>Chest pain</li>
        </ul>
        <p>
          Heart diseases are usually hereditary. If you have a family history of
          heart disease, heart attacks, or other cardiovascular disorders, an
          EKG gives your doctor the information he or she needs to create an
          individualized heart health plan for you.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          How is an EKG performed?
        </h1>
        <p>An EKG only takes a few minutes to complete.</p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          What should I do to prepare for an EKG?
        </h1>
        <p>
          You don&apos;t need to do anything special to prepare for an EKG.
          However, it is important to tell your doctor about any medications you
          are taking.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          What do EKG results mean?
        </h1>
        <p>
          An EKG is a test that records the electrical activity of the heart. It
          is done by placing electrodes on the chest, arms and legs.
        </p>
        <p></p>
        <ul>
          <li>
            <b>Abnormal heart rhythm</b>Arrhythmias are rhythms abnormal heart
            problems that occur due to alterations in the heart&apos;s
            electrical signals.
          </li>
          <li>
            <b>Structural problems </b>Heart defects, enlarged heart chambers,
            and other problems can cause structural abnormalities that may
            require additional treatment.
          </li>
          <li>
            <b>Abnormal heart rate</b>If your pulse is too slow or too fast to
            accurately record your heart rate, the team may order an
            electrocardiogram to investigate the problem.
          </li>
          <li>
            <b>Poor blood flow</b>The Symptoms such as chest pain can be
            telltale signs of poor blood flow to the heart. An EKG can help
            determine if your heart is receiving the oxygen it needs to function
            properly.
          </li>
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          Why choose Clínica San Miguel?
        </h1>
        <p>
          At San Miguel Clinic at 14510 S Josey Ln, Farmers Branch, TX 75234, we
          offer high-quality EKGs at an affordable price. We have a team of
          experienced doctors and technicians who are dedicated to providing you
          with the best possible care.
        </p>
        <p>We also have Locations at:</p>

        <li>Pasadena, TX</li>
        <li>Channelview, TX</li>
        <li>Fresno, TX</li>
        <li>Houston, TX</li>
        <li>Katy, TX</li>
        <li>Arlington, TX</li>
        <li>Fort Worth, TX</li>
        <li>Dallas, TX</li>
        <li>San Antonio, TX</li>

        <p>
          If you have symptoms of heart problems or if your doctor has
          recommended an EKG, contact Clínica San Miguel today. We offer high
          quality EKG at an affordable price.
        </p>
      </section>

      <section>
        <p>
          <span className="font-bold"> Keywords: </span>
          Clinica San Miguel, Clinic at 14510 S Josey Ln, Farmers Branch, TX
          75234, Clinic in Farmers Branch, Hispanic Clinic, Hispanic Clinic near
          me, Walk-In Clinic, EKG, Electrocardiogram, What is an
          Electrocardiogram, Heart problems, Pain in the heart, Farmers Branch,
          TX
        </p>
      </section>
    </div>
  );
};

export default Home;
