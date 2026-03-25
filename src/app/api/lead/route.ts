import { NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  formType: z.enum(["get-started", "contact"]),
  name: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  hearAbout: z.string().optional(),
  interest: z.array(z.string()).optional(),
  subject: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = leadSchema.parse(body);

    // Phase 1: Log to console. Phase 2: Connect Resend/email service.
    console.log("[FHF Lead]", JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Invalid form data", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
