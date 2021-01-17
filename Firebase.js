import firebase from "firebase";

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyBMhud-krbZCecV3oMXc0ei_oIDSzlmeDM",
        authDomain: "teia-chat.firebaseapp.com",
        databaseURL: "https://teia-chat-default-rtdb.firebaseio.com",
        projectId: "teia-chat",
        storageBucket: "teia-chat.appspot.com",
        messagingSenderId: "934550895538",
        appId: "1:934550895538:web:8ee7ca2526a51ea8cd02ab",
        measurementId: "G-23J90VC870",
      });
    }

    checkAuth = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          firebase.auth().sighInAnonymously();
        }
      });
    };
  };
  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };

      this.db.push(message);
    });
  };

  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createdAt = new DataCue(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref("message");
  }

  get db() {
    return firebase.auth().currentUser || {}.uid;
  }
}

export default new Fire();
