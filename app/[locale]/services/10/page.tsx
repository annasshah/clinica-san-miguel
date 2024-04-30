import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">
        Servicios de Embarazo
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
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Atención integral durante el embarazo, que incluye controles
            prenatales, servicios de ultrasonido y orientación experta para
            apoyarte en este viaje transformador.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
        Clínica San Miguel: Tu Centro de Confianza para Mujeres
      </p>
      <section className="w-full space-y-3 text-xl">
        <b className="w-full text-2xl font-bold text-red-600">
          ¿Estás embarazada o planeando quedar embarazada?
        </b>
        <p>
          En la Clínica San Miguel, ofrecemos una amplia gama de servicios de
          atención prenatal para mujeres hispanas, que incluyen:
        </p>
        <li>
          <b>Prueba de embarazo en sangre:</b>
          Esta prueba detecta la presencia de la hormona gonadotropina coriónica
          humana (hCG) en la sangre, lo que indica embarazo.
        </li>
        <li>
          <b>Prueba de sangre de hCG:</b>
          Esta prueba mide la cantidad de hCG en la sangre para determinar la
          edad gestacional y el estado del embarazo.
        </li>
        <li>
          <b>Prueba de alfafetoproteína y ácido fólico:</b>
          Esta prueba mide los niveles de estas dos proteínas en la sangre para
          detectar defectos del tubo neural en el bebé. Ultrasonido.
        </li>
      </section>

      <h1 className="w-full text-4xl font-bold ">Preguntas frecuentes</h1>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cuándo puedo hacerme una prueba de embarazo en sangre?
        </h2>
        <p>
          La prueba de embarazo en sangre se puede hacer tan pronto como 10 días
          después de la concepción.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cuánto tiempo tardan los resultados?
        </h2>
        <p>Los resultados están listos aproximadamente en 20 minutos.</p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Qué tan precisa es la prueba de sangre de hCG?
        </h2>
        <p>
          La prueba de sangre de hCG es muy precisa, con una precisión de más
          del 99%.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Qué es la prueba de alfafetoproteína y ácido fólico?
        </h2>
        <p>
          La prueba de alfafetoproteína y ácido fólico se realiza entre las
          semanas 15 y 20 de embarazo para detectar defectos del tubo neural en
          el bebé.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Qué debo hacer si mis resultados de la prueba son anormales?
        </h2>
        <p>
          Si tus resultados de la prueba son anormales, tu médico hablará
          contigo sobre opciones adicionales de diagnóstico y tratamiento.
        </p>
      </section>

      <section>
        <p>
          <span className="font-bold"> Palabras clave: </span>
          Clínica San Miguel, Prueba de Embarazo en Sangre, Prueba de Sangre de
          hCG, Prueba de alfafetoproteína y ácido fólico, Atención Prenatal,
          Mujeres Hispanas, 2777 Shaver St, Pasadena, TX 77502
        </p>
      </section>
    </div>
  ) : (
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
            Comprehensive pregnancy care, including prenatal check-ups,
            ultrasound services, and expert guidance to support you through this
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
        <p>
          The HCG blood test is very accurate, with an accuracy of over 99%.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What is the alpha-fetoprotein and folic acid test?
        </h2>
        <p>
          The alpha-fetoprotein and folic acid test is performed between weeks
          15 and 20 of pregnancy to detect defects of the neural tube in the
          baby.
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
  );
};

export default Home;
