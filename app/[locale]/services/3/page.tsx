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
    Pruebas de sangre completas realizadas por nuestro equipo experto para evaluar
    su perfil de salud, identificar posibles problemas y guiar estrategias de bienestar personalizadas.
</p>
</div>
</div>
<p className="w-full text-2xl">
    Clínica San Miguel: Su aliado para el bienestar integral
</p>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Qué son las pruebas de sangre?
    </h2>
    <ol className="w-full">
        Las pruebas de sangre son análisis realizados en una muestra de su sangre para evaluar
        su salud. Estas pruebas pueden ayudar a diagnosticar enfermedades, monitorear su salud
        y gestionar el tratamiento de ciertas condiciones.
    </ol>
</section>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Por qué es importante hacerse pruebas de sangre?
    </h2>
    <ol className="w-full">
        Las pruebas de sangre son una herramienta importante para la detección temprana de enfermedades,
        incluso antes de que aparezcan los síntomas. También pueden ayudar a determinar la causa de
        los síntomas que ya está experimentando, como fatiga, dolor o pérdida de peso.
    </ol>
</section>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Cómo prepararse para una prueba de sangre?
    </h2>
    <ol className="w-full">
        En general, no se requiere una preparación especial para la mayoría de las pruebas de sangre.
        Sin embargo, es importante que siga las instrucciones de su médico con respecto al ayuno o a la interrupción de ciertos medicamentos antes del examen.
    </ol>
    <h2 className="w-full text-2xl font-bold text-red-600">
        Recomendaciones:
    </h2>
    <ul className="w-full translate-x-7 list-disc">
        <li>
            Consulte con su médico en Clínica San Miguel para determinar qué pruebas de sangre son adecuadas para usted.
        </li>
        <li>
            Infórmenos sobre cualquier medicamento que esté tomando, incluidas vitaminas y suplementos.
        </li>
        <li>
            Si se siente nervioso o ansioso por el examen, respire profundamente y trate de relajarse.
        </li>
    </ul>
</section>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Cuánto tiempo tardarán en estar disponibles mis resultados?
    </h2>
    <p className="w-full list-disc">
        Los resultados de las pruebas de sangre generalmente están disponibles dentro de 24-48 horas.
    </p>
</section>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Cuánto cuestan las pruebas de sangre?
    </h2>
    <p className="w-full list-disc">
        El costo de las pruebas de sangre varía según el tipo de examen que se realice. Consulte con su seguro de salud para ver si cubre los costos de la prueba.
    </p>
</section>
<h1 className="bold w-full text-3xl font-bold font text-red-600">Preguntas Frecuentes</h1>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Qué debo hacer si mis resultados son anormales?
    </h2>
    <p className="w-full list-disc">
        Si sus resultados son anormales, su médico le explicará qué significa esto para su salud y le recomendará los próximos pasos.
    </p>
</section>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Qué tipos de pruebas de sangre ofrecemos?
    </h2>
    <p className="w-full list-disc">
        Las pruebas de sangre son una herramienta fundamental para diagnosticar y monitorear una amplia variedad de enfermedades y condiciones. Se pueden realizar para:
    </p>
    <p>Medir niveles de sustancias:</p>
    <ul className="w-full translate-x-7 list-disc">
        <li>Glucosa: para detectar diabetes.</li>
        <li>Hormonas: para evaluar la función tiroidea, fertilidad, etc.</li>
        <li>Electrolitos: para controlar el equilibrio de sodio, potasio, etc.</li>
        <li>Proteínas: para evaluar la función renal y hepática, etc.</li>
    </ul>
    <p>Detectar infecciones:</p>
    <ul className="w-full translate-x-7 list-disc">
        <li>Hemocultivo: para detectar bacterias en la sangre.</li>
        <li>Pruebas serológicas: para detectar anticuerpos contra virus, bacterias o parásitos.</li>
    </ul>
    <p>Evaluar la función de los órganos:</p>
    <ul className="w-full translate-x-7 list-disc">
        <li>Recuento sanguíneo completo: para evaluar la cantidad y calidad de glóbulos rojos, glóbulos blancos y plaquetas.</li>
        <li>Pruebas de función renal: para evaluar la función renal.</li>
        <li>Pruebas de función hepática: para evaluar la función hepática.</li>
    </ul>
    <p>Diagnosticar enfermedades:</p>
    <ul className="w-full translate-x-7 list-disc">
        <li>Cáncer: algunos tipos de cáncer pueden detectarse mediante pruebas de sangre.</li>
        <li>Enfermedades autoinmunes: como el lupus o la artritis reumatoide.</li>
        <li>Trastornos de coagulación: como la hemofilia o la enfermedad de von Willebrand.</li>
    </ul>
    <p>Otros:</p>
    <ul className="w-full translate-x-7 list-disc">
        <li>Tipo de sangre: para determinar el tipo de sangre en caso de una transfusión.</li>
        <li>Pruebas de drogas: para detectar el consumo de drogas.</li>
    </ul>
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Qué tipos de muestras de sangre tomamos?
    </h2>
    <ul className="w-full translate-x-7 list-disc">
        <li>Venosa: la muestra se toma de una vena, generalmente en el brazo.</li>
        <li>Arterial: la muestra se toma de una arteria, generalmente en la muñeca.</li>
    </ul>
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Cómo prepararse para una prueba de sangre?
    </h2>
    <ul className="w-full translate-x-7 list-disc">
        <li>En general, no se requiere ayuno para la mayoría de las pruebas de sangre.</li>
        <li>Informe a su médico sobre cualquier medicamento que esté tomando, ya que algunos pueden afectar los resultados de la prueba.</li>
        <li>Si le teme a las agujas, puede pedirle a un amigo o familiar que lo acompañe.</li>
    </ul>
    <h2 className="w-full text-2xl font-bold text-red-600">
        Resultados de las pruebas de sangre:
    </h2>
    <ul className="w-full translate-x-7 list-disc">
        <li>Los resultados de las pruebas de sangre suelen estar disponibles en unos pocos días.</li>
        <li>Su médico le explicará los resultados y le dará recomendaciones sobre el tratamiento o el seguimiento.</li>
    </ul>
    <h2 className="w-full text-2xl font-bold text-red-600">
        Ejemplos de tipos específicos de pruebas de sangre:
    </h2>
    <ul className="w-full translate-x-7 list-disc">
        <li>Panel metabólico básico (CMP): mide niveles de glucosa, creatinina, urea, sodio, potasio, cloruro y bicarbonato.</li>
        <li>Perfil lipídico: mide niveles de colesterol total, colesterol HDL, colesterol LDL y triglicéridos.</li>
        <li>Recuento sanguíneo completo (CBC): mide la cantidad de glóbulos rojos, glóbulos blancos, plaquetas y hemoglobina.</li>
        <li>Prueba de función tiroidea: mide niveles de hormona estimulante de la tiroides (TSH), tiroxina (T4) y triyodotironina (T3).</li>
    </ul>

    <h2 className="w-full text-2xl font-bold text-red-600">Su salud en foco: Confíe en nosotros para pruebas de sangre precisas y completas.</h2>
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
        How quickly will my test results be available?
        </h2>
        <p className="w-full list-disc">
        Blood test results are generally available within 24-48 hours.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
        How much do blood tests cost?
        </h2>
        <p className="w-full list-disc">
        The cost of blood tests varies depending on the type of exam you take. Check with your health insurance to see if it covers the costs of the test.
        </p>
      </section>
      <h1 className="bold w-full text-3xl font-bold font text-red-600">Frequently Asked Questions</h1>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
        What should I do if my test results are abnormal?
        </h2>
        <p className="w-full list-disc">
        If your test results are abnormal, your doctor will explain what it means for your health and recommend next steps.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
        Types of blood tests we offer?
        </h2>
        <p className="w-full list-disc">
        Blood tests are a fundamental tool for diagnosing and monitoring a wide variety of diseases and conditions. They can be performed to:
        </p>
        <p>Measure levels of substances:</p>
        <ul className="w-full translate-x-7 list-disc">
            <li>Glucose: to detect diabetes.</li>
            <li>Hormones: to evaluate thyroid function, fertility, etc.</li>
            <li>Electrolytes: to control the balance of sodium, potassium, etc.</li>
            <li>Proteins: to evaluate kidney and liver function, etc.</li>
          </ul>
          <p>Detect infections:</p>
        <ul className="w-full translate-x-7 list-disc">
            <li>Blood culture: to detect bacteria in the blood.</li>
            <li>Serological tests: to detect antibodies against viruses, bacteria, or parasites..</li>
          </ul>
          <p>Evaluate organ function:</p>
        <ul className="w-full translate-x-7 list-disc">
            <li>Complete blood count: to evaluate the quantity and quality of red blood cells, white blood cells, and platelets.</li>
            <li>Kidney function tests: to evaluate kidney function.</li>
            <li>Liver function tests: to evaluate liver function.</li>
          </ul>
          <p>Diagnose diseases:</p>
        <ul className="w-full translate-x-7 list-disc">
            <li>Cancer: some types of cancer can be detected by blood tests.</li>
            <li>Autoimmune diseases: such as lupus or rheumatoid arthritis.</li>
            <li>Coagulation disorders: such as hemophilia or von Willebrand disease.</li>
          </ul>
          <p>Others:</p>
        <ul className="w-full translate-x-7 list-disc">
            <li>Blood type: to determine the blood type in case of a transfusion.</li>
            <li>Drug testing: to detect drug use.</li>
          </ul>
          <h2 className="w-full text-2xl font-bold text-red-600">
          Types of blood samples we take?
        </h2>
        <ul className="w-full translate-x-7 list-disc">
            <li>Venous: the sample is taken from a vein, usually in the arm.</li>
            <li>Arterial: the sample is taken from an artery, usually in the wrist.</li>
          </ul>
          <h2 className="w-full text-2xl font-bold text-red-600">
          Preparing for a blood test?
        </h2>
        <ul className="w-full translate-x-7 list-disc">
            <li>Generally, fasting is not required for most blood tests.</li>
            <li>Inform your doctor about any medications you are taking, as some may affect the test results.</li>
            <li>If you are afraid of needles, you can ask a friend or family member to accompany you.</li>
          </ul>
          <h2 className="w-full text-2xl font-bold text-red-600">
          Blood test results?
        </h2>
        <ul className="w-full translate-x-7 list-disc">
            <li>Blood test results are usually available within a few days.</li>
            <li>Your doctor will explain the results to you and give you recommendations about treatment or follow-up.</li>
          </ul>
          <h2 className="w-full text-2xl font-bold text-red-600">
          Examples of specific types of blood tests?
        </h2>
        <ul className="w-full translate-x-7 list-disc">
            <li>Basic metabolic panel (CMP): measures levels of glucose, creatinine, urea, sodium, potassium, chloride, and bicarbonate.</li>
            <li>Lipid profile: measures levels of total cholesterol, HDL cholesterol, LDL cholesterol, and triglycerides.</li>
            <li>Complete blood count (CBC): measures the number of red blood cells, white blood cells, platelets, and hemoglobin.</li>
            <li>Thyroid function test: measures levels of thyroid stimulating hormone (TSH), thyroxine (T4), and triiodothyronine (T3).</li>
          </ul>

          <h2 className="w-full text-2xl font-bold text-red-600">Your Health in Focus: Trust Us for Accurate and Comprehensive Blood Testing.</h2>

          
      </section>
    </div>
  );
};

export default Home;
