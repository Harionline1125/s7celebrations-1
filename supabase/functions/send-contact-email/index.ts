import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Get Resend API key from Supabase secrets
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not found in environment variables')
      return new Response(
        JSON.stringify({ error: 'Email service configuration error' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Email content for admin
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

    // Send email using Resend API
    try {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'S7 Events Website <onboarding@resend.dev>',
          to: ['s7eventsentertainments@gmail.com'],
          subject: 'New Event Inquiry',
          text: emailContent,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
              <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <h2 style="color: #2563eb; margin-bottom: 20px;">📌 New Contact Form Submission</h2>
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                  <h3 style="color: #1e40af; margin-bottom: 15px;">👤 Client Details:</h3>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+91${phone}" style="color: #2563eb;">${phone}</a></p>
                </div>
                <div style="background-color: #fef3f2; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                  <h3 style="color: #dc2626; margin-bottom: 15px;">🎉 Event Information:</h3>
                  <p><strong>Event Type:</strong> ${eventType}</p>
                  <p><strong>Event Date:</strong> ${eventDate || 'Not specified'}</p>
                </div>
                <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                  <h3 style="color: #16a34a; margin-bottom: 15px;">💬 Message:</h3>
                  <p style="line-height: 1.6;">${message}</p>
                </div>
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
                <p style="color: #6b7280; font-size: 14px; text-align: center;">
                  Received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                </p>
              </div>
            </div>
          `,
        }),
      })

      if (!resendResponse.ok) {
        const errorData = await resendResponse.text()
        console.error('Resend API error:', errorData)
        throw new Error(`Resend API error: ${resendResponse.status}`)
      }

      const resendData = await resendResponse.json()
      console.log('Email sent successfully:', resendData)

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Message sent successfully! We will get back to you soon.' 
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        },
      )
    } catch (emailError) {
      console.error('Error sending email:', emailError)
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send email. Please try again later or contact us directly.' 
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        },
      )
    }

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