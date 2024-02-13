import "./App.scss";
import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Our from "./Components/Our/Our";
import Quality from "./Components/Quality/Quality";
import Head from "./Components/Head/Head";
import Footer from "./Components/Footer/Footer";

export default function App() {
  const [lang, setlang] = React.useState('ar')
  return (
    <>
      <Header lang={lang} setLang={setlang}/>
      <Hero lang={lang}/>
      <Our lang={lang}/>
      <Quality lang={lang}/>
      <Head lang={lang}/>
      <Footer lang={lang}/>
    </>
  );
}
