/* eslint-disable react/prop-types */
import React from 'react'
import { useEffect,useState } from 'react';
import "firebase/firestore";
import {db} from "../../config/firebase"
import { collection, getDoc } from 'firebase/firestore';

const MonumentDetailsCard = () => {
    const [doc,setDoc] = useState({})
    const docRef = collection(db,"monument")
    useEffect(() => {
        const fetchData = async () => {
            const data = await getDoc(docRef)
            setDoc(data);
        };
        fetchData();
      }, []);
  return (
    <div className='h-screen'>
      <div className='min-w-full h-2/5'>Images</div>
      <div className='h-3/5 space-y-2'>
        <div className='font-medium text-5xl text-center'>{"Name of Monument"}</div>
        <div className='font-medium text-2xl'>{"Description of monument"}</div>
        <div className='font-medium text-2xl'>{"Timing of monument"}</div>
        <div className='font-medium text-2xl'>{"Description of monument"}</div>
        <div className='font-medium text-2xl'>
          <div>{"Routes to reach monument"}</div>
          <div className='font-normal text-lg
          '>
          <div>{"-Route no.1"}</div>
          <div>{"-Route no.2"}</div>
          <div>{"-Route no.3"}</div>
          </div>
        </div>
        <div className='font-medium text-2xl'>{"Prices of visiting monument"}</div>
        </div>
    </div>
  )
}

export default MonumentDetailsCard