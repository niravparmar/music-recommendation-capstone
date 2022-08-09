import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Dashboard from "../components/Dashboard";
import Loader from "../components/Loader";
import React, { useState } from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { textState } from "../atoms/playerAtom";


export default function Home() {
  
  
  const [loginstatus, setLoginstatus] = useRecoilState(textState);

  const router = useRouter();
  // const { status, data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     if(loginstatus == "login"){
  //       router.push("/auth/login");
  //     }
  //   },
  // });

  React. useEffect(() =>{
  if (loginstatus == "login"){
    // router?.push('/login');
    router?.push("/auth/login");

  }},[])


  // Loading animation...
  // if (loginstatus == "login") {
  //       // return <Loader />;
  // }

  return (
    <div className="">
      <Head>
        <title>Musicble - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </div>
  );
}
