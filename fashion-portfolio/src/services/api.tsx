const API_URL = 'http://localhost:5000/api';

export const getPortfolioItems = async () => {
  const response = await fetch(`${API_URL}/portfolio`);
  return response.json();
};

export const submitContactForm = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
};
