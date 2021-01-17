import firebase from "firebase"

class Fire {
    constructor(){
        this.init()
        this.checkAuth()
    }

    init =() => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyBMhud-krbZCecV3oMXc0ei_oIDSzlmeDM",
                authDomain: "teia-chat.firebaseapp.com",
                databaseURL: "https://teia-chat-default-rtdb.firebaseio.com",
                projectId: "teia-chat",
                storageBucket: "teia-chat.appspot.com",
                messagingSenderId: "934550895538",
                appId: "1:934550895538:web:8ee7ca2526a51ea8cd02ab",
                measurementId: "G-23J90VC870"
            })
        }
    }
}