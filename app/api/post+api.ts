export function GET(request: Request) {
    console.log("get request received");
    return Response.json({ hello: 'world' });
}
  
export function POST(request:Request) {
    console.log("POST request received"); 
    return Response.json({hello: 'world'});
}