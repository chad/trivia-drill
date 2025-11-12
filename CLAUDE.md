# Trivia Drill - Project Context

## Project Overview

**Trivia Drill** is a web-based learning platform designed to help users master general knowledge for pub trivia competitions. The platform uses scientifically-proven learning techniques including spaced repetition, active recall, interleaving, and visual-spatial learning.

## Key Differentiators

- **NOT a simple flashcard system**: Uses advanced learning modes including interactive maps, visual associations, and varied question formats
- **Age-adaptive content**: Helps users learn content outside their generation (e.g., older users learning modern pop culture, younger users learning historical references)
- **Multiplayer & social**: Friend challenges, teams, leaderboards, study groups
- **Research-based**: Built on cognitive science principles for maximum retention

## Tech Stack (Planned)

### Frontend
- React with TypeScript
- Tailwind CSS for styling
- D3.js for maps and visualizations
- Framer Motion for animations

### Backend
- Node.js with Express or Next.js API routes
- PostgreSQL for database
- Redis for caching
- JWT authentication
- WebSockets for real-time multiplayer

### Hosting
- Frontend: Vercel or Netlify
- Backend: Railway, Render, or AWS
- Database: Supabase, Neon, or AWS RDS

## Core Learning Principles

1. **Spaced Repetition**: Questions resurface at optimal intervals (1d → 3d → 7d → 14d → 30d)
2. **Active Recall**: Users generate answers from memory rather than passive recognition
3. **Interleaving**: Mix categories rather than blocking same-category questions
4. **Visual-Spatial Learning**: Interactive maps for geography, languages, religions, historical events
5. **Gamification**: Progress tracking, achievements, streaks, leaderboards

## Key Features

### Learning Modes
1. **Daily Drill**: 15-20 min personalized session, core learning mode
2. **Map Explorer**: Interactive maps for visual learning (world religions, languages, geography, historical events)
3. **Category Deep Dive**: Focus on specific knowledge areas
4. **Challenge Mode**: Timed trivia rounds, solo or multiplayer
5. **Age-Bridge Mode**: Curated content to fill generational knowledge gaps

### Social Features
- Friend challenges (asynchronous)
- Teams (2-6 players)
- Leaderboards (global, friends, categories)
- Study groups with shared progress

### Progress Tracking
- Knowledge heat maps (category strengths/weaknesses)
- Retention curves over time
- Streak tracking
- Predicted trivia performance scores
- Smart recommendations

## Content Strategy

- **JSON database** of general knowledge questions (user is compiling)
- Categories: History, Geography, Science, Pop Culture (Music, Movies, TV), Sports, Literature, Art, Current Events, Technology, Food & Drink
- Each question tagged with era (1950s-2020s), difficulty, and cultural relevance
- Target: 20,000+ questions for sustained engagement

## Development Phases

1. **Phase 1 (MVP)**: Auth, basic spaced repetition, Daily Drill mode, mobile-responsive
2. **Phase 2**: Map Explorer, enhanced algorithms, analytics, Age-Bridge mode, achievements
3. **Phase 3**: Multiplayer, challenges, teams, leaderboards
4. **Phase 4**: Polish, scale, mobile app, advanced features

## Current Status

- **Phase**: Initial setup and planning
- **Completed**:
  - Product plan created (docs/PRODUCT_PLAN.md)
  - Research on learning techniques and cognitive science
  - Project structure initialized
- **Next Steps**: Begin MVP development

## Important Notes

- Focus on MVP features first - don't get distracted by advanced features
- Prioritize learning effectiveness over flashy features
- User testing early and often to validate learning approach
- Content quality is critical - ensure questions are clear, accurate, and interesting
- Mobile experience is essential (many people learn on phones)

## Documentation

- **Product Plan**: `/docs/PRODUCT_PLAN.md` - Comprehensive product strategy, features, and roadmap
- Additional docs should be added to `/docs/` directory as needed

## Research Sources

Key findings incorporated into product design:
- Spaced repetition can improve retention by 200% vs. massed practice
- Active recall improves retention by 50-70% vs. passive recognition
- Interleaving improves categorization and long-term retention
- Visual-spatial learning (maps, method of loci) creates stronger memory traces
- Gamification with cognitive benefits reduces cognitive load while increasing motivation

## Target Audience

- Pub trivia enthusiasts (ages 21-65+)
- Trivia team members
- Lifelong learners
- Social groups seeking engaging learning activities

## Success Metrics (Future)

- Retention rate of learned material (7, 14, 30 days)
- Daily/Weekly active users
- Average session duration (target: 15-20 min)
- Streak retention
- User engagement with multiplayer features
- Net Promoter Score

---

**Last Updated**: November 12, 2025
**Project Started**: November 12, 2025
