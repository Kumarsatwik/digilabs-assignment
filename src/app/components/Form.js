"use client";
import React, { useState } from "react";
import useFormStore from "../store/FormDataStore";
const Form = ({ showForm, setShowForm }) => {
  const { name, email, image, setName, setEmail, setImage } = useFormStore();

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleImageChange = (event) => setImage(event.target.files[0]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowForm(false);
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-[350px] w-[400px] z-50 rounded-md p-5">
      <h1 className="text-2xl text-center font-semibold">Enter Details</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 items-center justify-center"
      >
        <div className="w-full">
          <label>Enter Name</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded-md p-2"
            name="name"
            onChange={handleNameChange}
            value={name}
          />
        </div>
        <div className="w-full">
          <label>Enter Email</label>
          <input
            type="email"
            value={email}
            placeholder="Email"
            className="w-full border rounded-md p-2"
            name="email"
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Upload Logo</label>
          <input
            type="file"
            name="logo"
            onChange={handleImageChange}
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="flex gap-3">
          
          <button
            className="w-full bg-red-500 text-white p-2 rounded-md"
            onClick={() => setShowForm(!showForm)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
