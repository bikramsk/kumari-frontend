import Collapsible from "@/components/custom/insurancefaq";

const coverageItems = [
  { src: "/images/legal/theft.png", label: "Theft" },
  { src: "/images/legal/burglary.png", label: "Burglary" },
  { src: "/images/legal/snatching.png", label: "Snatching" },
  { src: "/images/legal/hold-up.png", label: "Hold-up" },
  { src: "/images/legal/robbery.png", label: "Robbery" },
  { src: "/images/legal/earthquake.png", label: "Earthquake" },
  { src: "/images/legal/bank_home-locker.png", label: "Bank/Home Locker" },
  { src: "/images/legal/strike.png", label: "Strike" },
  { src: "/images/legal/fire.png", label: "Fire" },
  { src: "/images/legal/act-of-god.png", label: "Act Of God" },
  { src: "/images/legal/flood.png", label: "Flood" },
  { src: "/images/legal/riot.png", label: "Riot" },
];

const insuranceItems = [
  {
    image: "/images/legal/coverage_1_.png",
    title: "INSURANCE COVERAGE",
    description:
      "All risk policy coverage for your jewellery from Iffco-Tokio General Insurance Company Limited.",
  },
  {
    image: "/images/legal/ins-hallmark_1_.png",
    title: "HALLMARKING",
    description:
      "All our jewels will be hallmarked as per BIS guidelines and inscribed with a UID.",
  },
  {
    image: "/images/legal/ins-maintenance_1_.png",
    title: "CASH FREE MAINTENANCE",
    description:
      "A bi-annual service of your jewels. We will check the pieces for any wear and tear.",
  },
  {
    image: "/images/legal/ins-buyback_1_.png",
    title: "BUYBACK GUARANTEE",
    description:
      "We offer lifetime buyback Guarantee on gold and diamond jewellery.",
  },
];

const Insurance = () => {
  return (
    <section className="text-gray-600  overflow-hidden mx-auto">
      <div className="container mx-auto">
        <img
          alt="jewlry"
          className="w-full h-full object-cover"
          src="/images/legal/insurance-hero.jpg"
        />
      </div>

      <div className="flex flex-col text-center justify-center mt-4 mb-10">
        <h1 className="sm:text-4xl text-4xl font-sm text-gray-900">
          Kumari
          <br /> Protection Plan
        </h1>
        <p className="lg:w-1/2 max-sm:w-full my-8 mx-auto leading-relaxed ">
          We are super excited to share the Kumari Protection Plan with you.
          This plan is crafted to giveyour Kumari jewellery guaranteed
          protection against any loss or damage from natural calamities, theft
          or burglary. This is a specialised plan that lets you go extra every
          day without worryingabout parting from your beloved pieces.
        </p>
      </div>

      <div className="bg-pink-700 w-full">
        <div className="p-4 container mx-auto">
          <h1 className="text-white text-4xl mt-16 text-center">
            BENEFITS YOU ENJOY
          </h1>

          <div className="flex flex-wrap justify-center text-white p-10 ">
            {insuranceItems.map((item, index) => (
              <div key={index} className=" md:w-1/2 ">
                <div className="h-full p-8 flex items-center justify-center">
                  <div className="inline-flex items-center">
                    <img
                      alt={item.title}
                      src={item.image}
                      className="w-12 h-12 flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="font-medium">{item.title}</span>
                      <p className="text-sm">{item.description}</p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="lg:w-3/4 mx-auto mt-6">
          <div className="flex flex-col">
            <h1 className="sm:text-3xl text-2xl font-medium text-gray-900">
              INSURANCE COVERAGE
            </h1>
            <p className="lg:w-2/3 font-bold">PERILS COVERED</p>
          </div>

          <div className="flex flex-wrap ">
            {coverageItems.map((item, index) => (
              <div key={index} className="w-full max-lg:w-1/2 lg:w-1/3 p-2">
                <div className="h-full p-8 flex items-center justify-center">
                  <div className="inline-flex items-center w-full">
                    <img
                      alt={item.label}
                      src={item.src}
                      className="w-12 h-12 flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-2 ">
                      <p className="font-normal text-gray-700">{item.label}</p>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-10 container mx-auto">
        <Collapsible title="Who Is Covered?">
          <p>
            This plan indemnifies the customer against loss or damage to the
            insured jewellery.
          </p>
        </Collapsible>

        <Collapsible title="Who Is Not Covered?">
          <p>
            Please refer to our policies to understand further (insurance page
            link).
          </p>
        </Collapsible>

        <Collapsible title="What happens if my order is lost or stolen during shipping before I receive it?">
          <p>
            We understand that your jewelry is a precious investment, and we
            take great pride in ensuring its safety during shipping. Rest
            assured, your jewelry is fully insured by us. In the unlikely event
            that your order is lost or stolen during shipping before it reaches
            you, we've got you covered..
          </p>
        </Collapsible>

        <Collapsible title="What should I do if my order arrives in a damaged or incomplete state?">
          <p>
            If your order arrives damaged or incomplete, here's what to do: 1.
            Call us to report the issue. 2. Provide a picture of the damaged
            item. 3. We'll arrange a pickup for quality check. 4. Choose between
            a full refund or a replacement once we verify the damage.
          </p>
        </Collapsible>

        <Collapsible title="What does Kumari jewelry insurance cover?">
          <p>
            Any physical loss or damage to the insured jewellery up to the
            amount insured arising from any cause is covered.The event should
            occur within the jurisdiction of coverage as described in the policy
            schedule. The event should also occur within the policy period.{" "}
          </p>
        </Collapsible>

        <Collapsible title="How do I claim insurance in case of loss or damage?">
          <p>
            To claim insurance in case of loss or damage, follow these steps:
            Call our customer care for assistance or You can also reach out
            directly to the concerned individuals: Direct Contact: 18002101225
            (Monday to Friday between 10:00 AM to 6:00 PM). E-mail:
            reportclaim@unilight.in. Our team will guide you through the
            insurance claim process and provide the necessary support.
          </p>
        </Collapsible>
      </div>
    </section>
  );
};

export default Insurance;
