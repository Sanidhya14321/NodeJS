import * as fs from "fs/promises";

//CREATING A DIRECTORY

// try {
//     await fs.mkdir('c:\\nodejs\\courses\\redux\\toolkit', {recursive:true})
//     console.log("folder created...")
// } catch (error) {
//     console.log(error)
// }

//READING THE FILE NAMES FROM THE DIRECTORY

// try {
//     const files=await fs.readdir('c:\\nodejs')
//     for(const file of files){
//         console.log(file);
//     }
// } catch (error) {
//     console.log(error)
// }

//REMOVING FOLDERS FROM A DIRECTORY (there should be no files inside the folder)

// try {
//     await fs.rmdir('c:\\nodejs\\courses\\redux')
//     console.log("Folder Removed ...")
// } catch (error) {
//     console.log(error)
// }

//CREATING AND WRITING FILES

// try {
//     await fs.writeFile("Readme.md","Hello Nodejs")
// } catch (error) {
//     console.log(error)
// }

//READING DATA FROM FILES

// try {
//     const data=await fs.readFile('Readme.md','utf-8')
//     console.log(data)
// } catch (error) {
//     console.log(error)
// }

//APPEND A FILE

// try {
//     await fs.appendFile("Readme.md","\n Nodejs is the best")
// } catch (error) {
//     console.log(error)
// }

//COPYING A FILE

// try {
//     await fs.copyFile("Readme.md","info.txt")
// } catch (error) {
//     console.log(error)
// }

//GET FILE INFORMATION

// try {
//     const info=await fs.stat("info.txt")
//     console.log(info)
//     console.log(info.isDirectory())
//     console.log(info.isFile())

// } catch (error) {
//     console.log(error)
// }

