export type ContactFormValues = {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
};

export type ContactMessageMeta = {
  subject: string;
  autoresponse: string;
};

export const emptyContactForm: ContactFormValues = {
  name: '',
  email: '',
  mobile: '',
  subject: '',
  message: '',
};

const contactRecipient = 'niki_simpson@abv.bg';
const contactEndpoint = `https://formsubmit.co/ajax/${contactRecipient}`;

export const sendContactMessage = async (
  values: ContactFormValues,
  meta: ContactMessageMeta,
): Promise<void> => {
  const response = await fetch(contactEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      ...values,
      _subject: meta.subject,
      _autoresponse: meta.autoresponse,
      _template: 'table',
      _captcha: 'false',
    }),
  });

  if (!response.ok) {
    throw new Error('Request failed');
  }
};
