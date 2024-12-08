import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">
        Eliminación de Verrugas
      </h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/WartRemoval.png?t=2024-02-18T11%3A06%3A51.049Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
<div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
    <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
    <p className="text-2xl font-light lg:text-3xl">
    Nuestros profesionales capacitados brindan procedimientos seguros y efectivos de eliminación de verrugas, lo que garantiza.
    </p>
</div>
</div>
<p className="w-full text-2xl">
    Clínica San Miguel: Eliminación de Verrugas con Cauterización Fácil, Rápida y Sin Cita.
</p>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Qué es la cauterización de verrugas?
    </h2>
    <ol className="w-full">
        La cauterización de verrugas es un procedimiento que utiliza un dispositivo eléctrico para quemar la verruga y eliminarla de la piel. Es un método rápido, seguro y efectivo para eliminar verrugas de diferentes tamaños y ubicaciones.
    </ol>
</section>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Cómo se realiza el procedimiento?
    </h2>
    <ol className="w-full translate-x-7 list-disc">
        <li>Se aplica anestesia local en el área afectada para adormecerla.</li>
        <li>Se usa el cauterizador para quemar la verruga.</li>
        <li>Se limpia el área y se aplica un vendaje.</li>
    </ol>
</section>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Cómo prepararse para el procedimiento?
    </h2>
    <ol className="w-full translate-x-7 list-disc">
        <li>Informe a su médico si tiene alguna condición médica o alergia.</li>
        <li>Deje de tomar medicamentos anticoagulantes unos días antes del procedimiento.</li>
        <li>Evite la cafeína y el alcohol 24 horas antes del procedimiento.</li>
    </ol>
</section>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Qué cuidados se deben tomar después del procedimiento?
    </h2>
    <ol className="w-full translate-x-7 list-disc">
        <li>Mantenga el área limpia y seca.</li>
        <li>Aplique ungüento antibiótico según las indicaciones.</li>
        <li>Evite rascarse el área.</li>
        <li>Proteja el área del sol.</li>
    </ol>
</section>

<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Cómo saber si es una verruga o un lunar?
    </h2>
    <p className="w-full list-disc">
        Las verrugas son pequeños bultos en la piel que pueden ser marrones, blancas o rosadas.<br></br>
        Los lunares son manchas en la piel que pueden ser de diferentes colores y tamaños.
    </p>
</section>

<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Cómo reconocer un lunar canceroso?
    </h2>
    <p>Los lunares cancerosos suelen tener las siguientes características:</p>
    <ol className="w-full translate-x-7 list-disc">
        <li>Asimetría.</li>
        <li>Bordes irregulares.</li>
        <li>Coloración no uniforme.</li>
        <li>Diámetro mayor de 6 milímetros.</li>
        <li>Cambios en el tamaño, forma o color.</li>
    </ol>
    <h1 className="bold w-full text-3xl font-bold font text-red-600">Preguntas Frecuentes</h1>
    <br></br>
    <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">¿Cuánto tiempo dura el procedimiento?</h2>
        <p>El procedimiento generalmente dura unos pocos minutos.</p>
        <br></br>
        <h2 className="w-full text-2xl font-bold text-red-600">¿Es doloroso el procedimiento?</h2>
        <p>La anestesia local adormece el área, por lo que el procedimiento no es doloroso.</p>
        <br></br>
        <h2 className="w-full text-2xl font-bold text-red-600">¿Cuántas sesiones se necesitan?</h2>
        <p>En la mayoría de los casos, una sola sesión es suficiente para eliminar la verruga.</p>
        <br></br>
        <h2 className="w-full text-2xl font-bold text-red-600">¿Qué debo hacer si tengo más preguntas?</h2>
        <p>¡No dude en llamar a la Clínica San Miguel para obtener más información o para programar una cita!</p>
    </section>
    <br></br>
    <h2 className="w-full text-2xl font-bold text-red-600">Piel Suave, Tú con Confianza - Diga Adiós a las Verrugas con Facilidad.</h2>
</section>
</div>

  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Wart Removal</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/WartRemoval.png?t=2024-02-18T11%3A06%3A51.049Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Our skilled professionals provide safe and effective wart removal
            procedures, ensuring a quick and comfortable experience.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
        San Miguel Clinic: Wart Removal with Cautery Easy, Fast and Without an
        Appointment.
      </p>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What is wart cauterization?
        </h2>
        <ol className="w-full">
        Wart cauterization is a procedure that uses an electrical device to burn the wart and remove it from the skin. It is a quick, safe, and effective method to remove warts of different sizes and locations.
        </ol>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How is the procedure performed?
        </h2>
        <ol className="w-full translate-x-7 list-disc">
          <li>Local anesthesia is applied to the affected area to numb it.</li>
          <li>The cauterizer is used to burn the wart.</li>
          <li>The area is cleaned and a bandage is applied</li>
        </ol>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
        How to prepare for the procedure?
        </h2>
        <ol className="w-full translate-x-7 list-disc">
          <li>Inform your doctor if you have any medical conditions or allergies.</li>
          <li>Stop taking blood-thinning medications a few days before the procedure.</li>
          <li>Avoid caffeine and alcohol 24 hours before the procedure.</li>
        </ol>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What care should be taken after the procedure?
        </h2>
        <ol className="w-full translate-x-7 list-disc">
          <li>Keep the area clean and dry.</li>
          <li>Apply antibiotic ointment as directed.</li>
          <li>Avoid scratching the area.</li>
          <li>Protect the area from the sun.</li>
        </ol>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How do you know if it is a wart or a mole?
        </h2>
        <p className="w-full list-disc">
          Warts are small bumps on the skin that may be brown, white, or pink.<br></br>
          Moles are spots on the skin that can be of different colors and sizes.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How recognize a cancerous mole?
        </h2>
        <p>Carcinogenic moles usually have the following characteristics:</p>
        <ol className="w-full translate-x-7 list-disc">
          <li>Asymmetry.</li>
          <li>Irregular edges.</li>
          <li>Non-uniform coloring.</li>
          <li>Diameter greater than 6 millimeters.</li>
          <li>Changes in size, shape or color.</li>
        </ol>
        <h1 className="bold w-full text-3xl font-bold font text-red-600">Frequently Asked Questions</h1>
       <br></br>
        <section className="w-full space-y-3 text-xl">

        <h2 className="w-full text-2xl font-bold text-red-600">How long does the procedure take?</h2>
        <p>The procedure usually takes a few minutes.</p>
       
       <br></br>

        <h2 className="w-full text-2xl font-bold text-red-600">Is the procedure painful?</h2>
        <p>Local anesthesia numbs the area, so the procedure is not painful.</p>
        <br></br>
        <h2 className="w-full text-2xl font-bold text-red-600">How many sessions are needed?</h2>
        <p>In most cases, a single session is enough to remove the wart.</p>
        <br></br>
        <h2 className="w-full text-2xl font-bold text-red-600">What should I do if I have more questions?</h2>
        <p>Feel free to call San Miguel Clinic for more information or to schedule an appointment!</p>
        </section>
        <br></br>
        
        <h2 className="w-full text-2xl font-bold text-red-600">Smooth Skin, Confident You - Say Goodbye to Warts with Ease.</h2>
      </section>
    </div>
  );
};

export default Home;
