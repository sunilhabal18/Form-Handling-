import { useState } from "react";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(6, "Password must be at least 6 Characters"),
});
const Home = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const result = LoginSchema.safeParse(form);

    if (!result.success) {
      const errorFild = result.error.formErrors.fieldErrors;
      setError(errorFild);
      return;
    }
    setError({});
    setSubmittedData(form);

    setForm({
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      password: "",
    });
  };

  return (
    <div className=" flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-red-100">
      <div className=" bg-white p-8 rounded-md shadow-2xl w-full max-w-lg">
        <h2 className=" text-center font-bold text-3xl text-blue-500">
          Register Form
        </h2>
        <form className=" space-y-5" onSubmit={submitHandler}>
          <input
            type="text"
            name="firstname"
            value={form.firstname}
            placeholder="First Name"
            className=" w-full p-2 border rounded focus:outline-none  mt-2 text-[20px]"
            onChange={changeHandler}
          />
          <input
            type="text"
            name="lastname"
            value={form.lastname}
            placeholder="Last Name"
            className=" w-full p-2 border rounded focus:outline-none  mt-1 text-[20px]"
            onChange={changeHandler}
          />
          <input
            type="number"
            name="number"
            value={form.number}
            placeholder="number"
            className=" w-full p-2 border rounded focus:outline-none  mt-1 text-[20px]"
            onChange={changeHandler}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder="Email"
            className=" w-full p-2 border rounded focus:outline-none  mt-1 text-[20px]"
            onChange={changeHandler}
          />
          <span className=" text-sm text-red-600">{error && error.email}</span>

          <input
            type="password"
            name="password"
            value={form.password}
            placeholder="password"
            className=" w-full p-2 border rounded focus:outline-none  mt-1 text-[20px]"
            onChange={changeHandler}
          />
          <span className=" text-sm text-red-600">
            {error && error.password}
          </span>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded transition hover:bg-red-500 cursor-pointer text-3xl font-bold"
          >
            Submit
          </button>
        </form>
        {submittedData && (
          <div className="mt-8 border-t pt-6 text-gray-700 space-y-2">
            <h3 className="text-xl font-semibold text-green-600">
              Submitted Info:
            </h3>
            <p>
              <strong>First Name:</strong> {submittedData.firstname}
            </p>
            <p>
              <strong>Last Name:</strong> {submittedData.lastname}
            </p>
            <p>
              <strong>Mobile:</strong> {submittedData.number}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Password:</strong> {submittedData.password}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
