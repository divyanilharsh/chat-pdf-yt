import {PineconeClient} from "@pinecone-database/pinecone";
import { downloadFroms3 } from "./s3";
import {PDFLoader} 'langchain/document_loader/fs/pdf'

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
    if (!file_name) 
       {
        throw new Error("file not found")
       }
    const loader = new PDFLoader(file_name)
    const pages = await loader.load()
    return pages
    
}