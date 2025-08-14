import emailjs from 'emailjs-com';

const VITE_EMAILJS_SERVICE_ID = "service_v3f9tvn"
const VITE_EMAILJS_TEMPLATE_ID = "template_1pw9ooj"
const VITE_EMAILJS_PUBLIC_KEY = "yyrpXQUXxpkvAGyp9"
interface EmailParams {
  fromName: string;
  userEmail: string;
  userPhone: string;
  platform: string;
  caseSummary: string;
}
export const sendEmail = async (params: EmailParams) => {

  const serviceId = VITE_EMAILJS_SERVICE_ID;
  const templateId = VITE_EMAILJS_TEMPLATE_ID;
  const userId = VITE_EMAILJS_PUBLIC_KEY;
  const templateParams = {
    from_name: params.fromName,
    user_email: params.userEmail,
    user_phone: params.userPhone,
    platform: params.platform,
    case_summary: params.caseSummary,
    to_email: 'support@fixfreightguard.com',
    reply_to: params.userEmail
  };
  try {
    await emailjs.send(serviceId, templateId, templateParams, userId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};