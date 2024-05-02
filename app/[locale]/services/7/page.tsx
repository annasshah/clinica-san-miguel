import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Examen DOT</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/D.O.T%20test.png?t=2024-02-11T06%3A59%3A37.488Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Examen DOT, Asegure la seguridad vial con nuestros exámenes DOT.
            Profesionales de la salud certificados evalúan a los conductores
            comerciales, garantizando fiabilidad.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
        Clínica San Miguel: Obtenga su examen DOT de manera rápida y fácil en
        nuestras clínicas de San Miguel en Houston, Pasadena, Channelview,
        Fresno, Katy, Arlington, Fort Worth, Dallas y San Antonio.
      </p>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Qué es un examen DOT?
        </h2>
        <p className="w-full">
          Un examen DOT es un examen médico obligatorio que deben completar los
          conductores que operan vehículos comerciales en los Estados Unidos. El
          examen está diseñado para garantizar que los conductores estén física
          y mentalmente aptos para operar un vehículo de manera segura.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Qué incluye un examen DOT?
        </h2>
        <p className="w-full">
          El examen DOT incluye una revisión de su historial médico, un examen
          físico y pruebas de visión y audición. El examen físico incluye:
        </p>
        <ul>
          <li>Medición de la presión arterial</li>
          <li>Frecuencia cardíaca</li>
          <li>Peso</li>
          <li>Altura</li>
          <li>Agudeza visual</li>
          <li>Audición</li>
          <li>Examen de reflejos</li>
          <li>Examen de la columna vertebral</li>
          <li>Examen de extremidades</li>
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Por qué debo hacerme un examen DOT?
        </h2>
        <p>
          Los exámenes DOT son obligatorios para los conductores que operan
          vehículos comerciales en Texas. Si no realiza un examen DOT, podría
          enfrentar multas o incluso la suspensión de su licencia de conducir
          comercial.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Dónde puedo hacerme un examen DOT?
        </h2>
        <p className="w-full">
          La Clínica San Miguel también ofrece exámenes DOT en las siguientes
          ubicaciones:
        </p>
        <ul>
          <li>Pasadena, TX</li>
          <li>Channelview, TX</li>
          <li>Fresno, TX</li>
          <li>Houston, TX</li>
          <li>Arlington, TX</li>
          <li>Fort Worth, TX</li>
          <li>Dallas, TX</li>
          <li>San Antonio, TX</li>
        </ul>
      </section>

      <h1 className="w-full text-4xl font-bold ">Preguntas frecuentes</h1>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cuánto cuesta un examen DOT?
        </h2>
        <p>
          El costo de un examen DOT varía según la ubicación. En la Clínica San
          Miguel, el costo del examen es de $80.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cuánto tiempo lleva realizar un examen DOT?
        </h2>
        <p>
          El examen DOT generalmente lleva entre 30 y 60 minutos para
          completarse.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Necesito programar una cita para un examen DOT?
        </h2>
        <p>No, en Clínica San Miguel no es necesario hacer una cita.</p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Qué debo llevar a mi examen DOT?
        </h2>
        <p>
          Debe traer su licencia de conducir comercial y su tarjeta de seguro
          social a su examen DOT.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Qué sucede si no apruebo el examen DOT?
        </h2>
        <p>
          Si no pasa el examen DOT, se le dará una lista de razones por las que
          no pasó. Deberá abordar estas preocupaciones antes de poder volver a
          tomar el examen.
        </p>
      </section>
    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Dot Test</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/D.O.T%20test.png?t=2024-02-11T06%3A59%3A37.488Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Dot Test,Ensure road safety with our DOT exams. Certified healthcare
            pros assess commercial drivers, ensuring reliability.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
        San Miguel Clinic: Get your DOT exam quickly and easily at our San
        Miguel clinics in Houston, Pasadena, Channelview, Fresno, Katy,
        Arlington, Fort Worth, Dallas and San Antonio.
      </p>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What is a DOT test?
        </h2>
        <p className="w-full">
          A DOT exam is a mandatory medical examination that must be completed
          by drivers who operate commercial vehicles in the United States. The
          test is designed to ensure that drivers are physically and mentally
          fit to safely operate a vehicle.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What is included in a DOT exam?
        </h2>
        <p className="w-full">
          The DOT exam includes a review of your medical history, a physical
          exam, and vision and hearing testing. Physical examination includes:
        </p>
        <li>Blood pressure measurement</li>
        <li>Heart rate</li>
        <li>Weight</li>
        <li>Height</li>
        <li>Visual acuity</li>
        <li>Hearing</li>
        <li>Reflex exam</li>
        <li>Spinal column exam</li>
        <li>Extremity exam</li>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Why should I have a DOT exam?
        </h2>
        <p>
          DOT exams are required for drivers operating commercial vehicles in
          Texas. If you fail to take a DOT test, you could face fines or even
          suspension of your commercial driver&apos;s license.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Where can I get a DOT exam?
        </h2>
        <p className="w-full">
          Clínica San Miguel also offers DOT exams at the following locations :
        </p>
        <li>Pasadena, TX</li>
        <li>Channelview, TX</li>
        <li>Fresno, TX</li>
        <li>Houston, TX</li>
        <li>Arlington, TX</li>
        <li>Fort Worth, TX</li>
        <li>Dallas, TX</li>
        <li>San Antonio, TX</li>
      </section>

      <h1 className="w-full text-4xl font-bold ">FAQs</h1>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How much does a DOT test cost?
        </h2>
        <ul>
          The cost of a DOT test varies by location. At Clínica San Miguel, the
          cost of the exam is $80.
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How long does it take to take a DOT exam?
        </h2>
        <ul>
          The DOT exam generally takes between 30 and 60 minutes to complete.
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Do I need to schedule an appointment for a DOT exam?
        </h2>
        <ul>
          No, Clinica San Miguel does not have need to make an appointment.
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What should I bring to my DOT exam?
        </h2>
        <ul>
          You must bring your commercial driver&apos;s license and social
          security card to your DOT exam.
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What happens if I don&apos;t pass the DOT test?
        </h2>
        <ul>
          If you don&apos;t pass the DOT test , you will be given a list of
          reasons why you did not pass. You will need to address these concerns
          before you can retake the exam.
        </ul>
      </section>
    </div>
  );
};

export default Home;
