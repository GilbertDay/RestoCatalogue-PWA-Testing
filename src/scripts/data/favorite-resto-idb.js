/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

class FavoriteRestoIdb {
  static async getResto(id) {
    if (!id) {
      return;
    }
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  }

  static async getAllResto() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  }

  static async putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    return (await dbPromise).put(OBJECT_STORE_NAME, resto);
  }

  static async deleteResto(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  }

  static async searchResto(query) {
  }
}

export default FavoriteRestoIdb;
