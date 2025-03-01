import React, { useState, useEffect } from "react";
import "./signin.scss";
import logo from "../logo1.png";
import Footer from "./footer";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { ref, push, child, update, onValue } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./nav";
import styles from "./signin.module.scss";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import {app as firebaseApp} from "../firebase";
import Tilt from "react-parallax-tilt";
import { Helmet } from "react-helmet";

const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);


function UserProfile() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [age, setAge] = useState(null);
  const [phone, setPhone] = useState(null);
  const [city, setCity] = useState(null);
  const [weight, setWeight] = useState(null);
  const [state, setState] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  function validate() {
    if (!firstName || !/^[A-Za-z -]{3,25}$/.test(firstName.trim())) {
      alert("Invalid First Name");
      return false;
    }
    if (!lastName || !/^[A-Za-z -]{3,25}$/.test(lastName.trim())) {
      alert("Invalid Last Name");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Invalid email address");
      return false;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Invalid phone number");
      return false;
    }

    if (!weight || !/^\d{2,3}$/.test(weight)) {
      alert("Invalid Weight");
      return false;
    }

    if (!age || !/^\d{1,3}$/.test(age)) {
      alert("Invalid age");
      return false;
    }

    if (!state || !/^[A-Za-z -]{3,25}$/.test(state.trim())) {
      alert("Invalid state");
      return false;
    }

    if (!city || !/^[A-Za-z -]{3,25}$/.test(city.trim())) {
      alert("Invalid city");
      return false;
    }

    return true;
  }

  
  useEffect(() => {
    const authUID = localStorage.getItem("authUID");
    if (authUID) {
      const cachedProfileData = localStorage.getItem(`profileData_${authUID}`);
      if (cachedProfileData) {
        const parsedData = JSON.parse(cachedProfileData);
        setFirstName(parsedData["FirstName"]);
        setLastName(parsedData["LastName"]);
        setAge(parsedData["Age"]);
        setEmail(parsedData["Email"]);
        setPhone(parsedData["Phone"]);
        setCity(parsedData["City"]);
        setState(parsedData["State"]);
        setWeight(parsedData["Weight"]);
        retrieveImageURL();
      } else {
        const userRef = ref(database, "users/" + authUID);
        onValue(userRef, (snapshot) => {
          const userData = snapshot.val();
          if (userData != null) {
            setFirstName(userData["FirstName"]);
            setLastName(userData["LastName"]);
            setAge(userData["Age"]);
            setEmail(userData["Email"]);
            setPhone(userData["Phone"]);
            setCity(userData["City"]);
            setState(userData["State"]);
            setWeight(userData["Weight"]);
            retrieveImageURL();
            
            const cachedData = JSON.stringify(userData);
            localStorage.setItem(`profileData_${authUID}`, cachedData);
          }
        });
      }
    }
  }, []);

  useEffect(() => {
    const authUID = localStorage.getItem("authUID");
    if (authUID) {
      const userRef = ref(database, "users/" + authUID);

      onValue(userRef, (snapshot) => {
        const userData = snapshot.val();
        if (userData != null) {
          setFirstName(userData["FirstName"]);
          setLastName(userData["LastName"]);
          setAge(userData["Age"]);
          setEmail(userData["Email"]);
          setPhone(userData["Phone"]);
          setCity(userData["City"]);
          setState(userData["State"]);
          setWeight(userData["Weight"]);
          retrieveImageURL();
        }
      });
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("authUID") === "") {
      window.location.replace("/App");
    }
  }, []);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleCancel = () => {
    setIsEditMode(false);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "age") {
      setAge(value);
    }
    if (id === "phone") {
      setPhone(value);
    }
    if (id === "weight") {
      setWeight(value);
    }
    if (id === "city") {
      setCity(value);
    }
    if (id === "state") {
      setState(value);
    }
  };

  const handleSubmit = () => {
    if (validate()) {
      let obj = {
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Phone: phone,
        Age: age,
        Weight: weight,
        City: city,
        State: state,
      };

      const newUserId = localStorage.getItem("authUID");

      const updates = {};
      updates["/users/" + newUserId] = obj;
      update(ref(database), updates);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
      }, 2500);
      setIsEditMode(false);
    }
  };

  const handleImageUpload = async (file) => {
    setIsUploading(true); 

    const storagePath = `profile_images/${localStorage.getItem("authUID")}`;
    const imageRef = storageRef(storage, storagePath);

    try {
      await uploadBytes(imageRef, file);
      setImageUploaded(true);
      retrieveImageURL();
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false); 
    }
  };

  const retrieveImageURL = async () => {
    const storagePath = `profile_images/${localStorage.getItem("authUID")}`;
    const imageRef = storageRef(storage, storagePath);

    try {
      const downloadURL = await getDownloadURL(imageRef);
      setProfileImage(downloadURL);
    } catch (error) {
      console.error("Error retrieving image URL:", error);
    }
  };

  return (
    <>
    <Helmet>
          <title>Tri2champ</title>
          <link rel="icon" type="image/png" href="logo.png" />
        </Helmet>
      <Navbar />
      <div >
        <div
          style={{ background: "linear-gradient(to left, #a492ff, #7237e7)" }}
        >
          <div className="user-registration ">
            <div className="container register">
              <div className="row ">
                <div className="col-md-10 register-right mx-auto d-block">
                  <div className="tab-content" id="myTabContent">
                    <div className="register-heading pb-3 ">
                      <h3 className="pb-4">User Profile</h3>
                      <div className="col-md-6  mx-auto d-block">
                        <div className="profile-image-container border-2 border-blue-500">
                          {isUploading ? (
                            <div className="loading-spinner"></div>
                          ) : profileImage ? (
                            <Tilt>
                            <img
                              src={profileImage}
                              alt="Profile"
                              className="profile-image "
                            />
                            </Tilt>
                          ) : (
                            <div className="no-profile-image ">
                              No Profile Image
                            </div>
                          )}
                          
                        </div>
                        
                        {isEditMode && !isUploading && (
                            <label className="upload-button  rounded pt-3 text-red-50">
                              Upload / Change Image
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                  handleImageUpload(e.target.files[0])
                                }
                              />
                            </label>
                          )}
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id="home"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="row register-form">
                        <div className="col-md-6">
                          <div className="form-group">
                            {isEditMode ? (
                              <input
                                type="text"
                                className="form-control rounded-lg mt-3"
                                placeholder="First Name"
                                value={firstName}
                                id="firstName"
                                onChange={handleChange}
                              />
                            ) : (
                              <p className="text-gradient">
                                First Name:{" "}
                                <span className="text-gradientt">
                                  {firstName}
                                </span>
                              </p>
                            )}
                          </div>
                          <div className="form-group">
                            {isEditMode ? (
                              <input
                                type="text"
                                className="form-control rounded-lg mt-3"
                                placeholder="Last Name"
                                value={lastName}
                                id="lastName"
                                onChange={handleChange}
                              />
                            ) : (
                              <p className="text-gradient">
                                Last Name:{" "}
                                <span className="text-gradientt">
                                  {lastName}
                                </span>
                              </p>
                            )}
                          </div>
                          <div className="form-group">
                            {isEditMode ? (
                              <input
                                type="number"
                                className="form-control rounded-lg mt-3"
                                placeholder="Age"
                                value={age}
                                id="age"
                                onChange={handleChange}
                              />
                            ) : (
                              <p className="text-gradient">
                                Age:{" "}
                                <span className="text-gradientt">{age}</span>
                              </p>
                            )}
                          </div>
                          <div className="form-group">
                            {isEditMode ? (
                              <input
                                type="text"
                                className="form-control rounded-lg mt-3"
                                placeholder="State"
                                value={state}
                                id="state"
                                onChange={handleChange}
                              />
                            ) : (
                              <p className="text-gradient">
                                State:{" "}
                                <span className="text-gradientt">{state}</span>
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            {isEditMode ? (
                              <input
                                type="email"
                                className="form-control rounded-lg mt-3"
                                placeholder="Email"
                                value={email}
                                id="email"
                                onChange={handleChange}
                              />
                            ) : (
                              <p className="text-gradient">
                                Email:{" "}
                                <span className="text-gradientt">{email}</span>
                              </p>
                            )}
                          </div>
                          <div className="form-group">
                            {isEditMode ? (
                              <input
                                type="text"
                                minLength="10"
                                maxLength="10"
                                className="form-control rounded-lg mt-3"
                                placeholder="Phone"
                                id="phone"
                                onChange={handleChange}
                                value={phone}
                              />
                            ) : (
                              <p className="text-gradient">
                                Phone:{" "}
                                <span className="text-gradientt">{phone}</span>
                              </p>
                            )}
                          </div>
                          <div className="form-group">
                            {isEditMode ? (
                              <input
                                type="text"
                                className="form-control rounded-lg mt-3"
                                placeholder="Weight"
                                value={weight}
                                id="weight"
                                onChange={handleChange}
                              />
                            ) : (
                              <p className="text-gradient">
                                Weight:
                                <span className="text-gradientt">
                                  {" "}
                                  {weight}
                                </span>
                              </p>
                            )}
                          </div>
                          <div className="form-group">
                            {isEditMode ? (
                              <input
                                type="text"
                                className="form-control rounded-lg mt-3"
                                placeholder="City"
                                value={city}
                                id="city"
                                onChange={handleChange}
                              />
                            ) : (
                              <p className="text-gradient">
                                City:{" "}
                                <span className="text-gradientt">{city}</span>
                              </p>
                            )}
                          </div>

                          {isEditMode ? (
                            <button
                              className="btnRegister bg-emerald-500"
                              onClick={handleSubmit}
                            >
                              Save
                            </button>
                          ) : (
                            <button
                              className="btnRegister bg-emerald-500"
                              onClick={toggleEditMode}
                            >
                              Edit
                            </button>
                          )}
                          {formSubmitted && (
                            <div
                              style={{ fontSize: "2.5vh" }}
                              className="success-message rounded-pill"
                            >
                              Profile Updated Successfully!
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
