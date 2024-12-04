import "../../assets/css/main.scss";
import Section from "../common/Section";
import image from "../../images/shepherd-jesus-christ-leading-the-sheep-vector-50871401.jpg";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import axios from "axios";

function ContactUS() {
  useEffect(() => {
    const scrollRevealConfig = {
      delay: 400,
      duration: 2000,
      distance: "50px",
    };
    ScrollReveal().reveal("main .child-left", {
      ...scrollRevealConfig,
      origin: "top",
    });
    ScrollReveal().reveal("main .child-right", {
      ...scrollRevealConfig,
      origin: "bottom",
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setResponseMessage(response.data.message || "Request sent successfully!");
      setFormData({ name: "", email: "", content: "" }); // Reset form
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage("Failed to send the email. Please try again.");
    }
  };

  return (
    <Section className="contactus-wrapper relative w-full pt-20">
      <div className="contactus-content py-10 mx-auto max-w-custom max-md:px-4">
        <div className="text-center pb-20">
          <h1 className="text-4xl font-semibold max-sm:text-2xl">
            Connect with us!
          </h1>
          <p className="max-sm:text-sm">
            Send us a message if you have questions, comments,
            <br /> or inquiries related to Seekers.
          </p>
        </div>

        <main className="relative min-h-screen flex flex-col md:flex-row justify-center items-center max-sm:min-h-[70vh]">
          {/* Form Section */}
          <div className="bg-[#ECEFF3] child-left rounded-lg shadow-lg p-8 w-1/2 absolute top-0 left-10 z-10 max-md:left-0 max-md:w-full">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="content"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  id="content"
                  // rows="4"
                  placeholder="Enter your message"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring focus:ring-red-200 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white py-3 px-6 rounded-lg shadow hover:bg-gray-800 focus:ring focus:ring-black focus:outline-none"
              >
                Submit
              </button>
            </form>
            {responseMessage && (
              <p className="text-green-600 mt-4">{responseMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-600 mt-4">{errorMessage}</p>
            )}
          </div>

          {/* Image Section */}
          <div className="child-right hidden md:block w-1/2 absolute top-20 right-10 z-0 h-[500px]">
            <img
              src={image}
              alt="Decorative"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </main>
      </div>
    </Section>
  );
}

export default ContactUS;
