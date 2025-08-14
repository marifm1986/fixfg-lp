import emailjs from 'emailjs-com';
interface EmailParams {
  fromName: string;
  userEmail: string;
  userPhone: string;
  platform: string;
  caseSummary: string;
}
export const sendEmail = async (params: EmailParams) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'placeholder_service';
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'placeholder_template';
  const userId = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'placeholder_key';
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