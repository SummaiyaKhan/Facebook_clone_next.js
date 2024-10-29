import Image from "next/image";
import facebook from "./picture/facebook.png";

export default function Home() {
  return (
    // left side
    <div className="bg-slate-100 h-screen flex items-center justify-center">
      <div className="text-3xl w-[600px] px-10">
        <Image 
          src={facebook} 
          alt="Facebook Logo"
          width={300} 
          height={100} 
        />
        <p className="-mt-5">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      
      {/* right side */}
      <div className="bg-white flex flex-col p-4 rounded-xl w-1/4 relative border border-gray-300 shadow-2xl">
        <input
          className="my-2 border border-1 border-gray-100 p-2 rounded-md hover:outline hover:outline-2 hover:outline-blue-500 outline-blue-500 "
          type="text"
          placeholder="Email address or phone number"
        />
        <input
          className="my-2 border border-1 border-gray-100 p-2 rounded-md hover:outline hover:outline-2 hover:outline-blue-500 outline-blue-500"
          type="password"
          placeholder="Password"
        />
        
        <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700">
          Log in
        </button>
        
        <p className="cursor-pointer text-blue-600 text-sm my-2 text-center hover:underline">
          Forgotten Password?
        </p>
        
        <span className="my-2">
          <hr />
        </span>
        
        <button className="bg-green-600 my-2 py-2 px-2 mx-auto w-fit text-lg font-bold text-white rounded-md hover:bg-green-700">
          Create New Account
        </button>
        <span className="absolute -bottom-10 text-sm">
          <span className="font-bold hover:underline cursor-pointer">Create a page</span>
          for a celebrity, brand, or business.
        </span>
      </div>
    </div>
  );
}
















