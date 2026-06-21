# 🚀 AI Prompt Optimizer

Analyze, score, and improve prompts using AI.

AI Prompt Optimizer helps users write better prompts for ChatGPT, Gemini, Claude, and other LLMs by evaluating prompt quality and generating optimized versions instantly.

---

## ✨ Features

### Prompt Analysis
- Overall prompt quality score
- Detailed category-wise evaluation
- Clarity score
- Context score
- Specificity score
- Constraints score
- Output Format score
- Creativity score

### AI Feedback
- Identifies weaknesses in prompts
- Explains improvement areas
- Provides actionable suggestions

### Prompt Optimization
- Generates an improved version of the prompt
- Preserves original intent
- Enhances prompt structure and effectiveness

### User Experience
- Clean modern UI
- Real-time analysis
- Loading states
- Error handling
- Responsive design

---

## 🛠 Tech Stack

### Frontend
- Next.js 15
- TypeScript
- Tailwind CSS

### Backend
- FastAPI
- Python 3.11
- Pydantic

### AI
- Google Gemini API

### Development Tools
- Git
- GitHub
- Cursor AI

---

## 📂 Project Structure

```bash
AI_prompt_optimizer/
│
├── backend/
│   ├── app/
│   │   ├── schemas/
│   │   ├── services/
│   │   ├── models/
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── types/
│   └── public/
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone https://github.com/ArunKumarNagidi/ai-prompt-optimizer.git

cd ai-prompt-optimizer
```

---

## Backend Setup

### Create Virtual Environment

```bash
cd backend

python -m venv venv
```

### Activate Environment

Windows

```bash
venv\Scripts\activate
```

Mac/Linux

```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Configure Environment Variables

Create:

```env
backend/.env
```

Add:

```env
GEMINI_API_KEY=your_api_key_here
```

### Start Backend

```bash
uvicorn app.main:app --reload
```

Backend URL:

```bash
http://localhost:8000
```

Swagger Docs:

```bash
http://localhost:8000/docs
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

### Configure Environment

Create:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Start Frontend

```bash
npm run dev
```

Frontend URL:

```bash
http://localhost:3000
```

---

## 📊 API Example

### Request

```json
{
  "prompt": "Write a poem about AI"
}
```

### Response

```json
{
  "overall_score": 72,
  "category_scores": {
    "clarity": 85,
    "context": 60,
    "specificity": 65,
    "constraints": 50,
    "output_format": 80,
    "creativity": 90
  },
  "issues": [
    "Prompt lacks context"
  ],
  "suggestions": [
    "Specify audience and style"
  ],
  "optimized_prompt": "Write a 4 stanza inspirational poem about AI for beginners."
}
```

---

## 🎯 Future Improvements

- Authentication
- Prompt History
- Prompt Templates
- Multiple AI Models
- Export Results
- Prompt Comparison
- Dark Mode
- Analytics Dashboard

---

## 📸 Screenshots

### Home Page

Add screenshot here

```md
![Home](screenshots/home.png)
```

### Analysis Result

```md
![Result](screenshots/result.png)
```

---

## 🎥 YouTube Video

Watch the full build process on YouTube:

(Add your video link here after publishing)

---

## 🤝 Contributing

Pull requests are welcome.

For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

MIT License

---

## 👨‍💻 Author

**Arun Kumar Nagidi**

- GitHub: https://github.com/ArunKumarNagidi
- LinkedIn: Add your LinkedIn
- YouTube: AI Builder Lab

---

### ⭐ If you found this project useful, consider giving it a star.