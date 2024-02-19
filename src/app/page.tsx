import { Button } from "@/components/ui/button";
import { UserButton,auth } from "@clerk/nextjs";
import { Divide, Heading1 } from "lucide-react";


export default async function Home() {
  const { userId } = await auth();
  const isAuth =!!userId
  return (
    <div className="w-screen min-h-screen" style={{ 
      background: 'linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))',
      position: 'relative' // Adding position: relative to the parent div
    }}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-colum items-center tect-center">
           <div className="flex items-center">
              <h1 className="mr-3 text-5x1 font-semibold">Chat with any PDF</h1>
             <UserButton afterSignOutUrl="/" />         
           </div>

          
      
        </div>
        <dev className="flex mt-2">
             {isAuth && <Button>Go to Chat </Button>}
           
            </dev>
             <p>
              join millions Student ,Researchers and professnals to instantly answer questions and understand research with AI
             </p>
      </div>
    </div>
  );
}
