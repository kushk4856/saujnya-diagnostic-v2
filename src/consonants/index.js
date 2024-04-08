import { heart, kidney, liver, lungs, thyroid, vitamin } from "../assets";

const cta = [
  { type: "email", content: "saujnyadiagnostic@gmail.com" },
  { type: "phone", content: 989898989 },
  { type: "whatsaap", content: 89898988989 },
];

const testCard = [
  {
    testName: "Covid severty profile",
    parameters: "28",
    tests: ["CBC", "LFT", "KFT", "FSH"],
    price: 200,
    details: {
      heading: "title",
      para: "The ABO blood group test is a test used to determine an individual's blood type. It is the most common way of categorizing different types of blood and is determined by the presence of two different antigens, A and B, on the surface of red blood cells. The test is used to match blood for transfusions and for other medical purposes, such as determining paternity. There are four different ABO blood types: A, B, AB, and O. Additionally, there is a fifth type, known as Rh type, which is determined by the presence of an additional antigen, the Rh factor.",
    },
    id: "Covid severty profile",
  },
  {
    testName: "Obesity Pannel",
    parameters: "9 ",
    tests: ["CBC", "LFT", "KFT", "Blood Sugar"],
    price: 900,
    details: {
      heading: "title",
      para: "The ABO blood group test is a test used to determine an individual's blood type. It is the most common way of categorizing different types of blood and is determined by the presence of two different antigens, A and B, on the surface of red blood cells. The test is used to match blood for transfusions and for other medical purposes, such as determining paternity. There are four different ABO blood types: A, B, AB, and O. Additionally, there is a fifth type, known as Rh type, which is determined by the presence of an additional antigen, the Rh factor.",
    },
    id: "Obesity Pannel",
  },
  {
    testName: "Fever Panel",
    parameters: "30 ",
    tests: ["CBC", "LFT", "KFT", "PRL"],
    price: 300,
    details: {
      heading: "title",
      para: "The ABO blood group test is a test used to determine an individual's blood type. It is the most common way of categorizing different types of blood and is determined by the presence of two different antigens, A and B, on the surface of red blood cells. The test is used to match blood for transfusions and for other medical purposes, such as determining paternity. There are four different ABO blood types: A, B, AB, and O. Additionally, there is a fifth type, known as Rh type, which is determined by the presence of an additional antigen, the Rh factor.",
    },
    id: "Fever Panel",
  },
  {
    testName: "Infection profile",
    parameters: "7 ",
    tests: ["CBC", "LFT", "KFT", "Folic Acid"],
    price: 900,
    details: {
      heading: "title",
      para: "The ABO blood group test is a test used to determine an individual's blood type. It is the most common way of categorizing different types of blood and is determined by the presence of two different antigens, A and B, on the surface of red blood cells. The test is used to match blood for transfusions and for other medical purposes, such as determining paternity. There are four different ABO blood types: A, B, AB, and O. Additionally, there is a fifth type, known as Rh type, which is determined by the presence of an additional antigen, the Rh factor.",
    },
    id: "Infection profile",
  },
  {
    testName: "Infertility Female profile",
    parameters: "15 ",
    tests: ["CBC", "Iron", "KFT", "HBA1c"],
    price: 999,
    details: {
      heading: "title",
      para: "The ABO blood group test is a test used to determine an individual's blood type. It is the most common way of categorizing different types of blood and is determined by the presence of two different antigens, A and B, on the surface of red blood cells. The test is used to match blood for transfusions and for other medical purposes, such as determining paternity. There are four different ABO blood types: A, B, AB, and O. Additionally, there is a fifth type, known as Rh type, which is determined by the presence of an additional antigen, the Rh factor.",
    },
    id: "Infertility Female profile",
  },
  {
    testName: "Anemia profile",
    parameters: "20 ",
    tests: ["CBC", "LFT", "Thyroid Profile", "KFT"],
    price: 599,
    details: {
      heading: "title",
      para: "The ABO blood group test is a test used to determine an individual's blood type. It is the most common way of categorizing different types of blood and is determined by the presence of two different antigens, A and B, on the surface of red blood cells. The test is used to match blood for transfusions and for other medical purposes, such as determining paternity. There are four different ABO blood types: A, B, AB, and O. Additionally, there is a fifth type, known as Rh type, which is determined by the presence of an additional antigen, the Rh factor.",
    },
    id: "Anemia profile",
  },
];

const reviews = [
  {
    content:
      "I took thyroid test service from CNC Pathlab. The service offered was exceptional. The sample collection was neat and in accordance to COVID guidelines. I received my reports through mail and SMS on time.",
    name: "Pareeneeta Verma",
    img: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600",
    patient: "CBC",
    stars: 5,
  },
  {
    content:
      "I took thyroid test service from CNC Pathlab. The service offered was exceptional. The sample collection was neat and in accordance to COVID guidelines. I received my reports through mail and SMS on time.",
    name: "kush",
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    patient: "RT-PCR",
    stars: 5,
  },

  {
    content:
      "I took thyroid test service from CNC Pathlab. The service offered was exceptional. The sample collection was neat and in accordance to COVID guidelines. I received my reports through mail and SMS on time.",
    name: "Khushboo Gupta",
    img: "https://images.pexels.com/photos/20620152/pexels-photo-20620152/free-photo-of-portrait-of-brunette.jpeg?auto=compress&cs=tinysrgb&w=600",
    patient: "Thyroid",
    stars: 5,
  },
  {
    content:
      "I took thyroid test service from CNC Pathlab. The service offered was exceptional. The sample collection was neat and in accordance to COVID guidelines. I received my reports through mail and SMS on time.",
    name: "karan Singh",
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    patient: "Cancer",
    stars: 5,
  },
  {
    content:
      "I took thyroid test service from CNC Pathlab. The service offered was exceptional. The sample collection was neat and in accordance to COVID guidelines. I received my reports through mail and SMS on time.",
    name: "Navya Singh",
    img: "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=600",
    patient: "Diabeties",
    stars: 5,
  },
];

const category = [
  { icon: heart, name: "Heart" },
  { icon: liver, name: "Liver" },
  { icon: kidney, name: "Kidney" },
  { icon: thyroid, name: "Thyroid" },
  { icon: lungs, name: "Lungs" },
  { icon: vitamin, name: "Vitamin" },
];

const progressBarData = [
  {
    percent: 65,
    circle: "circle1",
    time: 20,
    itag: "bi bi-hand-thumbs-up",
    type: "Client Satisfaction",
  },
  {
    percent: 85,
    circle: "circle2",
    time: 15,
    itag: "bi bi-emoji-smile",
    type: "Intervention Success",
  },
  {
    percent: 75,
    circle: "circle3",
    time: 20,
    // itag: "bi bi-heart-pulse",
    itag: "ri-file-list-2-line",
    type: "Accurate Report",
  },
  {
    percent: 95,
    circle: "circle3",
    time: 13,
    itag: "bi bi-people",
    type: "Happy with Staff",
  },
];

export { cta, testCard, category, progressBarData, reviews };
