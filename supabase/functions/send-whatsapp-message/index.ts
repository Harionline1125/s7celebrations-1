import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders })
  }

  try {
    const { name, email, phone, eventType, eventDate, message, toPhone } = await req.json()

    if (!name || !phone || !email) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: name, phone, email" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      )
    }

    const WHATSAPP_TOKEN = Deno.env.get("WHATSAPP_TOKEN")
    const WHATSAPP_PHONE_NUMBER_ID = Deno.env.get("WHATSAPP_PHONE_NUMBER_ID")

    if (!WHATSAPP_TOKEN || !WHATSAPP_PHONE_NUMBER_ID) {
      return new Response(
        JSON.stringify({ error: "Messaging service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      )
    }

    // Default admin WhatsApp remains original (can be overridden via payload.toPhone)
    const adminPhone = (toPhone || "918754696030").replace(/\D/g, "")

    const bodyLines = [
      "📅 New Appointment Request - S7 Events",
      "----------------------------------------",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      eventType ? `Event Type: ${eventType}` : undefined,
      eventDate ? `Event Date: ${eventDate}` : undefined,
      "",
      "Message:",
      (message && message.trim()) ? message.trim() : "No additional message provided.",
      "",
      `Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
    ].filter(Boolean)

    const whatsappRes = await fetch(`https://graph.facebook.com/v17.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WHATSAPP_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: adminPhone,
        type: "text",
        text: { body: bodyLines.join("\n") },
      }),
    })

    if (!whatsappRes.ok) {
      const errText = await whatsappRes.text()
      console.error("WhatsApp API error:", errText)
      return new Response(
        JSON.stringify({ error: "Failed to send WhatsApp message" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      )
    }

    const data = await whatsappRes.json()

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    })
  } catch (err) {
    console.error("send-whatsapp-message error:", err)
    return new Response(
      JSON.stringify({ error: "Unexpected error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    )
  }
})


