/* eslint-disable react/prop-types */
import React from 'react'
import { useEffect,useState } from 'react';
import "firebase/firestore";
import {db} from "../../config/firebase"
import { collection, getDoc } from 'firebase/firestore';

const MonumentDetailsCard = ({id, Description, Coordinates, Image, Name, Price, Time, Route}) => {
    // const [doc,setDoc] = useState({})
    // const docRef = collection(db,"monument")
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await getDoc(docRef)
    //         setDoc(data);
    //     };
    //     fetchData();
    //   }, []);
  return (
    <div className='h-screen space-x-2'>
      <div className='min-w-full h-2/5'>Images</div>
      <div className='h-3/5 space-y-2'>
        <div className='font-medium text-5xl text-center'>Name: {Name}</div>
        <div className='font-medium text-2xl'>Description of monument: {Description}</div>
        <div className='font-medium text-2xl'>Timing of monument: {Time}</div>
        <div className='font-medium text-2xl'>
          <div>Routes to reach monument: {Route}</div>
        </div>
        <div className='font-medium text-2xl'>Prices of visiting monument: {Price}</div>
        </div>
    </div>
  )
}

export default MonumentDetailsCard