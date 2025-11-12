# Question Database

This directory contains the question database in JSON format.

## File Structure

- **`questions.json`** - Main trivia database (75 questions, verified and sourced)
- `sample-questions.json` - Sample questions for development reference
- `TRIVIA_DATABASE_SUMMARY.md` - Detailed statistics and documentation
- Additional question files will be added as content grows

## Current Database Status

✅ **75 verified questions** loaded from comprehensive trivia taxonomy
- **History**: 25 questions (US Presidents, Wars, WWII, World History)
- **Science & Nature**: 25 questions (Human Body, Animals, Chemistry, Astronomy, Earth Science)
- **Geography**: 25 questions (World Capitals, US Geography, Physical Geography, Landmarks, Flags)

**Difficulty Distribution:**
- Easy: 39 questions (52%)
- Medium: 28 questions (37%)
- Hard: 8 questions (11%)

See `TRIVIA_DATABASE_SUMMARY.md` for complete breakdown.

## Question Format

Each question follows this schema:

```json
{
  "id": "unique_id",
  "question": "The question text",
  "answer": "The correct answer",
  "category": "category_name",
  "difficulty": "easy|medium|hard",
  "era": "1950s|1960s|...",
  "culturalRelevance": "classic|period_specific|current",
  "choices": ["option1", "option2", "option3", "option4"],
  "explanation": "Additional context about the answer",
  "tags": ["tag1", "tag2"],
  "imageUrl": "optional_image_url",
  "source": "optional_source",
  "verified": true
}
```

## Categories

- `history` - Historical events, figures, and dates
- `geography` - Countries, capitals, landmarks, physical geography
- `science` - Physics, chemistry, biology, astronomy
- `pop_culture_music` - Music artists, albums, songs
- `pop_culture_movies` - Films, directors, actors
- `pop_culture_tv` - TV shows, series, characters
- `sports` - Sports history, records, athletes
- `literature` - Books, authors, literary movements
- `art` - Visual arts, artists, movements
- `current_events` - Recent news and events
- `technology` - Tech history, innovations, companies
- `food_drink` - Cuisine, beverages, food history

## Content Goals

- **Current**: ✅ 75 questions (History, Science, Geography)
- **MVP Target**: 500-1,000 questions across all categories
- **Phase 2**: 5,000+ questions
- **Long-term**: 20,000+ questions

Framework available in `docs/data.txt` for expanding to 2,100+ questions across additional categories (Sports, Music, Literature, Food & Drink, Pop Culture, Math, Art, etc.)

## Quality Standards

1. Questions must be clear and unambiguous
2. Answers must be factually correct and verifiable
3. Explanations should provide interesting context
4. Era and cultural relevance tags help with age-adaptive content
5. All questions should be marked as `verified: true` after fact-checking
