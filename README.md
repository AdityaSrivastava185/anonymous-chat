# 🕵️‍♂️ Anonymous Chat – Ask Freely, Learn Fearlessly

**Anonymous Chat** is a full-stack platform built for developers and students who want to ask questions anonymously without the fear of judgment. Whether you're stuck on a bug, struggling with a concept, or just want a second opinion — this platform has your back.

> Featuring AI-powered suggestions and a judgment-free community.

---

## 🚧 Project Status

> **Note:** This project is currently **under development**. The progress is **temporarily paused**, but the architecture and initial implementation showcase a robust tech stack and future-ready design.

---

## 💡 Key Features

- 🕶️ Post questions anonymously in real time
- 🤖 **AI suggestions** powered by OpenAI API for similar issues or guidance
- 📨 Email integration via **Resend** for optional notifications
- ⚛️ Global state managed via **Zustand**
- 🧠 Form validation with **Zod**
- 📦 Scalable architecture using **Next.js App Router**
- 🧩 Beautiful and responsive UI using **ShadCN UI** and **Aceternity UI**
- 🗃️ Backend powered by **MongoDB Atlas**

---

## 🧱 Tech Stack

| Layer         | Technologies Used                                                                 |
|---------------|------------------------------------------------------------------------------------|
| Frontend      | Next.js (App Router), TypeScript, ShadCN UI, Aceternity UI                        |
| State         | Zustand                                                                           |
| Validation    | Zod                                                                               |
| Backend       | MongoDB, Resend (Email)                                                           |
| AI Integration| OpenAI API (similar question suggestions + smart hints)                          |
| Styling       | Tailwind CSS (via ShadCN/Aceternity integration)                                  |

---

## 📸 Screenshots

> *Screenshots will be added once development resumes.*

---

---

## 🛠️ Getting Started (Local Dev)

```bash
# Clone the repository
git clone https://github.com/your-username/anonymous-chat.git
cd anonymous-chat

# Install dependencies
npm install

# Add your environment variables to `.env.local`

# Start the development server
npm run dev

```
Please make sure to add these environment variables in `.env` file to setup and run the project locally or even if you want to deploy it on cloud plarform 
```bash
OPENAI_API_KEY=your_openai_api_key
MONGODB_URI=your_mongodb_uri
RESEND_API_KEY=your_resend_key
```
