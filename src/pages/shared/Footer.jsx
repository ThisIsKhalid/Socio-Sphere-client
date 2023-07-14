
import { Link } from "react-router-dom";

const Footer = () => {
  

  return (
    <section className="mt-5">
      <div className="container mx-auto bg-gray-800 py-5 md:rounded-t-3xl px-10 text-white">
        <div className="grid lg:grid-cols-4 grid-cols-3 gap-3">
          <div className="lg:col-span-2 col-span-3">
            <h1 className="text-2xl mb-4 text-primary uppercase font-bold">
              Socio Sphere
            </h1>
            <p className="text-gray-400 md:w-[80%] w-full">
              Experience a vibrant social media platform where creativity
              thrives through captivating visuals and captivating narratives.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Links</h3>
            <ul className="flex flex-col gap-2 mt-4 text-gray-300">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/medias">Media</Link>
              </li>
              <li>
                <Link to="/profile">About</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Product</h3>
            <ul className="flex flex-col gap-2 mt-4 text-gray-300">
              <li>
                <Link>Pricing</Link>
              </li>
              <li>
                <Link>Features</Link>
              </li>
              <li>
                <Link>Integrations</Link>
              </li>
            </ul>
          </div>
        </div>
            <div className="border border-gray-700  w-full my-3"></div>
        {/* footer down */}
        <div className=" flex items-center justify-between text-gray-300 text-sm">
          <div className="flex items-center ">
            <p>
              © Khalid Hasan {new Date().getFullYear()} | All right reserved.
            </p>
          </div>
          <div>
            <p className="">Terms & Privacy Policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
