import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const LoginPage = () => {

  const {register, handleSubmit, formState: {errors} } = useForm();

  const {signin, errors: signinErrors} = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
       {
        signinErrors.map((err, i) => {
          <div className=" bg-red-500 p-2 text-white" key={i}>
            {err}
          </div>
        })
      }

      <h1 className=" text-2xl font-bold mb-3">Login</h1>
      
      <form onSubmit={onSubmit}>
       
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my2"
          placeholder="email"
        />
        {errors.email && <p className="text-red-500">Email is required</p>}
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="password"
        />
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}
        <button type="submit" className=" text-white border-cyan-50 border py-3 px-5 bg-blue-400 rounded-md hover:bg-blue-600">Login</button>
      </form>
      <p className="flex gap-x-2 justify-between text-white">
        Don&apos;t have an account? <Link className=" text-sky-500" to="/register">Register</Link>
      </p>
      </div>
    </div>
  );
};

export default LoginPage;