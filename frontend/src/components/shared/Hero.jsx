import { AiFillStar } from "react-icons/ai";
import Mx1 from "./Mx1";
import Register from "./Register";

export default function Hero() {
  return (
    <div className="pt-[60px] pb-[200px] bg-gradient-to-b from-purple-600 to-indigo-800 text-white">
      <Mx1 className="text-foreground flex flex-col text-center md:text-start md:items-start items-center gap-6">
        <h1 className="font-medium text-3xl md:text-5xl lg:text-6xl">
          Decentralized Chat System
      
        </h1>
        <p className="text-lg md:text-xl font-normal max-w-[700px] w-full">
          Empowering Secure Communication
        </p>

        <div className="flex items-center justify-center md:justify-start w-full mt-8 md:mt-10">
          <Register />
        </div>
      </Mx1>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="bg-gray h-10 flex justify-center items-center">
          <p className="text-white-800 ">
            Made with <AiFillStar className="inline text-yellow-500" /> by
            ByteBuzz Team
          </p>
        </div>
      </div>
    </div>
  );
}
