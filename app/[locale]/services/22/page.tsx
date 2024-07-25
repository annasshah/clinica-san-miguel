import { useLocale } from "next-intl";
import Image from "next/image";
// import Link from 'next/link'

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Hipertensión</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Hypertesion.png"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Nuestros profesionales capacitados brindan procedimientos seguros y
            efectivos para la eliminación de verrugas, garantizando una
            experiencia rápida y cómoda.
          </p>
        </div>
      </div>
      <section className="w-full space-y-3 text-xl">
  <h1 className="w-full text-2xl font-bold text-red-600">
    Clínica San Miguel: Tu Centro de Excelencia para el Tratamiento de la Hipertensión
  </h1>
  <h2 className="w-full text-2xl font-bold text-red-600">
    ¿Qué es la Hipertensión o Alta Presión?
  </h2>
  <p>
    La hipertensión, también conocida como presión arterial alta, es una condición en la que la fuerza ejercida por la sangre contra las paredes de las arterias es demasiado alta. Esta presión puede dañar las arterias y aumentar el riesgo de enfermedades cardíacas, accidentes cerebrovasculares, insuficiencia renal y otras complicaciones graves.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    ¿Por qué es Importante Tratar la Hipertensión?
  </h2>
  <p>
    Si no se trata, la hipertensión puede causar problemas de salud graves. Es importante controlar la presión arterial para reducir el riesgo de complicaciones.
  </p>
  <h2 className="w-full text-2xl font-bold text-red-600">
    Complicaciones de la Hipertensión:
  </h2>
  <ul className="list-disc pl-5">
    <li>Infarto</li>
    <li>Accidente cerebrovascular</li>
    <li>Insuficiencia renal</li>
    <li>Daño ocular</li>
    <li>Daño nervioso</li>
    <li>Demencia</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    Seguimiento de la Hipertensión o Alta Presión:
  </h2>
  <p>
    Es importante que las personas con hipertensión controlen su presión arterial regularmente. Esto se puede hacer en casa con un monitor de presión arterial o en el consultorio de un médico.
  </p>
  <h2 className="w-full text-2xl font-bold text-red-600">
    Recomendaciones para Controlar la Hipertensión:
  </h2>
  <ul className="list-disc pl-5">
    <li>Mantener una dieta saludable</li>
    <li>Hacer ejercicio regularmente</li>
    <li>Mantener un peso saludable</li>
    <li>No fumar</li>
    <li>Limitar el consumo de alcohol</li>
    <li>Controlar el estrés</li>
  </ul>
  <h2 className="w-full text-2xl font-bold text-red-600">
    Beneficios para la Salud de Controlar la Hipertensión:
  </h2>
  <ul className="list-disc pl-5">
    <li>Reduce el riesgo de enfermedades cardíacas, accidentes cerebrovasculares y otras complicaciones graves</li>
    <li>Mejora la calidad de vida</li>
    <li>Puede prolongar la vida</li>
  </ul>
</section>

<h1 className="bold w-full text-3xl font-bold text-red-600">Preguntas Frecuentes</h1>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    ¿Cuáles son los síntomas de la hipertensión?
  </h2>
  <p>
    La mayoría de las personas con hipertensión no tienen ningún síntoma. Por eso es importante controlar la presión arterial regularmente.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    ¿Qué causa la hipertensión?
  </h2>
  <p>
    En muchos casos, la causa de la hipertensión es desconocida. Sin embargo, hay algunos factores que pueden aumentar el riesgo de desarrollar hipertensión, como:
  </p>
  <ul className="list-disc pl-5">
    <li>Edad</li>
    <li>Antecedentes familiares de hipertensión</li>
    <li>Obesidad</li>
    <li>Falta de ejercicio</li>
    <li>Dieta poco saludable</li>
    <li>Consumo excesivo de alcohol</li>
    <li>Fumar</li>
    <li>Estrés</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    ¿Cómo se diagnostica la hipertensión?
  </h2>
  <p>
    La hipertensión se diagnostica midiendo la presión arterial. La presión arterial se mide en dos números:
  </p>
  <ul className="list-disc pl-5">
    <li>
      <b>Presión arterial sistólica</b> es el número superior. Mide la presión arterial cuando el corazón late.
    </li>
    <li>
      <b>Presión arterial diastólica</b> es el número inferior. Mide la presión arterial cuando el corazón está en reposo.
    </li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    ¿Cómo se trata la hipertensión?
  </h2>
  <p>
    El tratamiento para la hipertensión depende de la gravedad de la condición. En algunos casos, los cambios en el estilo de vida pueden ser suficientes para controlar la presión arterial. En otros casos, se necesitan medicamentos.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    Disponibilidad de la Clínica sin Cita Previa:
  </h2>
  <p>
    No necesitas hacer una cita. Puedes acudir a cualquiera de nuestras ubicaciones. Estamos abiertos los 7 días de la semana.
  </p>
</section>

<h2 className="w-full text-2xl font-bold text-red-600">
  Atención Integral, Conveniente y Compasiva en la Clínica San Miguel.
</h2>

    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Hypertension</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Hypertesion.png"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Expert management of hypertension, combining lifestyle modifications
            and medication for optimal blood pressure control.
          </p>
        </div>
      </div>
      <section className="w-full space-y-3 text-xl">
  <h1 className="w-full text-2xl font-bold text-red-600">
    San Miguel Clinic: Your Center of Excellence for Hypertension Treatment
  </h1>
  <h2 className="w-full text-2xl font-bold text-red-600">
    What is Hypertension or High Pressure?
  </h2>
  <p>
    Hypertension, also known as high blood pressure, is a condition in which the force exerted by blood against the walls of the arteries is too high. This pressure can damage the arteries and increase the risk of heart disease, stroke, kidney failure, and other serious complications.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    Why is it Important to Treat Hypertension?
  </h2>
  <p>
    If left untreated, hypertension can cause serious health problems. It is important to control blood pressure to reduce the risk of complications.
  </p>
  <h2 className="w-full text-2xl font-bold text-red-600">
    Complications of Hypertension:
  </h2>
  <ul className="list-disc pl-5">
    <li>Heart attack</li>
    <li>Stroke</li>
    <li>Kidney failure</li>
    <li>Eye damage</li>
    <li>Nerve damage</li>
    <li>Dementia</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    Follow-up of Hypertension or High Pressure:
  </h2>
  <p>
    It is important for people with hypertension to check their blood pressure regularly. This can be done at home with a blood pressure monitor or in a doctor's office.
  </p>
  <h2 className="w-full text-2xl font-bold text-red-600">
    Recommendations for Controlling Hypertension:
  </h2>
  <ul className="list-disc pl-5">
    <li>Maintain a healthy diet</li>
    <li>Exercise regularly</li>
    <li>Maintain a healthy weight</li>
    <li>Don't smoke</li>
    <li>Limit alcohol consumption</li>
    <li>Control stress</li>
  </ul>
  <h2 className="w-full text-2xl font-bold text-red-600">
    Health Benefits of Controlling Hypertension:
  </h2>
  <ul className="list-disc pl-5">
    <li>Reduces the risk of heart disease, stroke, and other serious complications</li>
    <li>Improves quality of life</li>
    <li>Can prolong life</li>
  </ul>
</section>

<h1 className="bold w-full text-3xl font-bold text-red-600">Frequently Asked Questions</h1>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    What are the symptoms of hypertension?
  </h2>
  <p>
    Most people with hypertension do not have any symptoms. That's why it's important to check your blood pressure regularly.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    What causes hypertension?
  </h2>
  <p>
    In many cases, the cause of hypertension is unknown. However, there are some factors that can increase the risk of developing hypertension, such as:
  </p>
  <ul className="list-disc pl-5">
    <li>Age</li>
    <li>Family history of hypertension</li>
    <li>Obesity</li>
    <li>Lack of exercise</li>
    <li>Unhealthy diet</li>
    <li>Excessive alcohol consumption</li>
    <li>Smoking</li>
    <li>Stress</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    How is hypertension diagnosed?
  </h2>
  <p>
    Hypertension is diagnosed by measuring blood pressure. Blood pressure is measured in two numbers:
  </p>
  <ul className="list-disc pl-5">
    <li>
      <b>Systolic blood pressure</b> is the upper number. It measures blood pressure when the heart beats.
    </li>
    <li>
      <b>Diastolic blood pressure</b> is the bottom number. It measures blood pressure when the heart is at rest.
    </li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    How is hypertension treated?
  </h2>
  <p>
    Treatment for hypertension depends on the severity of the condition. In some cases, lifestyle changes may be enough to control blood pressure. In other cases, medications are needed.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    Walk-In Clinic Availability:
  </h2>
  <p>
    You do not need to make an appointment. You can go to any of our locations. We are open 7 days a week.
  </p>
</section>

<h2 className="w-full text-2xl font-bold text-red-600">
  Comprehensive, Convenient, and Compassionate Care at San Miguel Clinic.
</h2>

    </div>
  );
};

export default Home;
