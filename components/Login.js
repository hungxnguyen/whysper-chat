import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login({ nameInput, setNameInput }) {
  const { authenticate } = useMoralis();

  const authenticateOnSubmit = (e) => {
    e.preventDefault();

    authenticate();
  };

  return (
    <div className="relative">
      <div className="flex flex-col absolute z-50 h-screen items-center justify-center w-full gap-y-6 card">
        <Image
          src="/images/login-image2.png"
          className="rounded-full object-cover"
          height={200}
          width={200}
          alt="ducky"
        />

        <form
          type="submit"
          onSubmit={authenticateOnSubmit}
          className="flex flex-col gap-y-2"
        >
          <input
            className="px-5 py-3 outline-none placeholder:text-center text-center text-md text-sm placeholder:text-sm rounded-full"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            type="text"
            placeholder="What's your name?"
            required
          />

          <button
            className="bg-yellow-300/80 hover:bg-yellow-500 text-white font-semibold px-5 py-3 rounded-full "
            onClick={authenticateOnSubmit}
          >
            Connect to the Metaverse
          </button>
        </form>
      </div>

      <div className="h-screen w-full">
        <Image
          src="/images/login-bg-image.jpg"
          className="object-cover"
          layout="fill"
          alt="login-background-image"
        />
      </div>
    </div>
  );
}

export default Login;
