// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';

// // Configuration
// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Sample Route for Testing
// app.get('/', (req: Request, res: Response) => {
//   res.status(200).json({
//     success: true,
//     message: 'Welcome to SkillBridge Backend API with TypeScript!',
//   });
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server is running smoothly on http://localhost:${PORT}`);
// });


// const dns = require("node:dns");
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// import express, { Request, Response } from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import * as dotenv from 'dotenv'; // dotenv ইম্পোর্ট করা হলো

// // .env ফাইল থেকে ভ্যারিয়েবল লোড করার জন্য
// dotenv.config();

// const app = express();

// // মিডলওয়্যার
// app.use(cors());
// app.use(express.json());

// // ১. মঙ্গোডিবি কানেকশন লিংক (প্রথমে .env চেক করবে, না পেলে সরাসরি নিচের লিংকটি নেবে)
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://skillbridge:9cjFL69wXk75QmAf@cluster0.bqdv3wt.mongodb.net/?appName=Cluster0';

// // ২. টাইপস্ক্রিপ্ট ইন্টারফেস ও স্কিমা ডিফাইন করা
// interface ISkill {
//   title: string; desc: string; badge: string; badgeColor: string;
//   image: string; mentorName: string; mentorImage: string;
//   rating: string; reviews: string; price: string; duration: string; lessons: string;
// }

// const SkillSchema = new mongoose.Schema<ISkill>({
//   title: String, desc: String, badge: String, badgeColor: String,
//   image: String, mentorName: String, mentorImage: String,
//   rating: String, reviews: String, price: String, duration: String, lessons: String,
// });

// const Skill = mongoose.models.Skill || mongoose.model<ISkill>('Skill', SkillSchema, 'skills');

// // ৩. ডাটাবেজ কানেক্ট করে সার্ভার স্টার্ট করার ফাংশন
// const startServer = async () => {
//   try {
//     // লিংকের এরর ঠেকাতে কড়া চেক
//     if (!MONGODB_URI || MONGODB_URI.includes('MONGODB_URI')) {
//       throw new Error("MongoDB Connection string is missing! Please put your real string.");
//     }

//     await mongoose.connect(MONGODB_URI);
//     console.log("Backend: MongoDB Connected Successfully! 🎉");
    
//     // ৪. এপিআই গেট (GET) রিকোয়েস্ট এন্ডপয়েন্ট
//     app.get('/api/skills', async (req: Request, res: Response) => {
//       try {
//         const skills = await Skill.find({});
//         res.status(200).json(skills);
//       } catch (error: any) {
//         res.status(500).json({ message: "Error fetching skills", error: error.message });
//       }
//     });

//     app.listen(5000, () => console.log("Backend running on port 5000 🚀"));
//   } catch (err: any) {
//     console.error("MongoDB Connection Failed: ", err.message);
//   }
// };

// startServer();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import * as dns from 'node:dns';
// // ইম্পোর্টের একদম শুরুতে DNS সার্ভার সেট করা হলো যেন টাইপস্ক্রিপ্ট এরর না দেয়
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// import express, { Request, Response } from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import * as dotenv from 'dotenv';

// // .env ফাইল থেকে ভ্যারিয়েবল লোড করার জন্য
// dotenv.config();

// const app = express();

// // মিডলওয়্যার
// app.use(cors());
// app.use(express.json());

// // ১. মঙ্গোডিবি কানেকশন লিংক (এখানে ডাটাবেজ নাম 'skillbridge' যোগ করা হয়েছে)
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://skillbridge:9cjFL69wXk75QmAf@cluster0.bqdv3wt.mongodb.net/skillbridge?retryWrites=true&w=majority&appName=Cluster0';

// // ২. টাইপস্ক্রিপ্ট ইন্টারফেস ও স্কিমা ডিফাইন করা
// interface ISkill {
//   title: string; 
//   desc: string; 
//   badge: string; 
//   badgeColor: string;
//   image: string; 
//   mentorName: string; 
//   mentorImage: string;
//   rating: string; 
//   reviews: string; 
//   price: string; 
//   duration: string; 
//   lessons: string;
// }

// const SkillSchema = new mongoose.Schema<ISkill>({
//   title: String, 
//   desc: String, 
//   badge: String, 
//   badgeColor: String,
//   image: String, 
//   mentorName: String, 
//   mentorImage: String,
//   rating: String, 
//   reviews: String, 
//   price: String, 
//   duration: String, 
//   lessons: String,
// });

// // 'skills' কালেকশন থেকে ডেটা রিড করার জন্য মডেল
// const Skill = mongoose.models.Skill || mongoose.model<ISkill>('Skill', SkillSchema, 'skills');

// // ৩. ডাটাবেজ কানেক্ট করে সার্ভার স্টার্ট করার ফাংশন
// const startServer = async () => {
//   try {
//     // লিংকের এরর ঠেকাতে কড়া চেক
//     if (!MONGODB_URI || MONGODB_URI.includes('MONGODB_URI')) {
//       throw new Error("MongoDB Connection string is missing! Please put your real string.");
//     }

//     await mongoose.connect(MONGODB_URI);
//     console.log("Backend: MongoDB Connected Successfully! 🎉");
    
//     // ৪. এপিআই গেট (GET) রিকোয়েস্ট এন্ডপয়েন্ট
//     app.get('/api/skills', async (req: Request, res: Response) => {
//       try {
//         const skills = await Skill.find({});
//         res.status(200).json(skills);
//       } catch (error: any) {
//         res.status(500).json({ message: "Error fetching skills", error: error.message });
//       }
//     });

//     // ৫. বেস রুট (Browser-এ localhost:5000 এ যাতে 'Cannot GET /' না দেখায়)
//     app.get('/', (req: Request, res: Response) => {
//       res.send("SkillBridge Backend Server is Running Perfectly! 🚀");
//     });

//     app.listen(5000, () => console.log("Backend running on port 5000 🚀"));
//   } catch (err: any) {
//     console.error("MongoDB Connection Failed: ", err.message);
//   }
// };

// startServer();

// +++++++++++++++++++++++++++++

// import * as dns from 'node:dns';
// // DNS এরর হ্যান্ডলিং
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// import express, { Request, Response } from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import * as dotenv from 'dotenv';

// dotenv.config();

// const app = express();

// // মিডলওয়্যার
// app.use(cors());
// app.use(express.json());

// // ডাটাবেজ লিংক
// const MONGODB_URI = 'mongodb+srv://skillbridge:9cjFL69wXk75QmAf@cluster0.bqdv3wt.mongodb.net/skillbridge?retryWrites=true&w=majority&appName=Cluster0';

// // ৮টি ডেমো ডেটা যা অটোমেটিক তোমার মঙ্গোডিবি ডাটাবেজে ঢুকে যাবে
// // const initialSkills = [
// //   {
// //     title: "Web Development Masterclass",
// //     desc: "Learn HTML, CSS, JavaScript, React, and Node.js to build modern responsive websites.",
// //     badge: "Bestseller",
// //     badgeColor: "bg-blue-100 text-blue-700",
// //     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500",
// //     mentorName: "Nayeem Islam",
// //     mentorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
// //     rating: "4.9",
// //     reviews: "250",
// //     price: "$99",
// //     duration: "12 Weeks",
// //     lessons: "45 Lessons"
// //   },
// //   {
// //     title: "Professional Graphic Design",
// //     desc: "Master Photoshop, Illustrator, and branding guidelines to create stunning visuals.",
// //     badge: "Trending",
// //     badgeColor: "bg-orange-100 text-orange-700",
// //     image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=500",
// //     mentorName: "Arif Rahman",
// //     mentorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
// //     rating: "4.8",
// //     reviews: "185",
// //     price: "$49",
// //     duration: "6 Weeks",
// //     lessons: "24 Lessons"
// //   },
// //   {
// //     title: "Digital Marketing Strategy",
// //     desc: "Learn SEO, Social Media Marketing, and Google Ads to scale businesses from scratch.",
// //     badge: "New",
// //     badgeColor: "bg-green-100 text-green-700",
// //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
// //     mentorName: "Farhan Ahmed",
// //     mentorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
// //     rating: "4.7",
// //     reviews: "98",
// //     price: "$39",
// //     duration: "5 Weeks",
// //     lessons: "20 Lessons"
// //   },
// //   {
// //     title: "UI/UX Design with Figma",
// //     desc: "Design beautiful user interfaces and interactive prototypes for mobile & web.",
// //     badge: "Popular",
// //     badgeColor: "bg-purple-100 text-purple-700",
// //     image: "https://www.images.cybrosys.com/css/assets/populor/courses-7.jpg",
// //     mentorName: "Sumaiya Akter",
// //     mentorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
// //     rating: "4.9",
// //     reviews: "142",
// //     price: "$59",
// //     duration: "8 Weeks",
// //     lessons: "32 Lessons"
// //   },
// //   {
// //     title: "Python Programming & AI",
// //     desc: "Dive into Python coding, data analysis, and basic machine learning models.",
// //     badge: "Hot",
// //     badgeColor: "bg-red-100 text-red-700",
// //     image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500",
// //     mentorName: "Rakib Hasan",
// //     mentorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150",
// //     rating: "4.6",
// //     reviews: "115",
// //     price: "$79",
// //     duration: "10 Weeks",
// //     lessons: "38 Lessons"
// //   },
// //   {
// //     title: "Video Editing in Premiere Pro",
// //     desc: "Learn professional video editing, color grading, sound design, and transitions.",
// //     badge: "Creative",
// //     badgeColor: "bg-pink-100 text-pink-700",
// //     image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=500",
// //     mentorName: "Tariqul Islam",
// //     mentorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150",
// //     rating: "4.8",
// //     reviews: "76",
// //     price: "$69",
// //     duration: "6 Weeks",
// //     lessons: "25 Lessons"
// //   },
// //   {
// //     title: "Copywriting & Content Writing",
// //     desc: "Write high-converting sales copies, blogs, and marketing newsletters.",
// //     badge: "Top Rated",
// //     badgeColor: "bg-teal-100 text-teal-700",
// //     image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=500",
// //     mentorName: "Sajia Rahman",
// //     mentorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150",
// //     rating: "4.9",
// //     reviews: "64",
// //     price: "$29",
// //     duration: "4 Weeks",
// //     lessons: "15 Lessons"
// //   },
// //   {
// //     title: "Mobile App Development (Flutter)",
// //     desc: "Build native iOS and Android apps using a single codebase with Flutter and Dart.",
// //     badge: "Advanced",
// //     badgeColor: "bg-indigo-100 text-indigo-700",
// //     image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=500",
// //     mentorName: "Zahid Hasan",
// //     mentorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150",
// //     rating: "4.7",
// //     reviews: "52",
// //     price: "$89",
// //     duration: "9 Weeks",
// //     lessons: "35 Lessons"
// //   }
// // ];

// // স্কিমা ও ইন্টারফেস ডিফাইন
// interface ISkill {
//   title: string; 
//   desc: string; 
//   badge: string; 
//   badgeColor: string;
//   image: string; 
//   mentorName: string; 
//   mentorImage: string;
//   rating: string; 
//   reviews: string; 
//   price: string; 
//   duration: string; 
//   lessons: string;
// }

// const SkillSchema = new mongoose.Schema<ISkill>({
//   title: String, 
//   desc: String, 
//   badge: String, 
//   badgeColor: String,
//   image: String, 
//   mentorName: String, 
//   mentorImage: String,
//   rating: String, 
//   reviews: String, 
//   price: String, 
//   duration: String, 
//   lessons: String,
// });

// const Skill = mongoose.models.Skill || mongoose.model<ISkill>('Skill', SkillSchema, 'skills');

// const startServer = async () => {
//   try {
//     // ১. ডাটাবেজ কানেক্ট করা
//     await mongoose.connect(MONGODB_URI);
//     console.log("Backend: Connected to MongoDB! 🎉");

//     // 🌟 ২. ডাটাবেজ যদি খালি থাকে, তাহলে অটোমেটিক এই ৮টি ডাটা মঙ্গোডিবিতে ইনসার্ট করে দেবে
//     const count = await Skill.countDocuments();
//     if (count === 0) {
//       console.log("Database is empty! Automatically inserting 8 initial skills into MongoDB...");
//       await Skill.insertMany(initialSkills);
//       console.log("Success: 8 Skills successfully inserted into MongoDB! 🚀");
//     } else {
//       console.log(`Database already has ${count} skills. Loading directly from MongoDB.`);
//     }

//     // ৩. রিয়েল এপিআই এন্ডপয়েন্ট (এটি সরাসরি মঙ্গোডিবি থেকেই ডাটা টানবে)
//     app.get('/api/skills', async (req: Request, res: Response) => {
//       try {
//         const skills = await Skill.find({});
//         res.status(200).json(skills);
//       } catch (error: any) {
//         res.status(500).json({ message: "Error fetching skills from DB", error: error.message });
//       }
//     });

//     app.get('/', (req: Request, res: Response) => {
//       res.send("SkillBridge Backend Server is Running Perfectly! 🚀");
//     });

//     app.listen(5000, () => console.log("Backend running on port 5000 🚀"));
//   } catch (err: any) {
//     console.error("MongoDB Connection Failed: ", err.message);
//   }
// };

// startServer();

// import * as dns from 'node:dns';
// // DNS এরর হ্যান্ডলিং
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// import express, { Request, Response } from 'express';
// import { MongoClient } from 'mongodb'; // Mongoose বাদ দিয়ে অফিসিয়াল MongoDB Driver ইম্পোর্ট করা হলো
// import cors from 'cors';
// import * as dotenv from 'dotenv';

// dotenv.config();

// const app = express();

// // মিডলওয়্যার (CORS একদম ওপেন রাখা হলো যাতে ফ্রন্টএন্ড থেকে ব্লক না হয়)
// app.use(cors());
// app.use(express.json());

// // ডাটাবেজ লিংক
// const MONGODB_URI = 'mongodb+srv://skillbridge:9cjFL69wXk75QmAf@cluster0.bqdv3wt.mongodb.net/skillbridge?retryWrites=true&w=majority&appName=Cluster0';

// // মঙ্গোডিবি ক্লায়েন্ট ইনিশিয়েট করা
// const client = new MongoClient(MONGODB_URI);

// const startServer = async () => {
//   try {
//     // ১. ডাটাবেজ কানেক্ট করা
//     await client.connect();
//     console.log("Backend: Connected to MongoDB via Native Driver! 🎉");

//     // নির্দিষ্ট ডাটাবেজ এবং কালেকশন সিলেক্ট করা
//     const db = client.db('skillbridge');
//     const skillsCollection = db.collection('skills');

//     // ২. রিয়েল এপিআই এন্ডপয়েন্ট (এটি সরাসরি মঙ্গোডিবি 'skills' কালেকশন থেকে ডাটা টানবে)
//     app.get('/api/skills', async (req: Request, res: Response) => {
//       try {
//         // কোনো স্কিমা ঝামেলা ছাড়াই সরাসরি কালেকশনের সব ডাটা অ্যারে আকারে নিয়ে আসা
//         const skills = await skillsCollection.find({}).toArray();
        
//         console.log(`Successfully fetched ${skills.length} skills for frontend.`);
        
//         // ফ্রন্টএন্ডে ডাটা রেসপন্স পাঠানো
//         res.status(200).json(skills);
//       } catch (error: any) {
//         console.error("Error fetching skills from DB:", error);
//         res.status(500).json({ 
//           message: "Error fetching skills from DB", 
//           error: error.message 
//         });
//       }
//     });

//     // রুট ইউআরএল চেক
//     app.get('/', (req: Request, res: Response) => {
//       res.send("SkillBridge Backend Server is Running Perfectly via Native MongoDB Driver! 🚀");
//     });

//     // সার্ভার লিসেন করা
//     app.listen(5000, () => console.log("Backend running on port 5000 🚀"));
//   } catch (err: any) {
//     console.error("MongoDB Connection Failed: ", err.message);
//     process.exit(1);
//   }
// };

// startServer();

// import * as dns from 'node:dns';
// // DNS এরর হ্যান্ডলিং
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// import express, { Request, Response } from 'express';
// import { MongoClient } from 'mongodb'; // Mongoose বাদ দিয়ে অফিসিয়াল MongoDB Driver ইম্পোর্ট করা হলো
// import cors from 'cors';
// import * as dotenv from 'dotenv';

// dotenv.config();

// const app = express();

// // মিডলওয়্যার (CORS একদম ওপেন রাখা হলো যাতে ফ্রন্টএন্ড থেকে ব্লক না হয়)
// app.use(cors());
// app.use(express.json());

// // ডাটাবেজ লিংক
// const MONGODB_URI = 'mongodb+srv://skillbridge:9cjFL69wXk75QmAf@cluster0.bqdv3wt.mongodb.net/skillbridge?retryWrites=true&w=majority&appName=Cluster0';

// // মঙ্গোডিবি ক্লায়েন্ট ইনিশিয়েট করা
// const client = new MongoClient(MONGODB_URI);

// const startServer = async () => {
//   try {
//     // ১. ডাটাবেজ কানেক্ট করা
//     await client.connect();
//     console.log("Backend: Connected to MongoDB via Native Driver! 🎉");

//     // নির্দিষ্ট ডাটাবেজ এবং কালেকশন সিলেক্ট করা
//     const db = client.db('skillbridge');
//     const skillsCollection = db.collection('skills');

//     // ২. রিয়েল এপিআই এন্ডপয়েন্ট (এটি সরাসরি মঙ্গোডিবি 'skills' কালেকশন থেকে ডাটা টানবে)
//     app.get('/api/skills', async (req: Request, res: Response) => {
//       try {
//         // কোনো স্কিমা ঝামেলা ছাড়াই সরাসরি কালেকশনের সব ডাটা অ্যারে আকারে নিয়ে আসা
//         const skills = await skillsCollection.find({}).toArray();
        
//         console.log(`Successfully fetched ${skills.length} skills for frontend.`);
        
//         // ফ্রন্টএন্ডে ডাটা রেসপন্স পাঠানো
//         res.status(200).json(skills);
//       } catch (error: any) {
//         console.error("Error fetching skills from DB:", error);
//         res.status(500).json({ 
//           message: "Error fetching skills from DB", 
//           error: error.message 
//         });
//       }
//     });

//     // 🌟 [নতুন সংযোজন] ৩. নতুন স্কিল বা আইটেম যোগ করার জন্য POST API এন্ডপয়েন্ট
//     app.post('/api/skills', async (req: Request, res: Response) => {
//       try {
//         const newSkillData = req.body;

//         // কোনো প্রকার ভ্যালিডেশন এরর বা ক্র্যাশ এড়াতে মিনিমাম চেক
//         if (!newSkillData.title) {
//           res.status(400).json({ message: "Skill title is required." });
//           return;
//         }

//         // মঙ্গোডিবি ড্রাইভারের মাধ্যমে সরাসরি ডাটা ইনসার্ট করা
//         const result = await skillsCollection.insertOne(newSkillData);
        
//         console.log(`Successfully added a new skill with ID: ${result.insertedId}`);
        
//         // ফ্রন্টএন্ডে রেসপন্স পাঠানো
//         res.status(201).json({
//           message: "New skill added successfully!",
//           insertedId: result.insertedId,
//           data: newSkillData
//         });
//       } catch (error: any) {
//         console.error("Error inserting skill into DB:", error);
//         res.status(500).json({
//           message: "Error inserting skill into DB",
//           error: error.message
//         });
//       }
//     });

//     // রুট ইউআরএল চেক
//     app.get('/', (req: Request, res: Response) => {
//       res.send("SkillBridge Backend Server is Running Perfectly via Native MongoDB Driver! 🚀");
//     });

//     // সার্ভার লিসেন করা
//     app.listen(5000, () => console.log("Backend running on port 5000 🚀"));
//   } catch (err: any) {
//     console.error("MongoDB Connection Failed: ", err.message);
//     process.exit(1);
//   }
// };

// startServer();

// import * as dns from 'node:dns';
// // DNS এরর হ্যান্ডলিং
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// import express, { Request, Response } from 'express';
// import { MongoClient, ObjectId } from 'mongodb'; // ObjectId ইম্পোর্ট করা হলো আইডি দিয়ে ডিলিট করার জন্য
// import cors from 'cors';
// import * as dotenv from 'dotenv';

// dotenv.config();

// const app = express();

// // মিডলওয়্যার (CORS একদম ওপেন রাখা হলো যাতে ফ্রন্টএন্ড থেকে ব্লক না হয়)
// app.use(cors());
// app.use(express.json());

// // ডাটাবেজ লিংক
// const MONGODB_URI = 'mongodb+srv://skillbridge:9cjFL69wXk75QmAf@cluster0.bqdv3wt.mongodb.net/skillbridge?retryWrites=true&w=majority&appName=Cluster0';

// // মঙ্গোডিবি ক্লায়েন্ট ইনিশিয়েট করা
// const client = new MongoClient(MONGODB_URI);

// const startServer = async () => {
//   try {
//     // ১. ডাটাবেজ কানেক্ট করা
//     await client.connect();
//     console.log("Backend: Connected to MongoDB via Native Driver! 🎉");

//     // নির্দিষ্ট ডাটাবেজ এবং কালেকশন সিলেক্ট করা
//     const db = client.db('skillbridge');
//     const skillsCollection = db.collection('skills');

//     // ২. রিয়েল এপিআই এন্ডপয়েন্ট (এটি সরাসরি মঙ্গোডিবি 'skills' কালেকশন থেকে ডাটা টানবে)
//     app.get('/api/skills', async (req: Request, res: Response) => {
//       try {
//         // কোনো স্কিমা ঝামেলা ছাড়াই সরাসরি কালেকশনের সব ডাটা অ্যারে আকারে নিয়ে আসা
//         const skills = await skillsCollection.find({}).toArray();
        
//         console.log(`Successfully fetched ${skills.length} skills for frontend.`);
        
//         // ফ্রন্টএন্ডে ডাটা রেসপন্স পাঠানো
//         res.status(200).json(skills);
//       } catch (error: any) {
//         console.error("Error fetching skills from DB:", error);
//         res.status(500).json({ 
//           message: "Error fetching skills from DB", 
//           error: error.message 
//         });
//       }
//     });

//     // 🌟 ৩. নতুন স্কিল বা আইটেম যোগ করার জন্য POST API এন্ডপয়েন্ট
//     app.post('/api/skills', async (req: Request, res: Response) => {
//       try {
//         const newSkillData = req.body;

//         // কোনো প্রকার ভ্যালিডেশন এরর বা ক্র্যাশ এড়াতে মিনিমাম চেক
//         if (!newSkillData.title) {
//           res.status(400).json({ message: "Skill title is required." });
//           return;
//         }

//         // মঙ্গোডিবি ড্রাইভারের মাধ্যমে সরাসরি ডাটা ইনসার্ট করা
//         const result = await skillsCollection.insertOne(newSkillData);
        
//         console.log(`Successfully added a new skill with ID: ${result.insertedId}`);
        
//         // ফ্রন্টএন্ডে রেসপন্স পাঠানো
//         res.status(201).json({
//           message: "New skill added successfully!",
//           insertedId: result.insertedId,
//           data: newSkillData
//         });
//       } catch (error: any) {
//         console.error("Error inserting skill into DB:", error);
//         res.status(500).json({
//           message: "Error inserting skill into DB",
//           error: error.message
//         });
//       }
//     });

//     // 🌟 [নতুন সংযোজন] ৪. আইডি ধরে নির্দিষ্ট স্কিল ডিলিট করার জন্য DELETE API এন্ডপয়েন্ট
//     app.delete('/api/skills/:id', async (req: Request, res: Response) => {
//       try {
//         const { id } = req.params;

//         // আইডি ভ্যালিডেশন চেক
//         if (!id || !ObjectId.isValid(id)) {
//           res.status(400).json({ message: "Invalid Skill ID format" });
//           return;
//         }

//         // মঙ্গোডিবি থেকে নির্দিষ্ট আইডি অনুযায়ী ডিলিট করা
//         const result = await skillsCollection.deleteOne({ _id: new ObjectId(id) });

//         if (result.deletedCount === 0) {
//           res.status(404).json({ message: "Skill not found" });
//           return;
//         }

//         console.log(`Successfully deleted skill with ID: ${id}`);
//         res.status(200).json({ message: "Skill deleted successfully!" });
//       } catch (error: any) {
//         console.error("Error deleting skill from DB:", error);
//         res.status(500).json({
//           message: "Error deleting skill from DB",
//           error: error.message
//         });
//       }
//     });

//     // রুট ইউআরএল চেক
//     app.get('/', (req: Request, res: Response) => {
//       res.send("SkillBridge Backend Server is Running Perfectly via Native MongoDB Driver! 🚀");
//     });

//     // সার্ভার লিসেন করা
//     app.listen(5000, () => console.log("Backend running on port 5000 🚀"));
//   } catch (err: any) {
//     console.error("MongoDB Connection Failed: ", err.message);
//     process.exit(1);
//   }
// };

// startServer();

// import * as dns from 'node:dns';
// // DNS এরর হ্যান্ডলিং
// dns.setServers(["8.8.8.8", "8.8.4.4"]);

// import express, { Request, Response } from 'express';
// import { MongoClient, ObjectId } from 'mongodb'; // ObjectId ইম্পোর্ট করা হলো আইডি দিয়ে ডিলিট করার জন্য
// import cors from 'cors';
// import * as dotenv from 'dotenv';

// dotenv.config();

// const app = express();

// // মিডলওয়্যার (CORS একদম ওপেন রাখা হলো যাতে ফ্রন্টএন্ড থেকে ব্লক না হয়)
// app.use(cors());
// app.use(express.json());

// // ডাটাবেজ লিংক
// const MONGODB_URI = 'mongodb+srv://skillbridge:9cjFL69wXk75QmAf@cluster0.bqdv3wt.mongodb.net/skillbridge?retryWrites=true&w=majority&appName=Cluster0';

// // মঙ্গোডিবি ক্লায়েন্ট ইনিশিয়েট করা
// const client = new MongoClient(MONGODB_URI);

// const startServer = async () => {
//   try {
//     // ১. ডাটাবেজ কানেক্ট করা
//     // await client.connect();
//     console.log("Backend: Connected to MongoDB via Native Driver! 🎉");

//     // নির্দিষ্ট ডাটাবেজ এবং কালেকশন সিলেক্ট করা
//     const db = client.db('skillbridge');
//     const skillsCollection = db.collection('skills');
//     const subscribersCollection = db.collection('subscribers'); // নিউজলেটার সাবস্ক্রাইবারদের জন্য নতুন কালেকশন

//     // ২. রিয়েল এপিআই এন্ডপয়েন্ট (এটি সরাসরি মঙ্গোডিবি 'skills' কালেকশন থেকে ডাটা টানবে)
//     app.get('/api/skills', async (req: Request, res: Response) => {
//       try {
//         // কোনো স্কিমা ঝামেলা ছাড়াই সরাসরি কালেকশনের সব ডাটা অ্যারে আকারে নিয়ে আসা
//         const skills = await skillsCollection.find({}).toArray();
        
//         console.log(`Successfully fetched ${skills.length} skills for frontend.`);
        
//         // ফ্রন্টএন্ডে ডাটা রেসপন্স পাঠানো
//         res.status(200).json(skills);
//       } catch (error: any) {
//         console.error("Error fetching skills from DB:", error);
//         res.status(500).json({ 
//           message: "Error fetching skills from DB", 
//           error: error.message 
//         });
//       }
//     });

//     // 🌟 ৩. নতুন স্কিল বা আইটেম যোগ করার জন্য POST API এন্ডপয়েন্ট
//     app.post('/api/skills', async (req: Request, res: Response) => {
//       try {
//         const newSkillData = req.body;

//         // কোনো প্রকার ভ্যালিডেশন এরর বা ক্র্যাশ এড়াতে মিনিমাম চেক
//         if (!newSkillData.title) {
//           res.status(400).json({ message: "Skill title is required." });
//           return;
//         }

//         // মঙ্গোডিবি ড্রাইভারের মাধ্যমে সরাসরি ডাটা ইনসার্ট করা
//         const result = await skillsCollection.insertOne(newSkillData);
        
//         console.log(`Successfully added a new skill with ID: ${result.insertedId}`);
        
//         // ফ্রন্টএন্ডে রেসপন্স পাঠানো
//         res.status(201).json({
//           message: "New skill added successfully!",
//           insertedId: result.insertedId,
//           data: newSkillData
//         });
//       } catch (error: any) {
//         console.error("Error inserting skill into DB:", error);
//         res.status(500).json({
//           message: "Error inserting skill into DB",
//           error: error.message
//         });
//       }
//     });

//     // 🌟 ৪. আইডি ধরে নির্দিষ্ট স্কিল ডিলিট করার জন্য DELETE API এন্ডপয়েন্ট
//     app.delete('/api/skills/:id', async (req: Request, res: Response) => {
//       try {
//         const { id } = req.params;

//         // আইডি ভ্যালিডেশন চেক
//         if (!id || typeof id !== 'string' || !ObjectId.isValid(id)) {
//           res.status(400).json({ message: "Invalid Skill ID format" });
//           return;
//         }

//         // মঙ্গোডিবি থেকে নির্দিষ্ট আইডি অনুযায়ী ডিলিট করা
//         const result = await skillsCollection.deleteOne({ _id: new ObjectId(id) });

//         if (result.deletedCount === 0) {
//           res.status(404).json({ message: "Skill not found" });
//           return;
//         }

//         console.log(`Successfully deleted skill with ID: ${id}`);
//         res.status(200).json({ message: "Skill deleted successfully!" });
//       } catch (error: any) {
//         console.error("Error deleting skill from DB:", error);
//         res.status(500).json({
//           message: "Error deleting skill from DB",
//           error: error.message
//         });
//       }
//     });

//     // 🌟 [নতুন সংযোজন] ৫. নিউজলেটার সাবস্ক্রিপশন স্টোর করার জন্য POST API এন্ডপয়েন্ট
//     app.post('/api/subscribe', async (req: Request, res: Response) => {
//       try {
//         const { email } = req.body;

//         // ইমেইল ইনপুট চেক
//         if (!email) {
//           res.status(400).json({ message: "Email is required." });
//           return;
//         }

//         // ইমেইলটি অলরেডি সাবস্ক্রাইব করা আছে কি না চেক করা (কেস-সেন্সিটিভ ইস্যু এড়াতে lowercase করা হলো)
//         const existingSubscriber = await subscribersCollection.findOne({ email: email.toLowerCase() });
        
//         if (existingSubscriber) {
//           res.status(400).json({ message: "This email is already subscribed! 📧" });
//           return;
//         }

//         // ডাটাবেজে নতুন সাবস্ক্রাইবার হিসেবে ইমেইল এবং সাবস্ক্রাইব করার টাইমস্ট্যাম্প সেভ করা
//         const result = await subscribersCollection.insertOne({
//           email: email.toLowerCase(),
//           subscribedAt: new Date()
//         });

//         console.log(`New subscriber added with ID: ${result.insertedId}`);

//         res.status(201).json({
//           message: "Subscribed successfully! 🎉 Welcome to our newsletter.",
//           insertedId: result.insertedId
//         });
//       } catch (error: any) {
//         console.error("Error saving subscriber to DB:", error);
//         res.status(500).json({
//           message: "Server error, please try again later.",
//           error: error.message
//         });
//       }
//     });

//     // রুট ইউআরএল চেক
//     app.get('/', (req: Request, res: Response) => {
//       res.send("SkillBridge Backend Server is Running Perfectly via Native MongoDB Driver with Subscribers Support! 🚀");
//     });

//     // সার্ভার লিসেন করা
//     app.listen(5000, () => console.log("Backend running on port 5000 🚀"));
//   } catch (err: any) {
//     console.error("MongoDB Connection Failed: ", err.message);
//     process.exit(1);
//   }
// };

// startServer();


import * as dns from 'node:dns';
// DNS এরর হ্যান্ডলিং
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express, { Request, Response } from 'express';
import { MongoClient, ObjectId } from 'mongodb'; 
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

// CORS কনফিগারেশন আপডেট করা হয়েছে
app.use(cors({
  origin: [
    'http://localhost:3000', 
    'https://skillbridge-frontend-iota-one.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

// ডাটাবেজ লিংক
const MONGODB_URI = 'mongodb+srv://skillbridge:9cjFL69wXk75QmAf@cluster0.bqdv3wt.mongodb.net/skillbridge?retryWrites=true&w=majority&appName=Cluster0';

// মঙ্গোডিবি ক্লায়েন্ট ইনিশিয়েট করা
const client = new MongoClient(MONGODB_URI);

const startServer = async () => {
  try {
    // await client.connect();
    console.log("Backend: Connected to MongoDB via Native Driver! 🎉");

    const db = client.db('skillbridge');
    const skillsCollection = db.collection('skills');
    const subscribersCollection = db.collection('subscribers');

    app.get('/api/skills', async (req: Request, res: Response) => {
      try {
        const skills = await skillsCollection.find({}).toArray();
        console.log(`Successfully fetched ${skills.length} skills for frontend.`);
        res.status(200).json(skills);
      } catch (error: any) {
        console.error("Error fetching skills from DB:", error);
        res.status(500).json({ 
          message: "Error fetching skills from DB", 
          error: error.message 
        });
      }
    });

    app.post('/api/skills', async (req: Request, res: Response) => {
      try {
        const newSkillData = req.body;
        if (!newSkillData.title) {
          res.status(400).json({ message: "Skill title is required." });
          return;
        }
        const result = await skillsCollection.insertOne(newSkillData);
        console.log(`Successfully added a new skill with ID: ${result.insertedId}`);
        res.status(201).json({
          message: "New skill added successfully!",
          insertedId: result.insertedId,
          data: newSkillData
        });
      } catch (error: any) {
        console.error("Error inserting skill into DB:", error);
        res.status(500).json({
          message: "Error inserting skill into DB",
          error: error.message
        });
      }
    });

    app.delete('/api/skills/:id', async (req: Request, res: Response) => {
      try {
        const { id } = req.params;
        if (!id || typeof id !== 'string' || !ObjectId.isValid(id)) {
          res.status(400).json({ message: "Invalid Skill ID format" });
          return;
        }
        const result = await skillsCollection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
          res.status(404).json({ message: "Skill not found" });
          return;
        }
        console.log(`Successfully deleted skill with ID: ${id}`);
        res.status(200).json({ message: "Skill deleted successfully!" });
      } catch (error: any) {
        console.error("Error deleting skill from DB:", error);
        res.status(500).json({
          message: "Error deleting skill from DB",
          error: error.message
        });
      }
    });

    app.post('/api/subscribe', async (req: Request, res: Response) => {
      try {
        const { email } = req.body;
        if (!email) {
          res.status(400).json({ message: "Email is required." });
          return;
        }
        const existingSubscriber = await subscribersCollection.findOne({ email: email.toLowerCase() });
        if (existingSubscriber) {
          res.status(400).json({ message: "This email is already subscribed! 📧" });
          return;
        }
        const result = await subscribersCollection.insertOne({
          email: email.toLowerCase(),
          subscribedAt: new Date()
        });
        console.log(`New subscriber added with ID: ${result.insertedId}`);
        res.status(201).json({
          message: "Subscribed successfully! 🎉 Welcome to our newsletter.",
          insertedId: result.insertedId
        });
      } catch (error: any) {
        console.error("Error saving subscriber to DB:", error);
        res.status(500).json({
          message: "Server error, please try again later.",
          error: error.message
        });
      }
    });

    app.get('/', (req: Request, res: Response) => {
      res.send("SkillBridge Backend Server is Running Perfectly! 🚀");
    });

    app.listen(5000, () => console.log("Backend running on port 5000 🚀"));
  } catch (err: any) {
    console.error("MongoDB Connection Failed: ", err.message);
    process.exit(1);
  }
};

startServer();