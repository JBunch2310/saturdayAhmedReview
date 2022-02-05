/**
 * 0. `npm init -y`
 * 1. Install Firebase Packages
 * 2. Import Firebase
 * 3. Connect / Initialize the database
 * 4. Access the collections
 * 5. Read Documents
 * 6. Insert Documents
 * 7. Edit/Update Documents
 */

 // 2. Import Firebase
 const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
 const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
 
 const serviceAccount = require('./credentials.json');
 
 // 3a. Initialize the app
 initializeApp({
   credential: cert(serviceAccount)
 });
 
 // 3b. Connect to the database (i.e. Firestore)
 const db = getFirestore();

 // 4. Access Users collection; collection reference
 const usersCollection = db.collection('Users')

 async function readUserDocuments() {
    // 5a. Read Documents
    const snapshot = await usersCollection.get()

    // 5b. Iterate through snapshot documents
    snapshot.forEach(function (document) {
        const documentObject = document.data()
        console.log(documentObject)
    })
 }

 readUserDocuments()