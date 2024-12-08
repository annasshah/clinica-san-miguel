import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Vitamin b12</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/vitamine%20B12.png"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
          Aumente sus niveles de energía y su bienestar general con suplementos de vitamina B-12, adaptados a las necesidades individuales.
          </p>
        </div>
      </div>
      <section className="w-full space-y-3 text-xl">
  <h1 className="w-full text-2xl font-bold text-red-600">
    Inyección de Vitamina B12 en Clínicas San Miguel
  </h1>
  
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-xl font-bold text-red-600">
    Vitamina B12
  </h2>
  <p>
    La vitamina B12 es un nutriente esencial que desempeña un papel importante en la salud cerebral, los nervios y la sangre. Las inyecciones de vitamina B12 pueden ser una forma efectiva de aumentar tus niveles de B12 y mejorar tu salud en general.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-xl font-bold text-red-600">
    Beneficios de la Inyección de Vitamina B12:
  </h2>
  <ul className="list-disc pl-5">
    <li>Aumenta los niveles de energía</li>
    <li>Mejora el estado de ánimo</li>
    <li>Fortalece el sistema inmunológico</li>
    <li>Mejora la función cognitiva</li>
    <li>Reduce el riesgo de enfermedades cardíacas</li>
    <li>Ayuda a prevenir la anemia</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-xl font-bold text-red-600">
    ¿Quién Necesita una Inyección de Vitamina B12?
  </h2>
  <p>
    Las personas con deficiencia de vitamina B12 pueden beneficiarse de una inyección. Las causas de la deficiencia de B12 incluyen:
  </p>
  <ul className="list-disc pl-5">
    <li>Dieta estrictamente vegana o vegetariana</li>
    <li>Problemas digestivos</li>
    <li>Edad avanzada</li>
    <li>Ciertos medicamentos</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-xl font-bold text-red-600">
    ¿Cuáles Son los Efectos Secundarios de la Inyección de Vitamina B12?
  </h2>
  <p>
    Los efectos secundarios son generalmente leves e incluyen:
  </p>
  <ul className="list-disc pl-5">
    <li>Dolor en el sitio de la inyección</li>
    <li>Rojeces</li>
    <li>Hinchazón</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <p className="w-full text-xl">
    Las inyecciones de vitamina B12 pueden ser una forma segura y efectiva de mejorar tu salud. Si crees que puedes tener deficiencia de vitamina B12, contacta a Clínicas San Miguel para obtener más información.
  </p>
</section>

<p className="w-full text-xl font-bold text-red-600">
  *Los resultados individuales pueden variar. Consulta con un profesional de la salud para obtener consejos personalizados.
</p>

<h2 className="w-full text-3xl font-bold text-red-600">
  Clínicas San Miguel: Potenciando la Salud a Través de la Vitamina B12
</h2>
    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Vitamin B-12</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/vitamine%20B12.png?t=2024-02-11T07%3A03%3A10.601Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Boost your energy levels and overall well-being with Vitamin B-12
            supplementation, tailored to individual needs.
          </p>
        </div>
      </div>
  
<section className="w-full space-y-3 text-xl">
  <h1 className="w-full text-2xl font-bold text-red-600">
    Vitamin B12 Injection at San Miguel Clinics
  </h1>
  
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-xl font-bold text-red-600">
    Vitamin B12
  </h2>
  <p>
    Vitamin B12 is an essential nutrient that plays a significant role in brain health, nerves, and blood. Vitamin B12 injections can be an effective way to increase your B12 levels and improve your overall health.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-xl font-bold text-red-600">
    Benefits of Vitamin B12 Injection:
  </h2>
  <ul className="list-disc pl-5">
    <li>Boosts energy levels</li>
    <li>Improves mood</li>
    <li>Strengthens the immune system</li>
    <li>Enhances cognitive function</li>
    <li>Reduces the risk of heart disease</li>
    <li>Helps prevent anemia</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-xl font-bold text-red-600">
    Who Needs a Vitamin B12 Injection?
  </h2>
  <p>
    People with Vitamin B12 deficiency can benefit from an injection. Causes of B12 deficiency include:
  </p>
  <ul className="list-disc pl-5">
    <li>Strict vegan or vegetarian diet</li>
    <li>Digestive issues</li>
    <li>Advanced age</li>
    <li>Certain medications</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-xl font-bold text-red-600">
    What Are the Side Effects of Vitamin B12 Injection?
  </h2>
  <p>
    Side effects are generally mild and include:
  </p>
  <ul className="list-disc pl-5">
    <li>Pain at the injection site</li>
    <li>Redness</li>
    <li>Swelling</li>
  </ul>
</section>

<section className="w-full space-y-3 text-xl">
  <p className="w-full text-xl">
    Vitamin B12 injections can be a safe and effective way to improve your health. If you think you may have a Vitamin B12 deficiency, contact San Miguel Clinics for more information.
  </p>
</section>

<p className="w-full text-xl font-bold text-red-600">
  *Individual results may vary. Consult with a healthcare professional for personalized advice.
</p>

<h2 className="w-full text-3xl font-bold text-red-600">
  San Miguel Clinics: Empowering Health Through Vitamin B12
</h2>
    </div>
  );
};

export default Home;
