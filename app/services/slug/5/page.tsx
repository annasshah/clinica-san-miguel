import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
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
          covering routine check-ups, vaccinations, and timely interventions for
          optimal childhood development.
        </p>
      </div>
    </div>
    <p className="w-full text-2xl">
      San Miguel Clinic: Quality Pediatric Health Care for Your Children
    </p>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What should I do if Does my child have a fever?
      </h2>
      <ol className="w-full">
        If your child&apos;s fever is above 102°F (39°C), you should give your child
        acetaminophen or ibuprofen. You can also give him a warm bath or apply
        cold compresses to his forehead.. If the fever persists or if your child
        has other symptoms, such as difficulty breathing, seizures, or lethargy,
        you should seek medical attention immediately.
      </ol>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        How can I prevent my child from getting the flu?
      </h2>
      <ol className="w-full">
        The best way to prevent the flu is to get vaccinated annually. It is
        also important to wash your hands frequently, cover your mouth and nose
        when coughing or sneezing, and avoid contact with sick people.
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

    <section>
      <p>
        <span className="font-bold"> Keywords: </span>
        Houston Pediatric Clinic, children&apos;s medical care, diagnosis and
        treatment of diseases, laboratory tests, specialized care, flu , strep,
        flu, allergies in children, frequently asked questions
      </p>
    </section>
  </div>
)

export default Home
