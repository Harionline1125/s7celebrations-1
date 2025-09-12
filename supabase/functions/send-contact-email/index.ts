import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, eventType, eventDate, message } = await req.json()

    // Validate required fields
    if (!name || !email || !phone || !eventType || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Email content
    const emailContent = `
📌 New Contact Form Submission from S7 Events Website
==========================================

👤 Client Details:
Name: ${name}
Email: ${email}
Phone: ${phone}

🎉 Event Information:
Event Type: ${eventType}
${eventDate ? `Event Date: ${eventDate}` : 'Event Date: Not specified'}

💬 Message:
${message}

==========================================
Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `

    // Here we would normally send an email using a service like Resend, SendGrid, or similar
    // For now, we'll log the email content and return success
    console.log('Email to be sent:', emailContent)

    // In a real implementation, you would:
    // 1. Use an email service API key from Supabase secrets
    // 2. Send the email using the service's API
    // 3. Handle the response

    // For demonstration, we'll return success
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message received successfully! We will get back to you soon.' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process your message. Please try again later.' 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})