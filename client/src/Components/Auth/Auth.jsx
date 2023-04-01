import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { Button, Stack, TextField } from "@mui/material";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth?.currentUser?.email);

  const signUp = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const signInWIthGoogle = async (event) => {
    event.preventDefault();
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  // const logout = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await signOut(auth);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <React.Fragment>
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
        component={"form"}
      >
        <form onSubmit={isSignIn ? signIn : signUp} className="flex flex-col justify-items-center">
          <TextField
            placeholder="Email"
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            placeholder="Password"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type={"submit"} className="bg-slate-800">
            {`Sign ${isSignIn ? "In" : "Up"}`}
          </Button>
        </form>
        <Button onClick={signInWIthGoogle}>{`Sign ${
          isSignIn ? "In" : "Up"
        } With Google`}</Button>
        {/* <Button onClick={logout}>Logout</Button> */}
      </Stack>
    </React.Fragment>
  );
};

export default Auth;
