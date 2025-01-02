import React from 'react';
import "./Classes.css";
// Data Structure: List of classes
const classesData = [
  {
    name: "Yakshagana",
    teacher: {
      name: "Ganapathi Bhat",
      photo: "/images/ganapathibhat.jpg"
    },
    day: "Saturday & Sunday",
    time: "10:00 PM - 1:00 PM",
    totalHours: 3,
    fees: "INR 2000/month",
    rating: 4.8,
  },
  {
    name: "Bharatanatyam",
    teacher: {
      name: "Sudhana sankar",
      photo: "/images/sudhanasankar.jpg"
    },
    day: "Saturday & Sunday",
    time: "1:30 PM - 4:30 PM",
    totalHours: 3,
    fees: "INR 2000/month",
    rating: 4.8, 

  },
  {
    name: "Kathak",
    teacher: {
      name: "Anchita Singh",
      photo: "/images/anchitasingh.jpeg"
    },
    day: "Saturday & Sunday",
    time: "5:00 PM - 8:00 PM",
    totalHours: 3,
    fees: "INR 2000/month",
    rating: 4.5,
  },
  {
    name: "Odissi",
    teacher: {
      name: "Sonal Mansingh",
      photo: "/images/sonalmansingh.jpeg"
    },
    day: "Saturday & Sunday",
    time: "10:00 PM - 1:00 PM",
    totalHours: 3,
    fees: "INR 2000/month",
    rating: 4.7,
  },
  {
    name: "Mohiniyattam",
    teacher: {
      name: "Sunandha Nair",
      photo:"/images/sunandhanair.jpg"
    },
    day: "Saturday & Sunday",
    time: "1:30 PM - 4:30 PM",
    totalHours:3,
    fees:"INR 2000/month",
    rating: 4.6,
  },
  {
    name: "Tap Dance",
    teacher: {
      name:"Chloe Arnold",
      photo:  "/images/chloearnold.webp"
    },
    day: "Saturday & Sunday",
    time: "5:00 PM - 8:00 PM",
    totalHours: 3,
    fees: "INR 2000/month",
    rating: 4.4,
  },
  {
    name: "Hip-Hop",
    teacher: {
      name: "Fik-Shun",
      photo: "/images/fikshun.jpg"
    },
    day: "Monday - Friday",
    time: "5:00 PM - 6:00 PM",
    totalHours: 1,
    fees: "INR 2000/month",
    rating: 4.7,
  },
  {
    name: "Bollywood",
    teacher: {
      name: "Terrence Lewis",
      photo: "/images/terrencelewis.jpg"
    },
    day: "Monday - Friday",
    time: "6:00 PM - 7:00 PM",
    totalHours: 1,
    fees: "INR 2000/month",
    rating: 4.7,
  },
  {
    name: "Contemporary",
    teacher: {
      name: "AJ Pritchard",
      photo: "/images/ajpritchard.jpg"
    },
    day: "Monday - Friday",
    time: "5:00 PM - 6:00 PM",
    totalHours: 1,
    fees: "INR 2000/month",
    rating: 4.7,
  },
  {
    name: "Salsa",
    teacher: {
      name: "Oliver Pineda",
      photo: "/images/oliverpineda.jpg"
    },
    day: "Monday - Friday",
    time: "6:00 PM - 7:00 PM",
    totalHours: 1,
    fees: "INR 2000/month",
    rating: 4.7,
  },

];

const ClassCard = ({ classItem }) => {
  return (
    <div className="class-card" >
      <div className="class-card-content">
        <h2>{classItem.name}</h2>
        <div className="teacher-details">
          <img src={classItem.teacher.photo} alt={classItem.teacher.name} className="teacher-img" />
          <p><strong>Instructor:</strong> {classItem.teacher.name}</p>
        </div>
        <p><strong>Day:</strong> {classItem.day}</p>
        <p><strong>Time:</strong> {classItem.time}</p>
        <p><strong>Hours:</strong> {classItem.totalHours}</p>
        <p><strong>Fees:</strong> {classItem.fees}</p>
        <p><strong>Rating:</strong> {classItem.rating} ⭐</p>
      </div>
    </div>
  );
};

const ClassesPage = () => {
  return (
    <div className="classes-container">
      {classesData.map((classItem, index) => (
        <ClassCard key={index} classItem={classItem} />
      ))}
    </div>
  );
};

export default ClassesPage;
