"use client"
import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {

    const handleGoogleSignIn = async()=>{
         const data = await authClient.signIn.social({
    provider: "google",
  });
    console.log(data, "data");
    };

    const handleGitHubSignIn = async()=>{
         const data = await authClient.signIn.social({
    provider: "github",
  });
    console.log(data, "data");
    };


    return (
        <div className="space-y-4">
            <h2 className="text-xl font-medium">Login with</h2>
            <div className="flex flex-col space-y-4">
                <button className="btn border-blue-500 text-blue-500" onClick={handleGoogleSignIn}> 
                    <FaGoogle/>Login with Google</button>

                <button className="btn border-zinc-900 text-zinc-900" onClick={handleGitHubSignIn}> 
                    <FaGithub/>Login with gitHub</button>
            </div>
        </div>
    );
};

export default RightSideBar;