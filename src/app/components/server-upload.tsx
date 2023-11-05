import { sbdb } from "@/lib/supabase";

export default function ServerUploadPage() {
  async function upload(data: FormData) {
    "use server";

    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
      throw new Error("no file!");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log(file);

    const { data: forSBData, error } = await sbdb.storage
      .from("cards")
      .upload(`cards/${Date.now()}`, file , {
        cacheControl: "3600",
        upsert: false,
    });

    if(error) {
        console.error(error);
    }
  }

  return (
    <main>
      <h1>Server Component: Upload</h1>
      <form action={upload}>
        <input type="file" name="file" />
        <button type="submit"> Подтвердить </button>
      </form>
    </main>
  );
}




// import { writeFile } from "fs/promises";
// import { join } from "path";

// const ServerUpload = () => {

//     async function upload(data: FormData) {
//         "use server"

//         const file:File | null = data.get("file") as unknown as File;

//         if(!file) {
//             throw new Error("no file!");
//         };
 
//         const bytes = await file.arrayBuffer();
//         const buffer = Buffer.from(bytes);
    
//         const path = join("/", "tmp", file.name);
//         await writeFile(path, buffer);
//         console.log(`open ${path} to see the uploaded file`);

//         return { success: true };
//     };

//   return (
//     <main>
//         <h1>Server Component: Upload</h1>
//         <form action={upload}>
//             <input type="file" name="file" />
//             <button type="submit"> Подтвердить </button>
//         </form>
//     </main>
//   )
// }

// export default ServerUpload