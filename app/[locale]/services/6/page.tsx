import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Limpieza de Oídos</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Children%20Health%20Care.png?t=2024-02-11T06%3A59%3A16.697Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
        <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
        <p className="text-2xl font-light lg:text-3xl">
          Servicios de limpieza de oídos suaves y expertos para asegurar una audición clara y prevenir molestias o complicaciones relacionadas con la acumulación de cerumen.
        </p>
        </div>
        </div>
        <p className="w-full text-2xl font-bold text-red-600">
        ¿Sientes molestias en tus oídos?
        </p>
        <section className="w-full space-y-3 text-xl">
        <h1>Síntomas:</h1>
        <ul className="w-full translate-x-7 list-disc">
        <li>Disminución de la audición</li>
        <li>Zumbido en los oídos</li>
        <li>Sensación de plenitud</li>
        <li>Dolor</li>
        </ul>
        </section>
        <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Por qué es importante lavar los oídos?
        </h2>
        <ol className="w-full">
          El cerumen es una sustancia natural que protege el canal auditivo. Sin embargo, cuando se acumula en exceso, puede causar problemas. El lavado de oídos ayuda a eliminar el cerumen acumulado y a prevenir complicaciones como:
        </ol>
        <li>Infecciones</li>
        <li>Tapones de cerumen</li>
        <li>Pérdida auditiva permanente</li>
        </section>
        <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Beneficios del lavado de oídos:
        </h2>
        <li>Mejora la audición</li>
        <li>Alivia el dolor y las molestias</li>
        <li>Reduce el riesgo de infecciones</li>
        <li>Previene la formación de tapones de cerumen</li>
        </section>
        <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Contraindicaciones del lavado de oídos:
        </h2>
        <li>Perforación del tímpano</li>
        <li>Otitis media aguda</li>
        <li>Tímpanos con tubos de ventilación</li>
        <li>Alergias al agua o a los productos utilizados en el lavado</li>
        </section>
        <h1 className="bold w-full text-3xl font-bold font text-red-600">Preguntas Frecuentes</h1>
        <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Qué se utiliza para el lavado de oídos?
        </h2>
        <ul>
          Se utiliza una solución de agua tibia y sal o un producto específico para lavar los oídos.
        </ul>
        </section>
        <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cuánto tiempo dura el lavado de oídos?
        </h2>
        <ul>El procedimiento suele durar unos minutos.</ul>
        </section>
        <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Es doloroso el lavado de oídos?
        </h2>
        <ul>
          No suele ser doloroso, pero puede causar una leve molestia temporal.
        </ul>
        </section>
        <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Es doloroso el lavado de oídos?
        </h2>
        <ul>
          No suele ser doloroso, pero puede causar una leve molestia temporal.
        </ul>
        </section>
        <h2 className="w-full text-2xl font-bold text-red-600">Oídos limpios, sonido claro - Mejore su audición de manera cómoda y segura.</h2>
    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Ear Cleaning</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Children%20Health%20Care.png?t=2024-02-11T06%3A59%3A16.697Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Gentle and expert ear cleaning services to ensure clear hearing and
            prevent discomfort or complications related to earwax buildup.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl font-bold text-red-600">
      Do you feel discomfort in your ears?
      </p>
      <section className="w-full space-y-3 text-xl">
      <h1>symptoms:</h1>
      <ul className="w-full translate-x-7 list-disc">
      <li>Decreased hearing</li>
      <li>Ringing in the ears</li>
      <li>Sensation of fullness</li>
      <li>Pain</li>

      </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Why is ear washing important?
        </h2>
        <ol className="w-full">
          Ear wax is a natural substance that protects the ear canal. However,
          when it accumulates in excess, it can cause problems. Ear washing
          helps remove accumulated wax and prevent complications such as:
        </ol>
        <li>Infections</li>
        <li>Wax plugs</li>
        <li>Permanent hearing loss</li>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Benefits of ear washing:
        </h2>

        <li>Improves hearing</li>
        <li>Relieves pain and discomfort</li>
        <li>Reduces the risk of infections</li>
        <li>Prevents the formation of wax plugs</li>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Contraindications of ear washing:
        </h2>
        <li>Eardrum perforation </li>
        <li>Acute otitis media</li>
        <li>Eardrums with ventilation tubes</li>
        <li>Allergies to water or products used in washing</li>
      </section>

      <h1 className="bold w-full text-3xl font-bold font text-red-600">Frequently Asked Questions</h1>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What is used for ear washing?
        </h2>
        <ul>
          A solution of warm water and salt or a specific product is used to
          wash the ears.
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How long does ear washing last?
        </h2>
        <ul>The procedure usually lasts a few minutes.</ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Is ear washing painful?
        </h2>
        <ul>
          It is not usually painful, but it can cause a slight temporary
          discomfort.
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Is ear washing painful?
        </h2>
        <ul>
          It is not usually painful, but it can cause a slight temporary
          discomfort.
        </ul>
      </section>
      

      <h2 className="w-full text-2xl font-bold text-red-600">Clear Ears, Clear Sound - Enhance Your Hearing Comfortably and Safely.</h2>

      
    </div>
  );
};

export default Home;
