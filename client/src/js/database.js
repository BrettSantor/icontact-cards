// TODO: Install the following package:
import { openDB } from 'idb';

// TODO: Complete the initDb() function below:
const initdb = async () => {
    openDB('contact-cards', 1, {
        upgrade(db) {
          if (db.objectStoreNames.contains('contact-cards')) {
            console.log('contact-cards database already exists');
            return;
          }
          db.createObjectStore('contact-cards', { keyPath: 'id', autoIncrement: true });
          console.log('contact-cards database created');
        },
});
}


// TODO: Complete the postDb() function below:
export const postDb = async (name, home, cell, email)  => {
    const contactCardsDb = await openDB('contact-cards', 1);
    const tx = contactCardsDb.transaction('contact-cards', 'readwrite');
    const store = tx.objectStore('contact-cards');
    const request = store.add({ name: name,home:home,cell:cell,email:email });
    const result = await request;
    console.log('🚀 - data saved to the database', result);
  
};

// TODO: Complete the getDb() function below:
export const getDb = async () => {
const contactCardsDb = await openDB('contact-cards', 1);
  const tx = contactCardsDb.transaction('contact-cards', 'readonly');
  const store = tx.objectStore('contact-cards');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
  
};

// TODO: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
    const contactCardsDb = await openDB('contact-cards', 1);
    const tx = contactCardsDb.transaction('contact-cards', 'readwrite');
    const store = tx.objectStore('contact-cards');
    const request = store.delete(id);
    const result = await request;
    console.log('result.value', result);
    return result;
};

initdb();
