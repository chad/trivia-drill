# Question Database

This directory contains the question database in JSON format.

## File Structure

- `sample-questions.json` - Sample questions for development and testing
- Additional question files will be added as content grows

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

- **MVP**: 500-1,000 questions across all categories
- **Phase 2**: 5,000+ questions
- **Long-term**: 20,000+ questions

## Quality Standards

1. Questions must be clear and unambiguous
2. Answers must be factually correct and verifiable
3. Explanations should provide interesting context
4. Era and cultural relevance tags help with age-adaptive content
5. All questions should be marked as `verified: true` after fact-checking
