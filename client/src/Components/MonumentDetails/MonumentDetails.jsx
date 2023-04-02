import { IdealBankElement } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MonumentContext } from "../../App";
import MonumentDetailsCard from "./MonumentDetailsCard";
import { doc, collection, query, getDoc, where } from "@firebase/firestore";
import { db } from "../../config/firebase";

// eslint-disable-next-line react/prop-types
const MonumentDetails = () => {
  const { monumentList, setMonumentList } = useContext(MonumentContext);
  let { id } = useParams();
  const [docData, setdocData] = useState("");

  useEffect(() => {
    const docRef = doc(db, "monument", id);
    getDoc(docRef).then((docSnap)=>
    docSnap.data()).then((data)=>{if (data) {
      console.log("Document data:", data);
      setdocData(() => data);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }})
    
  }, [id]);

  return (
    <div className="flex">
      {docData && (
        <div className="w-4/5 min-h-screen max-h-screen border-r border-black">
          <MonumentDetailsCard
            id={docData.id}
            Description={docData.Description}
            Coordinates={docData.Coordinates}
            Image={docData.Image}
            Name={docData.Name}
            Price={docData.Price}
            Time={docData.Time}
            Route={docData.Route}
          />
        </div>
      )}
    </div>
  );
};

export default MonumentDetails;
