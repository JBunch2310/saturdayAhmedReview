/**
 * 0. `npm init -y`
 * 1. Install Firebase Packages
 * 2. Import Firebase
 * 3. Connect / Initialize the database
 * 4. Access the collections
 * 5. Read Documents
 * 6. Insert Documents
 * 7. Search Documents
 * 8. Edit/Update Documents
 */

// 2. Import Firebase
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

const serviceAccount = require("./credentials.json");

// 3a. Initialize the app
initializeApp({
  credential: cert(serviceAccount),
});

// 3b. Connect to the database (i.e. Firestore)
const db = getFirestore();

// 4. Access Users collection; collection reference
const usersCollection = db.collection("Users");

async function readUserDocuments() {
  // 5a. Read Documents
  const snapshot = await usersCollection.get();

  // 5b. Iterate through snapshot documents
  snapshot.forEach(function (document) {
    const documentObject = document.data();
    console.log(documentObject);
  });
}

// readUserDocuments();

// 4. Access my_shows collection; collection reference
const my_showsCollection = db.collection("my_shows");

async function readMy_showsDocuments() {
  // 5a. Read Documents
  const snapshot = await my_showsCollection.get();

  // 5b. Iterate through snapshot documents
  snapshot.forEach(function (document) {
    const documentObject = document.data();
    console.log(documentObject);
  });
}

// readMy_showsDocuments();

// 4. Access Content collection; collection reference
const contentCollection = db.collection("Content");

async function readContentDocuments() {
  // 5a. Read Documents
  const snapshot = await contentCollection.get();

  // 5b. Iterate through snapshot documents
  snapshot.forEach(function (document) {
    const documentObject = document.data();
    console.log(documentObject);
  });
}

// readContentDocuments();

// 6. Insert documents to firestore cloud.

async function registerUsers(usersObject) {
  // collection reference.
  const usersCollection = db.collection(`Users`);

  // create a document
  const newUsersDocument = usersCollection.doc();

  // set/insert the document
  await newUsersDocument.set(usersObject);

  console.log(`Users of document id: ${newUsersDocument.id}
    \nhas been added`)
}
const newUsersObject = {
  name: "Peter",
  Phone: "555666777",
  email: "peter@bocacode.com",
  isAnAdult: true,
};

// registerUsers(newUsersObject);

// step 7 search / find documents in firestore database
async function updateUsersFullName(name, inputEmail) {
  // collection ref
  const usersCollection = db.collection(`Users`)

  // finding the doc with a different email using .where .get method.
  const snapshot = await usersCollection.where('Email', '==', inputEmail).get()
  
  snapshot.forEach(function(document) {
    
    //This is the document found
    const documentReference = document.ref
    //step 8 update document
    documentReference.update({'name': name})

    console.log(`We've update document of id: ${document.id} name to : ${name}`)
  })

}
// updateUsersFullName('Jamie', 'Ahmed@thatkid.com')