import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState} from "react";
import Loader from "../../components/Loader";
import Multiselect from 'multiselect-react-dropdown';

import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
  import { textState, useremail } from "../../atoms/playerAtom";

function register({ providers }) {
  // const { data: session } = useSession();
  const router = useRouter();
  const [loginstatus, setLoginstatus] = useRecoilState(textState);
  const [usermail, setUsermail] = useRecoilState(useremail);

  const [option, setOption] = useState(
    [
      {name: 'Hip Hop', id: 'Hip Hop'},
      {name: 'Rock', id: 'Rock'},
      {name: 'Easy Listening', id: 'Easy Listening'},
      {name: 'EDM', id: 'EDM'}
    ]);
  const [preference, setPreference] = useState([]);

  const onSelect = (selectedList, selectedItem) => {
    setPreference(selectedList)
    console.log("Print",selectedList)

  }

  const onRemove = (selectedList, removedItem) => {
    setPreference(selectedList)
  }


  const submitContact = (event) => {
    event.preventDefault();
    setUsermail(event.target.email.value)
    setLoginstatus("success");
    alert("Registration Success")
    router.push("/");

  };

//   const submitContact = async (event) => {
//     event.preventDefault();
//     const name = event.target.name.value;
//     const res = await fetch(`https://api.agify.io/?name=${name}`);
//     const result = await res.json();
//     alert(`Hi ${name} your age is most likely: ${result.age}`);
//   };
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
        height={100}
        width={240}
        objectFit="contain"
        className="animate-pulse"
      />
      <h2 class="labellogin" style={{fontSize : 50}}>Registration</h2>

    <form className="flex flex-col" onSubmit={submitContact}>
    <label htmlFor="name" class="labellogin">Full Name : </label>
      <input
        // className="mb-4 border-b-2"
        id="name"
        name="name"
        type="text"
        autocomplete="name"
      />

      <label htmlFor="email" class="labellogin">Email : </label>
      <input
        // className="mb-4 border-b-2"
        id="email"
        name="email"
        type="text"
        autocomplete="email"
      />
      <label htmlFor="email" class="labellogin">Password : </label>
      <input
        // className="mb-4 border-b-2"
        id="password"
        name="password"
        type="password"
        autocomplete="password"
      />
      <label htmlFor="preference" class="labellogin">Your Music Preference : </label>
      <Multiselect
        options={option} // Options to display in the dropdown
        // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onSelect} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
        />

      <button
            className="text-white py-4 px-6 rounded-full bg-[#1db954] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#0db146]"
            style={{margin : 50}}
            // onClick={() => {this.submitContact}}
          >
            {/* Sign in with {provider.name} */}
            Sign In
      </button>
    </form>
    </div>
  );
}

export default register;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
