import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Dentista</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/dentist.jpg?t=2024-03-02T11%3A41%3A49.792Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Exámenes de sangre completos realizados por nuestro equipo de
            expertos para evaluar su perfil de salud, identificar posibles
            problemas y guiar estrategias personalizadas de bienestar.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
        Clínica San Miguel: Tu aliado para el bienestar integral
      </p>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Qué son los análisis de sangre?
        </h2>
        <ol className="w-full">
          Los análisis de sangre son pruebas realizadas en una muestra de tu
          sangre para evaluar tu salud. Estas pruebas pueden ayudar a
          diagnosticar enfermedades, monitorear tu salud y administrar el
          tratamiento para ciertas condiciones.
        </ol>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Por qué es importante hacerse análisis de sangre?
        </h2>
        <ol className="w-full">
          Los análisis de sangre son una herramienta importante para la
          detección temprana de enfermedades, incluso antes de que aparezcan los
          síntomas. También pueden ayudar a determinar la causa de los síntomas
          que ya estás experimentando, como fatiga, dolor o pérdida de peso.
        </ol>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cómo prepararse para un análisis de sangre?
        </h2>
        <ol className="w-full">
          En general, no se requiere ninguna preparación especial para la
          mayoría de los análisis de sangre. Sin embargo, es importante que
          sigas las instrucciones de tu médico con respecto al ayuno o la
          suspensión de ciertos medicamentos antes del examen.
        </ol>
        <h2 className="w-full text-2xl font-bold text-red-600">
          Recomendaciones:
        </h2>
        <ul className="w-full translate-x-7 list-disc">
          <li>
            Consulta con tu médico en Clínica San Miguel para determinar qué
            análisis de sangre son adecuados para ti.
          </li>
          <li>
            Infórmanos sobre cualquier medicamento que estés tomando, incluyendo
            vitaminas y suplementos.
          </li>
          <li>
            Si te sientes nervioso o ansioso por el examen, respira
            profundamente e intenta relajarte.
          </li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Beneficios para la salud
        </h2>
        <ul className="w-full translate-x-7 list-disc">
          <li>Detección temprana de enfermedades.</li>
          <li>Monitoreo del estado de salud.</li>
          <li>Control del tratamiento de enfermedades.</li>
          <li>Prevención de complicaciones.</li>
          <li>Mejora de la calidad de vida.</li>
        </ul>
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cuánto tiempo estarán disponibles mis resultados de análisis de
          sangre?
        </h2>
        <p className="w-full list-disc">
          Los resultados de los análisis de sangre generalmente están
          disponibles en 24-48 horas.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cuánto cuestan los análisis de sangre?
        </h2>
        <p className="w-full list-disc">
          El costo de los análisis de sangre varía según el tipo de examen que
          realices. Consulta con tu seguro de salud para ver si cubre los costos
          del test.
        </p>
      </section>
      <h1 className="bold w-full text-2xl font-bold">
        Preguntas frecuentes sobre la eliminación de verrugas:
      </h1>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Qué debo hacer si mis resultados de análisis son anormales?
        </h2>
        <p className="w-full list-disc">
          Si tus resultados de análisis son anormales, tu médico te lo informará
          y explicará lo que significa para tu salud.
        </p>
      </section>

      <h1 className="bold w-full text-2xl font-bold">
        Tipos de análisis de sangre que ofrecemos:
      </h1>
      <p className="w-full list-disc">
        Los análisis de sangre son una herramienta fundamental para el
        diagnóstico y seguimiento de una amplia variedad de enfermedades y
        condiciones. Se pueden realizar para:
      </p>

      <ol className="w-full">
        Los análisis de sangre son pruebas realizadas en una muestra de tu
        sangre para evaluar tu salud. Estas pruebas pueden ayudar a diagnosticar
        enfermedades, monitorear tu salud y manejar el tratamiento para ciertas
        condiciones.
      </ol>
      <ul className="w-full translate-x-7 list-disc">
        <li>Glucosa: para detectar la diabetes.</li>
        <li>
          Colesterol y triglicéridos: para evaluar el riesgo de enfermedad
          cardíaca .
        </li>
        <li>Hormonas: para evaluar la función tiroidea, la fertilidad, etc.</li>
        <li>
          Electrolitos: para controlar el equilibrio de sodio, potasio, etc.
        </li>
        <li>Proteínas: para evaluar la función renal y hepática, etc.</li>{" "}
      </ul>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Detectar infecciones:
        </h2>
        <ul className="w-full translate-x-7 list-disc">
          <li>Cultivo de sangre: para detectar bacterias en la sangre.</li>
          <li>
            Pruebas serológicas: para detectar anticuerpos contra virus,
            bacterias o parásitos.
          </li>
        </ul>
        <p className="w-full list-disc">
          Si tus resultados de análisis son anormales, tu médico te lo informará
          y explicará lo que significa para tu salud.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Es doloroso el procedimiento?
        </h2>
        <p className="w-full list-disc">
          La anestesia local adormece el área, por lo que el procedimiento no es
          doloroso.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cuántas sesiones son necesarias?
        </h2>
        <p className="w-full list-disc">
          En la mayoría de los casos, una sola sesión es suficiente para
          eliminar la verruga.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <div>
          <h2 className="w-full text-2xl font-bold text-red-600">
            Consejos de nutrición para bajar de peso
          </h2>
          <br></br>
          <ul className="w-full translate-x-7 list-disc">
            <li>Consume alimentos integrales y sin procesar.</li>
            <li>Limita el azúcar y los carbohidratos refinados.</li>
            <li>Elige proteínas magras y grasas saludables.</li>
          </ul>
        </div>
        <p>
          <span className="font-bold"> Palabras clave: </span>
          análisis de sangre, problemas de salud, detección temprana de
          enfermedades, análisis de sangre, prueba de tiroides, prueba de
          colesterol, prueba de triglicéridos, prueba de diabetes, prueba de
          enfermedades de transmisión sexual (ETS), prueba de embarazo, prueba
          de próstata. sangre, prueba de azúcar, prueba de hierro
        </p>
      </section>
    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">
        Immigration Medical Exams
      </h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/immigration%20medical%20exam.png"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Immigration Medical Exams,Comprehensive exams meeting immigration
            standards, conducted by certified professionals.{" "}
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
          symptoms you are already experiencing, such as fatigue, pain, or
          weight loss.
        </ol>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How to prepare for a blood test?
        </h2>
        <ol className="w-full">
          In general, no special preparation is required for most blood tests.
          However, it is important that you follow your doctor&apos;s
          instructions regarding fasting or stopping certain medications before
          the exam.
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
            If you feel nervous or anxious about the exam , breathe deeply and
            try to relax.
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
          If your test results are abnormal, your doctor will tell you and
          explain what it means for your health.
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
        Blood tests are tests performed on a sample of your blood to evaluate
        your health. These tests can help diagnose diseases, monitor your
        health, and manage treatment for certain conditions.
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
          If your test results are abnormal, your doctor will tell you and
          explain what it means for your health.
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
          sexually transmitted disease (STD) test, pregnancy test, prostate
          test. blood, sugar test, iron test
        </p>
      </section>
    </div>
  );
};

export default Home;
