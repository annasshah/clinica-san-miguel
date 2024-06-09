import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Análisis de Sangre</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/bloodtest.png?t=2024-02-18T11%3A20%3A20.307Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Exámenes de sangre completos realizados por nuestro equipo de
            expertos para evaluar tu perfil de salud, identificar posibles
            problemas y guiar estrategias de bienestar personalizadas.
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
          diagnosticar enfermedades, monitorear tu salud y manejar el
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
          En general, no se requiere preparación especial para la mayoría de los
          análisis de sangre. Sin embargo, es importante que sigas las
          instrucciones de tu médico con respecto al ayuno o la suspensión de
          ciertos medicamentos antes del examen.
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
            Informa sobre cualquier medicamento que estés tomando, incluyendo
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
          ¿Cómo reconocer una verruga o un lunar?
        </h2>
        <p className="w-full list-disc">
          Las verrugas son pequeñas protuberancias en la piel que pueden ser
          marrones, blancas o rosadas. Los lunares son manchas en la piel que
          pueden tener diferentes colores y tamaños.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cómo reconocer un lunar canceroso?
        </h2>
        <p className="w-full list-disc">
          Los lunares cancerosos generalmente tienen las siguientes
          características:
        </p>
        <ul className="w-full translate-x-7 list-disc">
          <li>Asimetría.</li>
          <li>Bordes irregulares.</li>
          <li>Diámetro mayor a 6 milímetros.</li>
          <li>Cambios en tamaño, forma o color.</li>
        </ul>
      </section>
      <h1 className="bold w-full text-2xl font-bold">
        Preguntas frecuentes sobre la eliminación de verrugas:
      </h1>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cuánto tiempo dura el procedimiento?
        </h2>
        <p className="w-full list-disc">
          El procedimiento suele durar unos minutos.
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
            Consejos de nutrición para la pérdida de peso
          </h2>
          <br></br>
          <ul className="w-full translate-x-7 list-disc">
            <li>Come alimentos integrales y no procesados.</li>
            <li>Limita el azúcar y los carbohidratos refinados.</li>
            <li>Elige proteínas magras y grasas saludables.</li>
          </ul>
        </div>
        <p>
          <span className="font-bold"> Palabras clave: </span>
          análisis de sangre, problemas de salud, detección temprana de
          enfermedades, análisis de sangre, prueba de tiroides, prueba de
          colesterol, examen de triglicéridos, prueba de diabetes, prueba de
          enfermedades de transmisión sexual (ETS), prueba de embarazo, prueba
          de próstata. análisis de sangre, prueba de azúcar en la sangre, prueba
          de hierro
        </p>
      </section>
    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Blood Test</h1>
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
            Comprehensive blood tests conducted by our expert team to assess
            your health profile, identify potential issues, and guide
            personalized wellness strategies.
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
          How do you know if it is a wart or a mole?
        </h2>
        <p className="w-full list-disc">
          Warts are small bumps on the skin that may be brown, white, or pink.
          Moles are spots on the skin that can be of different colors and sizes.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How recognize a cancerous mole?
        </h2>
        <p className="w-full list-disc">
          Carcinogenic moles usually have the following characteristics:
        </p>
        <ul className="w-full translate-x-7 list-disc">
          <li>Asymmetry.</li>
          <li>Irregular edges.</li>
          <li>Diameter greater than 6 millimeters.</li>
          <li>Changes in size, shape or color.</li>
        </ul>
      </section>
      <h1 className="bold w-full text-2xl font-bold">Wart Removal FAQs:</h1>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How long does the procedure take?
        </h2>
        <p className="w-full list-disc">
          The procedure usually takes a few minutes.
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
