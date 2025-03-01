


import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import "./event.css";
import Navbar from "./nav";
import { Link } from "react-router-dom";
import Footer from "../footer";
import {app as firebaseApp} from "../firebase";
import { firebaseConfig } from "../firebase";
import { Helmet } from "react-helmet";


const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);
const imagesRef = storageRef(storage, "event");

const EventItem = ({ item, imageUrl, handleView }) => (
  <div
    className="menu-items card mx-auto d-block col-5 mt-10 mb-4 rounded-xl bg-zinc-950 text-zinc-50"
    style={{ fontWeight: "500", fontSize: "2.3vh",border:"orange solid" }}
  >
    <h1
      className="menu-title text-zinc-50 pt-2"
      style={{
        textAlign: "center",
        color:'white',
        fontWeight: "600",
      }}
    >
      {item}
    </h1>
    {imageUrl && (
      <div>
        <img
          src={imageUrl}
          className="hhov  mx-auto d-block eventpic m-4 "
          style={{ width: "90%" }}
        />
      </div>
    )}
    <a href="#" onClick={() => handleView(item)}>
      <button disabled className="bg-emerald-600 lg:w-50 xl:w-50 2xl:w-50 w-60 mx-auto d-block mb-5 event-button text-zinc-50 mt-0 hover:text-zinc-50 border-2 border-zinc-50 hover:border-indigo-50 rounded-xl hover:bg-emerald-800 col-12">
        {/* View Event!! */}
        Registration Opening Soon
      </button>
    </a>
  </div>
);

const UserEvent = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const menuRef = ref(database, "Event/List/");
    onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const menuData = Object.values(data);
        setMenuItems(menuData);
      }
    });
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      const imagePromises = [];
      for (const item of menuItems) {
        const itemImagesRef = storageRef(storage, `Event/${item}/img1.jpg`);
        const imageUrl = await getDownloadURL(itemImagesRef);
        imagePromises.push(imageUrl);
      }
      Promise.all(imagePromises)
        .then((urls) => {
          setImages(urls);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    if (menuItems.length > 0) {
      fetchImages();
    }
  }, [menuItems]);

  const handleView = (eventName) => {
    localStorage.setItem("Event",eventName);
    window.location.replace("./EventDescription");
  };

  const renderMenuItems = () => {
    return menuItems.map((item, index) => {
      const imageUrl = images.find((url, i) => i === index);

      return (
        <EventItem
          item={item}
          imageUrl={imageUrl}
          handleView={handleView}
        />
      );
    });
  };

  return (
    <div className="bg-gradient-to-r mx-auto d-block from-purple-200 to-purple-100">
      <Helmet>
          <title>Tri2champ</title>
          <link rel="icon" type="image/png" href="logo.png" />
        </Helmet>
      <Navbar />
      <div
        style={{
          paddingLeft: "10%",
          paddingRight: "10%",
          justifyContent: "center",
          textAlign: "justify",
        }}
      >
        <div className="menu-items pb-20 mx-auto d-block">{renderMenuItems()}</div>
      </div>
      <Footer />
    </div>
  );
};

export default UserEvent;