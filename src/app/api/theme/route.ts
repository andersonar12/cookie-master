import { cookies } from "next/headers";
import { NextResponse } from "next/server";


// type Data =  {message : string} | IEntry[]
export async function GET() {
  const cookieStore = cookies();
  // const cookiesAll = cookieStore.getAll();

  try {
    return NextResponse.json({ theme: cookieStore.get("theme")?.value || "light" });
  } catch (err) {
    return NextResponse.json({ error: "Failed to load data" });
  } finally {
    // await dbDisconnect();
  }
}

export async function POST(request: Request) {
  try {
    return NextResponse.json({ message: "POST Success" });
  } catch (err) {
    return NextResponse.json({ error: err });
  } finally {
    // await dbDisconnect();
  }
}


