# Trivia Drill

Master general knowledge for pub trivia using scientifically-proven learning techniques.

## 🎯 MVP Complete!

The MVP is fully functional with:
- ✅ **75 Verified Questions** across History, Science, and Geography
- ✅ **User Authentication** with JWT tokens
- ✅ **Daily Drill Mode** with spaced repetition (SM-2 algorithm)
- ✅ **Progress Tracking** with streaks, category scores, and accuracy
- ✅ **Dashboard** with comprehensive statistics
- ✅ **Mobile Responsive** design

## Overview

Trivia Drill is a web-based learning platform that helps users master general knowledge through advanced cognitive science principles including:

- **Spaced Repetition**: Questions resurface at optimal intervals (1d → 3d → 7d → 14d → 30d) for maximum retention
- **Active Recall**: Generate answers from memory rather than passive recognition
- **Interleaving**: Mix categories for better categorization and long-term retention
- **Progress Tracking**: Track accuracy, streaks, and category proficiency
- **Achievement System**: Unlock achievements based on learning milestones

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT tokens with bcrypt password hashing
- **Algorithm**: SM-2 spaced repetition

## Features

### 🔐 Authentication
- Email/password signup and login
- JWT token authentication
- Password strength validation
- Protected routes

### 📚 Learning
- **Daily Drill**: 15-question sessions with balanced difficulty (60% easy, 30% medium, 10% hard)
- **Spaced Repetition**: Questions reappear at scientifically optimal intervals
- **Immediate Feedback**: Explanations and correct answers after each question
- **Progress Tracking**: Real-time accuracy and completion tracking

### 📊 Dashboard
- Total questions answered
- Accuracy rate
- Current and longest streaks (🔥)
- Questions due for review
- Category proficiency scores with visual charts
- Achievement system

### 🎯 Question Database
- **75 verified questions** with authoritative sources
- **3 categories**: History (25), Science & Nature (25), Geography (25)
- **3 difficulty levels**: Easy, Medium, Hard
- All questions include explanations and memory tips
- Verified by Britannica, National Archives, NASA, National Geographic, and more

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (local or cloud: Supabase, Neon, AWS RDS)

### Quick Start

1. **Clone the repository:**
```bash
git clone <repository-url>
cd trivia-drill
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env
```

Edit `.env` and configure:
```env
# Database (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/trivia_drill?schema=public"

# Authentication
JWT_SECRET="your-secure-secret-key-here"
JWT_EXPIRES_IN="7d"

# Application
NODE_ENV="development"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

4. **Set up the database:**
```bash
npm run db:generate  # Generate Prisma client
npm run db:push      # Create database schema
```

5. **Run the development server:**
```bash
npm run dev
```

6. **Open your browser:**
```
http://localhost:3000
```

### First Time User Flow

1. Visit `http://localhost:3000`
2. Click "Get Started" to create an account
3. Fill in email, password (min 8 chars with uppercase, lowercase, number)
4. Optionally add your name and birth year
5. Log in with your credentials
6. View your dashboard with stats
7. Click "Start Daily Drill" to begin learning
8. Answer 15 trivia questions
9. Review your results and explanations
10. Return to dashboard to see updated stats

## Database Setup Options

### Option 1: Local PostgreSQL

```bash
# Install PostgreSQL
# macOS: brew install postgresql
# Ubuntu: sudo apt-get install postgresql

# Create database
createdb trivia_drill

# Update .env
DATABASE_URL="postgresql://localhost:5432/trivia_drill?schema=public"
```

### Option 2: Supabase (Free Cloud)

1. Create account at https://supabase.com
2. Create new project
3. Get connection string from Settings → Database
4. Update `.env` with connection string

### Option 3: Neon (Free Cloud)

1. Create account at https://neon.tech
2. Create new project
3. Copy connection string
4. Update `.env` with connection string

## Project Structure

```
trivia-drill/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Auth pages (login, signup)
│   ├── dashboard/           # User dashboard
│   ├── drill/               # Daily Drill interface
│   ├── api/                 # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   ├── questions/      # Question endpoints
│   │   └── progress/       # Progress tracking endpoints
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles
├── components/              # React components
│   ├── ui/                 # Reusable UI components
│   └── providers/          # Context providers
├── lib/                     # Core utilities
│   ├── auth/               # Authentication (JWT, passwords, context)
│   ├── algorithms/         # Spaced repetition (SM-2)
│   ├── db.ts               # Prisma client
│   ├── questions.ts        # Question service
│   └── utils.ts            # Helper functions
├── types/                   # TypeScript type definitions
├── prisma/                  # Database schema
│   └── schema.prisma       # Prisma schema
├── data/                    # Question database
│   ├── questions.json      # 75 verified questions
│   └── *.md                # Documentation
├── docs/                    # Product documentation
├── scripts/                 # Utility scripts
├── middleware.ts            # Route protection
└── package.json            # Dependencies
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - Login and get JWT token
- `GET /api/auth/me` - Get current user (requires auth)

### Questions
- `GET /api/questions` - Get questions
  - `?type=random` - Random questions
  - `?type=daily-drill` - Balanced daily drill session
  - `?type=stats` - Question database statistics
  - `?count=15` - Number of questions
  - `?category=history` - Filter by category
  - `?difficulty=easy` - Filter by difficulty
- `GET /api/questions/[id]` - Get specific question

### Progress
- `POST /api/progress/submit` - Submit answer and update progress (requires auth)
- `GET /api/progress/stats` - Get user statistics (requires auth)
- `GET /api/progress/review` - Get questions due for review (requires auth)

## Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio (database GUI)

## Learning Algorithm

### Spaced Repetition (SM-2)

The app uses a modified SM-2 algorithm to calculate optimal review intervals:

1. **First Review**: 1 day after initial learning
2. **Second Review**: 6 days after first review
3. **Subsequent Reviews**: Interval multiplied by ease factor
4. **Incorrect Answers**: Reset to 1-day interval
5. **Ease Factor**: Adjusts based on performance (0-5 quality scale)

Quality scoring:
- **0**: Complete blackout (forgot)
- **1**: Incorrect, but familiar
- **2**: Incorrect, but answer seemed easy
- **3**: Correct with effort
- **4**: Correct with hesitation
- **5**: Perfect recall

### Session Composition

Daily Drill sessions include:
- **70% review items** (questions due for spaced repetition)
- **30% new material** (unseen questions)
- **60% easy, 30% medium, 10% hard** (balanced difficulty)
- **Interleaved categories** (history, science, geography mixed)

## Question Database

### Current Content
- **Total**: 75 questions
- **Categories**: History (25), Science & Nature (25), Geography (25)
- **Difficulty**: Easy (39), Medium (28), Hard (8)
- **Quality**: All verified with authoritative sources

### Subcategories
**History**: US Presidents, US Wars, WWII, World History
**Science**: Human Body, Animals, Chemistry, Astronomy, Earth Science
**Geography**: Capitals, US Geography, Physical Geography, Landmarks, Flags

### Expansion Plans
The framework supports expansion to 2,100+ questions across:
- Sports
- Music
- Literature
- Food & Drink
- Pop Culture
- Mathematics
- Art & Architecture
- Technology
- Current Events

See `data/TRIVIA_DATABASE_SUMMARY.md` for detailed statistics.

## Development

### Adding New Questions

1. Update `docs/data.txt` with new facts following the established schema
2. Run the conversion script:
```bash
node scripts/convert-trivia-data.js
```
3. Review `data/questions.json`
4. Commit changes

### Database Migrations

```bash
# Make schema changes in prisma/schema.prisma
npx prisma migrate dev --name description_of_changes
npx prisma generate
```

## Deployment

### Recommended: Vercel + Supabase

1. **Database**: Set up PostgreSQL on Supabase
2. **Deploy to Vercel**:
   - Connect GitHub repository
   - Add environment variables (DATABASE_URL, JWT_SECRET)
   - Deploy
3. **Run migrations**:
```bash
npx prisma migrate deploy
```

### Alternative: Any Node.js host + PostgreSQL

Works with: Railway, Render, Fly.io, AWS, DigitalOcean, etc.

## Testing

### Manual Testing Checklist

- [ ] Sign up with new account
- [ ] Log in with existing account
- [ ] View dashboard with stats
- [ ] Start Daily Drill
- [ ] Answer questions (correct and incorrect)
- [ ] View immediate feedback
- [ ] Complete session and see summary
- [ ] Check updated stats on dashboard
- [ ] Verify streak tracking
- [ ] Log out and log back in
- [ ] Test mobile responsiveness

## Troubleshooting

### Database Connection Errors

```bash
# Check DATABASE_URL format
# Should be: postgresql://user:password@host:port/database

# Test connection
npx prisma db pull
```

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Authentication Issues

```bash
# Verify JWT_SECRET is set in .env
# Clear browser localStorage
# Try logging in again
```

## Contributing

This is a personal project currently in MVP phase. Contributions will be welcome once the core platform is stable.

## License

All rights reserved.

## Acknowledgments

- Trivia content verified by Britannica, National Archives, NASA, NOAA, National Geographic, Smithsonian, and other authoritative sources
- Learning algorithms based on cognitive science research
- Spaced repetition inspired by SuperMemo (SM-2 algorithm)

---

**Status**: ✅ MVP Complete
**Version**: 1.0.0
**Last Updated**: November 12, 2025
**Questions**: 75 verified
**Categories**: 3 (History, Science, Geography)
**Features**: Auth, Daily Drill, Progress Tracking, Spaced Repetition

🎯 **Ready to help you master general knowledge for pub trivia!**
