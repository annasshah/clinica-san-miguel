import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Dentista</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/dentist.jpg"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
          Atención dental experta para sonrisas saludables. Desde limpiezas de rutina hasta procedimientos avanzados, nuestros dentistas capacitados priorizan su salud y bienestar bucal.
          </p>
        </div>
      </div>
      <section className="w-full space-y-3 text-xl">
  <h1 className="w-full text-2xl font-bold text-red-600">
    Servicios Dentales en Clínica Dental San Miguel
  </h1>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-xl font-bold text-red-600">
          Servicios de Prevención
        </h2>
        <ul className="list-disc pl-5">
          <li>Examen dental: Revisión completa de dientes, encías y tejidos orales.</li>
          <li>Limpieza dental: Eliminación de placa y sarro para prevenir caries y enfermedades de las encías.</li>
          <li>Aplicación de flúor: Fortalece los dientes y previene las caries.</li>
          <li>Selladores de fosas y fisuras: Protegen las superficies masticatorias de los dientes posteriores.</li>
          <li>Rayos X: Permiten al dentista ver debajo de la superficie de los dientes y encías.</li>
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-xl font-bold text-red-600">
          Servicios Restaurativos
        </h2>
        <ul className="list-disc pl-5">
          <li>Empastes: Relleno de caries con materiales estéticos o de amalgama.</li>
          <li>Endodoncia: Tratamiento del nervio dental en caso de caries profundas o infección.</li>
          <li>Extracciones: Extracción de dientes dañados o ausentes en la boca.</li>
          <li>Coronas: Restauración completa de un diente dañado o debilitado.</li>
          <li>Puentes: Reemplazo de uno o más dientes ausentes.</li>
          <li>Implantes dentales: Raíces artificiales que reemplazan las raíces de los dientes perdidos.</li>
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-xl font-bold text-red-600">
          Servicios Estéticos
        </h2>
        <ul className="list-disc pl-5">
          <li>Blanqueamiento dental: Aclaramiento del color de los dientes.</li>
          <li>Carillas dentales: Láminas delgadas de porcelana que se adhieren a la superficie frontal de los dientes para mejorar su apariencia.</li>
          <li>Contorneado dental: Remodelación de la forma de los dientes.</li>
          <li>Cierre de espacios: Corrección de espacios entre los dientes.</li>
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-xl font-bold text-red-600">
          Otros Servicios
        </h2>
        <ul className="list-disc pl-5">
          <li>Cirugía oral: Extracción de dientes impactados, quistes y otros problemas óseos.</li>
          <li>Dentaduras: Reemplazo de dientes ausentes con dentaduras completas o parciales.</li>
        </ul>
        <p>
          <em>Nota: Esta lista de servicios está limitada dependiendo de la disponibilidad del dentista.</em>
        </p>
      </section>

      <p className="w-full text-xl font-bold text-red-600">
        *Dedicados a su salud dental y hermosas sonrisas.
      </p>
    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Dentist</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/dentist.jpg"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Expert dental care for healthy smiles. From routine cleanings to
            advanced procedures, our skilled dentists prioritize your oral
            health and well-being.{" "}
          </p>
        </div>
      </div>
      <section className="w-full space-y-3 text-xl">
  <h1 className="w-full text-2xl font-bold text-red-600">
    Dental Services at San Miguel Dental Clinic
  </h1>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-xl font-bold text-red-600">
          Prevention Services
        </h2>
        <ul className="list-disc pl-5">
          <li>Dental examination: Complete review of teeth, gums, and oral tissues.</li>
          <li>Teeth cleaning: Removal of plaque and tartar to prevent cavities and gum diseases.</li>
          <li>Fluoride application: Strengthens teeth and prevents cavities.</li>
          <li>Pit and fissure sealants: Protect the chewing surfaces of the back teeth.</li>
          <li>X-rays: Allow the dentist to see beneath the surface of teeth and gums.</li>
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-xl font-bold text-red-600">
          Restorative Services
        </h2>
        <ul className="list-disc pl-5">
          <li>Fillings: Filling of cavities with aesthetic or amalgam materials.</li>
          <li>Endodontics: Treatment of the dental nerve in case of deep cavities or infection.</li>
          <li>Extractions: Removal of damaged or missing teeth in the mouth.</li>
          <li>Crowns: Complete restoration of a damaged or weakened tooth.</li>
          <li>Bridges: Replacement of one or more missing teeth.</li>
          <li>Dental implants: Artificial roots that replace the roots of lost teeth.</li>
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-xl font-bold text-red-600">
          Aesthetic Services
        </h2>
        <ul className="list-disc pl-5">
          <li>Teeth whitening: Lightening the color of teeth.</li>
          <li>Dental veneers: Thin porcelain sheets that adhere to the front surface of the teeth to improve their appearance.</li>
          <li>Dental contouring: Reshaping the shape of the teeth.</li>
          <li>Space closure: Correction of spaces between teeth.</li>
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-xl font-bold text-red-600">
          Other Services
        </h2>
        <ul className="list-disc pl-5">
          <li>Oral surgery: Removal of impacted teeth, cysts, and other bone problems.</li>
          <li>Dentures: Replacing missing teeth with complete or partial dentures.</li>
        </ul>
        <p>
          <em>Note: This list of services is limited depending on dentist availability.</em>
        </p>
      </section>

      <p className="w-full text-xl font-bold text-red-600">
        *Dedicated to your dental health and beautiful smiles.
      </p>

    </div>
  );
};

export default Home;
