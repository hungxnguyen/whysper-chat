import Image from "next/image";
import { useMoralis } from "react-moralis";
import { LoginIcon } from "@heroicons/react/outline";

function Login({ nameInput, setNameInput }) {
  const { authenticate } = useMoralis();

  const authenticateOnSubmit = (e) => {
    e.preventDefault();

    authenticate();
  };

  return (
    <div className="relative">
      <div className="flex bg-zinc-900 flex-col absolute z-50 h-screen items-center justify-center w-full">
        <div className="flex flex-col gap-y-6 bg-gray-200 rounded-lg p-16 items-center">
          <div>
            <Image
              src="/images/login-image.png"
              className="rounded-full object-cover"
              height={200}
              width={200}
              alt="Sir Ducks Alot"
            />
          </div>

          <button
            className="flex items-center bg-[#15AAFA]/80  hover:bg-[#15AAFA] text-white font-semibold px-5 py-3 rounded-full"
            onClick={authenticateOnSubmit}
          >
            <LoginIcon className="h-5 w-5 text-grey-200 rotate-180 mr-1.5" />
            Connect with Wallet
          </button>

          <div className="text-center ">
            <p>Don't have a wallet?</p>
            <p className="underline decoration-solid underline-offset-4 font-medium mt-0.5 cursor-pointer">
              Sign in with email & password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
