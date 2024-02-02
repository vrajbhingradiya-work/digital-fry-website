import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mail";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { client } = reqBody;

    const x = await sendEmail({ client });
    console.log(x);
    return NextResponse.json({
      message: "Inquiry Raised",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}