import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
  <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
    <h1 className="text-center text-6xl text-red-600">
      Ingrown Toenail Removal
    </h1>
    <div className="flex w-full flex-col lg:flex-row">
      <Image
        src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/Ingrown%20toe%20nail.png"
        width={1000}
        height={1000}
        alt="cover"
        className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
      />
      <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
        <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
        <p className="text-2xl font-light lg:text-3xl">
          Swift and painless removal of ingrown toenails, addressing discomfort
          and preventing potential infections.
        </p>
      </div>
    </div>
    <p className="w-full text-2xl">
      San Miguel Clinic: Experts in Ingrown Toenail Removal
    </p>
    <section className="w-full space-y-3 text-xl">
      <h1 className="w-full text-2xl font-bold text-red-600">
        Do you suffer of pain and discomfort from an ingrown toenail?
      </h1>
      <p>
        We offer fast and effective treatment for ingrown toenails. Our team of
        highly trained medical professionals will use the latest techniques to
        relieve your pain and restore the health of your feet.
      </p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h1 className="w-full text-2xl font-bold text-red-600">
        Preparation before extraction:
      </h1>
      <ul className="list-disc pl-5">
        <li>
          <b>Consult with your doctor:</b>It is important that you consult with
          a doctor before extraction of ingrown toenail to rule out any
          underlying medical conditions.
        </li>
        <li>
          <b>Trim your nails: </b>Keep your nails short and straight to prevent
          them from becoming ingrown again.
        </li>
        <li>
          <b>Soak your feet:</b>Soak your feet in warm salt water for 15-20
          minutes before removal to soften the nail and make the procedure
          easier.
        </li>
        <li>
          <b>Wear comfortable shoes:</b>Avoid wearing tight shoes that can put
          pressure on the nails and cause pain.
        </li>
      </ul>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h1 className="w-full text-2xl font-bold text-red-600">
        When should an ingrown toenail be removed?
      </h1>
      <p>Ingrown toenail removal is necessary when:</p>
      <ul className="list-disc pl-5">
        <li>The pain is intense and is not relieved by home remedies.</li>
        <li>The nail is infected.</li>
        <li>
          The nail is very ingrown and cannot be corrected with non-invasive
          methods.
        </li>
      </ul>

      <p>
        <b>Care after removal:</b>
      </p>
      <li>Keep the wound clean and dry. </li>
      <li>Apply an antibiotic bandage as directed by your doctor.</li>
      <li>Avoid walking barefoot</li>
      <li>Elevate your foot to reduce swelling.</li>
      <li>Take over-the-counter pain relievers to relieve pain .</li>

      <p>
        <b>Complications:</b>
      </p>
      <p>
        Complications of Removal of ingrown toenails are rare, but may include:
      </p>
      <li>Infection</li>
      <li>Bleeding</li>
      <li>Chronic pain</li>
      <li>Nail deformity</li>
      <li>
        Consult your doctor before to perform the procedure if you are diabetic.
      </li>

      <p>
        <b>Benefits:</b>
      </p>
      <li>Pain relief </li>
      <li>Infection prevention</li>
      <li>Correction of nail deformity</li>
      <li>Improvement of quality of life</li>
    </section>

    <h1 className="w-full text-4xl font-bold ">FAQs</h1>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        How long does it take to remove an ingrown toenail?{' '}
      </h2>
      <p>The procedure generally lasts 15 to 30 minutes.</p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Is the procedure painful?{' '}
      </h2>
      <p>Local anesthesia is used to numb the area, so the pain is minimal.</p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        How long does it take for the wound to heal?{' '}
      </h2>
      <p>The wound usually heals in 1-2 weeks.</p>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        Can I go back to work after the extraction?{' '}
      </h2>
      <p>In most cases, you can return to work the same day. </p>
    </section>

    <section>
      <p>
        <span className="font-bold"> Keywords: </span>
        Ingrown toenails, Ingrown toenail removal, San Miguel Clinic , Pasadena,
        Tx, Pain, Infection, Treatment, Care, Benefits
      </p>
    </section>
  </div>
)

export default Home
