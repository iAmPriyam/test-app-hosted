// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAINhrncfsqoz3KGYy-EUpcX_aIdUHgDk4",
    authDomain: "test-app-hosted.firebaseapp.com",
    databaseURL: "https://test-app-hosted.firebaseio.com",
    projectId: "test-app-hosted",
    storageBucket: "test-app-hosted.appspot.com",
    messagingSenderId: "808732067852",
    appId: "1:808732067852:web:4020e40a782914de440629",
    measurementId: "G-WWPKQD0YRC",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function handle() {
    console.log("requesting permission");
    const messaging = firebase.messaging();
    messaging.requestPermission().then(() => {
        messaging.getToken().then((token) => {
            console.log(token);
        });
    });
}

handle();
