export const getAllBooks = async () => {
   try {
      const res = await fetch('https://all-in-one-api-if2h.onrender.com/data');
      if (!res.ok) {
         throw new Error(`Request failed with status ${res.status}`);
      }
      const data = await res.json();
      return data;
   } catch (err) {
      console.error('getAllBooks error:', err);
      throw new Error(`Failed to fetch data`);
   }
};

export const getAllCategory = async () => {
   try {
      const res = await fetch('https://all-in-one-api-if2h.onrender.com/categories');
      if (!res.ok) {
         throw new Error(`Request failed with status ${res.status}`);
      }
      const data = await res.json();
      return data;
   } catch (err) {
      console.error('getAllCategory error:', err);
      throw new Error(`Failed to fetch data`);
   }
};
