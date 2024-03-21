import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
  <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
    <h1 className="text-center text-6xl text-red-600">STD Test</h1>
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
        Confidential and comprehensive STD testing services, emphasizing early detection, treatment, and education for sexual health.
        </p>
      </div>
    </div>
    <p className="w-full text-2xl">
    Clínica San Miguel: Wart Removal with Cautery Easy, Fast and Without an Appointment.
    </p>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
      What is wart cauterization?
      </h2>
      <ol className="w-full">
      It is a procedure that uses an electrical device to burn the wart and remove it from the skin. It is a quick, safe and effective method to remove warts of different sizes and locations.
      </ol>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
      How to prepare for the procedure?
      </h2>
      <ul className="w-full translate-x-7 list-disc">
        <li>Tell your doctor if you have any medical conditions or allergies.</li>
        <li>Stop take blood-thinning medications a few days before the procedure.</li>
        <li>Avoid caffeine and alcohol 24 hours before the procedure.</li>
        
      </ul>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
      What care should be taken after the procedure?
      </h2>
      <ul className="w-full translate-x-7 list-disc">
        <li>Keep the area clean and dry.</li>
        <li>Apply antibiotic ointment as directed.</li>
        <li>Avoid scratching the area.</li>
        <li>Protect the area from the sun.</li>
        
      </ul>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
      How do you know if it is a wart or a mole?
      </h2>
      <p className="w-full list-disc">
      Warts are small bumps on the skin that may be brown, white, or pink. Moles are spots on the skin that can be of different colors and sizes.
      </p>
    
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
      How recognize a cancerous mole?
      </h2>
      <p className="w-full list-disc">
      
      Carcinogenic moles usually have the following characteristics:

      </p>
      <ul className="w-full translate-x-7 list-disc">
        <li>Asymmetry.</li>
        <li>Irregular edges.</li>
        <li>Diameter greater than 6 millimeters.</li>
        <li>Changes in size, shape or color.</li>
      </ul>
    </section>
    <h1 className="bold w-full text-2xl font-bold">
    Wart Removal FAQs:
    </h1>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
      
How long does the procedure take?
      </h2>
      <p className="w-full list-disc">
      The procedure usually takes a few minutes.
      </p>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
      Is it Is the procedure painful?
      </h2>
      <p className="w-full list-disc">
      Local anesthesia numbs the area, so the procedure is not painful.
      </p>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        
      How many sessions are needed?
      </h2>
      <p className="w-full list-disc">
      In most cases, a single session is enough to delete la verruga.
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
      <p>
        <span className="font-bold"> Keywords: </span>
        Wart removal, Wart cauterization, San Clinic Miguel, Warts, Moles, Skin Cancer
      </p>
    </section>
  </div>
)

export default Home
