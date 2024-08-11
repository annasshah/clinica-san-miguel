import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const locale = useLocale();

  return locale === "es" ? (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Programa de Pérdida de Peso</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Weightloss.png?t=2024-02-18T10%3A33%3A57.417Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">Acerca de</h1>
          <p className="text-2xl font-light lg:text-3xl">
    Alcance sus objetivos de salud con planes personalizados de manejo de peso, 
    combinando nutrición, ejercicio y cambios en el estilo de vida para resultados sostenibles.
</p>
</div>
</div>
<p className="w-full text-2xl">
    Clínica San Miguel: Su aliado para perder peso con Semaglutida
</p>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Qué es la Semaglutida?
    </h2>
    <ol className="w-full">
        La semaglutida es un medicamento inyectable que se administra una vez por semana. 
        Actúa sobre el sistema nervioso central para reducir el apetito y aumentar la sensación 
        de saciedad, lo que te ayuda a comer menos y perder peso.
    </ol>
</section>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Cómo funciona la Semaglutida?
    </h2>
    <p className="w-full">La semaglutida funciona de varias maneras:</p>
    <ul className="w-full translate-x-7 list-disc">
        <li>
            Reduce el apetito: Disminuye la producción de grelina, la hormona del hambre, 
            lo que te hace sentir menos hambre y te ayuda a comer menos.
        </li>
        <li>
            Aumenta la sensación de saciedad: Estimula la producción de GLP-1, 
            una hormona que te hace sentir lleno después de comer.
        </li>
        <li>
            Retrasa el vaciado gástrico: Hace que la comida permanezca más tiempo en el estómago, 
            lo que te ayuda a sentirte lleno por más tiempo.
        </li>
    </ul>
</section>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Qué esperar con el tratamiento de Semaglutida?
    </h2>
    <p className="w-full">
        La mayoría de las personas que toman semaglutida pierden entre el 5% y el 10% 
        de su peso corporal en 12 semanas. Además de la pérdida de peso, la semaglutida 
        puede mejorar otros aspectos de tu salud, como:
    </p>
    <ul className="w-full translate-x-7 list-disc">
        <li>Control de azúcar en la sangre</li>
        <li>Presión arterial</li>
        <li>Colesterol</li>
    </ul>
</section>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        Recomendaciones para el tratamiento con Semaglutida
    </h2>
    <p className="w-full list-disc">
        Para obtener los mejores resultados con la semaglutida, es importante seguir 
        estas recomendaciones:
    </p>
    <ul className="w-full translate-x-7 list-disc">
        <li>Combinar el tratamiento con una dieta saludable y ejercicio regular.</li>
        <li>Beber mucha agua.</li>
        <li>Informar a su médico sobre cualquier otro medicamento que esté tomando.</li>
    </ul>
</section>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        Beneficios para la salud de perder peso con Semaglutida
    </h2>
    <p className="w-full list-disc">
        Perder peso con Semaglutida puede mejorar su salud de muchas maneras, incluyendo:
    </p>
    <ul className="w-full translate-x-7 list-disc">
        <li>
            Reducir el riesgo de enfermedades crónicas: diabetes tipo 2, enfermedades del corazón, 
            derrame cerebral y algunos tipos de cáncer.
        </li>
        <li>Mejorar la calidad del sueño.</li>
        <li>Aumentar la energía y vitalidad.</li>
        <li>Mejorar la autoestima y la confianza en uno mismo.</li>
    </ul>
</section>
<h1 className="bold w-full text-2xl font-bold">FAQ sobre Semaglutida:</h1>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Es segura la Semaglutida?
    </h2>
    <p className="w-full list-disc">
        La semaglutida ha sido estudiada en miles de personas. Los efectos secundarios más comunes 
        son náuseas, diarrea y vómitos. Estos efectos secundarios suelen ser leves y desaparecen con el tiempo.
    </p>
</section>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Cuánto cuesta el tratamiento con Semaglutida?
    </h2>
    <p className="w-full list-disc">
        En la Clínica San Miguel, ofrecemos planes de pago flexibles para hacer 
        el tratamiento accesible a todos.
    </p>
</section>
<section className="w-full space-y-3 text-xl">
    <h2 className="w-full text-2xl font-bold text-red-600">
        ¿Cómo puedo empezar el tratamiento con Semaglutida?
    </h2>
    <p className="w-full list-disc">
        Para comenzar el tratamiento con Semaglutida, solo tiene que acudir a cualquier 
        ubicación de la Clínica San Miguel, realizaremos estudios para ver el estado 
        general de su salud y poder hacerle un plan personalizado de pérdida de peso 
        que se ajuste a sus necesidades. Durante su cita, su médico evaluará su salud 
        y le ayudará a determinar si la semaglutida es adecuada para usted.
    </p>
</section>
<section className="w-full space-y-3 text-xl">
    <div>
        <h2 className="w-full text-2xl font-bold text-red-600">
            Consejos de nutrición para la pérdida de peso
        </h2>
        <br></br>
        <ul className="w-full translate-x-7 list-disc">
            <li>Coma alimentos integrales y no procesados.</li>
            <li>Limite el azúcar y los carbohidratos refinados.</li>
            <li>Elija proteínas magras y grasas saludables.</li>
        </ul>
    </div>
    <section>
        <h2 className="w-full text-2xl font-bold text-red-600">
            ¡No espere más, dé el primer paso hacia una vida más saludable!
        </h2>
        <p className="w-full text-xs font-regular text-grey-100">
            *Los resultados individuales no están garantizados y pueden variar de persona a persona. 
            Las imágenes pueden contener modelos.
        </p>
    </section>
</section>

      
    </div>
  ) : (
    <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
      <h1 className="text-center text-6xl text-red-600">Lose Weight</h1>
      <div className="flex w-full flex-col lg:flex-row">
        <Image
          src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Weightloss.png?t=2024-02-18T10%3A33%3A57.417Z"
          width={1000}
          height={1000}
          alt="cover"
          className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
        />
        <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
          <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
          <p className="text-2xl font-light lg:text-3xl">
            Achieve your health goals with personalized weight management plans,
            combining nutrition, exercise, and lifestyle changes for sustainable
            results.
          </p>
        </div>
      </div>
      <p className="w-full text-2xl">
        Clínica San Miguel: Your ally to lose weight with Semaglutide
      </p>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What is Semaglutidea?
        </h2>
        <ol className="w-full">
          Semaglutide is an injectable medication that is administered once a
          week. It acts on the central nervous system to reduce appetite and
          increase feelings of satiety, which helps you eat less and lose
          weight.
        </ol>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How does it work Semaglutide?
        </h2>
        <p className="w-full">Semaglutide works in several ways:</p>
        <ul className="w-full translate-x-7 list-disc">
          <li>
            Reduces appetite: Decreases the production of ghrelin, the hunger
            hormone , which makes you feel less hungry and helps you eat less.
          </li>
          <li>
            Increases the feeling of satiety: Stimulates the production of
            GLP-1, a hormone that makes you feel full after eating.
          </li>
          <li>
            Delays gastric emptying: Makes food stay in the stomach longer,
            which helps you feel full for longer.
          </li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          What to expect with Semaglutide treatment?
        </h2>
        <p className="w-full">
          Most people Taking Semaglutide lose between 5% and 10% of their body
          weight in 12 weeks. In addition to weight loss, Semaglutide can
          improve other aspects of your health, such as:
        </p>
        <ul className="w-full translate-x-7 list-disc">
          <li>Blood sugar control</li>
          <li>Blood pressure</li>
          <li>Cholesterol</li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Recommendations for treatment with Semaglutide
        </h2>
        <p className="w-full list-disc">
          To obtain the best results with Semaglutide, it is important to follow
          these recommendations:
        </p>
        <ul className="w-full translate-x-7 list-disc">
          <li>Combine treatment with a healthy diet and regular exercise.</li>
          <li>Drink plenty of water.</li>
          <li>Tell your doctor about any other medications you are taking.</li>
        </ul>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Health Benefits of Losing Weight with Semaglutides
        </h2>
        <p className="w-full list-disc">
          Losing weight with Semaglutide can improve your health in many ways,
          including:
        </p>
        <ul className="w-full translate-x-7 list-disc">
          <li>
            Reduce the risk of chronic diseases: Type 2 diabetes, heart disease,
            stroke, and some types of cancer..
          </li>
          <li>Improve sleep quality.</li>
          <li>Increase energy and vitality.</li>
          <li>Improve self-esteem and self-confidence.</li>
        </ul>
      </section>
      <h1 className="bold w-full text-3xl font-bold font text-red-600">Frequently Asked Questions</h1>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          Is Semaglutide safe?
        </h2>
        <p className="w-full list-disc">
          Semaglutide has been studied in thousands of people. The most common
          side effects are nausea, diarrhea, and vomiting.. These side a are
          usually mild and disappear over time.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How much does treatment with Semaglutide cost?
        </h2>
        <p className="w-full list-disc">
          At Clínica San Miguel, we offer flexible payment plans to make
          treatment accessible to everyone.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <h2 className="w-full text-2xl font-bold text-red-600">
          How can I start treatment with Semaglutide?
        </h2>
        <p className="w-full list-disc">
          To start treatment With Semaglutide you only have to go to any Clínica
          San Miguel location, we will carry out studies to see the general
          state of your health and be able to make you a personalized weight
          loss plan that fits your needs. During your appointment, your doctor
          will evaluate your health and help you determine if Se Deglutida is
          right for you.
        </p>
      </section>
      <section className="w-full space-y-3 text-xl">
        <div>
          <h2 className="w-full text-2xl font-bold text-red-600">
            Nutrition tips for weight loss
          </h2>
          <br></br>
          <ul className="w-full translate-x-7 list-disc">
            <li>Eat whole, unprocessed foods.</li>
            <li>Limit sugar and refined carbohydrates.</li>
            <li>Choose lean proteins and healthy fats.</li>
          </ul>
        </div>
        <section>
        <h2 className="w-full text-2xl font-bold text-red-600">Don&apos;t wait any longer, take the first step towards a healthier life!</h2>
        <p className="w-full text-xs font-regular text-grey-100">*Individual results are not guaranteed and may vary from person to person to person. Images may contain models.</p>
        </section>
      </section>
    </div>
  );
};

export default Home;
