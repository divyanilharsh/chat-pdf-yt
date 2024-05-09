import {PineconeClient} from "@pinecone-database/pinecone";
import { downloadFroms3 } from "./s3";

let pinecone : PineconeClient | null = null ;

export const getPineconeClient = async() => {
    if(!pinecone) {
        pinecone = new PineconeClient();
        await pinecone.init({
            environment: process.env.PINECONE_ENVIRONMENT!,
            apiKey: process.env.PINECONE_API_KEY!
        });
    }

    return pinecone
}
export async function loads3IntoPinecone(file_key: string) {
    console.log("downloading s3 into file system")
    const file_name = await downloadFroms3(file_key)
}