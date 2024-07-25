import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Atención Primaria</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Primary%20Care.png"
          width={1000}
          height={1000}
          alt="portada"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Análisis de sangre completos realizados por nuestro equipo de
            expertos para evaluar su perfil de salud, identificar problemas
            potenciales y guiar estrategias personalizadas de bienestar.
          </p>
        </div>
      </div>
      <section className="w-full space-y-3 text-xl">
  <h1 className="w-full text-2xl font-bold text-red-600">
    Clínica San Miguel: Su Centro de Atención Primaria de Confianza
  </h1>
  <h2 className="w-full text-2xl font-bold text-red-600">
    ¿Qué es la atención primaria?
  </h2>
  <p>
    La atención primaria es la puerta de entrada al sistema de salud. Es la atención médica proporcionada para prevenir, diagnosticar y tratar enfermedades comunes. También se enfoca en promover la salud y el bienestar a través de chequeos regulares y vacunaciones. La Clínica San Miguel cubre todas sus necesidades de salud a través de sus servicios de atención primaria.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    Estos servicios incluyen:
  </h2>
  <ul className="list-disc pl-5">
    <li>
      <b>Exámenes físicos anuales:</b> La atención primaria se enfoca en la promoción de la salud y la prevención de enfermedades. Su examen físico anual es una de las visitas más importantes con su proveedor de atención primaria. Le da a su proveedor en la Clínica San Miguel la oportunidad de evaluar su salud actual y buscar problemas de salud futuros. Además de los exámenes físicos anuales, la Clínica San Miguel realiza exámenes físicos del Departamento de Transporte (DOT), exámenes físicos de inmigración y exámenes físicos escolares.
    </li>
    <li>
      <b>Pruebas diagnósticas:</b> La Clínica San Miguel también ofrece muchos tipos de pruebas diagnósticas para evaluar la salud y diagnosticar problemas de salud. Las pruebas incluyen análisis de sangre, ecografías y electrocardiogramas (EKG). La Clínica San Miguel también ofrece pruebas de COVID-19.
    </li>
    <li>
      <b>Atención de emergencia:</b> Para manejar sus problemas de salud inesperados, la Clínica San Miguel ofrece atención urgente. Algunas de las necesidades de salud urgentes que el equipo aborda incluyen drenaje de abscesos y tratamiento de resfriados y gripe.
    </li>
    <li>
      <b>Exámenes de salud:</b> La Clínica San Miguel, también ofrece exámenes de salud, incluidos exámenes de Papanicolaou para detectar cáncer de cuello uterino en mujeres y pruebas de sangre para detectar cáncer de próstata en hombres.
    </li>
    <li>
      <b>Manejo de enfermedades crónicas:</b> El manejo de enfermedades crónicas también forma parte de los servicios de atención primaria de la Clínica San Miguel. El equipo se especializa en diagnosticar y tratar muchas enfermedades crónicas como la diabetes, la hipertensión arterial y los problemas de tiroides.
    </li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    ¿Cuándo necesito atención primaria?
  </h2>
  <p>
    Debe ver a su médico de atención primaria si experimenta alguno de los siguientes síntomas:
  </p>
  <ul className="list-disc pl-5">
    <li>Fiebre</li>
    <li>Dolor</li>
    <li>Tos</li>
    <li>Resfriado</li>
    <li>Gripe</li>
    <li>Alergias</li>
    <li>Problemas digestivos</li>
    <li>Lesiones</li>
    <li>Enfermedades crónicas (como diabetes, hipertensión o asma)</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    ¿Qué puedo esperar de la atención primaria?
  </h2>
  <p>
    En su cita con su médico de atención primaria, puede esperar lo siguiente:
  </p>
  <ul className="list-disc pl-5">
    <li>Un historial médico completo</li>
    <li>Un examen físico</li>
    <li>Pruebas diagnósticas, si es necesario</li>
    <li>Un plan de tratamiento</li>
    <li>Recetas para medicamentos, si es necesario</li>
    <li>Consejos de salud y prevención</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    Beneficios de la atención primaria:
  </h2>
  <ul className="list-disc pl-5">
    <li>
      <b>Acceso a un médico de confianza:</b> Establecer una relación con un médico que lo conoce a usted y su historial médico es esencial para recibir la atención adecuada.
    </li>
    <li>
      <b>Atención preventiva:</b> Los chequeos regulares y las vacunaciones pueden ayudar a prevenir enfermedades graves.
    </li>
    <li>
      <b>Manejo de enfermedades crónicas:</b> Su médico de atención primaria puede ayudarlo a manejar sus enfermedades crónicas y prevenir complicaciones.
    </li>
    <li>
      <b>Costo:</b> La atención primaria generalmente es más barata que la atención de emergencia o la hospitalización.
    </li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    Preguntas Frecuentes:
  </h2>
  <h3 className="w-full text-xl font-bold text-red-600">
    ¿Qué debo llevar a mi cita con el médico?
  </h3>
  <p>
    Una lista de sus medicamentos actuales y cualquier pregunta que tenga para su médico.
  </p>
  <h3 className="w-full text-xl font-bold text-red-600">
    ¿Cómo puedo hacer una cita?
  </h3>
  <p>
    En la Clínica San Miguel, no es necesario hacer una cita. Estamos abiertos los 7 días de la semana. Clínica sin cita previa.
  </p>
  <h3 className="w-full text-xl font-bold text-red-600">
    ¿Aceptan mi seguro?
  </h3>
  <p>
    No aceptamos seguro de salud; la consulta cuesta $19.
  </p>
</section>

<p className="w-full text-xl font-bold text-red-600">
  *Los resultados individuales no están garantizados y pueden variar de una persona a otra. Las imágenes pueden contener modelos.
</p>

<h2 className="w-full text-3xl font-bold text-red-600">
  Clínica San Miguel: Su Salud, Nuestra Prioridad
</h2>
    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Primary Care</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Primary%20Care.png?t=2024-02-11T07%3A03%3A40.449Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Patient-centered primary care services, offering comprehensive
            healthcare, preventive measures, and ongoing support for your
            overall well-being.
          </p>
        </div>
      </div>
      <section className="w-full space-y-3 text-xl">
  <h1 className="w-full text-2xl font-bold text-red-600">
    San Miguel Clinic: Your Trusted Primary Care Center
  </h1>
  <h2 className="w-full text-2xl font-bold text-red-600">
    What is primary care?
  </h2>
  <p>
    Primary care is the gateway to the health system. It is medical care provided to prevent, diagnose, and treat common diseases. It also focuses on promoting health and wellness through regular checkups and vaccinations. Clínica San Miguel covers all your health needs through their primary care services.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    These services include:
  </h2>
  <ul className="list-disc pl-5">
    <li>
      <b>Annual physical exams:</b> Primary care focuses on health promotion and disease prevention. Your annual physical exam is one of the most important visits with your primary care provider. It gives your provider at Clínica San Miguel the opportunity to evaluate your current health and look for future health problems. In addition to annual physicals, Clínica San Miguel performs Department of Transportation (DOT) physicals, immigration physicals, and school physicals.
    </li>
    <li>
      <b>Diagnostic Tests:</b> San Miguel Clinic also offers many types of diagnostic tests to evaluate health and diagnose health problems. Tests include blood tests, ultrasounds, and electrocardiograms (EKGs). Clínica San Miguel also offers COVID-19 testing.
    </li>
    <li>
      <b>Emergency care:</b> To manage your unexpected health problems, Clínica San Miguel offers urgent care. Some of the urgent health needs the team addresses include drainage of abscesses and treatment of colds and flu.
    </li>
    <li>
      <b>Health screenings:</b> The San Miguel Clinic at 787 E Park Row Dr, Arlington, TX 76010, also offers health screenings, including Pap tests to screen for cervical cancer in women and prostate blood tests to screen for prostate cancer in men.
    </li>
    <li>
      <b>Management of chronic diseases:</b> The management of chronic diseases is also part of the primary care services of the San Miguel Clinic. The team specializes in diagnosing and treating many chronic diseases such as diabetes, high blood pressure, and thyroid problems.
    </li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    When do I need primary care?
  </h2>
  <p>
    You should see your primary care doctor if you experience any of the following symptoms:
  </p>
  <ul className="list-disc pl-5">
    <li>Fever</li>
    <li>Pain</li>
    <li>Cough</li>
    <li>Cold</li>
    <li>Flu</li>
    <li>Allergies</li>
    <li>Digestive problems</li>
    <li>Injuries</li>
    <li>Chronic diseases (such as diabetes, hypertension, or asthma)</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    What can I expect from primary care?
  </h2>
  <p>
    At your appointment with your primary care doctor, you can expect the following:
  </p>
  <ul className="list-disc pl-5">
    <li>A complete medical history</li>
    <li>A physical examination</li>
    <li>Diagnostic tests, if necessary</li>
    <li>A treatment plan</li>
    <li>Prescriptions for medications, if necessary</li>
    <li>Health and prevention tips</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    Benefits of primary care:
  </h2>
  <ul className="list-disc pl-5">
    <li>
      <b>Access to a trusted doctor:</b> Establishing a relationship with a doctor who knows you and your medical history is essential to receiving the right care.
    </li>
    <li>
      <b>Preventive care:</b> Regular checkups and vaccinations can help prevent serious illness.
    </li>
    <li>
      <b>Chronic disease management:</b> Your primary care doctor can help you manage your chronic diseases and prevent complications.
    </li>
    <li>
      <b>Cost:</b> Primary care is generally cheaper than emergency care or hospitalization.
    </li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    Frequently Asked Questions:
  </h2>
  <h3 className="w-full text-xl font-bold text-red-600">
    What should I bring to my doctor's appointment?
  </h3>
  <p>
    A list of your current medications and any questions you have for your doctor.
  </p>
  <h3 className="w-full text-xl font-bold text-red-600">
    How can I make an appointment?
  </h3>
  <p>
    At Clínica San Miguel, no appointment is necessary. We are open 7 days a week. Walk-in Clinic.
  </p>
  <h3 className="w-full text-xl font-bold text-red-600">
    Do you accept my insurance?
  </h3>
  <p>
    We do not take health insurance; the consultation is $19.
  </p>
</section>

<p className="w-full text-xl font-bold text-red-600">
  *Individual results are not guaranteed and may vary from person to person. Images may contain models.
</p>

<h2 className="w-full text-3xl font-bold text-red-600">
  San Miguel Clinic: Your Health, Our Priority
</h2>

</div>
  );
};

export default Home;
