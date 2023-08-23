import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1  
              "
            >
              <img src={content.logo} alt="..." className="mx-auto" />
              <h6 className="my-3">{content.title}</h6>
              <p>at</p>
              <h6>{content.place}</h6>
              <p>{content.time}</p>
              <p className="leading-7 mt-2">{content.para}</p>
              <p className="m-6">
                Technology Used: <strong> {content.tech}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
