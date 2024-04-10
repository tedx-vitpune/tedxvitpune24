// Layout.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <title>TEDxVITPune</title>
        <meta
          name="description"
          content="TEDxVITPune is a 8 year old organization working towards 'Ideas worth Spreading' via powerful talks and prodigious experience. Register Now!"
        />
        <meta
          name="keywords"
          content="TEDx, tedx, tedxvitpune, TEDxVITPune, Fragments, theme, tedxpune, TED, VIT, Vishwakarma, VIT, 2023, CountDown"
        />
        <meta name="author" content="TEDxVITPune" />
        <meta name="robots" content="index, follow" />
        <meta name="title" content="TEDxVITPune" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tedxvitpune.org" />
        <meta property="og:title" content="TEDxVITPune" />
        <meta
          property="og:description"
          content="TEDxVITPune is a 8 year old organization working towards 'Ideas worth Spreading' via powerful talks and prodigious experience. Register Now!"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1651508171/Website%20Content/author_trfcgd.png"
        />
        <meta property="og:image:width" content="120" />
        <meta property="og:image:height" content="120" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tedxvitpune.org" />
        <meta property="twitter:title" content="TEDxVITPune" />
        <meta
          property="twitter:description"
          content="TEDxVITPune is a 8 year old organization working towards 'Ideas worth Spreading' via powerful talks and prodigious experience. Register Now!"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dfgz4hsg0/image/upload/v1650021429/Website%20Content/Header/logo_dark_v8hfiy.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <main className="bg-mainbg">{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
}