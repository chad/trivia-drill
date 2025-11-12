# Trivia Drill - Product Plan

## Executive Summary

Trivia Drill is a web-based learning platform designed to help users master general knowledge through scientifically-proven learning techniques. Unlike traditional flashcard systems, Trivia Drill employs advanced cognitive science principles including spaced repetition, interleaving, active recall, and visual-spatial learning to maximize retention and make learning engaging and fun.

The platform will feature multiplayer capabilities, progress tracking, and age-adaptive content to ensure users of all ages can improve their performance at pub trivia and general knowledge competitions.

## Vision and Goals

### Primary Vision
Create the most effective and enjoyable way to master general knowledge for trivia competitions by combining cognitive science research with engaging game mechanics.

### Core Goals
- **Maximize Retention**: Use evidence-based learning techniques to ensure long-term memory formation
- **Personalized Learning**: Adapt to each user's knowledge gaps and learning pace
- **Cross-Generational Appeal**: Enable users of all ages to learn content relevant to their gaps (e.g., older users learning modern pop culture, younger users learning historical references)
- **Social Engagement**: Foster community through multiplayer features and friendly competition
- **Track Progress**: Provide detailed analytics on learning progress and areas for improvement

## Target Audience

### Primary Users
- Pub trivia enthusiasts (ages 21-65+)
- Trivia team members seeking to improve performance
- Lifelong learners interested in general knowledge
- Social groups looking for engaging learning activities

### User Personas
1. **The Competitive Trivia Player** (25-45): Plays regularly, wants to identify and fix knowledge gaps
2. **The Social Learner** (30-60): Enjoys learning with friends, motivated by group activities
3. **The Generation-Bridger** (45-70): Wants to stay current with modern culture and references
4. **The Rising Star** (18-30): Younger player wanting to build foundational knowledge in history, geography, and classic culture

## Core Learning Principles (Research-Based)

### 1. Spaced Repetition
**Research Foundation**: Studies show spaced repetition can improve retention by 200% compared to massed practice. The optimal spacing interval increases with each successful recall.

**Implementation**:
- Adaptive algorithm (based on MEMORIZE research) that schedules reviews at optimal intervals
- Items answered incorrectly appear more frequently
- Successfully recalled items gradually increase in spacing (1 day → 3 days → 7 days → 14 days → 30 days)
- Users build long-term memory formation through scientifically-timed reviews

### 2. Active Recall & Retrieval Practice
**Research Foundation**: Generating answers from memory (vs. passive recognition) creates stronger neural pathways and improves retention by 50-70%.

**Implementation**:
- Questions require typing or selecting answers (not just recognition)
- Progressive disclosure: start with harder recall, fall back to multiple choice if needed
- "Explain your reasoning" prompts for deeper processing
- Immediate feedback with explanations

### 3. Interleaving
**Research Foundation**: Mixing topics improves categorization skills and long-term retention compared to blocked practice.

**Implementation**:
- Sessions mix categories (history, geography, pop culture, science, etc.)
- Never drill the same category twice in a row
- Algorithm ensures varied yet relevant content
- Helps users distinguish between similar concepts

### 4. Visual-Spatial Learning
**Research Foundation**: Spatial memory and visual associations create stronger, more durable memory traces. The "method of loci" and visual grouping significantly improve recall.

**Implementation**:
- Interactive map-based learning modes:
  - World religions map: Click countries to learn dominant religions
  - Language families map: Visual representation of language distributions
  - Historical events timeline with geographic context
  - Cultural constellation maps: Group related concepts spatially
- Visual mnemonics and associations
- Image-based questions where applicable

### 5. Gamification with Cognitive Benefits
**Research Foundation**: When properly designed, gamification reduces cognitive load while increasing motivation and engagement, leading to improved learning outcomes.

**Implementation**:
- Progress visualization (skill trees, knowledge maps)
- Achievement system tied to learning milestones (not just completion)
- Leaderboards for friendly competition
- Daily streaks and challenges
- Adaptive difficulty that maintains optimal challenge level

## Key Features

### Learning Modes

#### 1. Daily Drill (Core Mode)
- 15-20 minute personalized session
- Adaptive content based on user's knowledge gaps
- Mix of review items (spaced repetition) and new material
- Interleaved categories
- Progress tracking and immediate feedback

#### 2. Map Explorer (Visual Learning)
Interactive visual learning experiences:
- **Geography Mastery**: Countries, capitals, regions
- **World Religions Map**: Click and learn religious distributions
- **Language Families**: Visualize and learn language relationships
- **Historical Events Map**: Learn events in geographic context
- **Cultural Connections**: Visual clustering of related concepts

#### 3. Category Deep Dive
- Focus on specific knowledge areas when needed
- Still uses spaced repetition and interleaving within category
- Useful for targeted improvement

#### 4. Challenge Mode
- Timed trivia rounds simulating pub trivia conditions
- Mixed categories with varying difficulty
- Competitive scoring
- Can be played solo or multiplayer

#### 5. Age-Bridge Mode
**Solving the generation gap problem**:
- **For Older Users**: Curated modern pop culture, recent music, current events, technology terms
- **For Younger Users**: Classic literature, 20th century history, traditional cultural references, older music
- Personalized based on birth year and self-identified gaps
- "Pop Culture Decades" drill: Focus on specific decades you missed

### Progress Tracking & Analytics

#### Personal Dashboard
- Knowledge heat map: Visual representation of strong/weak categories
- Retention curves: Track how well you remember information over time
- Streak tracking and learning consistency
- Time invested vs. knowledge gained metrics
- Predicted trivia performance scores

#### Smart Recommendations
- "Your weakest categories this week"
- "Topics you haven't reviewed in optimal window"
- "Recommended Age-Bridge content for you"
- "Challenge your friend in [category]"

### Multiplayer Features

#### 1. Friend Challenges
- Send direct challenges to friends
- Asynchronous gameplay (doesn't require simultaneous play)
- Category-specific or mixed challenges
- Results comparison with explanations

#### 2. Team Mode
- Form trivia teams (2-6 players)
- Shared knowledge heat maps showing team strengths/weaknesses
- Team challenges and practice rounds
- Complementary learning: system identifies which team member should focus on which categories

#### 3. Leaderboards
- Weekly/monthly global leaderboards
- Friend leaderboards
- Category-specific rankings
- "Most Improved" tracking

#### 4. Study Groups
- Create learning groups with shared progress
- Group challenges and competitions
- Collaborative learning sessions
- Discussion boards for explaining answers

### Authentication & User Management

**Simple but Secure**:
- Email/password authentication
- OAuth options (Google, Apple)
- Guest mode for trying the platform
- Profile customization (birth year for age-appropriate content, favorite trivia venues, skill level)
- Privacy controls for leaderboard participation

## Technical Architecture

### Frontend
- **Framework**: React with TypeScript
- **State Management**: Redux Toolkit or Zustand
- **UI Components**: Tailwind CSS with custom component library
- **Data Visualization**: D3.js for maps and progress charts
- **Animations**: Framer Motion for smooth interactions

### Backend
- **API**: Node.js with Express or Next.js API routes
- **Database**: PostgreSQL for relational data (users, progress, questions)
- **Caching**: Redis for session management and frequently accessed data
- **Authentication**: JWT tokens with refresh mechanism
- **Real-time**: WebSockets (Socket.io) for live multiplayer features

### Data Structure
- **Question Database**: JSON format (user-provided)
  - Structured with categories, difficulty levels, tags
  - Metadata for spaced repetition algorithm
  - Visual assets (maps, images) linked to questions
- **User Progress**: Normalized database schema
  - Question history (timestamp, correct/incorrect, response time)
  - Spaced repetition scheduling data
  - Category proficiency scores

### Algorithms
- **Spaced Repetition**: SM-2 algorithm (or similar) with custom modifications
- **Difficulty Adjustment**: ELO-style rating system for questions and users
- **Content Selection**: Weighted random selection based on:
  - Spaced repetition schedule
  - Category weakness
  - Interleaving requirements
  - User preferences

### Hosting & Infrastructure
- **Frontend**: Vercel or Netlify
- **Backend**: Railway, Render, or AWS
- **Database**: Managed PostgreSQL (Supabase, Neon, or AWS RDS)
- **CDN**: Cloudflare for static assets
- **Monitoring**: Sentry for error tracking, PostHog for analytics

## User Experience

### Onboarding Flow
1. **Welcome & Demo**: 3-question interactive demo showing the learning style
2. **Profile Setup**: Birth year, trivia experience level, favorite categories
3. **Initial Assessment**: 20-question quiz to establish baseline (optional but recommended)
4. **First Daily Drill**: Guided first session with tooltips

### Session Flow (Daily Drill)
1. **Welcome Screen**: Streak count, daily motivation quote
2. **Question Sequence**: 15-20 questions with:
   - Clear question text
   - Appropriate input method (typing, multiple choice, map interaction)
   - Timer (optional, for challenge mode)
   - Immediate feedback with explanation
   - "Learn more" link for deeper context
3. **Session Summary**:
   - Questions correct/incorrect
   - New concepts learned
   - Categories practiced
   - Next review schedule preview
   - Encouragement and next steps

### Visual Design Principles
- **Clean & Focused**: Minimize distractions during learning
- **Colorful but Not Overwhelming**: Use color to indicate categories and progress
- **Responsive**: Mobile-first design for learning on the go
- **Accessible**: WCAG 2.1 AA compliance, keyboard navigation, screen reader support
- **Playful but Professional**: Fun without being childish

## Age-Appropriate Content Strategy

### Content Categorization
Every question tagged with:
- **Era Tags**: 1950s, 1960s, 1970s, 1980s, 1990s, 2000s, 2010s, 2020s
- **Cultural Relevance**: Classic (timeless), Period-Specific, Current
- **Age Cohort Gaps**: Likely known by users born before/after certain year

### Adaptive Content Delivery
- **User Birth Year**: Primary input for gap detection
- **Self-Assessment**: "I'm weak in: modern music, classic literature, 80s movies" etc.
- **Performance Data**: System learns which eras user struggles with
- **Age-Bridge Recommendations**: Proactive suggestions for gap areas

### Example Scenarios
- **User born 1955**: System prioritizes 2000s-2020s music, modern technology, recent history
- **User born 1998**: System prioritizes 1960s-1980s history, classic rock, Cold War events, vintage pop culture
- **Balanced approach**: Don't overwhelm with gap content; mix with known-strength areas

## Gamification & Engagement

### Achievement System
**Learning-Focused Achievements** (not just participation):
- "Geography Master": 90%+ accuracy in 100 geography questions
- "Century Hopper": Master content from 5 different decades
- "Map Maven": Complete 50 map-based learning sessions
- "Streak Legend": 30-day learning streak
- "Renaissance Mind": 70%+ proficiency across all categories
- "Time Traveler": Master Age-Bridge content from 3 different eras

### Daily Challenges
- "Question of the Day": Special question, all users see same one
- "Category Spotlight": Featured category with bonus points
- "Map Mystery": Daily map-based puzzle

### Visual Progress
- **Knowledge Tree**: Visual skill tree showing category mastery
- **World Map Progress**: Color-code countries/regions as you learn them
- **Timeline**: Your learning journey visualized over time
- **Category Radar Chart**: Visual representation of category strengths

## Development Phases

### Phase 1: MVP (8-10 weeks)
**Core Features**:
- User authentication (email/password)
- Question database integration (JSON)
- Daily Drill mode with basic spaced repetition
- Simple progress tracking
- Basic category selection
- Mobile-responsive web design

**Success Criteria**:
- Users can create accounts and complete daily drills
- Spaced repetition algorithm functions correctly
- Questions are properly categorized and served

### Phase 2: Enhanced Learning (6-8 weeks)
**Add**:
- Map Explorer mode with first 3 map types
- Improved spaced repetition algorithm
- Detailed analytics dashboard
- Age-Bridge mode with era-based content
- Achievement system
- Visual progress indicators

**Success Criteria**:
- Users engage with map-based learning
- Age-appropriate content recommendations working
- Retention metrics show improvement over time

### Phase 3: Social & Multiplayer (6-8 weeks)
**Add**:
- Friend system
- Asynchronous challenges
- Leaderboards
- Team mode
- Challenge Mode (timed trivia)
- Social sharing features

**Success Criteria**:
- Users invite friends and form teams
- Multiplayer challenges are engaging
- Increased retention due to social features

### Phase 4: Polish & Scale (Ongoing)
**Add**:
- Additional map types
- Advanced analytics
- Content creator tools (for adding questions)
- Mobile app (React Native)
- API for third-party integrations
- Advanced gamification features
- A/B testing for learning algorithms

## Success Metrics

### Learning Effectiveness
- **Retention Rate**: % of questions answered correctly after 7, 14, 30 days
- **Knowledge Growth**: Increase in category proficiency scores over time
- **Spaced Repetition Efficiency**: Optimal interval adherence and effectiveness

### User Engagement
- **Daily Active Users (DAU)**: Target 40%+ of registered users
- **Weekly Active Users (WAU)**: Target 70%+ of registered users
- **Average Session Duration**: Target 15-20 minutes
- **Streak Retention**: % of users maintaining 7+ day streaks

### Social & Multiplayer
- **Friend Connections**: Average friends per active user
- **Challenge Participation**: % of users who engage with challenges
- **Team Formation**: % of users in active teams

### Business Metrics
- **User Acquisition Cost (CAC)**: Target organic growth primarily
- **User Retention**: 30-day, 60-day, 90-day retention rates
- **Viral Coefficient**: Measure word-of-mouth growth
- **Net Promoter Score (NPS)**: Target 50+

## Monetization Strategy (Future Consideration)

While initially free to build user base, potential revenue models:
- **Freemium**: Basic features free, premium features (advanced analytics, unlimited challenges, exclusive content) for $5-10/month
- **Team Subscriptions**: Enhanced features for trivia teams
- **Ad-Supported**: Non-intrusive ads for free tier users
- **Trivia Venue Partnerships**: White-label solutions for bars/venues

## Content Strategy

### Question Database Requirements
- **Minimum**: 5,000 questions across 10+ categories
- **Target**: 20,000+ questions for sustained engagement
- **Categories**: History, Geography, Science, Pop Culture (Music, Movies, TV), Sports, Literature, Art, Current Events, Technology, Food & Drink
- **Difficulty Levels**: Easy, Medium, Hard (algorithmic adjustment based on user performance)
- **Quality Standards**: Clear, unambiguous, factually verified, interesting

### Content Growth
- **User Submissions**: Community contribution system with moderation
- **Regular Updates**: Weekly new content additions, especially current events
- **Era Balancing**: Ensure coverage across all decades
- **Gap Analysis**: Use aggregate data to identify under-served knowledge areas

## Risk Mitigation

### Technical Risks
- **Scale**: Design for horizontal scaling from start
- **Data Loss**: Regular backups, database replication
- **Performance**: Caching strategy, CDN for assets, optimized queries

### User Experience Risks
- **Learning Fatigue**: Optimal session length (15-20 min), optional breaks
- **Difficulty Balance**: Adaptive algorithms, user control over difficulty
- **Content Accuracy**: Fact-checking process, user reporting system

### Business Risks
- **User Acquisition**: Focus on organic growth, word-of-mouth, trivia community engagement
- **Retention**: Continuous engagement features, social elements, fresh content
- **Competition**: Differentiate through superior learning science and social features

## Conclusion

Trivia Drill represents a unique opportunity to combine cutting-edge cognitive science with engaging game mechanics to create the definitive platform for general knowledge mastery. By focusing on evidence-based learning techniques, personalized content delivery, and social engagement, we can build a product that not only helps users win at pub trivia but also makes lifelong learning genuinely enjoyable.

The platform's emphasis on visual-spatial learning, age-adaptive content, and multiplayer features sets it apart from simple flashcard apps, offering a comprehensive solution for trivia enthusiasts of all ages and skill levels.

---

**Document Version**: 1.0
**Last Updated**: November 12, 2025
**Next Review**: After MVP completion
