var addNotification = document.querySelector("#add-notification");
if (addNotification) {
    addNotification.onclick = function () {
        if ("Notification" in window) {
            if (Notification.permission !== "denied") {
                Notification.requestPermission(function (permission) {
                    if (!("permission" in Notification)) {
                        Notification.permission = permission;
                    }
                });
            }

            if (Notification.permission === "granted") {
                new Notification("See this", {
                    body: "This is a notification",
                });
            }
        } else {
            var notify = navigator.mozNotification.createNotification(
                "See this",
                "This is a notification"
            );
            notify.show();
        }
    };
}
