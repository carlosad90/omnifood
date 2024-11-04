import Customer_1 from "../assets/images/customers/customer-1.jpg";
import Customer_2 from "../assets/images/customers/customer-2.jpg";
import Customer_3 from "../assets/images/customers/customer-3.jpg";
import Customer_4 from "../assets/images/customers/customer-4.jpg";
import Customer_5 from "../assets/images/customers/customer-5.jpg";
import Customer_6 from "../assets/images/customers/customer-6.jpg";
import Testimonial_1 from "../assets/images/testimonials/ben.jpg";
import Testimonial_2 from "../assets/images/testimonials/dave.jpg";
import Testimonial_3 from "../assets/images/testimonials/hannah.jpg";
import Testimonial_4 from "../assets/images/testimonials/steve.jpg";
import Logo_1 from "../assets/images/logo/business-insider.png";
import Logo_2 from "../assets/images/logo/forbes.png";
import Logo_3 from "../assets/images/logo/techcrunch.png";
import Logo_4 from "../assets/images/logo/the-new-york-times.png";
import Logo_5 from "../assets/images/logo/usa-today.png";
import app_screen_1 from "../assets/images/app/app-screen-1.png";
import app_screen_2 from "../assets/images/app/app-screen-2.png";
import app_screen_3 from "../assets/images/app/app-screen-3.png";
import meal_1 from "../assets/images/meals/meal-1.jpg";
import meal_2 from "../assets/images/meals/meal-2.jpg";
import meal_3 from "../assets/images/meals/meal-3.jpg";
import meal_4 from "../assets/images/meals/meal-4.jpg";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CheckIcon from "@mui/icons-material/Check";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PauseIcon from "@mui/icons-material/Pause";
import { DeleteForever } from "@mui/icons-material";
import EggIcon from "@mui/icons-material/Egg";
import SignUpForm from "./SignUpForm";

const Home = () => {
  return (
    <main>
      <section className="py-12 bg-section">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2  px-8 gap-12 lg:gap-24 ">
          <div>
            <h1 className="text-4xl  md:text-5xl xl:text-6xl font-bold mb-12 text-heading  ">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className=" text-xl md:leading-7  lg:text-xl leading-8 mb-12 text-secondary ">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <button className="inline-block text-xl font-semibold px-8 py-4 rounded-lg border-none cursor-pointer text-white bg-primary mr-4 hover:bg-primary-hover transition duration-300 ">
              Start eating well
            </button>
            <button className="inline-block mt-5 text-xl font-semibold px-8 py-4 rounded-lg border-none cursor-pointer text-secondary bg-white hover:ring-inset hover:bg-section hover:ring-4 hover:ring-white  transition duration-300">
              Learn More &darr;{" "}
            </button>
            <div className="mt-20 flex justify-start gap-5  lg:justify-normal items-center flex-wrap">
              <div className="flex">
                <img
                  src={Customer_1}
                  alt="Customer Photo"
                  className="rounded-full w-12 h-12  "
                />
                <img
                  src={Customer_2}
                  alt="Customer Photo"
                  className="rounded-full w-12 h-12 -ml-3   "
                />
                <img
                  src={Customer_3}
                  alt="Customer Photo"
                  className="rounded-full w-12 h-12 -ml-3 "
                />
                <img
                  src={Customer_4}
                  alt="Customer Photo"
                  className="rounded-full w-12 h-12 -ml-3 "
                />
                <img
                  src={Customer_5}
                  alt="Customer Photo"
                  className="rounded-full w-12 h-12 -ml-3 "
                />
                <img
                  src={Customer_6}
                  alt="Customer Photo"
                  className="rounded-full w-12 h-12 -ml-3 "
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-secondary">
                  <span className="text-primary-hover">250,000+</span> meals
                  delivered last year!
                </p>
              </div>
            </div>
          </div>
          <div className="bg-hero-pattern bg-contain lg:bg-cover bg-no-repeat bg-center py-48 sm:py-60 "></div>
        </div>
      </section>
      <section className="py-14">
        <div className="container mx-auto px-8">
          <h2 className="text-center text-sm font-medium  uppercase tracking-wide">
            As featured in
          </h2>
          <div className="flex justify-between flex-wrap  mt-8 gap-y-10     ">
            <img
              className=" block max-w-full  h-4 md:h-7  grayscale brightness-0   "
              src={Logo_1}
              alt="business insider logo"
            />

            <img
              className=" block max-w-full  h-4 md:h-7  grayscale brightness-0 "
              src={Logo_2}
              alt="forbes logo"
            />
            <img
              className=" block max-w-full h-4 md:h-7  grayscale brightness-0 "
              src={Logo_3}
              alt="tech crunch logo"
            />
            <img
              className=" block max-w-full  h-4 md:h-7  grayscale brightness-0 "
              src={Logo_4}
              alt="the new york times logo"
            />
            <img
              className=" block max-w-full  h-4 md:h-7  grayscale brightness-0 self-center"
              src={Logo_5}
              alt="usa today logo"
            />
          </div>
        </div>
      </section>
      <section className="py-16" id="how-it-works">
        <div className="container mx-auto px-8">
          <span className="block uppercase text-primary-hover text-base font-medium tracking-wide mb-4 ">
            How it Works
          </span>
          <h2 className="text-heading text-3xl md:text-5xl font-bold mb-24">
            Your daily dose of health in 3 simple steps
          </h2>
          <div className="grid md:grid-cols-2 justify-items-center items-center gap-12 md:gap-24">
            <div className="order-2 md:order-1">
              <p className="text-8xl text-steps font-semibold mb-8">01</p>
              <h3 className="text-3xl font-bold mb-8">
                Tell us what you like (and what not)
              </h3>
              <p className="text-lg text-secondary leading-9 font-normal">
                Never again waste time thinking about what to eat! Omnifood AI
                will create a 100% personalized weekly meal plan just for you.
                It makes sure you get all the nutrients and vitamins you need,
                no matter what diet you follow!
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                className="block max-w-full w-56  "
                src={app_screen_1}
                alt="Mobile app preferences selection screen"
              />
            </div>
            <div className="order-3 md:order-3">
              <img
                className="block max-w-full w-56 "
                src={app_screen_2}
                alt="Mobile app preferences selection screen"
              />
            </div>
            <div className="order-3 md:order-4">
              <p className="text-8xl text-steps font-semibold mb-8">02</p>
              <h3 className="text-3xl font-bold mb-8">
                Approve your weekly meal plan
              </h3>
              <p className="text-lg text-secondary leading-9 font-normal">
                Once per week, approve the meal plan generated for you by
                Omnifood AI. You can change ingredients, swap entire meals, or
                even add your own recipes.
              </p>
            </div>

            <div className=" order-6 md:order-5">
              <p className="text-8xl text-steps font-semibold mb-8">03</p>
              <h3 className="text-3xl font-bold mb-8">
                Receive meals at convenient time
              </h3>
              <p className="text-lg text-secondary leading-9 font-normal">
                Best chefs in town will cook your selected meal every day, and
                we will deliver it to your door whenever works best for you. You
                can change delivery schedule and address daily!
              </p>
            </div>
            <div className="order-5 md:order-6">
              <img
                className="block max-w-full w-56 "
                src={app_screen_3}
                alt="Mobile app preferences selection screen"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-section" id="meals">
        <div className="container mx-auto px-8 ">
          <span className="block uppercase text-center text-primary text-xl md:text-2xl tracking-wider font-semibold mb-4">
            meals
          </span>
          <h2 className="text-center text-3xl md:text-5xl text-heading font-bold leading-normal md:leading-snug">
            Omnifood AI chooses from <br />
            <span className="text-primary">5,000+</span> recipes
          </h2>
          <div className=" mt-12 md:mt-24 grid  grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]  gap-5 ">
            <div className="bg-white rounded-xl shadow-lg hover:scale-105 duration-300">
              <div>
                <img
                  src={meal_1}
                  alt="Japanese Gyozas"
                  className="rounded-t-xl"
                />
              </div>
              <div className="px-8 py-5">
                <div className="flex gap-4 mb-4 flex-wrap">
                  <span className="uppercase bg-tag1 px-3 py-1 rounded-2xl text-sm font-semibold">
                    lactose-free
                  </span>
                  <span className="uppercase bg-tag2 px-3 py-1 rounded-2xl text-sm font-semibold">
                    vegan
                  </span>
                  <span className="uppercase bg-tag3 px-3 py-1 rounded-2xl text-sm font-semibold">
                    keto
                  </span>
                </div>
                <div>
                  <p className="text-xl font-bold mb-3">Japanese Gyozas</p>
                  <p className="text-secondary text-sm mb-4">
                    Juicy pork, cabbage, scallions, and shiitake mushrooms with
                    a rich Ponzu sauce drizzle.
                  </p>
                  <div>
                    <p className="mb-2">
                      <LocalFireDepartmentIcon className="mr-2 text-orange-500" />
                      <span className="font-bold">650</span> Calories
                    </p>
                    <p className="mb-2">
                      <WorkspacePremiumIcon className="mr-2 text-orange-500" />
                      NutriScore &reg;<span className="font-bold">74</span>
                    </p>
                    <p className="mb-2">
                      <FavoriteIcon className="mr-2 text-orange-500" />
                      <span className="font-bold">4.6 Rating</span> (201)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:scale-105 duration-300">
              <div>
                <img
                  src={meal_2}
                  alt="Avocado salad"
                  className="rounded-t-xl  "
                />
              </div>
              <div className="px-8 py-5">
                <div className="flex gap-4 mb-4 flex-wrap">
                  <span className="uppercase bg-tag4 px-3 py-1 rounded-2xl text-sm font-semibold">
                    Paleo
                  </span>
                  <span className="uppercase bg-tag2 px-3 py-1 rounded-2xl text-sm font-semibold">
                    vegan
                  </span>
                  <span className="uppercase bg-tag5 px-3 py-1 rounded-2xl text-sm font-semibold">
                    Gluten-free
                  </span>
                </div>
                <div>
                  <p className="text-xl font-bold mb-3">Avocado Salad</p>
                  <p className="text-secondary text-sm mb-4">
                    Healthy green salad with fresh avocado, spinach, tomatoes
                    and citrus lime dressing.
                  </p>
                  <div>
                    <p className="mb-2">
                      <LocalFireDepartmentIcon className="mr-2 text-orange-500" />
                      <span className="font-bold">400</span> Calories
                    </p>
                    <p className="mb-2">
                      <WorkspacePremiumIcon className="mr-2 text-orange-500" />
                      NutriScore &reg;<span className="font-bold">92</span>
                    </p>
                    <p className="mb-2">
                      <FavoriteIcon className="mr-2 text-orange-500" />
                      <span className="font-bold">4.8 Rating</span> (411)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:scale-105 duration-300">
              <div>
                <img
                  src={meal_3}
                  alt="Japanese Gyozas"
                  className="rounded-t-xl"
                />
              </div>
              <div className="px-8 py-5">
                <div className="flex gap-4 mb-4 flex-wrap">
                  <span className="uppercase bg-tag7 px-3 py-1 rounded-2xl text-sm font-semibold">
                    vegetarian
                  </span>
                  <span className="uppercase bg-tag6 px-3 py-1 rounded-2xl text-sm font-semibold">
                    kid-friendly
                  </span>
                </div>
                <div>
                  <p className="text-xl font-bold mb-3">Summer Pasta Salad</p>
                  <p className="text-secondary text-sm mb-4">
                    Classic pasta salad with fresh veggies and herbs, and plenty
                    of feta cheese.
                  </p>
                  <div>
                    <p className="mb-2">
                      <LocalFireDepartmentIcon className="mr-2 text-orange-500" />
                      <span className="font-bold">630</span> Calories
                    </p>
                    <p className="mb-2">
                      <WorkspacePremiumIcon className="mr-2 text-orange-500" />
                      NutriScore &reg;<span className="font-bold">87</span>
                    </p>
                    <p className="mb-2">
                      <FavoriteIcon className="mr-2 text-orange-500" />
                      <span className="font-bold">4.7 Rating</span> (323)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg hover:scale-105 duration-300">
              <div>
                <img
                  src={meal_4}
                  alt="Japanese Gyozas"
                  className="rounded-t-xl"
                />
              </div>
              <div className="px-8 py-5">
                <div className="flex gap-4 mb-4 flex-wrap">
                  <span className="uppercase bg-tag4 px-3 py-1 rounded-2xl text-sm font-semibold">
                    paleo
                  </span>
                  <span className="uppercase bg-tag3 px-3 py-1 rounded-2xl text-sm font-semibold">
                    keto
                  </span>
                </div>
                <div>
                  <p className="text-xl font-bold mb-3">Chicken Caesar Cobb</p>
                  <p className="text-secondary text-sm mb-4">
                    Grilled chicken, fresh avocado with veggie toppings and
                    creamy caesar dressing.
                  </p>
                  <div>
                    <p className="mb-2">
                      <LocalFireDepartmentIcon className="mr-2 text-orange-500" />
                      <span className="font-bold">650</span> Calories
                    </p>
                    <p className="mb-2">
                      <WorkspacePremiumIcon className="mr-2 text-orange-500" />
                      NutriScore &reg;<span className="font-bold">93</span>
                    </p>
                    <p className="mb-2">
                      <FavoriteIcon className="mr-2 text-orange-500" />
                      <span className="font-bold">4.9 Rating</span> (691)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16" id="pricing">
        <div className="container mx-auto px-8">
          <h3 className="uppercase text-center text-primary text-2xl font-semibold mb-8">
            pricing options
          </h3>
          <h2 className="text-5xl text-center mb-8 font-bold">
            Find a plan that works <span className="text-primary">for you</span>{" "}
          </h2>
          <div className="flex justify-center mb-8"></div>
          <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6">
            <div className="border-orange-300 border rounded-lg shadow-md p-12 flex flex-col justify-between gap-6  ">
              <div>
                <h4 className="text-center uppercase text-2xl text-primary font-semibold mb-3 ">
                  starter
                </h4>
                <span className="block text-center text-5xl font-bold mb-2 ">
                  $395
                </span>
                <small className="block text-center text-xs ">
                  That&apos;s about $13 per meals!
                </small>
              </div>
              <ul className="text-lg ">
                <li className="mb-2">
                  <CheckIcon className="mr-2 text-primary" />1 meal per day
                </li>
                <li className="mb-2">
                  <CheckIcon className="mr-2 text-primary" />
                  Order from 11am to 9pm
                </li>
                <li>
                  <CheckIcon className="mr-2 text-primary" />
                  Delivery is free
                </li>
              </ul>

              <button className=" bg-primary text-white text-xl py-3 rounded-3xl block w-full hover:bg-primary-hover ">
                Select Plan
              </button>
            </div>
            <div className=" relative border-orange-300 border rounded-lg shadow-md p-12 bg-orange-50 flex flex-col justify-between gap-6 z-1 overflow-hidden  ">
              <div className="absolute top-[5%] -right-[14%] sm:top-[5%] sm:-right-[14%]   md:-right-[22%] md:top-[5%] lg:-right-[22%] 2xl:-right-[14%] text-white z-2 py-1 px-20 bg-orange-600 transform rotate-[40deg]  tracking-wider text-center">
                BEST VALUE
              </div>
              <div>
                <h4 className="text-center uppercase text-2xl text-primary font-semibold mb-3 ">
                  complete
                </h4>
                <span className="block text-center text-5xl font-bold mb-2 ">
                  $645
                </span>
                <small className="block text-center text-xs ">
                  That&apos;s about $11 per meals!
                </small>
              </div>
              <ul className=" text-lg">
                <li className="mb-2">
                  <CheckIcon className="mr-2 text-primary" />{" "}
                  <span className="font-bold">2 meals</span> per day
                </li>
                <li className="mb-2">
                  <CheckIcon className="mr-2 text-primary" />
                  Order <span className="font-bold">24/7</span>
                </li>
                <li className="mb-2">
                  <CheckIcon className="mr-2 text-primary" />
                  Delivery is free
                </li>
                <li className="mb-2">
                  <CheckIcon className="mr-2 text-primary" />
                  Access to <span className="font-bold">exclusive</span> recipes
                </li>
              </ul>

              <button className=" bg-primary text-white text-xl py-3 rounded-3xl block w-full hover:bg-primary-hover">
                Select Plan
              </button>
            </div>
            <div className="border-orange-300 border rounded-lg shadow-md p-12 flex flex-col justify-between gap-6  ">
              <div>
                <h4 className="text-center uppercase text-2xl text-primary font-semibold tracking-wide mb-3">
                  custom
                </h4>
                <span className="block text-center text-5xl font-bold mb-2">
                  $750
                </span>
                <small className="block text-center text-xs">
                  Connect with an expert nutrionist!
                </small>
              </div>
              <ul className=" text-lg ">
                <li className="mb-2">
                  <CheckIcon className="mr-2 text-primary" />
                  <span className="font-bold">3 meals</span> per day
                </li>
                <li className="mb-2">
                  <CheckIcon className="mr-2 text-primary" />
                  Order <span className="font-bold">24/7</span>
                </li>
                <li className="mb-2">
                  <CheckIcon className="mr-2 text-primary" />
                  Delivery is free
                </li>
                <li>
                  <CheckIcon className="mr-2 text-primary" />
                  Access to <span className="font-bold">expert</span>{" "}
                  nutrionists
                </li>
              </ul>

              <button className=" bg-primary text-white text-xl py-3 rounded-3xl block w-full hover:bg-primary-hover ">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-section" id="testimonials">
        <div className="container mx-auto px-8">
          <h3 className="uppercase text-primary font-semibold">Testimonials</h3>
          <h1 className="font-bold text-2xl   lg:text-4xl mt-2">
            Once you try it, you can&apos;t go back
          </h1>
          <div className=" mt-14 gap-20 grid md:grid-cols-2 md:gap-12  ">
            <div className="flex flex-col gap-4">
              <img
                className="rounded-full block w-20 h-20"
                src={Testimonial_1}
                alt="testimonial 1"
              />
              <p className="text-secondary leading-8 max-w-[68%] justify-start">
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </p>
              <span className="text-secondary ">— Dave Bryson</span>
            </div>

            <div className="flex flex-col gap-4">
              <img
                className="rounded-full block w-20 h-20"
                src={Testimonial_2}
                alt="testimonial 2"
              />
              <p className="text-secondary leading-8 max-w-[68%]">
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It&apos;s amazing not to worry about food
                anymore!
              </p>
              <span className="text-secondary ">— Ben Hadley</span>
            </div>

            <div className="flex flex-col gap-4">
              <img
                className="rounded-full block w-20 h-20"
                src={Testimonial_3}
                alt="testimonial 3"
              />
              <p className="text-secondary leading-8 max-w-[68%]">
                Omnifood is a life saver! I just started a company, so
                there&apos;s no time for cooking. I couldn&apos;t live without
                my daily meals now!
              </p>
              <span className="text-secondary ">— Steve Miller</span>
            </div>

            <div className="flex flex-col gap-4">
              <img
                className="rounded-full block w-20 h-20"
                src={Testimonial_4}
                alt="testimonial 4"
              />
              <p className="text-secondary  leading-8 max-w-[68%]">
                I got Omnifood for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </p>
              <span className="text-secondary ">— Hannah Smith</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-8">
          <div className="grid  grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-8 ">
            <div className="flex flex-col items-start  gap-8">
              <div className="bg-section rounded-full p-3  ">
                <AllInclusiveIcon className="text-primary" />
              </div>

              <h3 className="text-2xl font-bold">Never cook again!</h3>
              <p className="text-lg leading-relaxed">
                Our subscriptions cover 365 days per year, even including major
                holidays.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="bg-section rounded-full p-3 self-start ">
                <EggIcon className="text-primary bg-section" />
              </div>
              <h3 className="text-2xl font-bold">Local and organic</h3>
              <p className="text-lg leading-relaxed">
                Our cooks only use local, fresh, and organic products to prepare
                your meals.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="bg-section rounded-full p-3 self-start ">
                <DeleteForever className="text-primary bg-section" />
              </div>
              <h3 className="text-2xl font-bold">No waste</h3>
              <p className="text-lg leading-relaxed">
                All our partners only use reusable containers to package all
                your meals.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="bg-section rounded-full p-3 self-start ">
                <PauseIcon className="text-primary bg-section" />
              </div>
              <h3 className="text-2xl font-bold">Pause anytime</h3>
              <p className="text-lg leading-relaxed">
                Going on vacation? Just pause your subscription, and we refund
                unused days.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SignUpForm />
    </main>
  );
};

export default Home;
