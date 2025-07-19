"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/InputField";
import Image from "next/image";

import { z } from "zod";

const schema = z.object({
  userName: z
    .string()
    .min(3, { message: "Username must be at least 3 charachter long!" })
    .max(20, { message: "Username must be at most 20 charachter long!" }),

  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must at least 8 charachter lomg" }),
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  address: z.string().min(1, { message: "address is required" }),
  bloodType: z.string().min(1, { message: "Blood type is required" }),
  birthday: z.date({ message: "Birthday is required" }),
  sex: z.enum(["male", "female"], { message: "Sex is rewuired" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

function TeacherForm({ type, data }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      userName: data?.username || "",
      email: data?.email || "",
      password: data?.password || "",
      firstName: data?.firstName || "",
      lastName: data?.lastName || "",
      phone: data?.phone || "",
      address: data?.address || "",
      bloodType: data?.bloodType || "",
      birthday: data?.dateOfBirth || "",
      sex: data?.sex || "",
      img: null, // file inputs can't be pre-filled for security reasons
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold ">Create a new lessons</h1>
      <span className="text-xs font-medium text-gray-400">
        Authentication information
      </span>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="userName"
          type="text"
          error={errors.userName}
          register={register}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          error={errors.email}
          register={register}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          error={errors.password}
          register={register}
        />
      </div>

      <span className="text-xs font-medium text-gray-400">
        Personal Information
      </span>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="firstName"
          type="text"
          error={errors.firstName}
          register={register}
        />
        <InputField
          label="Last Name"
          name="lastName"
          type="text"
          error={errors.lastName}
          register={register}
        />
        <InputField
          label="Phone"
          name="phone"
          type="text"
          error={errors.phone}
          register={register}
        />
        <InputField
          label="Address"
          name="address"
          type="text"
          error={errors.address}
          register={register}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          type="text"
          error={errors.bloodType}
          register={register}
        />
        <InputField
          label="Date of Birth"
          name="birthday"
          type="Date"
          error={errors.birthday}
          register={register}
        />

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-red-500 text-xs">{errors.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer "
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-red-500 text-xs">{errors.img.message}</p>
          )}

          {/* If we want to saw image during update
            <label className="text-xs text-gray-500" htmlFor="img">Profile Image</label>

            ✅ Image preview if existing image is present
                {data?.img && (
                    <Image
                        src={data.img}
                        alt="Preview"
                        width={100}
                        height={100}
                        className="rounded-md"
                    />
                )}

                ✅ File input field
                    <input
                        type="file"
                        {...register("img")}
                        id="img"
                        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm hidden"
                    />
                    {errors.img?.message && (
                      <p className="text-red-500 text-xs">{errors.img.message}</p>
                    )}
        */}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 font-medium">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
}

export default TeacherForm;
