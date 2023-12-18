import { db } from "../Config/firebase.config";

import {addDoc,collection} from "firebase/firestore"

export default function useADData(){

    async function addtransaction(id, postedOn, title, company, type, location, experience, skills, job_link
        ){
        let reference = collection(db,"jobs");
        
        await addDoc(reference,{
            id, postedOn, title, company, type, location, experience, skills, job_link
        })
    }
    return {addtransaction};
}