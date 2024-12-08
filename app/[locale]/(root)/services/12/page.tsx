import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">
        Extracción de Uñas Encarnadas
      </h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Ingrown%20toe%20nail.png"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Extracción rápida e indolora de uñas encarnadas, abordando el
            malestar y previniendo posibles infecciones.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
        Clínica San Miguel: Expertos en Extracción de Uñas Encarnadas
      </p>
      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          ¿Sufres dolor y malestar por una uñas encarnadas?
        </h1>
        <p>
          Ofrecemos un tratamiento rápido y efectivo para las uñas encarnadas.
          Nuestro equipo de profesionales médicos altamente capacitados
          utilizará las últimas técnicas para aliviar tu dolor y restaurar la
          salud de tus pies.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          Preparación antes de la extracción:
        </h1>
        <ul className="list-disc pl-5">
          <li>
            <b>Consulta con tu médico:</b> Es importante que consultes con un
            médico antes de la extracción de la uña encarnada para descartar
            cualquier condición médica subyacente.
          </li>
          <li>
            <b>Corta tus uñas:</b> Mantén tus uñas cortas y rectas para evitar
            que se encarnen nuevamente.
          </li>
          <li>
            <b>Remoja tus pies:</b> Remoja tus pies en agua tibia con sal
            durante 15-20 minutos antes de la extracción para ablandar la uña y
            facilitar el procedimiento.
          </li>
          <li>
            <b>Usa zapatos cómodos:</b> Evita usar zapatos ajustados que puedan
            ejercer presión sobre las uñas y causar dolor.
          </li>
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          ¿Cuándo debe ser removida una uña encarnada?
        </h1>
        <p>La extracción de la uña encarnada es necesaria cuando:</p>
        <ul className="list-disc pl-5">
          <li>El dolor es intenso y no se alivia con remedios caseros.</li>
          <li>La uña está infectada.</li>
          <li>
            La uña está muy encarnada y no se puede corregir con métodos no
            invasivos.
          </li>
        </ul>

        <p>
          <b>Cuidados después de la extracción:</b>
        </p>
        <li>Mantén la herida limpia y seca.</li>
        <li>
          Aplica un apósito antibiótico según las indicaciones de tu médico.
        </li>
        <li>Evita caminar descalzo.</li>
        <li>Eleva tu pie para reducir la hinchazón.</li>
        <li>Toma analgésicos de venta libre para aliviar el dolor.</li>

        <p>
          <b>Complicaciones:</b>
        </p>
        <p>
          Las complicaciones de la extracción de uñas encarnadas son raras, pero
          pueden incluir:
        </p>
        <li>Infección</li>
        <li>Sangrado</li>
        <li>Dolor crónico</li>
        <li>Deformidad de la uña</li>
        <li>
          Consulta a tu médico antes de realizar el procedimiento si eres
          diabético.
        </li>

        <p>
          <b>Beneficios:</b>
        </p>
        <li>Alivio del dolor</li>
        <li>Prevención de infecciones</li>
        <li>Corrección de deformidades de las uñas</li>
        <li>Mejora de la calidad de vida</li>
      </section>

      <h1 className="bold w-full text-3xl font-bold font text-red-600">Preguntas Frecuentes</h1>


      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cuánto tiempo lleva quitar una uña encarnada?{" "}
        </h2>
        <p>El procedimiento generalmente dura de 15 a 30 minutos.</p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Es doloroso el procedimiento?{" "}
        </h2>
        <p>
          Se utiliza anestesia local para adormecer el área, por lo que el dolor
          es mínimo.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cuánto tiempo tarda en sanar la herida?{" "}
        </h2>
        <p>La herida generalmente se cura en 1-2 semanas.</p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Puedo volver al trabajo después de la extracción?{" "}
        </h2>
        <p>
          En la mayoría de los casos, puedes regresar al trabajo el mismo día.
        </p>
      </section>
      <h2 className="w-full text-2xl font-bold text-red-600">Comodidad y Alivio: Extracción de Uñas Encarnadas Hecha de Forma Correcta.</h2>
    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">
        Ingrown Toenail Removal
      </h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Ingrown%20toe%20nail.png"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Swift and painless removal of ingrown toenails, addressing
            discomfort and preventing potential infections.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
        San Miguel Clinic: Experts in Ingrown Toenail Removal
      </p>
      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          Do you suffer of pain and discomfort from an ingrown toenail?
        </h1>
        <p>
          We offer fast and effective treatment for ingrown toenails. Our team
          of highly trained medical professionals will use the latest techniques
          to relieve your pain and restore the health of your feet.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          Preparation before extraction:
        </h1>
        <ul className="list-disc pl-5">
          <li>
            <b>Consult with your doctor:</b>It is important that you consult
            with a doctor before extraction of ingrown toenail to rule out any
            underlying medical conditions.
          </li>
          <li>
            <b>Trim your nails: </b>Keep your nails short and straight to
            prevent them from becoming ingrown again.
          </li>
          <li>
            <b>Soak your feet:</b>Soak your feet in warm salt water for 15-20
            minutes before removal to soften the nail and make the procedure
            easier.
          </li>
          <li>
            <b>Wear comfortable shoes:</b>Avoid wearing tight shoes that can put
            pressure on the nails and cause pain.
          </li>
        </ul>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h1 className="w-full text-2xl font-bold text-red-600">
          When should an ingrown toenail be removed?
        </h1>
        <p>Ingrown toenail removal is necessary when:</p>
        <ul className="list-disc pl-5">
          <li>The pain is intense and is not relieved by home remedies.</li>
          <li>The nail is infected.</li>
          <li>
            The nail is very ingrown and cannot be corrected with non-invasive
            methods.
          </li>
        </ul>

        <p>
          <b>Care after removal:</b>
        </p>
        <li>Keep the wound clean and dry. </li>
        <li>Apply an antibiotic bandage as directed by your doctor.</li>
        <li>Avoid walking barefoot</li>
        <li>Elevate your foot to reduce swelling.</li>
        <li>Take over-the-counter pain relievers to relieve pain .</li>

        <p>
          <b>Complications:</b>
        </p>
        <p>
          Complications of Removal of ingrown toenails are rare, but may
          include:
        </p>
        <li>Infection</li>
        <li>Bleeding</li>
        <li>Chronic pain</li>
        <li>Nail deformity</li>
        <li>
          Consult your doctor before to perform the procedure if you are
          diabetic.
        </li>

        <p>
          <b>Benefits:</b>
        </p>
        <li>Pain relief </li>
        <li>Infection prevention</li>
        <li>Correction of nail deformity</li>
        <li>Improvement of quality of life</li>
      </section>

      <h1 className="bold w-full text-3xl font-bold font text-red-600">Frequently Asked Questions</h1>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How long does it take to remove an ingrown toenail?{" "}
        </h2>
        <p>The procedure generally lasts 15 to 30 minutes.</p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Is the procedure painful?{" "}
        </h2>
        <p>
          Local anesthesia is used to numb the area, so the pain is minimal.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How long does it take for the wound to heal?{" "}
        </h2>
        <p>The wound usually heals in 1-2 weeks.</p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Can I go back to work after the extraction?{" "}
        </h2>
        <p>In most cases, you can return to work the same day. </p>
      </section>
      <h2 className="w-full text-2xl font-bold text-red-600">Comfort and Relief: Ingrown Toenail Removal Done Right.</h2>
    </div>
    
  );
};

export default Home;
