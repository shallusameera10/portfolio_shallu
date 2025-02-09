import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaWpforms } from "react-icons/fa6";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { HelpersFunction } from "../helpers/helper-functions";
function ContactUs() {
  const helpersFunction = new HelpersFunction();
  const [loader, setLoader] = useState(false);
  const [successMsg, setSuccessMsg] = useState();
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  console.log(watch());
  const onSubmit = async (data) => {
    console.log(data);
    setLoader(true);
    let response = await addDoc(collection(db, "contact_us_data"), {
      name: data.name,
      email: data.email,
      comment: data.comment,
    });
    console.log(response);
    setTimeout(() => {
      setLoader(false);
      setSuccessMsg(true);
      reset();
    }, 1000);
  };
  useEffect(() => {
    setSuccessMsg(false);
  }, []);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-[70px]" id="contactus">
          <div className="border border-solid p-[5px_10px] my-[10px] rounded-full w-[140px] flex gap-[5px] items-center ">
            <FaWpforms /> Contact Us
          </div>
          <h2 className="primaryHeading">
            Contact <span className="text-primary font-[600]"> Us</span>
          </h2>
          <div className="xs:block lg:flex gap-[15px]  ">
            <div className="basis-[49%]">
              <input
                type="text"
                placeholder="Enter Name"
                {...register("name", { required: "Name is required*" })}
              />
              {errors.name && <p className="error">{errors?.name?.message}</p>}
            </div>
            <div className="basis-[49%]">
              <input
                type="email"
                placeholder="Enter Email"
                {...register("email", {
                  required: "Email is required*",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
          </div>
          <textarea
            rows="4"
            cols="9"
            placeholder="Comments"
            {...register("comment", { required: "Required*" })}
          />
          {errors.comment && <p className="error">{errors.comment.message}</p>}

          <br />
          {loader ? (
            helpersFunction.loader()
          ) : (
            <button type="submit" className="simpleBtn">
              Submit
            </button>
          )}
          {successMsg && <p className="text-primary">Success!</p>}
        </div>
      </form>
    </>
  );
}

export default ContactUs;
