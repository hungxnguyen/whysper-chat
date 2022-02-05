import Image from "next/image";
import { useMoralis } from "react-moralis";
import { LoginIcon } from "@heroicons/react/outline";

function Login() {
  const { authenticate } = useMoralis();

  const authenticateOnSubmit = (e) => {
    e.preventDefault();

    authenticate();
  };

  return (
    <div className="relative">
      <div className="absolute z-50 flex h-screen w-full flex-col items-center justify-center bg-zinc-900">
        <div className="flex flex-col items-center gap-y-6 rounded-lg bg-gray-200 p-11 lg:p-16">
          <div>
            <Image
              src="/images/login-image.png"
              className="rounded-full object-cover"
              height={175}
              width={175}
              alt="Sir Ducks Alot"
            />
          </div>

          <button
            className="flex items-center rounded-full bg-[#15AAFA]/80 px-3.5 py-2.5 font-semibold text-white hover:bg-[#15AAFA] lg:px-5 lg:py-3"
            onClick={authenticateOnSubmit}
          >
            <LoginIcon className="text-grey-200 mr-1.5 h-5 w-5 rotate-180" />
            Connect with Wallet
          </button>

          <div className="text-center">
            <p className="text-sm lg:text-base">Don&apos;t have a wallet?</p>
            <p className="mt-0.5 cursor-pointer text-sm font-medium text-blue-500 lg:text-base">
              Sign in with email & password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
