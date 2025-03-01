import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import {
  getStorage,
  ref as storageRef,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import "./regev.css";
import Navbar from "./nav";
import Eventreg from "./eventreg";
import { Link } from "react-router-dom";
import Footer from "./footer";
import { firebaseConfig } from "../firebase";

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);


const EventDescription = () => {
  const [images, setImages] = useState([]);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const event =localStorage.getItem("Event");
  const imagesRef = storageRef(storage, "Event/"+event+"/");
  var menuItems=JSON.parse(localStorage.getItem(event));

  useEffect(() => {
    const menuRef = ref(database, "Event/"+event);
    onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      if (data&&menuItems===null) {
        localStorage.setItem(event,JSON.stringify(data));
      }
    });
  }, []);

  useEffect(() => {
    listAll(imagesRef)
      .then((res) => {
        const imagePromises = res.items.map((item) => getDownloadURL(item));
        Promise.all(imagePromises)
          .then((urls) => {
            setImages(urls);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const currentPath = window.location.pathname;
  const imageUrl = images[0];
  if (currentPath === "/register") {
    return <Eventreg />;
  } else {
    return (      
      <div className="bg-gradient-to-r from-purple-200 to-purple-100">
        {menuItems && (
          <div>
          <Navbar />
          <div className="main-container">
            <div className="event-container">
             
                  <div  className="event-item">
                    <div className="image-container">
                      {imageUrl && (
                        <img
                          src={imageUrl}
                          className="event-image hovv "
                        />
                      )}
                    </div>
                    <div className="event-details">
                      <h2 className="event-title main-titless">
                        {menuItems.itemName}
                      </h2>
                      <div className="event-fields">
                        {menuItems.field1 && (
                          <p className="fs-6 mb-5">
                            <span className="main-titles fs-2">About Event</span>
                            <br />
                            {menuItems.field1}
                          </p>
                        )}
                        {menuItems.price && (
                          <p className="fs-2 mb-5">
                            <span className="main-titles fs-2">Fees</span>
                            <br />
                            {menuItems.price}
                          </p>
                        )}
                        {menuItems.field2 && (
                          <p className="fs-6 mb-5">
                            <span className="main-titles fs-2">Discounts</span>
                            <br />
                            {menuItems.field2}
                          </p>
                        )}
                        {menuItems.field3 && (
                          <p className="fs-6 mb-5">
                            <span className="main-titles fs-2">Rules</span>
                            <br />
                            {menuItems.field3}
                          </p>
                        )}
                        {menuItems.field4 && (
                          <p className="fs-6 mb-5">
                            <span className="main-titles fs-2">
                              Mandatory Accessories
                            </span>
                            <br />
                            {menuItems.field4}
                          </p>
                        )}
                        {menuItems.field5 && (
                          <p className="fs-6 mb-5">
                            <span className="main-titles fs-2">Others</span>
                            <br />
                            {menuItems.field5}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                {/* ); */}
              {/* })} */}
              <a href="./register" className="event-button rounded-xl ">
                Register Now!!
              </a>
            </div>
          </div>
          <Footer />
          </div>
          )}
      </div>    
    );
  }
};

export default EventDescription;