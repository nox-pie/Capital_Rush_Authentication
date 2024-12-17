import { getDatabase, ref, set, get, query, orderByChild, equalTo } from "firebase/database";
import { app } from './config';

export const db = getDatabase(app);

export const createUserData = async (userId, userData) => {
  try {
    await set(ref(db, `users/${userId}`), userData);
  } catch (error) {
    throw error;
  }
};

export const getUserData = async (userId) => {
  try {
    const snapshot = await get(ref(db, `users/${userId}`));
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};

export const findUserByEmail = async (email) => {
  try {
    const usersRef = ref(db, 'users');
    const userQuery = query(usersRef, orderByChild('email'), equalTo(email));
    const snapshot = await get(userQuery);
    return snapshot.val();
  } catch (error) {
    throw error;
  }
};