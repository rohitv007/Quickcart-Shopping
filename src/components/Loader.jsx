import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-100">
      <Loader2 className="animate-spin w-16 h-16 text-blue-500" />
    </div>
  );
};

export default Loader;
