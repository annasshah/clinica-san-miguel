import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">
      Ultrasonido
      </h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Ultrasound.png?t=2024-06-13T15%3A34%3A28.790Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Servicios de ultrasonido de vanguardia para imágenes detalladas, asistiendo en el diagnóstico y seguimiento de diversas condiciones médicas.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
        Ultrasonido de Embarazo y Diagnóstico en Clínica San Miguel.
      </p>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Ultrasonido de embarazo
        </h2>
        <ol className="w-full">
          El ultrasonido de embarazo es una prueba de diagnóstico por imágenes que utiliza ondas sonoras para crear imágenes del feto dentro del útero. Es una prueba segura e indolora que se puede realizar en cualquier momento durante el embarazo.
        </ol>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          El ultrasonido de embarazo se utiliza para:
        </h2>
        <ul className="w-full translate-x-7 list-disc">
          <li>Confirmar el embarazo</li>
          <li>Estimar la fecha de parto</li>
          <li>Evaluar el crecimiento y desarrollo fetal</li>
          <li>Monitorear la salud fetal</li>
          <li>Ultrasonido diagnóstico</li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
        <p>
          El ultrasonido diagnóstico es una prueba utilizada para evaluar los órganos, tejidos y estructuras dentro del cuerpo. Puede ser utilizado para diagnosticar una variedad de condiciones médicas, incluyendo:
        </p>
        <ul className="w-full translate-x-7 list-disc">
          <li>Lesiones</li>
          <li>Infecciones</li>
          <li>Tumores</li>
          <li>Problemas de órganos</li>
          <li>Problemas con los vasos sanguíneos</li>
        </ul>
        <h1 className="bold w-full text-3xl font-bold text-red-600">Preguntas Frecuentes</h1>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Qué es un ultrasonido?
        </h2>
        <p className="w-full list-disc">
          Un ultrasonido es una prueba de diagnóstico por imágenes que utiliza ondas sonoras para crear imágenes del interior del cuerpo. Las ondas sonoras se transmiten a través del cuerpo y son reflejadas por los tejidos. Estas reflexiones se recogen y se convierten en imágenes en una pantalla.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cómo se realiza un ultrasonido?
        </h2>
        <p className="w-full list-disc">
          Un ultrasonido puede realizarse de varias maneras, dependiendo del área del cuerpo que se esté examinando. Generalmente, un técnico en ultrasonido aplicará un gel conductor en la piel del paciente y luego pasará un transductor sobre la piel. El transductor emite ondas sonoras y recoge las reflexiones.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Es seguro el ultrasonido?
        </h2>
        <p className="w-full list-disc">
          El ultrasonido es una prueba segura e indolora. No hay evidencia de que el ultrasonido cause algún daño al feto o al paciente.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cuánto dura un ultrasonido?
        </h2>
        <p className="w-full list-disc">
          La duración de un ultrasonido depende del área del cuerpo que se esté examinando. Un ultrasonido de embarazo generalmente dura unos 30 minutos.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cuáles son los beneficios del ultrasonido?
        </h2>
        <p className="w-full list-disc">
          El ultrasonido es una herramienta valiosa para el diagnóstico y tratamiento de una variedad de condiciones médicas. Puede ayudar a los médicos a diagnosticar lesiones, infecciones, tumores y otros problemas. El ultrasonido también puede ser utilizado para guiar procedimientos médicos, como biopsias y cirugías.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <div>
          <h2 className="w-full text-2xl font-bold text-red-600">
            Información general sobre ultrasonidos de embarazo y diagnóstico
          </h2>
          <br />
          <p>
            Los ultrasonidos de embarazo y diagnóstico son pruebas de diagnóstico por imágenes que utilizan ondas sonoras para crear imágenes del interior del cuerpo. El ultrasonido de embarazo se utiliza para evaluar el desarrollo del feto, mientras que el ultrasonido diagnóstico se utiliza para evaluar una variedad de condiciones médicas.
          </p>
          <br></br>
          <p>
            Clínica San Miguel ofrece una amplia gama de servicios de ultrasonido, incluyendo ultrasonido de embarazo y ultrasonido diagnóstico. Nuestros profesionales médicos altamente capacitados utilizan la última tecnología para proporcionar imágenes de alta calidad que pueden ayudar a diagnosticar y tratar una variedad de condiciones médicas.
          </p>
        </div>
      </section>
      <h2 className="w-full text-2xl font-bold text-red-600">
        Precisión y Cuidado: Servicios Integrales de Ultrasonido.
      </h2>
    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Ultrasound</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Ultrasound.png?t=2024-02-11T07%3A02%3A29.685Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Cutting-edge ultrasound services for detailed imaging, assisting in
            the diagnosis and monitoring of various medical conditions.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
        Pregnancy & Diagnostic Ultrasound at Clínica San Miguel.
      </p>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Pregnancy ultrasound
        </h2>
        <ol className="w-full">
          <li>Pregnancy ultrasound is a diagnostic imaging test that uses sound waves to create images of the fetus inside the uterus. It is a safe and painless test that can be performed at any time during pregnancy.</li>
        </ol>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Pregnancy ultrasound is used to:
        </h2>
        <ul className="w-full translate-x-7 list-disc">
          <li>Confirm pregnancy</li>
          <li>Estimate due date</li>
          <li>Evaluate fetal growth and development</li>
          <li>Monitor fetal health</li>
          <li>Diagnostic ultrasound</li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
        <p>Diagnostic ultrasound is a test used to evaluate the organs, tissues, and structures inside the body. It can be used to diagnose a variety of medical conditions, including:</p>
        <ul className="w-full translate-x-7 list-disc">
          <li>Injuries</li>
          <li>Infections</li>
          <li>Tumors</li>
          <li>Organ problems</li>
          <li>Problems with blood vessels</li>
        </ul>
        <h1 className="bold w-full text-3xl font-bold text-red-600">Frequently Asked Questions</h1>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What is an ultrasound?
        </h2>
        <p className="w-full list-disc">
          An ultrasound is a diagnostic imaging test that uses sound waves to create images of the inside of the body. Sound waves are transmitted through the body and reflected by tissues. These reflections are collected and converted into images on a screen.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How is an ultrasound performed?
        </h2>
        <p className="w-full list-disc">
          An ultrasound can be performed in several ways, depending on the area of the body being examined. Generally, an ultrasound technician will apply a conductive gel to the patient's skin and then pass a transducer over the skin. The transducer emits sound waves and collects reflections.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Is ultrasound safe?
        </h2>
        <p className="w-full list-disc">
          Ultrasound is a safe and painless test. There is no evidence that ultrasound causes any harm to the fetus or the patient.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How long does an ultrasound take?
        </h2>
        <p className="w-full list-disc">
          The duration of an ultrasound depends on the area of the body being examined. A pregnancy ultrasound usually lasts about 30 minutes.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What are the benefits of ultrasound?
        </h2>
        <p className="w-full list-disc">
          Ultrasound is a valuable tool for the diagnosis and treatment of a variety of medical conditions. It can help doctors diagnose injuries, infections, tumors, and other problems. Ultrasound can also be used to guide medical procedures, such as biopsies and surgeries.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <div>
          <h2 className="w-full text-2xl font-bold text-red-600">
            General information about pregnancy and diagnostic ultrasounds
          </h2>
          <br />
          <p>Pregnancy and diagnostic ultrasounds are diagnostic imaging tests that use sound waves to create images of the inside of the body. Pregnancy ultrasound is used to evaluate the development of the fetus, while diagnostic ultrasound is used to evaluate a variety of medical conditions.</p>
          <p>Clínica San Miguel offers a wide range of ultrasound services, including pregnancy ultrasound and diagnostic ultrasound. Our highly trained medical professionals use the latest technology to provide high-quality images that can help diagnose and treat a variety of medical conditions.</p>
        </div>
      </section>
      <h2 className="w-full text-2xl font-bold text-red-600">
        Precision and Care: Comprehensive Ultrasound Services.
      </h2>
    </div>
  );
};

export default Home;

