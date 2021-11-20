import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.db = app.firestore(); //.settings({experimentalForceLongPolling: true});
    this.auth = app.auth();
    this.storage = app.storage();
  }

  async reauthenticate(password) {
    const user = this.auth.currentUser;
    const credentials = app.auth.EmailAuthProvider.credential(
      user.email,
      password,
    );
    return await user.reauthenticateWithCredential(credentials);
  }

  async updateEmail(password, email) {
    return await this.reauthenticate(password).then(() =>
      this.auth.currentUser.updateEmail(email),
    );
  }

  async updateProfile(payload) {
    return await this.auth.currentUser.updateProfile(payload);
  }

  async updatePassword(password, newPassword) {
    return await this.reauthenticate(password).then(() =>
      this.auth.currentUser.updatePassword(newPassword),
    );
  }

  async addFavorite({id, alias = null}) {
    const payload = {
      userId: this.auth.currentUser.uid,
      cityId: id,
      alias: alias,
    };
    return await this.db.collection('favorites').add(payload);
  }

  async removeFavorite(id) {
    try {
      const userId = this.auth.currentUser.uid;
      return await this.db
        .collection('favorites')
        .where('cityId', '==', id)
        .where('userId', '==', userId)
        .get()
        .then(res => {
          res.forEach(doc => {
            const favoriteId = doc.id;
            this.db.collection('favorites').doc(favoriteId).delete();
          });
        });
    } catch (err) {
      return err;
    }
  }

  async checkFavoriteStatus(id) {
    const userId = this.auth.currentUser.uid;
    return await this.db
      .collection('favorites')
      .where('cityId', '==', id)
      .where('userId', '==', userId)
      .get();
  }

  async getFavoritesId() {
    const userId = this.auth.currentUser.uid;
    return await this.db
      .collection('favorites')
      .where('userId', '==', userId)
      .get()
      .then(res => {
        const idList = [];
        res.forEach(doc => {
          idList.push(doc.data().cityId);
        });
        return idList;
      });
  }

  async addCity(data) {
    const payload = data;
    return await this.db.collection('cities').add(payload);
  }

}

const firebase = new Firebase();
export default firebase;
