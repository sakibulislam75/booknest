export const getAllBooks = async () => {
   try {
      const res = await fetch('http://localhost:3000/books.json');
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
