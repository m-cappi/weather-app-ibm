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

  reauthenticate(password) {
    const user = this.auth.currentUser;
    const credentials = app.auth.EmailAuthProvider.credential(
      user.email,
      password,
    );
    return user.reauthenticateWithCredential(credentials);
  }

  updateEmail(password, email) {
    return this.reauthenticate(password).then(() =>
      this.auth.currentUser.updateEmail(email),
    );
  }

  updateProfile(payload) {
    return this.auth.currentUser.updateProfile(payload);
  }

  updatePassword(password, newPassword) {
    return this.reauthenticate(password).then(() =>
      this.auth.currentUser.updatePassword(newPassword),
    );
  }

  addFavorite(id) {
    const payload = {userId: this.auth.currentUser.uid, albumId: id};
    return this.db.collection('favorites').add(payload);
  }

  removeFavorite(id) {
    try {
      const userId = this.auth.currentUser.uid;
      return this.db
        .collection('favorites')
        .where('albumId', '==', id)
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

  checkFavoriteStatus(id) {
    const userId = this.auth.currentUser.uid;
    return this.db
      .collection('favorites')
      .where('albumId', '==', id)
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
          idList.push(doc.data().albumId);
        });
        return idList;
      });
  }
}

const firebase = new Firebase();
export default firebase;
