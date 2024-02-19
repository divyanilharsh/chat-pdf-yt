import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";

import { LogIn ,Link} from "lucide-react";
import { STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR } from "next/dist/lib/constants";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId; // Added a semicolon at the end of the line

  return (
    <div className="w-screen min-h-screen" style={{ 
      background: 'linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))',
      position: 'relative' // Added a comma at the end of the line
    }}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center"> {/* Changed "flex-colum" to "flex-col" */}
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Chat with any PDF</h1> {/* Changed "text-5x1" to "text-5xl" */}
            <UserButton afterSignOutUrl="/" />         
          </div>
          <div className="flex mt-2">
            {isAuth && <Button>Go to Chat </Button>}
          </div>
          <p>
            Join millions of students, researchers, and professionals to instantly answer questions and understand research with AI. {/* Corrected spelling of "join", "professionals", and added missing periods */}
          </p>
          <div className="w-full mt-4"> {/* Changed "dev" to "div" */}
            {isAuth ? (
              <h1>fileupload</h1>
            ) : (
              <Link href="/sign-in">
                <Button>Logging in to get started 
                 
                  <LogIn className="w-4 h-4 ml-2"/>
                </Button> 
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
