class firebaseClass {
    constructor(apiKey) {
        const config = {
            apiKey: apiKey,
            authDomain: "blazing-fire-5166.firebaseapp.com",
            databaseURL: "https://blazing-fire-5166.firebaseio.com",
            projectId: "blazing-fire-5166",
            storageBucket: "blazing-fire-5166.appspot.com",
            messagingSenderId: "573430446064"
        };
        firebase.initializeApp(config);

        // FirebaseUI config.
        var uiConfig = {
            signInSuccessUrl: '/',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: '<your-tos-url>'
        };
        this.firebase = firebase
            // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        //ui.start('#firebaseui-auth-container', uiConfig);
        this.db = firebase.firestore();
    };







    //   firebase.auth().signInWithEmailAndPassword("olle.stenborg@gmail.com", "0178isBIG").catch(function(error) {
    // Handle Errors here.
    //  var errorCode = error.code;
    // var errorMessage = error.message;
    // ...
    //});
    getStuff() {
        const col = this.db.collection("cmp")
        window.col = col
        col.where('name', '==', 'f').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var obj = doc.data()
                var linkaccount = document.querySelector('#template_account').content
                linkaccount.querySelector('p').innerText = obj.name

                var accdiv = document.querySelector('div,#account')
                accdiv.appendChild(linkaccount.cloneNode(true));
                console.log(obj.name);
            });
        });
    }

    addStuff(doc) {
        this.db.collection("accounts").add(doc)
    }
    auth() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                //    document.querySelector('.firebaseui-idp-list').style.display='none'
                document.querySelector('#firebaseui-auth-container').style.display = 'none'
                document.querySelector('#firebaseui-logout').style.display = 'block'
                    // Initialize Cloud Firestore through Firebase
                window.db = this.db
                window.fsto = this.db.collection("cmp")
                window.fstoEvent = this.db.collection("event")

                document.querySelector('button,#btn_sendStuff').onclick = function() {
                    this.db.collection("accounts").add(JSON.parse(document.querySelector('#rawData').value))
                        .then(function(docRef) {
                            console.log("Document written with ID: ", docRef.id);
                        })
                        .catch(function(error) {
                            console.error("Error adding document: ", error);
                        });
                }

            } else {
                document.querySelector('#firebaseui-auth-container').style.display = 'block'
                document.querySelector('#firebaseui-logout').style.display = 'none'
            }
        });
    }
};
export default firebaseClass
