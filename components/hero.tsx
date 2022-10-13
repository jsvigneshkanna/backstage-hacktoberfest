import Background from "../public/images/artist-concert.jpg";
import Image from "next/image";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./header";

export default function Hero() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="object-cover bg-[url('../public/images/artist-concert.jpg')] bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-16 w-7/12 text-white">
        <h1 className="self-center text-center font-bold drop-shadow-xl text-6xl">
          Be the first to discover a star. 
        </h1>
        <p className="self-center text-center drop-shadow-xl">
          <strong>246,900</strong> Users. <strong>3,904</strong> Artists.{" "}
          <strong>$3,800,000</strong> Market Value.
        </p>

        <button onClick={loginWithRedirect} className="text-[1.1rem] mx-[1rem] bg-[#485ED1] px-5 py-2 rounded-lg hover:bg-[#364aaf]">
          Sign Up
        </button>
        
      </div>
    </div>
  );
}
