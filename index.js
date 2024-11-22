require('dotenv').config()
const { GoogleGenerativeAI } =require("@google/generative-ai");
//with stream
// (async()=>{
//     console.time('gemnai')
//     const genAI = new GoogleGenerativeAI(process.env.GEMNAI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//     const prompt = "can you tell me what is docker";
//     const result = await model.generateContentStream(prompt);
    
//     for await (const chunk of result.stream) {
//         const chunkText = chunk.text();
//         console.log(chunkText);
//       }
//       console.timeEnd('gemnai')

// })()


//without stream

//  const giveDetails=async(prompt)=>{
//     // console.time('gemnai')
//     const genAI = new GoogleGenerativeAI(process.env.GEMNAI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//     const prompt = `
//     You are an expert in extracting information from invoices.
//     Here is the invoice text:
    
//     ${prompt}
    
//     Please extract the following details:
//     - Customer Details
//     - Products
//     - Total Amount
//     `;;
//     const result = await model.generateContent(prompt);
//     console.log(result.response.text());
//     //   console.timeEnd('gemnai')

// }




