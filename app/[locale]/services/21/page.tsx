import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Drenaje de abscesos</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Abscess.png"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-fill lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Nuestros profesionales expertos brindan procedimientos seguros y
            efectivos para la eliminación de verrugas, asegurando una
            experiencia rápida y cómoda.
          </p>
        </div>
      </div>
      <section className="w-full space-y-3 text-xl">
  <h1 className="w-full text-2xl font-bold text-red-600">
    Clínica San Miguel: Expertos en Drenaje de Abscesos
  </h1>
  <h2 className="w-full text-2xl font-bold text-red-600">
    ¿Qué es un absceso?
  </h2>
  <p>
    Un absceso es una acumulación de pus en una cavidad formada por tejido inflamado. Ocurre cuando el cuerpo combate una infección bacteriana. Los abscesos pueden aparecer en cualquier parte del cuerpo, pero son más comunes en la piel, axilas, ingle y área perianal.
  </p>
</section>
<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    ¿Por qué se debe drenar un absceso?
  </h2>
  <p>
    Drenar un absceso es necesario para eliminar el pus y la infección. Si no se drena, el absceso puede aumentar de tamaño y causar dolor, fiebre e incluso sepsis.
  </p>
  <h2 className="w-full text-2xl font-bold text-red-600">
    Complicaciones de un Absceso:
  </h2>
  <ul className="list-disc pl-5">
    <li>Infección del torrente sanguíneo (septicemia)</li>
    <li>Infección profunda de los tejidos (fasciitis necrotizante)</li>
    <li>Cicatrices</li>
  </ul>
</section>
<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    Seguimiento y Recomendaciones después del Drenaje:
  </h2>
  <p>
    Después del drenaje del absceso, es importante seguir las recomendaciones del médico para evitar complicaciones. Estas recomendaciones pueden incluir:
  </p>
  <ul className="list-disc pl-5">
    <li>Tomar antibióticos</li>
    <li>Limpiar la herida regularmente</li>
    <li>Aplicar compresas calientes o frías</li>
    <li>Elevar el área afectada</li>
  </ul>
</section>
<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    Beneficios del Drenaje de Abscesos:
  </h2>
  <ul className="list-disc pl-5">
    <li>Alivia el dolor y la inflamación</li>
    <li>Reduce el riesgo de complicaciones</li>
    <li>Acelera la curación</li>
  </ul>
</section>
<h1 className="bold w-full text-3xl font-bold text-red-600">Preguntas Frecuentes</h1>
<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    ¿Qué tan doloroso es el procedimiento?
  </h2>
  <p>
    El procedimiento se realiza bajo anestesia local, por lo que el dolor es mínimo.
  </p>
</section>
<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    ¿Cuánto tiempo toma la recuperación?
  </h2>
  <p>
    La recuperación es generalmente rápida. La mayoría de las personas pueden volver a sus actividades normales en uno o dos días.
  </p>
</section>
<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    ¿Cuánto cuesta el procedimiento?
  </h2>
  <p>
    El costo del procedimiento varía dependiendo del tamaño y la ubicación del absceso. La consulta cuesta solo $19. Visita nuestra clínica más cercana para obtener más información.
  </p>
</section>
<h2 className="w-full text-2xl font-bold text-red-600">
  Atención efectiva y compasiva en la Clínica San Miguel.
</h2>
    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Abscess Drainage</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Abscess.png"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-fill lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Swift and effective drainage of abscesses to relieve pain, prevent
            complications, and promote rapid healing.
          </p>
        </div>
      </div>
      <section className="w-full space-y-3 text-xl">
  <h1 className="w-full text-2xl font-bold text-red-600">
    San Miguel Clinic: Experts in Abscess Drainage
  </h1>
  <h2 className="w-full text-2xl font-bold text-red-600">
    What is an abscess?
  </h2>
  <p>
    An abscess is a collection of pus in a cavity formed by inflamed tissue. It occurs when the body fights a bacterial infection. Abscesses can appear anywhere on the body, but are most common on the skin, armpits, groin, and perianal area.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    Why should an abscess be drained?
  </h2>
  <p>
    Draining an abscess is necessary to remove pus and infection. If not drained, the abscess can increase in size and cause pain, fever, and even sepsis.
  </p>
  <h2 className="w-full text-2xl font-bold text-red-600">
    Complications of an Abscess:
  </h2>
  <ul className="list-disc pl-5">
    <li>Bloodstream infection (septicemia)</li>
    <li>Deep tissue infection (necrotizing fasciitis)</li>
    <li>Scars</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    Follow-up and Recommendations after Drainage:
  </h2>
  <p>
    After drainage of the abscess, it is important to follow the doctor's recommendations to avoid complications. These recommendations may include:
  </p>
  <ul className="list-disc pl-5">
    <li>Take antibiotics</li>
    <li>Clean the wound regularly</li>
    <li>Apply hot or cold compresses</li>
    <li>Elevate the affected area</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    Benefits of Abscess Drainage:
  </h2>
  <ul className="list-disc pl-5">
    <li>Relieves pain and inflammation</li>
    <li>Reduces the risk of complications</li>
    <li>Accelerates healing</li>
  </ul>
</section>

<h1 className="bold w-full text-3xl font-bold text-red-600">Frequently Asked Questions</h1>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    How painful is the procedure?
  </h2>
  <p>
    The procedure is done under local anesthesia, so the pain is minimal.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    How long does recovery take?
  </h2>
  <p>
    Recovery is usually quick. Most people can return to normal activities in one or two days.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-2xl font-bold text-red-600">
    How much does the procedure cost?
  </h2>
  <p>
    The cost of the procedure varies depending on the size and location of the abscess. The consultation is only $19. Visit our nearest clinic for more information.
  </p>
</section>

<h2 className="w-full text-2xl font-bold text-red-600">
  Effective, Compassionate Care at San Miguel Clinic.
</h2>

    </div>
  );
};

export default Home;
