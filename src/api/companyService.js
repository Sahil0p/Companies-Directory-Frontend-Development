// const API_URL = 'http://localhost:5000/companies';

// export const fetchCompanies = async () => {
//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) throw new Error('Failed to fetch companies');
//     return await response.json();
//   } catch (error) {
//     throw error;
//   }
// };


// // Use relative URL to public folder resource instead of localhost
const API_URL = '/db.json';

export const fetchCompanies = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch companies');
    return await response.json();
  } catch (error) {
    throw error;
  }
};
