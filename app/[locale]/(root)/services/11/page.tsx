import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">
        Prueba de Antígeno Prostático Específico (PSA)
      </h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/PSA%20test.png?t=2024-06-05T11%3A13%3A48.291Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Prueba de antígeno prostático específico (PSA) para la detección
            temprana de problemas de próstata, asegurando un manejo proactivo y
            efectivo.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
        Clínica San Miguel: Tu Clínica Hispana más Cercana para la Prueba de
        Sangre de la Próstata
      </p>
      <section className="w-full space-y-3 text-xl">
        <b className="w-full text-2xl font-bold text-red-600">
          ¿Qué es una prueba de sangre de la próstata?
        </b>
        <p>
          La prueba de sangre de la próstata, también conocida como PSA
          (antígeno prostático específico), es una prueba sencilla que mide la
          cantidad de PSA en la sangre. El PSA es una proteína producida por la
          próstata, una glándula del tamaño de una nuez ubicada debajo de la
          vejiga en los hombres.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <b className="w-full text-2xl font-bold text-red-600">
          ¿Por qué es importante hacerse una prueba de sangre de la próstata?
        </b>
        <p>
          La prueba de sangre de la próstata puede ayudar a detectar el cáncer
          de próstata en una etapa temprana, cuando es más tratable. El cáncer
          de próstata es el cáncer más común en los hombres después del cáncer
          de piel.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <b className="w-full text-2xl font-bold text-red-600">
          ¿A qué edad debo hacerme una prueba de sangre de la próstata?
        </b>
        <p>
          La Sociedad Americana del Cáncer recomienda que los hombres de 50 años
          en adelante se hagan una prueba de sangre de la próstata anualmente.
          Los hombres negros o los hombres con antecedentes familiares de cáncer
          de próstata deben comenzar el tamizaje a los 45 años.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <b className="w-full text-2xl font-bold text-red-600">
          ¿Qué debo hacer si mi prueba de sangre de la próstata sale alta?
        </b>
        <p>
          Un resultado alto de PSA no necesariamente significa que tengo cáncer
          de próstata. Hay otras condiciones que pueden causar un aumento en el
          PSA, como la prostatitis (inflamación de la próstata) o la hiperplasia
          prostática benigna (agrandamiento de la próstata). Si tu prueba de PSA
          sale alta, tu médico recomendará más pruebas para determinar la causa.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          Cuidado preventivo del cáncer de próstata:
        </h1>
        <li>
          <b>Mantener una dieta saludable: </b>Una dieta rica en frutas,
          verduras y cereales integrales puede ayudar a reducir el riesgo de
          cáncer de próstata.
        </li>
        <li>
          <b>Evitar el sobrepeso: </b>La obesidad aumenta el riesgo de cáncer de
          próstata.
        </li>
        <li>
          <b>Hacer ejercicio regularmente: </b>El ejercicio regular puede ayudar
          a reducir el riesgo de cáncer de próstata.
        </li>
        <li>
          <b>No fumar: </b>Fumar aumenta el riesgo de cáncer de próstata.
        </li>
        <li>
          <b>Limitar el consumo de alcohol: </b>El consumo excesivo de alcohol
          aumenta el riesgo de cáncer de próstata.
        </li>
      </section>

      <h1 className="bold w-full text-3xl font-bold font text-red-600">Preguntas Frecuentes</h1>


      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Qué tan dolorosa es la prueba de sangre de la próstata?
        </h2>
        <p>
          La prueba de sangre de la próstata es una prueba simple e indolora. Se
          extrae una pequeña cantidad de sangre de una vena en el brazo.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cuánto cuesta la prueba de sangre de la próstata?
        </h2>
        <p>
          El costo de la prueba de sangre de la próstata tiene un valor de $70.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Dónde puedo hacerme la prueba de sangre de la próstata?
        </h2>
        <p>
          La prueba de sangre de la próstata se puede hacer en la Clínica San
          Miguel, abierta los 7 días de la semana, sin necesidad de cita previa.
        </p>
      </section>
      <h2 className="w-full text-2xl font-bold text-red-600">La Salud de la Próstata es Importante: Pruebas de PSA para Detección Temprana.</h2>


    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">PSA Test</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/PSA%20test.png?t=2024-06-05T11%3A13%3A48.291Z"
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
          The prostate blood test, also known as PSA (prostate-specific
          antigen), is a simple test that measures the amount of PSA in the
          blood. PSA is a protein produced by the prostate, a walnut-sized gland
          located beneath the bladder in men.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <b className="w-full text-2xl font-bold text-red-600">
          Why is it important to have a prostate blood test?
        </b>
        <p>
          Prostate blood test can help detect prostate cancer prostate at an
          early stage, when it is most treatable. Prostate cancer is the most
          common cancer in men after skin cancer.{" "}
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <b className="w-full text-2xl font-bold text-red-600">
          At what age should I have a prostate blood test?
        </b>
        <p>
          The American Cancer Society recommends that men age 50 and older have
          a prostate blood test annually. Black men or men with a family history
          of prostate cancer should begin screening at age 45.{" "}
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <b className="w-full text-2xl font-bold text-red-600">
          What should I do if my prostate blood test is high?
        </b>
        <p>
          A high PSA result does not necessarily mean that I have prostate
          cancer. There are other conditions that can cause an increase in PSA,
          such as prostatitis (inflammation of the prostate) or benign prostatic
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
          <b>Exercise regularly: </b>Regular exercise can help reduce the risk
          of prostate cancer.
        </li>
        <li>
          <b>Don&apos;t smoke: </b>Smoking increases the risk of prostate
          cancer.
        </li>
        <li>
          <b>Limit alcohol consumption: </b>Excessive alcohol consumption
          increases the risk of prostate cancer .
        </li>
      </section>

      <h1 className="bold w-full text-3xl font-bold font text-red-600">Frequently Asked Questions</h1>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How painful is the prostate blood test?
        </h2>
        <p>
          The prostate blood test is a simple and painless test. A small amount
          of blood is drawn from a vein in the arm.
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
          The prostate blood test can be done in Clinics San Miguel opens 7 days
          a week, no appointment necessary. Are. Walk-In Clinic.
        </p>
      </section>
      <h2 className="w-full text-2xl font-bold text-red-600">Prostate Health Matters: PSA Testing for Early Detection.</h2>

    </div>
  );
};

export default Home;
