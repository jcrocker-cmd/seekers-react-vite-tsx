import "../../assets/css/main.scss";
import Section from "../common/Section";
import image from "../../images/shepherd-jesus-christ-leading-the-sheep-vector-50871401.jpg";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    content: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name ? "" : "Name is required.",
      email: formData.email
        ? /^\S+@\S+\.\S+$/.test(formData.email)
          ? ""
          : "Please enter a valid email."
        : "Email is required.",
      content: formData.content ? "" : "Message is required.",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire("Error!", "Please fill in all fields correctly.", "error");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        "service_cjhj8z4",
        "template_m1snr8a",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.content,
        },
        "vLaqhQ8ZPgX8Yhe_4"
      )

      .then(
        (result) => {
          setFormData({ name: "", email: "", content: "" }); // Reset form
          console.log(result);
          Swal.fire("Success!", "Email Sent Successfully", "success");
          setIsSubmitting(false); // Re-enable button after successful submission
        },
        (error) => {
          console.error("FAILED...", error.text);
          Swal.fire(
            "Error!",
            "Failed to send email. Please try again.",
            "error"
          );

          setIsSubmitting(false); // Re-enable button if submission fails
        }
      );
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
            <form onSubmit={sendEmail}>
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
                  className={`w-full border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg p-3 focus:ring focus:ring-red-200 focus:outline-none`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
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
                  className={`w-full border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg p-3 focus:ring focus:ring-red-200 focus:outline-none`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
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
                  className={`w-full border ${
                    errors.content ? "border-red-500" : "border-gray-300"
                  } rounded-lg p-3 focus:ring focus:ring-red-200 focus:outline-none`}
                ></textarea>
                {errors.content && (
                  <p className="text-red-500 text-sm">{errors.content}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-black text-white py-3 px-6 rounded-lg shadow hover:bg-gray-800 focus:ring focus:ring-black focus:outline-none"
                disabled={isSubmitting} // Disable button when submitting
              >
                {isSubmitting ? "Submitting..." : "Submit"}{" "}
                {/* Show loading text */}
              </button>
            </form>
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
