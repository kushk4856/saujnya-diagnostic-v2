import {
  AllergyComprehensive,
  ancadvance,
  heart,
  kidney,
  liver,
  lungs,
  obesityPanel,
  stdAdvanced,
  stdBasic,
  thyroid,
  vitamin,
  vitaminScreening,
} from "../assets";

const cta = [
  { type: "email", content: "saujnyadiagnostic@gmail.com" },
  { type: "phone", content: 989898989 },
  { type: "whatsaap", content: 89898988989 },
];

const testCard = [
  {
    testName: "ANC Profile Advanced",
    parameters: "28",
    tests: ["CBC", "LFT", "KFT", "FSH"],
    price: 200,
    image: `${ancadvance}`,
    details: {
      heading: "title",
      para: "The ABO blood group test is a test used to determine an individual's blood type. It is the most common way of categorizing different types of blood and is determined by the presence of two different antigens, A and B, on the surface of red blood cells. The test is used to match blood for transfusions and for other medical purposes, such as determining paternity. There are four different ABO blood types: A, B, AB, and O. Additionally, there is a fifth type, known as Rh type, which is determined by the presence of an additional antigen, the Rh factor.",
    },
    id: "ANC Profile Advanced",
    category: "ANC Profile",
  },
  {
    testName: "STD Basic",
    parameters: "15 ",
    tests: ["CBC", "Iron", "KFT", "HBA1c"],
    price: 999,
    image: `${stdBasic}`,
    details: {
      heading: "title",
      para: "The ABO blood group test is a test used to determine an individual's blood type. It is the most common way of categorizing different types of blood and is determined by the presence of two different antigens, A and B, on the surface of red blood cells. The test is used to match blood for transfusions and for other medical purposes, such as determining paternity. There are four different ABO blood types: A, B, AB, and O. Additionally, there is a fifth type, known as Rh type, which is determined by the presence of an additional antigen, the Rh factor.",
    },
    id: "STD Basic",
    category: "STD Tests",
  },

  {
    testName: "Allergy Profile",
    parameters: "30 ",
    tests: ["CBC", "LFT", "KFT", "PRL"],
    price: 300,
    image: `${AllergyComprehensive}`,
    details: {
      heading: "title",
      para: "The ABO blood group test is a test used to determine an individual's blood type. It is the most common way of categorizing different types of blood and is determined by the presence of two different antigens, A and B, on the surface of red blood cells. The test is used to match blood for transfusions and for other medical purposes, such as determining paternity. There are four different ABO blood types: A, B, AB, and O. Additionally, there is a fifth type, known as Rh type, which is determined by the presence of an additional antigen, the Rh factor.",
    },
    id: "Allergy Profile",
    category: "Infection Profile",
  },
  {
    testName: "Obesity Pannel",
    parameters: "9 ",
    tests: ["CBC", "LFT", "KFT", "Blood Sugar"],
    price: 900,
    image: `${obesityPanel}`,
    details: {
      heading: "title",
      para: "The ABO blood group test is a test used to determine an individual's blood type. It is the most common way of categorizing different types of blood and is determined by the presence of two different antigens, A and B, on the surface of red blood cells. The test is used to match blood for transfusions and for other medical purposes, such as determining paternity. There are four different ABO blood types: A, B, AB, and O. Additionally, there is a fifth type, known as Rh type, which is determined by the presence of an additional antigen, the Rh factor.",
    },
    id: "Obesity Pannel",
    category: "ANC Profile",
  },
  {
    testName: "STD Advanced",
    parameters: "7 ",
    tests: ["CBC", "LFT", "KFT", "Folic Acid"],
    price: 900,
    image: `${stdAdvanced}`,
    details: {
      heading: "title",
      para: "The ABO blood group test is a test used to determine an individual's blood type. It is the most common way of categorizing different types of blood and is determined by the presence of two different antigens, A and B, on the surface of red blood cells. The test is used to match blood for transfusions and for other medical purposes, such as determining paternity. There are four different ABO blood types: A, B, AB, and O. Additionally, there is a fifth type, known as Rh type, which is determined by the presence of an additional antigen, the Rh factor.",
    },
    id: "STD Advanced",
    category: "STD Tests",
  },

  {
    testName: "Vitamin Screening",
    parameters: "20 ",
    tests: ["CBC", "LFT", "Thyroid Profile", "KFT"],
    price: 599,
    image: `${vitaminScreening}`,
    details: {
      heading: "title",
      para: "The ABO blood group test is a test used to determine an individual's blood type. It is the most common way of categorizing different types of blood and is determined by the presence of two different antigens, A and B, on the surface of red blood cells. The test is used to match blood for transfusions and for other medical purposes, such as determining paternity. There are four different ABO blood types: A, B, AB, and O. Additionally, there is a fifth type, known as Rh type, which is determined by the presence of an additional antigen, the Rh factor.",
    },
    id: "Vitamin Screening",
    category: "Vitamin Test",
  },
];

const blogCard = [
  {
    id: "blog1",
    bannerImg:
      "https://saujnyadiagnostic.com/images/Full%20Body%20Checkup%20[Standard].webp",
    title: "Full Body Checkup Package Blog",
    para1:
      "Our Garden are designed and maintained to the highest standards, with state-of-the-art equipment. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, The Extremes sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
    qote: "If you’re looking for a rewarding career and the chanmake an impact, you’ve come to the right place. we will transform your business through our techniques!",
    para2:
      "Quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia",
    methods: {
      title: "Methods of the recruitment",
      para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",

      detail1: {
        img: "https://saujnyadiagnostic.com/images/Full%20Body%20Checkup%20[Standard].webp",
        points: ["demo1", "demo2"],
      },
      detail2: {
        img: "https://saujnyadiagnostic.com/images/Liver%20Profile.webp",
        points: ["demo1", "demo2"],
      },
    },
  },
  {
    id: "blog2",
    bannerImg: "https://saujnyadiagnostic.com/images/Kidney%20Profile.webp",
    title: "Kideny Profile Test Blog",
    para1:
      "Our Garden are designed and maintained to the highest standards, with state-of-the-art equipment. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, The Extremes sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
    qote: "If you’re looking for a rewarding career and the chanmake an impact, you’ve come to the right place. we will transform your business through our techniques!",
    para2:
      "Quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia",
    methods: {
      title: "Methods of the recruitment",
      para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",

      detail1: {
        img: "https://saujnyadiagnostic.com/images/Full%20Body%20Checkup%20[Standard].webp",
        points: ["demo1", "demo2"],
      },
      detail2: {
        img: "https://saujnyadiagnostic.com/images/Liver%20Profile.webp",
        points: ["demo1", "demo2"],
      },
    },
  },
  {
    id: "blog3",
    bannerImg: "https://saujnyadiagnostic.com/images/ANC%20Profile.webp",
    title: "ANC Full Profile Guide For Couples",
    para1:
      "Our Garden are designed and maintained to the highest standards, with state-of-the-art equipment. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, The Extremes sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
    qote: "If you’re looking for a rewarding career and the chanmake an impact, you’ve come to the right place. we will transform your business through our techniques!",
    para2:
      "Quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia",
    methods: {
      title: "Methods of the recruitment",
      para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",

      detail1: {
        img: "https://saujnyadiagnostic.com/images/Full%20Body%20Checkup%20[Standard].webp",
        points: ["demo1", "demo2"],
      },
      detail2: {
        img: "https://saujnyadiagnostic.com/images/Liver%20Profile.webp",
        points: ["demo1", "demo2"],
      },
    },
  },
  {
    id: "blog4",
    bannerImg: "https://saujnyadiagnostic.com/images/Thyroid%20Profile.webp",
    title: "Thyroid Test Packages and Dieases",
    para1:
      "Our Garden are designed and maintained to the highest standards, with state-of-the-art equipment. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, The Extremes sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
    qote: "If you’re looking for a rewarding career and the chanmake an impact, you’ve come to the right place. we will transform your business through our techniques!",
    para2:
      "Quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia",
    methods: {
      title: "Methods of the recruitment",
      para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",

      detail1: {
        img: "https://saujnyadiagnostic.com/images/Full%20Body%20Checkup%20[Standard].webp",
        points: ["demo1", "demo2"],
      },
      detail2: {
        img: "https://saujnyadiagnostic.com/images/Liver%20Profile.webp",
        points: ["demo1", "demo2"],
      },
    },
  },
  {
    id: "blog5",
    bannerImg: "https://saujnyadiagnostic.com/images/Liver%20Profile.webp",
    title: "Liver Related Dieases and Packages",
    para1:
      "Our Garden are designed and maintained to the highest standards, with state-of-the-art equipment. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, The Extremes sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
    qote: "If you’re looking for a rewarding career and the chanmake an impact, you’ve come to the right place. we will transform your business through our techniques!",
    para2:
      "Quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia",
    methods: {
      title: "Methods of the recruitment",
      para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",

      detail1: {
        img: "https://saujnyadiagnostic.com/images/Full%20Body%20Checkup%20[Standard].webp",
        points: ["demo1", "demo2"],
      },
      detail2: {
        img: "https://saujnyadiagnostic.com/images/Liver%20Profile.webp",
        points: ["demo1", "demo2"],
      },
    },
  },
  {
    id: "blog6",
    bannerImg:
      "https://saujnyadiagnostic.com/images/Full%20Body%20Checkup[Basic].webp",
    title: "Full Body Checkup Basic Package Details",
    para1:
      "Our Garden are designed and maintained to the highest standards, with state-of-the-art equipment. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, The Extremes sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation",
    qote: "If you’re looking for a rewarding career and the chanmake an impact, you’ve come to the right place. we will transform your business through our techniques!",
    para2:
      "Quis nostrud exercitation ullamco laboris nisiut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia",
    methods: {
      title: "Methods of the recruitment",
      para: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",

      detail1: {
        img: "https://saujnyadiagnostic.com/images/Full%20Body%20Checkup%20[Standard].webp",
        points: ["demo1", "demo2"],
      },
      detail2: {
        img: "https://saujnyadiagnostic.com/images/Liver%20Profile.webp",
        points: ["demo1", "demo2"],
      },
    },
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

const nav = ["Home", "Health Packages", "About Us", "Contact Us", "Blogs"];

export { cta, testCard, category, progressBarData, reviews, blogCard, nav };
