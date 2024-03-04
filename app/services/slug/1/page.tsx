import Image from 'next/image'
import Link from 'next/link'

const Home = () => (
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
        Achieve your health goals with personalized weight management plans, combining nutrition, exercise, and lifestyle changes for sustainable results.
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
      Semaglutide is an injectable medication that is administered once a week. It acts on the central nervous system to reduce appetite and increase feelings of satiety, which helps you eat less and lose weight.
      </ol>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
      How does it work Semaglutide?
      </h2>
      <p className='w-full'>Semaglutide works in several ways:</p>
      <ul className="w-full translate-x-7 list-disc">
        <li>Reduces appetite: Decreases the production of ghrelin, the hunger hormone , which makes you feel less hungry and helps you eat less.</li>
        <li>Increases the feeling of satiety: Stimulates the production of GLP-1, a hormone that makes you feel full after eating.</li>
        <li>Delays gastric emptying: Makes food stay in the stomach longer, which helps you feel full for longer.</li>
        
      </ul>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
      What to expect with Semaglutide treatment?
      </h2>
      <p className='w-full'>Most people Taking Semaglutide lose between 5% and 10% of their body weight in 12 weeks. In addition to weight loss, Semaglutide can improve other aspects of your health, such as:</p>
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
      To obtain the best results with Semaglutide, it is important to follow these recommendations:
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
      
Losing weight with Semaglutide can improve your health in many ways, including:
      </p>
      <ul className="w-full translate-x-7 list-disc">
        <li>
Reduce the risk of chronic diseases: Type 2 diabetes, heart disease, stroke, and some types of cancer..</li>
        <li>Improve sleep quality.</li>
        <li>Increase energy and vitality.</li>
        <li>Improve self-esteem and self-confidence.</li>
      </ul>
    </section>
    <h1 className="bold w-full text-2xl font-bold">
    Semaglutide FAQ:
    </h1>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
      Is Semaglutide safe?
      </h2>
      <p className="w-full list-disc">
      Semaglutide has been studied in thousands of people. The most common side effects are nausea, diarrhea, and vomiting.. These side a are usually mild and disappear over time.
      </p>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
      How much does treatment with Semaglutide cost?
      </h2>
      <p className="w-full list-disc">
      At Clínica San Miguel, we offer flexible payment plans to make treatment accessible to everyone.
      </p>
    </section>
    <section className="w-full space-y-3 text-xl">
      <h2 className="w-full text-2xl font-bold text-red-600">
        
How can I start treatment with Semaglutide?
      </h2>
      <p className="w-full list-disc">
      To start treatment With Semaglutide you only have to go to any Clínica San Miguel location, we will carry out studies to see the general state of your health and be able to make you a personalized weight loss plan that fits your needs. During your appointment, your doctor will evaluate your health and help you determine if Se Deglutida is right for you.
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
      <p>
        <span className="font-bold"> Keywords: </span>
        Clínica San Miguel 5712 Fondren RD, Houston, TX 77036 Semaglutide, weight loss, health, wellness, treatment, diet, exercises
      </p>
      </section>
     
    </section>
  </div>
)

export default Home
