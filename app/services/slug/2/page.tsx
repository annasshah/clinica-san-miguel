import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
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
        It is a procedure that uses an electrical device to burn the wart and
        remove it from the skin. It is a quick, safe and effective method to
        remove warts of different sizes and locations.
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
        Warts are small bumps on the skin that may be brown, white, or pink.
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
      <p>
        <span className="font-bold"> Keywords: </span>
        Wart removal, Wart cauterization, San Clinic Miguel, Warts, Moles, Skin Cancer
      </p>
    </section>
  </div>
)

export default Home
