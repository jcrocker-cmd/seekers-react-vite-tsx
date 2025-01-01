import "../../assets/css/main.scss";
import Section from "../common/Section";
import image from "../../images/shepherd-jesus-christ-leading-the-sheep-vector-50871401.jpg";
import { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

interface FormInputs {
  name: string;
  email: string;
  content: string;
}

function ContactUS() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

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

  const onSubmit = (data: FormInputs) => {
    setIsSubmitting(true);

    // Send email using EmailJS
    emailjs
      .send(
        "service_cjhj8z4",
        "template_m1snr8a",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.content,
        },
        "vLaqhQ8ZPgX8Yhe_4"
      )
      .then(
        () => {
          Swal.fire("Success!", "Email Sent Successfully", "success");
          reset(); // Reset the form
          setIsSubmitting(false);
        },
        (error) => {
          console.error("FAILED...", error.text);
          Swal.fire(
            "Error!",
            "Failed to send email. Please try again.",
            "error"
          );
          setIsSubmitting(false);
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  placeholder="Your name"
                  className={`w-full border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-lg p-3 focus:ring focus:ring-green-200 focus:outline-none`}
                  {...register("name", { required: "Name is required." })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
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
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  className={`w-full border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg p-3 focus:ring focus:ring-green-200 focus:outline-none`}
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Please enter a valid email.",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
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
                  id="content"
                  placeholder="Enter your message"
                  className={`w-full border ${
                    errors.content ? "border-red-500" : "border-gray-300"
                  } rounded-lg p-3 focus:ring focus:ring-green-200 focus:outline-none`}
                  {...register("content", { required: "Message is required." })}
                ></textarea>
                {errors.content && (
                  <p className="text-red-500 text-sm">
                    {errors.content.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-black text-white py-3 px-6 rounded-lg shadow hover:bg-gray-800 focus:ring focus:ring-black focus:outline-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
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
