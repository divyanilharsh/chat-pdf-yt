import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { LogIn } from "lucide-react";
import FileUpload from "@/components/FileUpload"; 

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <div className="w-screen min-h-screen" style={{ 
      background: 'linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))',
      position: 'relative',
    }}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1>
            <UserButton afterSignOutUrl="/" />         
          </div>
          <div className="flex mt-2">
            {isAuth && <Button>Go to Chat </Button>}
          </div>
          <p>
            Join millions of students, researchers, and professionals to instantly answer questions and understand research with AI.
          </p>
         <div className="w-full mt-2">
            {isAuth ? (
              <FileUpload /> // Corrected component name
            ) : (
              <Link href="/sign-in">
                <Button className="flex items-center justify-center w-4/5">
                  Logging in to get started 
                  <LogIn/>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
