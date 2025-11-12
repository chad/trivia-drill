# Trivia Drill

Master general knowledge for pub trivia using scientifically-proven learning techniques.

## Overview

Trivia Drill is a web-based learning platform that helps users master general knowledge through advanced cognitive science principles including:

- **Spaced Repetition**: Questions resurface at optimal intervals for maximum retention
- **Active Recall**: Generate answers from memory rather than passive recognition
- **Interleaving**: Mix categories for better categorization and long-term retention
- **Visual-Spatial Learning**: Interactive maps for geography, languages, religions, and historical events
- **Age-Adaptive Content**: Helps users learn content outside their generation

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT tokens with bcrypt
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trivia-drill
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your database connection string and JWT secret.

4. Set up the database:
```bash
npm run db:generate
npm run db:push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
trivia-drill/
├── app/                 # Next.js app router (pages & API routes)
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── layout/         # Layout components
│   └── features/       # Feature-specific components
├── lib/                 # Utilities and core logic
│   ├── algorithms/     # Spaced repetition & other algorithms
│   ├── auth/           # Authentication utilities
│   ├── db/             # Database client
│   └── utils/          # Helper functions
├── types/               # TypeScript type definitions
├── prisma/              # Database schema
├── public/              # Static assets
├── data/                # Question database (JSON)
└── docs/                # Documentation
```

## Development Phases

### Phase 1: MVP (Current)
- [x] Project setup and configuration
- [x] Database schema design
- [x] Core type definitions
- [x] Spaced repetition algorithm
- [ ] User authentication
- [ ] Daily Drill mode
- [ ] Progress tracking
- [ ] Mobile-responsive design

### Phase 2: Enhanced Learning
- [ ] Map Explorer mode
- [ ] Age-Bridge mode
- [ ] Advanced analytics
- [ ] Achievement system

### Phase 3: Social & Multiplayer
- [ ] Friend challenges
- [ ] Team mode
- [ ] Leaderboards
- [ ] Challenge Mode

## Documentation

- [Product Plan](./docs/PRODUCT_PLAN.md) - Comprehensive product strategy and roadmap
- [Project Context](./CLAUDE.md) - Development guidelines and project context

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database
- `npm run db:studio` - Open Prisma Studio

## Contributing

This is a personal project currently in MVP development. Contributions will be welcome once the core platform is stable.

## License

All rights reserved.

---

**Status**: 🚧 MVP in Development
**Last Updated**: November 12, 2025
