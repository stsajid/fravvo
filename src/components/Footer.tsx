import {
  Coffee,
  Mail,
  MapPin,
  Hash,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="py-12 px-6 bg-lathran-blue border-t border-lathran-orange/20"
      id="contact"
    >
      <div className="max-w-4xl mx-auto text-left lg:text-center">
        <div className="mb-6">
          <img
            src="../../public/LS Logo.svg"
            alt="LathranSoft Logo"
            className="h-10 w-auto mx-auto"
            style={{ filter: "drop-shadow(0 0 15px rgba(237, 132, 37, 0.5))" }}
          />
          <p
            className="font-inter flex items-center justify-center lg:justify-center gap-2 mt-10"
            style={{ color: "#d1d5db" }}
          >
            Made with{" "}
            <Coffee className="h-4 w-4 text-lathran-orange animate-bounce" />{" "}
            coffee, chaos, and curiosity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  items-start lg:text-left">
          <div>
            <a
              href="mailto:hello@lathransoft.com"
              className="flex items-center justify-start lg:justify-center gap-3 group font-inter relative z-[1000]"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <div className="hover:text-lathran-orange transition-colors duration-300">
                <p className="text-xs" style={{ color: "#d1d5db" }}>
                  Have a question?
                </p>
                <p className="font-semibold">admin@lathran.com</p>
              </div>
            </a>
          </div>

          <div>
            <div className="flex items-center justify-start lg:justify-center gap-3 group font-inter relative z-[1000]">
              <Hash className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <div className="hover:text-lathran-green transition-colors duration-300 ">
                <p className="text-xs" style={{ color: "#d1d5db" }}>
                  Follow updates
                </p>
                <ul className="flex gap-x-3 mt-2">
                  <li className="h-8 w-8 bg-white/10 hover:bg-lathran-green text-white p-2 rounded-full transition flex justify-center align-center">
                    <a
                      href="https://www.facebook.com/latthransoft"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="h-8 w-8 bg-white/10 hover:bg-lathran-green text-white p-2 rounded-full transition flex justify-center align-center">
                    <a
                      href="https://www.instagram.com/lathransoft/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>
                  </li>
                  <li className="h-8 w-8 bg-white/10 hover:bg-lathran-green text-white p-2 rounded-full transition flex justify-center align-center">
                    <a
                      href="https://www.linkedin.com/company/lathransoft-llc/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-start lg:justify-center gap-3 font-inter">
              <MapPin className="h-5 w-5 text-lathran-red" />
              <div>
                <p className="text-xs" style={{ color: "#d1d5db" }}>
                  Built by LathranSoft
                </p>
                <p className="font-semibold">Ohio | UAE | Karachi</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center gap-2 text-sm font-inter mt-10 mb-[-16px]"
          style={{ color: "#d1d5db" }}
        >
          <span>Engineering Heart, Mind & Soul</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
