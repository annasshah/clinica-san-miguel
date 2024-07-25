import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
    <h1 className="text-center text-6xl text-red-600">Prueba de Papanicolaou</h1>
    <div className="flex w-full flex-col lg:flex-row">
      <Image
        src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Papsmear.png?t=2024-02-11T07%3A02%3A38.567Z"
        width={1000}
        height={1000}
        alt="cover"
        className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
      />
      <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
        <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
        <p className="text-2xl font-light lg:text-3xl">
          Pruebas de Papanicolaou regulares para la detección temprana de anomalías cervicales,
          promoviendo la salud reproductiva de las mujeres y previniendo el cáncer de cuello uterino.
        </p>
      </div>
    </div>
    <p className="w-full text-2xl">
      Tu Especialista en Pruebas de Papanicolaou - PapSmear
    </p>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Qué es la prueba de Papanicolaou?
      </h2>
      <ol className="w-full">
        La prueba de Papanicolaou, también conocida como citología vaginal o prueba de Papanicolaou, 
        es una prueba realizada para ayudar a prevenir y detectar el cáncer de cuello uterino de forma temprana.
        El cuello uterino es la parte inferior del útero que se abre hacia la vagina.
      </ol>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Qué diagnostica la prueba de Papanicolaou?
      </h2>
      <p>
        La prueba de Papanicolaou busca anomalías en las células cervicales antes de que se conviertan en cáncer. Estas anomalías pueden ser causadas por el virus del papiloma humano (VPH), que es una infección de transmisión sexual (ITS).
      </p>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Por qué es importante la prueba de Papanicolaou?
      </h2>
      <p className="w-full list-disc">
        La prueba de Papanicolaou es una herramienta muy eficaz para prevenir el cáncer de cuello uterino. Si se detecta y trata de forma temprana, el cáncer de cuello uterino es altamente curable.
      </p>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Quién debería hacerse la prueba de Papanicolaou?
      </h2>
      <p className="w-full list-disc">
        Todas las mujeres que han tenido relaciones sexuales deben hacerse una prueba de Papanicolaou. La frecuencia con la que debe realizarse la prueba depende de la edad y el historial de salud de la mujer.
      </p>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Con qué frecuencia debo hacerme la prueba de Papanicolaou?
      </h2>
      <p className="w-full list-disc">
        Las mujeres de 21 a 29 años deben hacerse una prueba de Papanicolaou cada tres años. Las mujeres de 30 a 65 años deben hacerse una prueba de Papanicolaou cada cinco años, siempre que sus resultados sean normales.
      </p>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Qué pasa si los resultados de mi prueba de Papanicolaou son anormales?
      </h2>
      <p className="w-full list-disc">
        Si los resultados de tu prueba de Papanicolaou son anormales, tu médico puede recomendarte que te sometas a más pruebas. Estas pruebas pueden incluir una colposcopia, que es un examen detallado del cuello uterino, o una biopsia, que es la extracción de una pequeña porción de tejido del cuello uterino para su análisis en el laboratorio.
      </p>
    </section>
    <h1 className="bold w-full text-3xl font-bold text-red-600">Preguntas frecuentes</h1>
  
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Qué debo hacer para prepararme para la prueba de Papanicolaou?
      </h2>
      <p className="w-full list-disc">
        No es necesario ayunar para la prueba de Papanicolaou. Sin embargo, es importante evitar las relaciones sexuales durante 24 horas antes de la prueba. También debes evitar las duchas vaginales o el uso de tampones durante 24 horas antes de la prueba.
      </p>
    </section>
    <section className="w-full space-y-3 text-xl">
      <div>
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Qué sucede durante una prueba de Papanicolaou?
        </h2>
        <br></br>
        <p>La prueba de Papanicolaou se realiza en el consultorio de tu médico. El médico o la enfermera colocarán un espéculo dentro de tu vagina para abrirla. Luego, utilizando un cepillo o una espátula, tomarán una muestra de células de tu cuello uterino. La muestra será enviada al laboratorio para su análisis.</p>
      </div>
    </section>
    <section className="w-full space-y-3 text-xl">
      <div>
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Es dolorosa la prueba de Papanicolaou?
        </h2>
        <br></br>
        <p>La prueba de Papanicolaou generalmente no es dolorosa. Sin embargo, algunas mujeres pueden sentir una ligera incomodidad o presión durante el procedimiento.</p>
      </div>
    </section>
    <section className="w-full space-y-3 text-xl">
      <div>
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Cuáles son los riesgos de la prueba de Papanicolaou?
        </h2>
        <br></br>
        <p>Los riesgos de la prueba de Papanicolaou son mínimos. En casos raros, la prueba puede causar un leve sangrado o infección.</p>
      </div>
    </section>
    <section className="w-full space-y-3 text-xl">
      <div>
        <h2 className="w-full text-2xl font-bold text-red-600">
          ¿Dónde puedo hacerme la prueba de Papanicolaou?
        </h2>
        <br></br>
        <p>La prueba de Papanicolaou puede realizarse en el consultorio de tu médico, en una clínica de salud o en un centro de atención primaria.</p>
      </div>
    </section>
    <h2 className="w-full text-2xl font-bold text-red-600">Detección temprana: Pruebas de Papanicolaou esenciales para la salud de las mujeres.</h2>
  </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Pap Smear</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Papsmear.png?t=2024-02-11T07%3A02%3A38.567Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Regular Pap smears for early detection of cervical abnormalities,
            promoting women&apos;s reproductive health and preventing cervical
            cancer.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
      Your Pap Test Specialist - PapSmear
      </p>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
        What is the Pap test?
        </h2>
        <ol className="w-full">
        The Papanicolaou test, also known as vaginal cytology or Pap-smear, 
        is a test performed to help prevent and detect cervical cancer early..
        The cervix is ​​the lower part of the uterus that opens into the vagina.
        </ol>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
        What does the Pap test diagnose?
        </h2>
      <p>The Pap test looks for abnormalities in cervical cells before they turn into cancer. These abnormalities can be caused by the human papillomavirus (HPV), which is a sexually transmitted infection (STD).
      </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
        Why is the Pap test important?
        </h2>
        <p className="w-full list-disc">
        The Pap test is a very effective tool to prevent cervical cancer. If detected and treated early, cervical cancer is highly curable.

        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Who should be tested for Pap test?
        </h2>
        <p className="w-full list-disc">
        All women who have had sexual relations should have a Pap test. How often the test should be performed depends on the woman's age and health history.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How often should I get a Pap test?
        </h2>
        <p className="w-full list-disc">
        Women ages 21 to 29 should get a Pap test every three years. Women ages 30 to 65 should have a Pap smear every five years, as long as their results are normal.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
        What happens if my Pap test results are abnormal?
        </h2>
        <p className="w-full list-disc">
        If your Pap test results are abnormal, your doctor may recommend that you undergo undergo further testing. These tests may include a colposcopy, which is a close-up examination of the cervix, or a biopsy, which is the removal of a small piece of tissue from the cervix for analysis in the laboratory.
        </p>
      </section>
      <h1 className="bold w-full text-3xl font-bold font text-red-600">Frequently Asked Questions</h1>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
        What should I do to prepare for the Pap test?
        </h2>
        <p className="w-full list-disc">
        It is not necessary to fast for the Pap test. However, it is important to avoid sexual intercourse for 24 hours before the test.. You should also avoid douching or tampons for 24 hours before the test.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <div>
          <h2 className="w-full text-2xl font-bold text-red-600">
          What happens during a Pap test?
          </h2>
          <br></br>
          <p>The Pap test is done in your doctor's office. The doctor or nurse will place a speculum inside your vagina to open it. Then, using a brush or spatula, he or she will take a sample of cells from your cervix.. The sample will be sent to the laboratory for analysis.</p>
        </div>
      </section>
      <section className="w-full space-y-3 text-xl">
        <div>
          <h2 className="w-full text-2xl font-bold text-red-600">
          Is the Pap test painful? 
          </h2>
          <br></br>
          <p>The Pap test is usually painless. However, some women may feel slight discomfort or pressure during the procedure.</p>
        </div>
      </section>
      <section className="w-full space-y-3 text-xl">
        <div>
          <h2 className="w-full text-2xl font-bold text-red-600">
          Which Are the risks of the Pap test?
          </h2>
          <br></br>
          <p>The risks of the Pap test are minimal. In rare cases, the test may cause minor bleeding or infection.</p>
        </div>
      </section>
      <section className="w-full space-y-3 text-xl">
        <div>
          <h2 className="w-full text-2xl font-bold text-red-600">
          Where can I get the test Pap test?
          </h2>
          <br></br>
          <p>The Pap test can be done in your doctor's office, at a health clinic, or at a primary care center.</p>
        </div>
      </section>
      <h2 className="w-full text-2xl font-bold text-red-600">Early Detection: Essential Pap Smear Testing for Women's Health.</h2>

    </div>
  );
};

export default Home;
