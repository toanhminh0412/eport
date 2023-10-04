// Next imports
import { NextResponse } from 'next/server';

// Local imports
import { db } from '../../../../../public/libs/firebase';

// Firebase imports
import { getDocs, collection, setDoc, doc } from "firebase/firestore";

export async function GET(request) {
    // Copy a collection in Firestore
    const copyCollection = async (sourceName, destinationName) => {
        const sourceQuerySnapshot = await getDocs(collection(db, sourceName));
        for (let i = 0; i < sourceQuerySnapshot.docs.length; i++) {
            const siteDoc = sourceQuerySnapshot.docs[i];
            await setDoc(doc(db, destinationName, siteDoc.id), siteDoc.data());
        }
    }

    // Attach e-resumes to owners' profiles
    const attachEresumesToOwners = async() => {
        const sourceQuerySnapshot = await getDocs(collection(db, "eresume"));
        for (let i = 0; i < sourceQuerySnapshot.docs.length; i++) {
            const siteDoc = sourceQuerySnapshot.docs[i];
            const siteData = siteDoc.data();
            const owner = siteData.owner;
            await setDoc(doc(db, "users", owner), { projects: ["eresume", siteDoc.id] }, {merge: true});
        }
    }

    const migrate = async() => {
        // await copyCollection('sites', 'eresume');
        // await attachEresumesToOwners();
    }

    // await migrate();
    

    return NextResponse.json({
        status: 200,
        message: 'Copy collection successfully'
    })
}