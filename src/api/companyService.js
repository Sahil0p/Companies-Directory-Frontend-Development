// export const fetchCompanies = async () => {
//     const response = await fetch('http://localhost:5000/companies');
//     return response.json();
//   };

const API_URL = 'http://localhost:5000/companies';

export const fetchCompanies = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch companies');
    return await response.json();
  } catch (error) {
    throw error;
  }
};
