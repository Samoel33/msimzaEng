
import sendMessage from "../Utils/mail"
export async function POST(request:Request) {
        const data = await request.json()
        const emailsending = await sendMessage(data)
        console.log(emailsending)
    return new Response(JSON.stringify({message:"Sent",data}),{
        status:200,
        headers:{
            "Content-Type":"application/json"
        }
    })
}

