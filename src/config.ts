// Configure this to point to your backend endpoint that sends emails
// You can set it in code OR at runtime via:
//   window.__BACKEND_EMAIL_ENDPOINT__ = "https://yourdomain.com/send-contact-email.php"
// Or save once in browser: localStorage.setItem('BACKEND_EMAIL_ENDPOINT', 'https://...')

const runtimeEndpoint = typeof window !== 'undefined'
  ? ((window as any).__BACKEND_EMAIL_ENDPOINT__ || localStorage.getItem('BACKEND_EMAIL_ENDPOINT') || '')
  : '';

export const BACKEND_EMAIL_ENDPOINT: string = runtimeEndpoint || ""; // set in code if you prefer
