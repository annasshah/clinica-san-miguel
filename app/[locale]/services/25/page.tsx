import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Exámenes Médicos de Inmigración</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/immigration%20medical%20exam.png?t=2024-06-13T15%3A58%3A12.278Z"
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
      <section className="w-full space-y-3 text-xl">
 
      </section>
      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          Clínica San Miguel: Su Aliado para Exámenes Médicos de Inmigración
        </h1>
      </section>
      <section className="w-full space-y-3 text-xl">
        <p>La Clínica San Miguel realiza exámenes de inmigración.</p>
        <p>Para obtener su tarjeta de residencia o ciudadanía estadounidense, necesita un examen de inmigración. El equipo de la Clínica San Miguel realiza exámenes de inmigración en sus 7 ubicaciones en todo Texas: cinco en Houston y una en Fresno y Pasadena. Estos exámenes incluyen pruebas para enfermedades infecciosas, actualizaciones de vacunación y la cumplimentación de la documentación requerida. Para obtener más información sobre los exámenes de inmigración, llame a la ubicación más cercana. No es necesario hacer una cita; puede visitar en cualquier momento de lunes a viernes, de 10am a 4pm, y los sábados de 10am a 1pm.</p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Preguntas Frecuentes
        </h2>
        <h3 className="w-full text-xl font-bold text-red-600">
          ¿Qué son los exámenes de inmigración?
        </h3>
        <p>Los Servicios de Ciudadanía e Inmigración de los EE. UU. (USCIS) requieren exámenes de inmigración para todas las personas que buscan registrarse como residentes permanentes o ajustar su estatus, también conocido como solicitud de tarjeta verde.</p>
        <p>La Clínica San Miguel es una práctica de medicina familiar de servicio completo que incluye doctores designados por USCIS para realizar exámenes de inmigración. El propósito del examen de inmigración es asegurar que la persona que solicita la tarjeta verde no tenga una condición de salud que la haga inadmisible a los EE. UU., como una enfermedad infecciosa que pueda ser dañina para el público.</p>
        <h3 className="w-full text-xl font-bold text-red-600">
          ¿Cómo me preparo para los exámenes de inmigración?
        </h3>
        <p>Para su cita, necesita traer lo siguiente:</p>
        <ul className="list-disc pl-5">
          <li>Su pasaporte o documento de identidad</li>
          <li>Su aviso de comparecencia (Formulario I-797)</li>
          <li>Su tarjeta de vacunación</li>
          <li>Cualquier otro expediente médico relevante</li>
        </ul>
        <p>El equipo de la Clínica San Miguel también puede sugerir que traiga a un amigo o familiar a la cita para apoyo, para explicar tratamientos o recomendaciones, o para actuar como traductor.</p>
        <h3 className="w-full text-xl font-bold text-red-600">
          ¿Qué sucede durante los exámenes de inmigración?
        </h3>
        <p>Los exámenes de inmigración en la Clínica San Miguel no son como los exámenes físicos regulares. El propósito del examen es evaluar su salud e historial médico para asegurar que no tenga problemas de salud que puedan ser dañinos para el público.</p>
        <p>Su proveedor en la Clínica San Miguel, ubicada en 5712 Fondren, Houston, TX 77036, le explicará qué esperar al inicio del examen. Se administran pruebas para una variedad de enfermedades y condiciones, tales como:</p>
        <ul className="list-disc pl-5">
          <li>Enfermedades de transmisión sexual (ETS) como gonorrea y sífilis</li>
          <li>Lepra</li>
          <li>Tuberculosis activa</li>
          <li>Otras enfermedades infecciosas que pueden requerir cuarentena</li>
        </ul>
        <p>El equipo realiza un examen físico y revisa sus registros de vacunación. También proporcionan información sobre la actualización de sus vacunas según sea necesario. La Clínica San Miguel puede realizar pruebas adicionales, como análisis de sangre o enviarle para radiografías, y proporcionar cualquier tratamiento necesario.</p>
        <p>Una vez que se completen todas las pruebas médicas requeridas, su proveedor completará su formulario de examen médico de inmigración y lo colocará en un sobre sellado para que lo incluya con su solicitud de inmigración. También le proporcionarán una copia del formulario para sus propios registros.</p>
        <h3 className="w-full text-xl font-bold text-red-600">
          ¿Cuánto tiempo tarda en obtener los resultados del examen médico de inmigración?
        </h3>
        <p>Los resultados del examen médico de inmigración generalmente tardan de 8 a 10 días hábiles después de la fecha de su cita y la presentación de todos los documentos requeridos a USCIS.</p>
        <h3 className="w-full text-xl font-bold text-red-600">
          ¿Qué debo hacer si tengo una condición médica que podría afectar mi solicitud de visa?
        </h3>
        <p>Si tiene una condición médica que podría afectar su solicitud de visa, es importante hablar con un abogado de inmigración. Un abogado de inmigración puede ayudarle a comprender sus opciones y presentar su solicitud de la mejor manera posible.</p>
      </section>
      <p className="w-full text-xl font-bold text-red-600">
        *Los resultados individuales no están garantizados y pueden variar de una persona a otra. Las imágenes pueden contener modelos.
      </p>
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
      <section className="w-full space-y-3 text-xl">
  <h1 className="w-full text-2xl font-bold text-red-600">
    Immigration medical exam at San Miguel Dental Clinic
  </h1>
      </section>

      <section className  ="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
            San Miguel Clinic in Fondren: Your Ally for Immigration Medical Exams
        </h1>
    </section>

    <section className="w-full space-y-3 text-xl">
        <p>San Miguel Clinic performs immigration exams.</p>
        <p>To obtain your green card or U.S. citizenship, you need an immigration exam. The team at San Miguel Clinic conducts immigration exams at their 7 locations throughout Texas: five in Houston and one each in Fresno and Pasadena. These exams include tests for infectious diseases, vaccination updates, and completing the required documentation. For more information about immigration exams, call the location nearest you. No appointment is necessary; you can visit anytime from Monday to Friday, 10am - 4pm, and Saturday from 10am to 1pm.</p>
    </section>

    <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-xl font-bold text-red-600">
            Frequently Asked Questions
        </h2>
        <h3 className="w-full text-lg font-bold text-red-600">
            What are immigration exams?
        </h3>
        <p>The U.S. Citizenship and Immigration Services (USCIS) requires immigration exams for all individuals seeking to register as permanent residents or adjust their status, also known as applying for a green card.</p>
        <p>San Miguel Clinic is a full-service family medicine practice that includes USCIS-designated doctors to perform immigration exams. The purpose of the immigration exam is to ensure that the person applying for a green card does not have a health condition that makes them inadmissible to the U.S., such as an infectious disease that could be harmful to the public.</p>

        <h3 className="w-full text-lg font-bold text-red-600">
            How do I prepare for immigration exams?
        </h3>
        <p>For your appointment, you need to bring the following:</p>
        <ul className="list-disc pl-5">
            <li>Your passport or identity document</li>
            <li>Your notice of appearance (Form I-797)</li>
            <li>Your vaccination card</li>
            <li>Any other relevant medical records</li>
        </ul>
        <p>The San Miguel Clinic team may also suggest that you bring a friend or family member to the appointment for support, to explain treatments or recommendations, or to act as a translator.</p>

        <h3 className="w-full text-lg font-bold text-red-600">
            What happens during immigration exams?
        </h3>
        <p>Immigration exams at San Miguel Clinic are not like regular physical exams. The purpose of the exam is to assess your health and medical history to ensure that you do not have any health issues that could be harmful to the public.</p>
        <p>Your provider at San Miguel Clinic, located at 5712 Fondren, Houston, TX 77036, will explain what to expect at the beginning of the exam. Tests are administered for a range of diseases and conditions, such as:</p>
        <ul className="list-disc pl-5">
            <li>Sexually transmitted diseases (STDs) like gonorrhea and syphilis</li>
            <li>Leprosy</li>
            <li>Active tuberculosis</li>
            <li>Other infectious diseases that may require quarantine</li>
        </ul>
        <p>The team conducts a physical exam and checks your vaccination records. They also provide information on updating your vaccinations as needed. San Miguel Clinic may perform additional tests, such as blood tests or send you for X-rays, and provide any necessary treatment.</p>
        <p>Once all required medical tests are completed, your provider completes your immigration medical exam form and places it in a sealed envelope for you to include with your immigration application. They also provide you with a copy of the form for your own records.</p>

        <h3 className="w-full text-lg font-bold text-red-600">
            How long does it take to get the results of the immigration medical exam?
        </h3>
        <p>The results of the immigration medical exam generally take 8 to 10 business days after the date of your appointment and the submission of all required documents to USCIS.</p>

        <h3 className="w-full text-lg font-bold text-red-600">
            What should I do if I have a medical condition that could affect my visa application?
        </h3>
        <p>If you have a medical condition that could affect your visa application, it is important to speak with an immigration attorney. An immigration attorney can help you understand your options and present your application in the best possible way.</p>
    </section>

    <p className="w-full text-xl font-bold text-red-600">
        *Individual results are not guaranteed and may vary from person to person. Images may contain models.
    </p>
    </div>
  );
};

export default Home;
