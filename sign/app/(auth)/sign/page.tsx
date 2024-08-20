"use client"
import { make } from "@/app/api/sign/route";
import Input from "@/components/input";
import { useRouter } from "next/navigation";
import { useState } from "react";


const page = () => {
    const router=useRouter()
    const [name, SetName] = useState("")
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")

    function click(e: React.ChangeEvent<HTMLInputElement>) {

        SetName(e.target.value);

    }
    function click2(e: React.ChangeEvent<HTMLInputElement>) {

        SetEmail(e.target.value);

    }
    function click3(e: React.ChangeEvent<HTMLInputElement>) {

        SetPassword(e.target.value);

    }
    return (
        <div className=" flex flex-col justify-center items-center h-screen">
            <div className="font-serif text-3xl m-3" >
                SignIn
            </div>
            <div className="flex flex-col gap-3">
                <Input click={click} value={name} placeholder="name" />
                <Input click={click2} value={email} placeholder="email" />
                <Input click={click3} value={password} placeholder="password" />
                <button onClick={async () => {
                    // await fetch("http://localhost:3000/api/sign",{
                    //     method: "POST",
                    //     body: JSON.stringify({ name , email , password})
                    // })
                    await make(name, email, password);
                    router.push('/')

                }} className="border-2 border-white p-2 rounded-md w-full hover:text-black hover:bg-white">Sign IN</button>
            </div>
        </div>
    );
};

export default page;