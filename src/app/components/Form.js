"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setdata } from "../redux/slice";
const Form = ({ showForm, setShowForm }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    logo: "",
  });
  // const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setData(data));
    setShowForm(false);
  };
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-[350px] w-[400px] z-10 rounded-md p-5">
      <h1 className="text-2xl text-center font-semibold">Enter Details</h1>
      <form className="flex flex-col gap-3 items-center justify-center">
        <div className="w-full">
          <label>Enter Name</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded-md p-2"
            name="name"
            onChange={handleChange}
            value={data.name}
          />
        </div>
        <div className="w-full">
          <label>Enter Email</label>
          <input
            type="email"
            value={data.email}
            placeholder="Email"
            className="w-full border rounded-md p-2"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Upload Logo</label>
          <input
            type="file"
            name="logo"
            value={data.logo}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
        </div>
        <div className="flex gap-3">
          <button className="w-full bg-[#2c3a58] text-white p-2 rounded-md">
            Submit
          </button>
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
