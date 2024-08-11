import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Adultos Mayores</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Seniors.png?t=2024-02-11T06%3A58%3A42.789Z
      "
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
        <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Servicios de salud personalizados para personas mayores, priorizando la atención preventiva, el manejo de enfermedades crónicas y promoviendo el bienestar general en los años dorados.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
      Clínica San Miguel: Atención Médica de Calidad para Adultos Mayores
      </p>
      <section className="w-full space-y-3 text-xl">
        <ol className="w-full">
        La Clínica San Miguel ofrece una amplia gama de servicios médicos para adultos mayores, incluyendo:
        </ol>
      </section>
      <section className="w-full space-y-3 text-xl">
         <p className="w-full">Atención preventiva:</p> 
        <ul className="w-full translate-x-7 list-disc">
          <li>
          Chequeos
          </li>
          <li>
          Manejo de enfermedades crónicas
          </li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
         <p className="w-full">Diagnóstico y tratamiento de enfermedades:</p> 
        <ul className="w-full translate-x-7 list-disc">
          <li>
          Gripe
          </li>
          <li>
          Resfriado
          </li>
          <li>
          Infecciones
          </li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
         <p className="w-full">Pruebas de laboratorio:</p> 
        <ul className="w-full translate-x-7 list-disc">
          <li>
          Análisis de sangre
          </li>
          <li>
          Análisis de orina
          </li>
          <li>
          Imágenes
          </li>
        </ul>
      </section>
      <h1 className="bold w-full text-3xl font-bold font text-red-600">Preguntas Frecuentes</h1>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Qué debo hacer si tengo síntomas de resfriado o gripe?
        </h2>
        <p className="w-full">
        Llame a nuestra clínica para programar una cita. Nuestro médico lo examinará y le recetará el tratamiento adecuado.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Qué debo hacer si tengo alergias?
        </h2>
        <p className="w-full">
        Llame a nuestra clínica para programar una cita. Nuestro médico le ayudará a identificar la fuente de sus alergias y le recomendará un tratamiento.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Qué debo hacer si necesito una prueba de laboratorio?
        </h2>
        <p className="w-full">
        No necesita una cita para las pruebas de laboratorio. Simplemente venga a la Clínica San Miguel durante el horario de atención. Estamos abiertos los 7 días de la semana y operamos como una clínica sin cita previa.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Qué debo hacer si tengo una enfermedad crónica?
        </h2>
        <p className="w-full list-disc">
          Llame a nuestra clínica para programar una cita con nuestro médico especialista. Nuestro equipo médico le ayudará a manejar su enfermedad y mejorar su calidad de vida.
        </p>
        <ul className="w-full translate-x-7 list-disc">
          <li>Combine el tratamiento con una dieta saludable y ejercicio regular.</li>
          <li>Beba mucha agua.</li>
          <li>Informe a su médico sobre cualquier otro medicamento que esté tomando.</li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
        ¡Contáctenos Hoy!
        </h1>
        <p className="w-full list-disc">
        Clínica San Miguel
            Su mejor opción para atención médica de calidad. Tarifa de consulta: $19
        <br></br> Esperamos que esta información le haya sido útil. Si tiene alguna pregunta, no dude en contactarnos.
          <br></br>Esperamos poder ayudarle a cuidar de su salud.
        </p>
        </section>
        <h2 className="w-full text-2xl font-bold text-red-600">¡Empoderando a los mayores: Atención integral para una vida más saludable y feliz!</h2>
    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Seniors</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Seniors.png?t=2024-02-11T06%3A58%3A42.789Z
          "
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Tailored healthcare services for seniors, prioritizing preventative
            care, chronic disease management, and promoting overall well-being
            in the golden years.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
      San Miguel Clinic: Quality Medical Care for Older Adults
      </p>
      <section className="w-full space-y-3 text-xl">
        <ol className="w-full">
        San Miguel Clinic offers a wide range of medical services for older adults, including:
        </ol>
      </section>
      <section className="w-full space-y-3 text-xl">
         <p className="w-full">Preventive care:</p> 
        <ul className="w-full translate-x-7 list-disc">
          <li>
          Checkups
          </li>
          <li>
          Chronic disease management
          </li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
         <p className="w-full">Diagnosis and treatment of diseases:</p> 
        <ul className="w-full translate-x-7 list-disc">
          <li>
          Flu
          </li>
          <li>
          Cold
          </li>
          <li>
          Infections
          </li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
         <p className="w-full">Laboratory tests:</p> 
        <ul className="w-full translate-x-7 list-disc">
          <li>
          Blood tests
          </li>
          <li>
          Urine tests
          </li>
          <li>
          Imaging
          </li>
        </ul>
      </section>
      <h1 className="bold w-full text-3xl font-bold font text-red-600">Frequently Asked Questions</h1>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
        What should I do if I have cold or flu symptoms?
        </h2>
        <p className="w-full">
        Call our clinic to schedule an appointment. Our doctor will examine you and prescribe the appropriate treatment.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
        What should I do if I have allergies?
        </h2>
        <p className="w-full">
        Call our clinic to schedule an appointment. Our doctor will help you identify the source of your allergies and recommend treatment.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
        What should I do if I need a laboratory test?
        </h2>
        <p className="w-full">
        You do not need an appointment for laboratory tests. Simply come to San Miguel Clinic during office hours. We are open 7 days a week and operate as a walk-in clinic.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What should I do if I have a chronic illness?
        </h2>
        <p className="w-full list-disc">
          Call our clinic to schedule an appointment with our specialist doctor.
          Our medical team will help you manage your disease and improve your
          quality of life.
        </p>
        <ul className="w-full translate-x-7 list-disc">
          <li>Combine treatment with a healthy diet and regular exercise.</li>
          <li>Drink plenty of water.</li>
          <li>Tell your doctor about any other medications you are taking.</li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
        Contact Us Today!
        </h1>
        <p className="w-full list-disc">
        San Miguel Clinic
            Your best option for quality medical care. Consultation fee: $19
        <br></br>  We hope this information has been useful to you. If you have any questions, please feel free to contact us.
          <br></br>We hope to help you take care of your health.
        </p>
        </section>
        <h2 className="w-full text-2xl font-bold text-red-600">Empowering Seniors: Comprehensive Care for a Healthier, Happier Life!</h2>
    </div>
  );
};

export default Home;
