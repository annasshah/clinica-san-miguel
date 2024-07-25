import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">
        Cuidado de la Salud Infantil
      </h1>
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
            Atención sanitaria compasiva y amigable para niños, que cubre chequeos de rutina, vacunaciones e intervenciones oportunas para un desarrollo infantil óptimo.
          </p>
          </div>
          </div>
          <p className="w-full text-2xl">
          Clínica San Miguel: Atención Pediátrica de Calidad para sus Hijos
          </p>
          <section className="w-full space-y-3 text-xl">
            <ol className="w-full">
            La Clínica San Miguel ofrece una amplia gama de servicios médicos para niños de 5 años en adelante. Nuestro equipo de médicos altamente calificados y compasivos está dedicado a brindar la mejor atención posible a sus hijos. Nuestros servicios incluyen:
            </ol>
          </section>
          <section className="w-full space-y-3 text-xl">
            <p className="w-full">Atención médica general:</p> 
            <ul className="w-full translate-x-7 list-disc">
              <li>
              Exámenes físicos escolares
              </li>
              <li>
              Chequeos generales
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
              Estreptococo
              </li>
              <li>
              Alergias
              </li>
            </ul>
          </section>
          <section className="w-full space-y-3 text-xl">
            <p className="w-full">Pruebas de laboratorio:</p> 
            <ul className="w-full translate-x-7 list-disc">
              <li>Análisis de sangre</li>
              <li>Pruebas de alergia</li>
              <li>
              Análisis de orina
              </li>
              <li>Rayos X</li>
            </ul>
          </section>
          <section className="w-full space-y-3 text-xl">
            <p className="w-full">Atención especializada:</p> 
            <ul className="w-full translate-x-7 list-disc">
              <li>Asma</li>
              <li>Virus estacionales</li>
            </ul>
          </section>
          <section className="w-full space-y-3 text-xl">
            <h2 className="w-full text-2xl font-bold text-red-600">
              ¿Qué debo hacer si mi hijo tiene fiebre?
            </h2>
            <ol className="w-full">
              Si la fiebre de su hijo supera los 102°F (39°C), debe darle acetaminofén o ibuprofeno. También puede darle un baño tibio o aplicar compresas frías en su frente. Si la fiebre persiste o si su hijo tiene otros síntomas, como dificultad para respirar, convulsiones o letargo, debe buscar atención médica de inmediato.
            </ol>
          </section>
          <section className="w-full space-y-3 text-xl">
            <h2 className="w-full text-2xl font-bold text-red-600">
              ¿Cómo puedo prevenir que mi hijo contraiga la gripe?
            </h2>
            <ol className="w-full">
              La mejor manera de prevenir la gripe es vacunarse anualmente. También es importante lavarse las manos con frecuencia, cubrirse la boca y la nariz al toser o estornudar, y evitar el contacto con personas enfermas.
            </ol>
          </section>
          <section className="w-full space-y-3 text-xl">
            <h2 className="w-full text-2xl font-bold text-red-600">
              ¿Qué debo hacer si mi hijo tiene alergias?
            </h2>
            <ol className="w-full">
              Si su hijo tiene alergias, es importante identificar los desencadenantes y evitarlos. También puede usar medicamentos para aliviar los síntomas de la alergia. Palabras clave:
            </ol>
            <li>Clínica Pediátrica de Houston</li>
            <li>Atención médica para niños</li>
            <li>Diagnóstico y tratamiento de enfermedades</li>
            <li>Pruebas de laboratorio</li>
            <li>Atención especializada</li>
            <li>Gripe, estreptococo, gripe, alergias en niños</li>
            <li>Preguntas frecuentes</li>
          </section>

          <h2 className="w-full text-2xl font-bold text-red-600">Esperamos poder ayudarle a cuidar la salud de su hijo.</h2>
    </div>

  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Children Healthcare</h1>
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
            Compassionate and child-friendly healthcare for your little ones,
            covering routine check-ups, vaccinations, and timely interventions
            for optimal childhood development.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
      San Miguel Clinic: Quality Pediatric Health Care for Your Children
      </p>
      <section className="w-full space-y-3 text-xl">
        <ol className="w-full">
        San Miguel Clinic offers a wide range of medical services for children ages 5 and up. Our team of highly qualified and compassionate doctors is dedicated to providing the best possible care for your children. Our services include:
        </ol>
      </section>
      <section className="w-full space-y-3 text-xl">
         <p className="w-full">General medical care:</p> 
        <ul className="w-full translate-x-7 list-disc">
          <li>
          School physicals
          </li>
          <li>
          General checkups
          </li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
         <p className="w-full">Diagnosis and treatment of illnesses:</p> 
        <ul className="w-full translate-x-7 list-disc">
          <li>
          Flu
          </li>
          <li>
          Strep</li>
          <li>
          Allergies
          </li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
         <p className="w-full">Laboratory tests:</p> 
        <ul className="w-full translate-x-7 list-disc">
          <li>Blood tests</li>
          <li>Allergy tests</li>
          <li>
          Urine tests</li>
          <li>X-ray</li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
         <p className="w-full">Specialized care:</p> 
        <ul className="w-full translate-x-7 list-disc">
          <li>Asthma</li>
          <li>Seasonal viruses</li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What should I do if Does my child have a fever?
        </h2>
        <ol className="w-full">
          If your child&apos;s fever is above 102°F (39°C), you should give your
          child acetaminophen or ibuprofen. You can also give him a warm bath or
          apply cold compresses to his forehead.. If the fever persists or if
          your child has other symptoms, such as difficulty breathing, seizures,
          or lethargy, you should seek medical attention immediately.
        </ol>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How can I prevent my child from getting the flu?
        </h2>
        <ol className="w-full">
          The best way to prevent the flu is to get vaccinated annually. It is
          also important to wash your hands frequently, cover your mouth and
          nose when coughing or sneezing, and avoid contact with sick people.
        </ol>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What should I do if my child has allergies?
        </h2>
        <ol className="w-full">
          If your child has allergies, it is important to identify the triggers
          and avoid them. You can also use medications to relieve allergy
          symptoms. Keywords:
        </ol>
        <li>Houston Pediatric Clinic </li>
        <li>Medical care for children</li>
        <li>Diagnosis and treatment of diseases</li>
        <li>Laboratory tests</li>
        <li>Specialized care</li>
        <li>Flu, strep, flu, allergies in children</li>
        <li>Frequently Asked Questions</li>
      </section>

      
      <h2 className="w-full text-2xl font-bold text-red-600">We hope to help you take care of your child&apos;s health.</h2>
      
    </div>
  );
};

export default Home;
