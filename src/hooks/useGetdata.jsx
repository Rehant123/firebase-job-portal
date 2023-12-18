import { useEffect, useState } from "react";
import { db } from "../Config/firebase.config";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";

export default function useGetdata() {
  const [jobs, setjobs] = useState([]);

  async function getdata() {
    const q = query(collection(db, "jobs"), orderBy("postedOn", "desc"));
    const tempjobs = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const id = doc.id;
      tempjobs.push({ ...data, id: id });
    });
    setjobs(tempjobs);
  }

  async function getdatacustom({ title, location, experience, type }) {
    const q = query(
      collection(db, "jobs"),
      where("type", "==", type),
      where("location", "==", location),
      where("title", "==", title),
      where("experience", "==", experience),
      orderBy("postedOn", "desc")
    );

    const tempjobss = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const id = doc.id;
      tempjobss.push({ ...data, id: id });
    });
    setjobs(tempjobss);
  }

  useEffect(() => {
    getdata();
  }, []);

  return { jobs, getdatacustom };
}
