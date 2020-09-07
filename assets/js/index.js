// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
navigator.serviceWorker.register("service-worker.js");
serviceWorker.ready
    .then(function (registration) {
        return registration.pushManager
            .getSubscription()
            .then(async function (subscription) {
                if (subscription) {
                    return subscription;
                }

                // const response = await fetch("./vapidPublicKey");
                const vapidPublicKey =
                    "BCZ_EmHX4Q9vNiljgo9WsdKAXqi-FZTnWNvj-zoztWbmA3h56eoUzbCe_VSZ94I4FbCoFEHX75WhSaUPbBoQGgs";

                const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
                return registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: convertedVapidKey,
                });
            });
    })
    .then(function (subscription) {
        // fetch("./register", {
        //     method: "post",
        //     headers: {
        //         "Content-type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         subscription: subscription,
        //     }),
        console.log(subscription);
    });

// document.getElementById("doIt").onclick = function () {
//     const payload = document.getElementById("notification-payload").value;
//     const delay = document.getElementById("notification-delay").value;
//     const ttl = document.getElementById("notification-ttl").value;

//     fetch("./sendNotification", {
//         method: "post",
//         headers: {
//             "Content-type": "application/json",
//         },
//         body: JSON.stringify({
//             subscription: subscription,
//             payload: payload,
//             delay: delay,
//             ttl: ttl,
//         }),
//     });
// };
// });
