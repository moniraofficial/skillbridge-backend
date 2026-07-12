import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Configuration
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample Route for Testing
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to SkillBridge Backend API with TypeScript!',
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running smoothly on http://localhost:${PORT}`);
});