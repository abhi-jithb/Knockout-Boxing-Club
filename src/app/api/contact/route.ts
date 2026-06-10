export async function POST(request: Request){
    const body = await request.json();

    console.log(body);

    return Response.json({
        success: true,
        message: "Message Recieved",
    });
}

export async function GET() {
  return Response.json({
    name: "Abhi",
    message: "Contact API is working",
  });
}