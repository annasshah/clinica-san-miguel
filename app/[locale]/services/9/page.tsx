import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">
        Colesterol Alto y Triglicéridos
      </h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/High%20cholesterol%20and%20trig.png"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Manejo integral de los niveles altos de colesterol y triglicéridos a través de modificaciones en el estilo de vida, medicamentos y monitoreo continuo para la salud cardiovascular.
          </p>
          </div>
          </div>
          <p className="w-full text-2xl">
            Clínica San Miguel: Expertos en el tratamiento de colesterol alto y triglicéridos
          </p>
          <section className="w-full space-y-3 text-xl">
            <h2 className="w-full text-2xl font-bold text-red-600">¿Qué ofrecemos?</h2>
            <li>
              Consulta médica personalizada: Evaluamos tu historial médico, realizamos exámenes físicos y de laboratorio, y te ofrecemos un plan de tratamiento individualizado.
            </li>
            <li>
              Tratamientos: Ofrecemos una variedad de opciones de tratamiento, incluyendo cambios en la dieta, ejercicio, medicamentos y, en algunos casos, cirugía.
            </li>
            <li>
              Seguimiento: Monitoreamos de cerca tu progreso y te brindamos el apoyo necesario para alcanzar tus metas de salud.
            </li>
          </section>

          <section className="w-full space-y-3 text-xl">
            <h2 className="w-full text-2xl font-bold text-red-600">Diagnóstico</h2>
            <p>
              Por lo general, se realiza una prueba de sangre para monitorear los niveles de colesterol, llamada &quot;lípidograma&quot; o &quot;perfil lipídico&quot;, que informa lo siguiente:
            </p>
            <li>Colesterol total</li>
            <li>Colesterol LDL</li>
            <li>Colesterol HDL</li>
            <li>Triglicéridos: un tipo de grasa en la sangre</li>
            <p>
              Tu proveedor de salud en Clínica San Miguel te llamará una vez que los resultados estén listos y te explicará y responderá tus preguntas.
            </p>
          </section>

          <section className="w-full space-y-3 text-xl">
            <h2 className="w-full text-2xl font-bold text-red-600">Niños y pruebas de colesterol</h2>
            <p>
              Para la mayoría de los niños, el Instituto Nacional del Corazón, Pulmón y Sangre recomienda pruebas de colesterol entre los 9 y 11 años, seguidas de pruebas de seguimiento cada cinco años.
            </p>

            <p>
              Sin embargo, si tu hijo tiene antecedentes familiares de enfermedad cardíaca temprana o antecedentes personales de obesidad o diabetes, el médico puede recomendar pruebas de colesterol a una edad más temprana o con mayor frecuencia.
            </p>
          </section>

          <section className="w-full space-y-3 text-xl">
            <h2 className="w-full text-2xl font-bold text-red-600">Tratamiento</h2>
            <p>
              La principal medida para reducir el colesterol alto es cambiar tu estilo de vida; por ejemplo, comenzar a hacer más ejercicio o comer más saludablemente. Sin embargo, si ya has hecho estos cambios importantes en el estilo de vida y tus niveles de colesterol siguen siendo altos, tu médico puede recomendarte que tomes medicamentos.
            </p>
            <p>
              El hecho de si se recomienda un medicamento o una combinación de medicamentos depende de varios factores, incluyendo factores de riesgo personales, edad, salud y posibles efectos secundarios. Algunas opciones comunes son:
            </p>
            <li>
              <b>Estatinas.</b> Las estatinas bloquean una sustancia que necesita el hígado para producir colesterol. Esto hace que el hígado elimine el colesterol de la sangre. Algunas opciones posibles incluyen atorvastatina (Lipitor), fluvastatina (Lescol), lovastatina (Altoprev), pitavastatina (Livalo), pravastatina (Pravachol), rosuvastatina (Crestor) y simvastatina (Zocor).
            </li>

              <b>Inhibidores de la absorción de colesterol.</b> El intestino delgado absorbe el colesterol que ingieres con los alimentos y lo libera en el torrente sanguíneo. El medicamento ezetimiba (Zetia) ayuda a reducir el colesterol sanguíneo limitando la absorción de colesterol de la dieta. Ezetimiba se puede usar con un medicamento estatina.

          <li>
            <b>Ácido bempedoico.</b> Este nuevo medicamento funciona como las estatinas, pero es menos probable que cause dolor muscular. Agregar ácido bempedoico (Nexletol) a una dosis máxima de estatinas puede ayudar a reducir significativamente las lipoproteínas de baja densidad. También existe una tableta combinada que contiene ácido bempedoico y ezetimiba (Nexlizet).
          </li>
          <li>
            <b>Resinas fijadoras de ácidos biliares.</b> El hígado usa el colesterol para producir ácidos biliares, una sustancia necesaria para digerir los alimentos. Colestiramina (Prevalite), colesevelam (Welchol) y colestipol (Colestid) ayudan a reducir el colesterol indirectamente al unirse a los ácidos biliares. Esto hace que el hígado use el exceso de colesterol para producir más ácidos biliares, lo que reduce el nivel de colesterol en la sangre.
          </li>
          <li>
            <b>Inhibidores de PCSK9.</b> Estos medicamentos ayudan al hígado a absorber más colesterol LDL, lo que reduce la cantidad de colesterol circulante en la sangre. Alirocumab (Praluent) y evolocumab (Repatha) se pueden usar en personas con una afección genética que causa niveles muy altos de LDL o en personas con antecedentes de enfermedad coronaria y intolerancia a estatinas u otros medicamentos para el colesterol. Se inyectan bajo la piel cada pocas semanas y son costosos.
          </li>
          </section>

          <section className="w-full space-y-3 text-xl">
          <h2 className="w-full text-2xl font-bold text-red-600">
            Medicamentos para los triglicéridos altos
          </h2>
          <p>
            Si también tienes triglicéridos altos, tu médico puede recetarte:
          </p>

          <li>
            <b>Fibratos.</b> Los medicamentos fenofibrato (TriCor, Fenoglide, y otros) y gemfibrozil (Lopid) disminuyen la producción hepática de colesterol de lipoproteínas de muy baja densidad y aceleran la eliminación de triglicéridos de la sangre. Las lipoproteínas de muy baja densidad contienen principalmente triglicéridos. El uso de Fibratos junto con estatinas puede aumentar el riesgo de efectos secundarios de las estatinas.
          </li>
          <li>
            <b>Niacina.</b> La niacina limita la capacidad del hígado para producir colesterol LDL y VLDL. Pero la niacina no ofrece más beneficios que las estatinas. Además, la niacina se ha relacionado con daño hepático y accidente cerebrovascular, por lo que la mayoría de los médicos ahora solo la recomiendan para personas que no pueden tomar estatinas.
          </li>
          <li>
            <b>Suplementos con ácidos grasos omega 3.</b> Los suplementos con ácidos grasos omega 3 pueden ayudarte a reducir los triglicéridos. Puedes comprarlos con o sin receta médica. Si decides tomar suplementos de venta libre, obtén la aprobación de un médico primero. Los suplementos con ácidos grasos omega 3 pueden afectar otros medicamentos que estés tomando.
          </li>
          </section>

          <section className="w-full space-y-3 text-xl">
          <h2 className="w-full text-2xl font-bold text-red-600">
            La tolerancia varía
          </h2>
          <p>
            La tolerancia a los medicamentos varía de una persona a otra. Los efectos secundarios comunes de las estatinas son dolor muscular y daño muscular, pérdida de memoria y confusión reversible, y un aumento en el azúcar en sangre. Si decides tomar medicamentos para el colesterol, tu médico puede recomendar pruebas de función hepática para monitorear el efecto de los medicamentos en el hígado.
          </p>
          </section>

          <section className="w-full space-y-3 text-xl">
          <h2 className="w-full text-2xl font-bold text-red-600">
            Tratamiento del colesterol en niños
          </h2>
          <p>
            La tolerancia a los medicamentos varía de una persona a otra. Los efectos secundarios comunes de las estatinas son dolor muscular y daño muscular, pérdida de memoria y confusión reversible, y un aumento en el azúcar en sangre. Si decides tomar medicamentos para el colesterol, tu médico puede recomendar pruebas de función hepática para monitorear el efecto de los medicamentos en el hígado.
          </p>
          </section>

          <h1 className="bold w-full text-3xl font-bold font text-red-600">Preguntas Frecuentes</h1>


          <section className="w-full space-y-3 text-xl">
          <h2 className="w-full text-2xl font-bold text-red-600">
            ¿Qué son el colesterol y los triglicéridos?
          </h2>
          <li>
            El colesterol es una sustancia grasa que se encuentra en la sangre. El cuerpo necesita colesterol para funcionar correctamente, pero niveles altos pueden aumentar el riesgo de enfermedad cardíaca.
          </li>
          <li>
            Los triglicéridos son otro tipo de grasa que se encuentra en la sangre. Niveles altos de triglicéridos también pueden aumentar el riesgo de enfermedad cardíaca.
          </li>
          </section>

          <section className="w-full space-y-3 text-xl">
          <h2 className="w-full text-2xl font-bold text-red-600">
            ¿Cuáles son los síntomas del colesterol y los triglicéridos altos?
          </h2>
          <p>
            Por lo general, no hay síntomas. La única forma de saber si tienes colesterol y triglicéridos altos es a través de un análisis de sangre.
          </p>
          </section>

          <section className="w-full space-y-3 text-xl">
          <h2 className="w-full text-2xl font-bold text-red-600">
            ¿Qué causa el colesterol y los triglicéridos altos?
          </h2>
          <p>
          La dieta, la falta de ejercicio, la genética y ciertas condiciones médicas pueden contribuir a niveles altos de colesterol y triglicéridos.
          </p>
          </section>
          <h2 className="w-full text-2xl font-bold text-red-600">Regula tu Salud: Cuidado Experto para el Colesterol Alto.</h2>


    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">
        High Cholesterol and Triglycerides
      </h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/High%20cholesterol%20and%20trig.png"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Holistic management of high cholesterol and triglyceride levels
            through lifestyle modifications, medication, and ongoing monitoring
            for cardiovascular health.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
        San Miguel Clinic: Experts in the treatment of high cholesterol and
        triglycerides
      </p>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What do we offer?
        </h2>
        <li>
          Personalized medical consultation: We evaluate your medical history,
          perform physical and laboratory, and we offer you an individualized
          treatment plan.
        </li>
        <li>
          Treatments: We offer a variety of treatment options, including changes
          in diet, exercise, medications and, in some cases, surgery.
        </li>
        <li>
          Follow-up: We monitor your progress closely and give you the support
          you need to achieve your health goals.
        </li>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">Diagnosis</h2>
        <p>
          Usually in A blood test to monitor cholesterol levels, called a
          “lipidogram” or “lipid profile,” reports the following:
        </p>
        <li>Cholesterol total</li>
        <li>LDL Cholesterol</li>
        <li>HDL Cholesterol</li>
        <li>Triglycerides: a type of blood fat</li>
        <p>
          Your health provider at Clinica San Miguel will call you once the
          results are in and will explain and answer your questions.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Children and cholesterol testing
        </h2>
        <p>
          For most For children, the National Heart, Lung, and Blood Institute
          recommends cholesterol screening between ages 9 and 11, followed by
          repeat screening every five years.
        </p>

        <p>
          Yes If your child has a family history of early-onset heart disease or
          a personal history of obesity or diabetes, the doctor may recommend
          cholesterol testing at an earlier age or more frequently.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">Treatment</h2>
        <p>
          The main measure to reduce high cholesterol is to change your
          lifestyle; . for example, start exercising more or eating healthier.
          However, if you have already made these major lifestyle changes and
          your cholesterol levels are still high, your doctor may recommend that
          you take medication.
        </p>
        <p>
          The fact that Whether a medication or combination of medications is
          recommended to you depends on several factors, including personal risk
          factors, age, health, and possible side effects.. Some common options
          are:
        </p>
        <li>
          <b>Statins.</b> Statins block a substance that needs the liver to
          produce cholesterol. This causes the liver to remove cholesterol from
          the blood.. Possible options include atorvastatin (Lipitor),
          fluvastatin (Lescol), lovastatin (Altoprev), pitavastatin (Livalo),
          pravastatin (Pravachol), rosuvastatin (Crestor), and simvastatin
          (Zocor).
        </li>
        <li>
          <b>Cholesterol absorption inhibitors.</b> The small intestine absorbs
          the cholesterol you ingest with food and released into the
          bloodstream. The drug ezetimibe (Zetia) helps lower blood cholesterol
          by limiting the absorption of cholesterol from the diet. Ezetimibe can
          be used with a statin medication.
        </li>
        <li>
          <b>Bemptedoic acid.</b> This new drug works like statins, but is less
          likely to cause muscle pain. Adding bempedoic acid (Nexletol) to a
          maximum dose of statins may help significantly reduce low-density
          lipoproteins. There is also a combination tablet containing bempedoic
          acid and ezetimibe (Nexlizet).
        </li>
        <li>
          <b>Fixative resins of bile acids.</b> The liver uses cholesterol to
          make bile acids, a substance needed to digest food.. Cholestyramine
          (Prevalite), colesevelam (Welchol), and colestipol (Colestid) help
          lower cholesterol indirectly by binding to bile acids. This causes the
          liver to use excess cholesterol to make more bile acids, which lowers
          the blood cholesterol level.
        </li>
        <li>
          <b>PCSK9 Inhibitors.</b> These medications help the liver absorb more
          LDL cholesterol, which reduces the amount of cholesterol circulating
          in the blood. Alirocumab (Praluent) and evolocumab (Repatha) may be
          used for people with a genetic condition that causes very high levels
          of LDL or for people with a history of coronary heart disease and
          intolerance to statins or other cholesterol medications. They are
          injected under the skin every few weeks and are expensive.
        </li>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Triglyceride medications high
        </h2>
        <p>If you also have high triglycerides, your doctor may prescribe:</p>

        <li>
          <b>Fibrates.</b> The drugs fenofibrate (TriCor, Fenoglide, and others)
          and gemfibrozil (Lopid) decrease hepatic production of very
          low-density lipoprotein cholesterol and speed up the removal of
          triglycerides from the blood. Very low-density lipoprotein cholesterol
          contains mainly triglycerides. Using Fibrates together with statins
          may increase the risk of statin side effects.
        </li>
        <li>
          <b>Niacin.</b> Niacin limits the liver&apos;s ability to produce LDL
          and VLDL cholesterol. But niacin offers no more benefits than statins.
          Niacin has also been linked to liver damage and stroke, so most
          doctors now only recommend it for people who can&apos;t take statins.
        </li>
        <li>
          <b>Supplements with omega 3 fatty acids.</b> Supplements with omega 3
          fatty acids can help you lower triglycerides. You can buy them with
          and without a prescription. If you decide to take over-the-counter
          supplements, get approval from a doctor first. Supplements with omega
          3 fatty acids may affect other medications you are taking.
        </li>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Tolerance varies
        </h2>
        <p>
          Tolerance to medications varies from person to person. Common side
          effects of statins are muscle pain and muscle damage, reversible
          memory loss and confusion, and an increase in blood sugar.. If you
          decide to take cholesterol medications, your doctor may recommend
          liver function tests to monitor the effect of the medications on the
          liver.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Children and cholesterol treatment
        </h2>
        <p>
          Tolerance to medications varies from person to person. Common side
          effects of statins are muscle pain and muscle damage, reversible
          memory loss and confusion, and an increase in blood sugar.. If you
          decide to take cholesterol medications, your doctor may recommend
          liver function tests to monitor the effect of the medications on the
          liver.
        </p>
      </section>

      <h1 className="bold w-full text-3xl font-bold font text-red-600">Frequently Asked Questions</h1>


      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What are the cholesterol and triglycerides?
        </h2>
        <li>
          Cholesterol is a fatty substance found in the blood. The body needs
          cholesterol to function properly, but high levels can increase the
          risk of heart disease.
        </li>
        <li>
          Triglycerides are another type of fat found in the blood. High
          triglyceride levels can also increase the risk of heart disease.
        </li>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What are the symptoms of high cholesterol and triglycerides?
        </h2>
        <p>
          There are usually no symptoms. The only way to know if you have high
          cholesterol and triglycerides is through a blood test.
        </p>
      </section>

      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What causes high cholesterol and triglycerides?
        </h2>
        
         <p>Diet, lack of exercise, Genetics and certain medical conditions can
          contribute to high cholesterol and triglyceride levels.</p>
        
      </section>
      <h2 className="w-full text-2xl font-bold text-red-600">Regulate Your Health: Expert Care for High Cholesterol.</h2>
    </div>
  );
};

export default Home;
