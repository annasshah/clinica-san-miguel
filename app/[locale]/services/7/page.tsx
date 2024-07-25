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
          Prueba DOT, asegure la seguridad vial con nuestros exámenes DOT. Profesionales de la salud certificados evalúan a los conductores comerciales, asegurando su confiabilidad.
        </p>
        </div>
        </div>
        <p className="w-full text-2xl">
        ¡La Clínica San Miguel ofrece exámenes DOT sin necesidad de cita previa, y estamos abiertos los 7 días de la semana!
        </p>
        <section className="w-full space-y-3 text-xl">
          <h2 className="w-full text-2xl font-bold text-red-600">
            ¿Qué es una prueba DOT?
          </h2>
          <p className="w-full">
            Un examen DOT es un examen médico obligatorio que deben completar los conductores que operan vehículos comerciales en los Estados Unidos. La prueba está diseñada para asegurar que los conductores estén física y mentalmente aptos para operar un vehículo de manera segura.
          </p>
        </section>
        <section className="w-full space-y-3 text-xl">
          <h2 className="w-full text-2xl font-bold text-red-600">
            ¿Por qué debo hacerme un examen DOT?
          </h2>
          <p>
            Los exámenes DOT son obligatorios para los conductores que operan vehículos comerciales en Texas. Si no se realiza una prueba DOT, podría enfrentar multas o incluso la suspensión de su licencia de conductor comercial.
          </p>
        </section>
        <h1 className="bold w-full text-3xl font-bold font text-red-600">Preguntas Frecuentes</h1>
        <section className="w-full space-y-3 text-xl">
          <h2 className="w-full text-2xl font-bold text-red-600">
            ¿Cuánto cuesta una prueba DOT?
          </h2>
          <ul>
            El costo de una prueba DOT varía según la ubicación. En Clínica San Miguel, el costo del examen es de $80.
          </ul>
        </section>
        <section className="w-full space-y-3 text-xl">
          <h2 className="w-full text-2xl font-bold text-red-600">
            ¿Cuánto tiempo toma realizar un examen DOT?
          </h2>
          <ul>
            El examen DOT generalmente toma entre 30 y 60 minutos para completarse.
          </ul>
        </section>
        <section className="w-full space-y-3 text-xl">
          <h2 className="w-full text-2xl font-bold text-red-600">
            ¿Necesito programar una cita para un examen DOT?
          </h2>
          <ul>
            No, en la Clínica San Miguel no es necesario hacer una cita.
          </ul>
        </section>
        <section className="w-full space-y-3 text-xl">
          <h2 className="w-full text-2xl font-bold text-red-600">
            ¿Qué debo llevar a mi examen DOT?
          </h2>
          <ul>
            Debe llevar su licencia de conductor comercial y su tarjeta de seguro social a su examen DOT.
          </ul>
        </section>
        <section className="w-full space-y-3 text-xl">
          <h2 className="w-full text-2xl font-bold text-red-600">
            ¿Qué pasa si no apruebo la prueba DOT?
          </h2>
          <ul>
            Si no aprueba la prueba DOT, se le dará una lista de razones por las que no pasó. Deberá abordar estos problemas antes de poder retomar el examen.
          </ul>
        <h2 className="w-full text-2xl font-bold text-red-600">Garantizando su seguridad en la carretera: exámenes DOT confiables para conductores comerciales.</h2>
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
      San Miguel Clinic offers DOT exams without the need for an appointment, and we are open 7 days a week!
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
          Why should I have a DOT exam?
        </h2>
        <p>
          DOT exams are required for drivers operating commercial vehicles in
          Texas. If you fail to take a DOT test, you could face fines or even
          suspension of your commercial driver&apos;s license.
        </p>
      </section>
    
      <h1 className="bold w-full text-3xl font-bold font text-red-600">Frequently Asked Questions</h1>
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
          If you don't pass the DOT test , you will be given a list of
          reasons why you did not pass. You will need to address these concerns
          before you can retake the exam.
        </ul>

        <h2 className="w-full text-2xl font-bold text-red-600">Ensuring Your Safety on the Road: Reliable DOT Exams for Commercial Drivers.</h2>

      </section>

    </div>
  );
};

export default Home;
