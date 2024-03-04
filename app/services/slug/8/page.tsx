import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
  <div className="mx-auto flex flex-col items-center gap-10 px-5 py-5 font-semibold text-black lg:w-4/5 xl:px-20">
    <h1 className="text-center text-6xl text-red-600">Thyroid Care</h1>
    <div className="flex w-full flex-col lg:flex-row">
      <Image
        src="https://vsvueqtgulraaczqnnvh.supabase.co/storage/v1/object/public/services_images/thyroide.png?t=2024-02-11T07%3A00%3A12.237Z"
        width={1000}
        height={1000}
        alt="cover"
        className="aspect-square w-full bg-black/10 object-cover lg:w-1/3 lg:rounded-lg"
      />
      <div className="w-full space-y-8 bg-black/60 p-3 text-white lg:my-10 lg:w-2/3 lg:p-8">
        <h1 className="text-4xl font-semibold lg:text-6xl">About</h1>
        <p className="text-2xl font-light lg:text-3xl">
          Specialized care for thyroid conditions, including thorough
          evaluation, precise diagnosis, and personalized treatment plans for
          optimal thyroid health.
        </p>
      </div>
    </div>
    <p className="w-full text-2xl">
      San Miguel Clinic: Experts in thyroid care
    </p>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">What offer?</h2>
      <li>
        Specialized consultation: Complete evaluation of your thyroid function,
        including medical history, physical examination and laboratory tests
      </li>
      <li>
        Thyroid ultrasound: Imaging study to evaluate the size, shape and
        texture of the thyroid gland.
      </li>
      <li>
        Medical treatment: Prescription of medications to control thyroid
        hormone levels.
      </li>
    </section>

    <h1 className="w-full text-4xl font-bold ">FAQs</h1>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What symptoms may indicate a thyroid problem?
      </h2>
      <li>Fatigue</li>
      <li>Unexplained weight gain or loss</li>
      <li>Changes in mood</li>
      <li>Sensitivity to cold or heat</li>
      <li>Difficulty swallowing</li>
      <li>Dry skin and brittle hair</li>
    </section>

    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        What are the most common thyroid diseases? common?
      </h2>
      <li>Hyperthyroidism: The thyroid produces too much thyroid hormone.</li>
      <li>Goiter: Enlargement of the thyroid gland.</li>
      <li>Thyroid nodules: Abnormal growths in the thyroid gland.</li>
      <li>How can I prevent thyroid diseases?</li>
      <li>Consume a healthy diet rich in iodine.</li>
      <li>Exercise regularly.</li>
      <li>Manage stress.</li>
      <li>Undergo regular medical checkups.</li>
    </section>

    <section>
      <p>
        <span className="font-bold"> Keywords: </span>
        San Miguel Clinic, Thyroid, Thyroid Diseases, Diagnosis, Treatment,
        Prevention, Houston, Hispanic
      </p>
    </section>
  </div>
)

export default Home
