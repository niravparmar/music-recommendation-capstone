import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Loader from "../../components/Loader";

function login({ providers }) {
  // const { data: session } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (session) {
  //     router.push("/");
  //   }
  // }, [session]);

  // if (session) return <Loader />;

  return (
    <div className="bg-black h-screen flex flex-col items-center pt-40 space-y-8">
      <Head>
        <title>Login - Musicble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/logo.jpg"
        height={250}
        width={600}
        objectFit="contain"
        className="animate-pulse"
      />
      <button
            className="text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146]"
            onClick={() => router.push("/auth/cred")}
          >
            {/* Sign in with {provider.name} */}
            Sign In
      </button>
      <button
            className="text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146]"
            onClick={() => router.push("/auth/register")}
          >
            {/* Sign in with {provider.name} */}
            Register
      </button>
    </div>
  );
}

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
