var ver = 1.3
ver

var db = firebase.firestore();

function detailedView(userID,itemID) {
    console.log('view fired');

    db.collection("views").add({
        item: itemID,
        user: userID,
        date: Date().getTime()
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
