"use client";

import Earth from "@/Components/Earth";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const sendEmail = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await sendEmail.json();

      if (sendEmail.ok) {
        alert(`Mail Sent Successfully !!`);
      } else {
        console.log(res);
      }
    } catch (err) {
      alert(`Can't send email - Try Again !! - ${err}`);
    }

    reset();
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center bg-black px-10 py-3 z-10"
    >
      <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent my-15" />
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl font-semibold text-green-700 mb-2">
            Contact Me
          </h1>
          <p className="text-gray-500 mb-8">
            Have a question, opportunity, or just want to say hi?
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">Name is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">Email is required</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                {...register("message", { required: true })}
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">Message is required</p>
              )}
            </div>

            <button
              disabled={isSubmitting}
              className="w-full rounded-lg bg-green-600 text-white py-2 font-medium hover:bg-green-700 transition disabled:opacity-50"
            >
              Send Message
            </button>
          </form> 
        </div>

        <div className="hidden md:block h-[400px]">
          <Earth />
        </div>
      </div>
    </div>
  );
}
