import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Diabetes</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/diabetes.png"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-fill lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
          Atención integral de la diabetes, que incluye educación, seguimiento y planes de manejo personalizados para un estilo de vida más saludable y activo. Realizamos examenes de  laboratorio y plan de alimentacion para mejorar la salud y nivelar el azucar en sangre. 
          </p>
        </div>
      </div>
      <section className="w-full space-y-3 text-xl">
  <h1 className="w-full text-2xl font-bold text-red-600">
    Clínica San Miguel: Su Centro de Excelencia para el Control de la Diabetes
  </h1>
  <p>
    En Clínica San Miguel, nuestro dedicado equipo de médicos y profesionales de la salud está comprometido en brindar atención integral y personalizada a personas con diabetes.
  </p>
  <p>
    Ofrecemos una amplia gama de servicios para ayudarlo a controlar su diabetes y llevar una vida plena y saludable.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-xl font-bold text-red-600">
    ¡Controle su Diabetes y Viva una Vida Plena y Saludable!
  </h2>
  <p>
    Los servicios integrales para personas con diabetes pueden ayudar a controlar sus niveles de azúcar en la sangre y prevenir complicaciones.
  </p>
  <p>
    Los beneficios de los servicios integrales para el control de la diabetes incluyen:
  </p>
  <ul className="list-disc pl-5">
    <li>Mejor control del azúcar en la sangre</li>
    <li>Reducción del riesgo de complicaciones</li>
    <li>Mejora de la calidad de vida</li>
    <li>Reducción de costos de atención médica</li>
  </ul>
  <p>
    Hable con su médico sobre cómo acceder a los servicios integrales.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-xl font-bold text-red-600">
    Ofrecemos una amplia gama de servicios para el control de la diabetes, que incluyen:
  </h2>
  <ul className="list-disc pl-5">
    <li>Consulta médica especializada</li>
    <li>Educación sobre la diabetes</li>
    <li>Planificación de comidas y asesoramiento nutricional</li>
    <li>Monitoreo de glucosa en sangre</li>
    <li>Apoyo y seguimiento</li>
  </ul>
  <p>
    Invitamos a las personas con diabetes a contactarnos para programar una consulta por solo $19. ¡No se necesita cita previa!
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h1 className="w-full text-xl font-bold text-red-600">
    Preguntas Frecuentes
  </h1>
  <div>
    <h3 className="text-xl font-bold text-red-600">
      ¿Qué es la diabetes?
    </h3>
    <p>
      La diabetes es una enfermedad crónica que afecta cómo el cuerpo regula el azúcar (glucosa) en la sangre. La glucosa es la principal fuente de energía del cuerpo y proviene de los alimentos que consumimos.
    </p>
   
  </div>
</section>

<p className="w-full text-xl font-bold text-red-600">
  Empoderando vidas a través de la atención integral para la diabetes.
</p>
    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Diabetes</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/diabetes.png"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Comprehensive diabetes care, including education, monitoring, and
            personalized management plans for a healthier and more active
            lifestyle.
          </p>
        </div>
      </div>
      <section className="w-full space-y-3 text-xl">
  <h1 className="w-full text-2xl font-bold text-red-600">
    San Miguel Clinic: Your Center of Excellence for Diabetes Management
  </h1>
  <p>
    At San Miguel Clinic, our dedicated team of doctors and healthcare professionals is committed to providing comprehensive and personalized care to individuals with diabetes.
  </p>
  <p>
    We offer a wide range of services to help you manage your diabetes and live a full and healthy life.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-xl font-bold text-red-600">
    Control Your Diabetes and Live a Full and Healthy Life!
  </h2>
  <p>
    Comprehensive services for people with diabetes can help control your blood sugar levels and prevent complications.
  </p>
  <p>
    The benefits of comprehensive services for diabetes management include:
  </p>
  <ul className="list-disc pl-5">
    <li>Better blood sugar control</li>
    <li>Reduced risk of complications</li>
    <li>Improved quality of life</li>
    <li>Reduced healthcare costs</li>
  </ul>
  <p>
    Talk to your doctor about accessing comprehensive services.
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h2 className="w-full text-xl font-bold text-red-600">
    We offer a wide range of services for diabetes management, including:
  </h2>
  <ul className="list-disc pl-5">
    <li>Specialized medical consultation</li>
    <li>Diabetes education</li>
    <li>Meal planning and nutritional counseling</li>
    <li>Blood glucose monitoring</li>
    <li>Support and follow-up</li>
  </ul>
  <p>
    We invite people with diabetes to contact us to schedule a consultation for just $19. No appointment needed!
  </p>
</section>

<section className="w-full space-y-3 text-xl">
  <h1 className="w-full text-xl font-bold text-red-600">
    Frequently Asked Questions
  </h1>
  <div>
    <h3 className="text-xl font-bold text-red-600">
      What is diabetes?
    </h3>
    <p>
      Diabetes is a chronic disease that affects how the body regulates sugar (glucose) in the blood. Glucose is the body&apos;s main source of energy and comes from the food we eat.
    </p>
   
  </div>
</section>

<p className="w-full text-xl font-bold text-red-600">
  Empowering lives through comprehensive diabetes care.
</p>

    </div>
  );
};

export default Home;
