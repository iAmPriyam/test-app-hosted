importScripts("https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js"
);

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

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification = JSON.parse(payload);
    const notificationOption = {
        body: notification.body,
        icon: notification.icon,
    };
    return self.registration.showNotification(
        payload.notification.title,
        notificationOption
    );
});
