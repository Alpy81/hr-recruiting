import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// E-Mail des Personalvermittlers — in .env.local setzen
const RECRUITER_EMAIL = process.env.RECRUITER_EMAIL ?? "info@talentforge-hr.de";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const type = formData.get("type") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;
    const cvFile = formData.get("cv") as File | null;

    // Build attachments array if CV was uploaded
    const attachments: { filename: string; content: Buffer }[] = [];

    if (cvFile && cvFile.size > 0) {
      const buffer = Buffer.from(await cvFile.arrayBuffer());
      attachments.push({
        filename: cvFile.name,
        content: buffer,
      });
    }

    // Build HTML email body
    const isKandidat = type === "kandidat";
    const subject = isKandidat
      ? `Neue Bewerbung von ${name}`
      : `Neue Anfrage von ${name} (${company})`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 8px;">
        <div style="background: #0A0A0A; padding: 24px; border-radius: 6px; margin-bottom: 24px; text-align: center;">
          <h1 style="color: #00AEEF; font-size: 24px; margin: 0; letter-spacing: 2px;">TALENTFORGE HR</h1>
          <p style="color: #8BA3B0; font-size: 12px; margin: 6px 0 0; letter-spacing: 4px; text-transform: uppercase;">
            ${isKandidat ? "Neue Bewerbung" : "Neue Arbeitgeberanfrage"}
          </p>
        </div>

        <div style="background: white; padding: 24px; border-radius: 6px; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; width: 140px;">Typ</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-weight: 600; font-size: 13px; color: #00AEEF;">${
                isKandidat ? "Kandidat" : "Arbeitgeber"
              }</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">E-Mail</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px;"><a href="mailto:${email}" style="color: #00AEEF;">${email}</a></td>
            </tr>
            ${
              phone
                ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Telefon</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px;">${phone}</td>
            </tr>`
                : ""
            }
            ${
              company
                ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">${
                isKandidat ? "Aktuelle Position" : "Unternehmen"
              }</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px;">${company}</td>
            </tr>`
                : ""
            }
            ${
              cvFile
                ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">CV / Anhang</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; font-size: 13px; color: #00AEEF;">✓ ${cvFile.name}</td>
            </tr>`
                : ""
            }
          </table>

          <div style="margin-top: 20px;">
            <p style="color: #6b7280; font-size: 13px; margin-bottom: 8px;">Nachricht:</p>
            <div style="background: #f9fafb; border-radius: 4px; padding: 16px; font-size: 14px; line-height: 1.6; color: #374151; white-space: pre-wrap;">${message}</div>
          </div>
        </div>

        <p style="color: #9ca3af; font-size: 11px; text-align: center; margin-top: 20px;">
          Diese E-Mail wurde automatisch über das Kontaktformular von talentforge-hr.de generiert.
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "TalentForge HR <onboarding@resend.dev>",
      to: [RECRUITER_EMAIL],
      replyTo: email,
      subject,
      html,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Kontakt API Fehler:", error);
    return NextResponse.json(
      { success: false, error: "Interner Fehler" },
      { status: 500 }
    );
  }
}
