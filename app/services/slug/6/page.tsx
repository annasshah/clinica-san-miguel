import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
  <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
    <h1 className="text-center text-6xl text-red-600">Ear Cleaning</h1>
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
          Gentle and expert ear cleaning services to ensure clear hearing and
          prevent discomfort or complications related to earwax buildup.
        </p>
      </div>
    </div>
    <p className="w-full text-2xl">
      San Miguel Clinic: Ear Cleaning in Houston
    </p>
    <h1>symptoms</h1>
    <p>
      we offer a safe and effective service to remove ear wax and relieve
      symptoms such as:
    </p>
    <li>Decreased hearing</li>
    <li>Ringing in the ears</li>
    <li>Sensation of fullness</li>
    <li>Pain</li>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Why is ear washing important?
      </h2>
      <ol className="w-full">
        Ear wax is a natural substance that protects the ear canal. However,
        when it accumulates in excess, it can cause problems. Ear washing helps
        remove accumulated wax and prevent complications such as:
      </ol>
      <li>Infections</li>
      <li>Wax plugs</li>
      <li>Permanent hearing loss</li>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Benefits of ear washing:
      </h2>

      <li>Improves hearing</li>
      <li>Relieves pain and discomfort</li>
      <li>Reduces the risk of infections</li>
      <li>Prevents the formation of wax plugs</li>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Contraindications of ear washing:
      </h2>
      <li>Eardrum perforation </li>
      <li>Acute otitis media</li>
      <li>Eardrums with ventilation tubes</li>
      <li>Allergies to water or products used in washing</li>
    </section>

    <h1 className="text-4xl font-semibold lg:text-6xl">FAQ:</h1>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What is used for ear washing?
      </h2>
      <ul>
        A solution of warm water and salt or a specific product is used to wash
        the ears.
      </ul>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        How long does ear washing last?
      </h2>
      <ul>The procedure usually lasts a few minutes.</ul>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Is ear washing painful?
      </h2>
      <ul>
        It is not usually painful, but it can cause a slight temporary
        discomfort.
      </ul>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Is ear washing painful?
      </h2>
      <ul>
        It is not usually painful, but it can cause a slight temporary
        discomfort.
      </ul>
    </section>

    <section>
      <p>
        <span className="font-bold"> Keywords: </span>
        Ear wash, San Miguel Clinic, Houston, Ear wax, Hearing loss, Tinnitus in
        the ears, Pain, Infections, Wax plugs, Hearing loss
      </p>
    </section>
  </div>
)

export default Home
