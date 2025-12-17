import {
  SiGithub,
  SiLinkedin,
  SiGmail,
} from "react-icons/si";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { toast } from "react-toastify"


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value.trim();
    const email = form.current.email.value.trim();
    const title = form.current.title.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !title || !message) {
      toast.error("Please fill all fields!", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          })
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message");
        }
      );
  };
  return (
    <>
      <section
        id="contact"
        className="EXPERIENCE dark:bg-[#111827] p-5 mt-[5rem] font-['Poppins']  max-sm:p-2 "
      >
        <div className="bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#111827] dark:to-[#111827] dark:shadow-none rounded-2xl shadow-xl WRAPPER mx-2 flex justify-between p-7 mb-7 max-sm:flex-col-reverse max-sm:p-2 flr">
          <div className="ABOUT p-7">
            <h2 className="text-[#00040f] font-semibold dark:text-slate-300 leading-7 text-xl tracking-wider max-sm:text-center">
              Gaurav Rajesh Moghe
            </h2>
            <p className="text-gray-500 dark:text-slate-400 leading-[30.8px] mt-7 max-w-[400px] max-sm:text-center">
              Full Stack Developer | React • Node • MongoDB
            </p>
            <div className="SOCIALS text-[#00040f] dark:text-white text-2xl flex gap-7 mt-5 max-sm:justify-evenly">
              <a
                href="https://github.com/Gauravmoghe0709"
                 target="_blank"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-moghe-60b313358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                 target="_blank"
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiLinkedin />
              </a>


              <a
                href=""
                className=" hover:text-slate-500  dark:hover:text-sky-300"
              >
                <SiGmail />
              </a>
            </div>
            <div className="flex gap-5 max-sm:justify-center">
              <button className="py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300  from-blue-600 to-cyan-600 font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-3 rounded ">
                <a href="/gaurav moghe mern.pdf"
                  target="_blank"
                >Resume</a>
              </button>
              <button className="py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300 from-blue-600 to-cyan-600  font-medium text-[12px] text-[#e1e1e1] dark:text-black outline-none mt-10 mr-3 rounded ">
                <a
                  href=""
                  className="flex gap-2 items-center justify-center"
                >
                  <SiGithub />
                  Star
                </a>
              </button>
            </div>

          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-lg backdrop-blur-md p-6 md:p-8 flex flex-col gap-5"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-black text-center dark:text-white">
              Contact Me
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-black placeholder-gray-400 border-2 border-orange-500 dark:border-transparent dark: focus:outline-none dark:focus:ring-2"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-black placeholder-gray-400 border-2 border-orange-500 dark:border-transparent dark: focus:outline-none dark:focus:ring-2 "
            />

            <input
              type="title"
              name="title"
              placeholder="title"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-black placeholder-gray-400 border-2 border-orange-500 dark:border-transparent dark: focus:outline-none dark:focus:ring-2"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-black placeholder-gray-400 border-2 border-orange-500 dark:border-transparent dark: focus:outline-none dark:focus:ring-2"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-medium shadow-md"
            >
              Send Message
            </button>
          </form>

        </div>

        <p className="text-[#00040f] dark:text-slate-300 mx-2 text-center capitalize tracking-widest max-sm:text-sm p-2">
          made with 💙 by Gaurav Moghe
        </p>
      </section>
    </>
  );
};
export default Contact;
