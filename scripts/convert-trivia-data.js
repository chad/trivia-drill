// Script to convert the trivia data from docs/data.txt format to our application schema
const fs = require('fs');

// Read the data.txt file
const dataText = fs.readFileSync('/home/user/trivia-drill/docs/data.txt', 'utf8');

// Extract the JSON from the markdown code block
const jsonMatch = dataText.match(/```json\n([\s\S]*?)\n```/);
if (!jsonMatch) {
  console.error('Could not find JSON in data.txt');
  process.exit(1);
}

const sourceData = JSON.parse(jsonMatch[1]);

// Category mapping from source format to our schema
const categoryMap = {
  'History': 'history',
  'Science & Nature': 'science',
  'Geography': 'geography',
  'Sports': 'sports',
  'Entertainment': 'pop_culture_movies',
  'Music': 'pop_culture_music',
  'Literature & Language': 'literature',
  'Food & Drink': 'food_drink',
  'Art & Architecture': 'art'
};

// Extract answer from fact field (try to get key info)
function extractAnswer(fact) {
  // Try to extract the main subject or answer from the fact
  const patterns = [
    /^([^,]+),/,  // First part before comma
    /^([\w\s]+) is/,  // Subject before "is"
    /^([\w\s]+) was/,  // Subject before "was"
    /^([\w\s]+) are/,  // Subject before "are"
    /^([\w\s]+) has/,  // Subject before "has"
    /^([\w\s]+) have/  // Subject before "have"
  ];

  for (const pattern of patterns) {
    const match = fact.match(pattern);
    if (match) return match[1].trim();
  }

  // Default to first few words
  return fact.split(' ').slice(0, 5).join(' ');
}

// Convert questions
const questions = [];
let questionCount = 0;

sourceData.pub_trivia_taxonomy.categories.forEach(category => {
  const categoryKey = categoryMap[category.category_name] || 'history';

  category.subcategories.forEach(subcategory => {
    subcategory.facts.forEach(fact => {
      questionCount++;

      const question = {
        id: fact.id,
        question: fact.question_example,
        answer: extractAnswer(fact.fact),
        category: categoryKey,
        difficulty: fact.difficulty.toLowerCase(),
        explanation: fact.fact + (fact.memory_tip ? '. Memory tip: ' + fact.memory_tip : ''),
        tags: fact.tags || [],
        verified: true,
        source: fact.verified_sources ? fact.verified_sources.join(', ') : undefined
      };

      questions.push(question);
    });
  });
});

// Create metadata
const categoryStats = {};
questions.forEach(q => {
  categoryStats[q.category] = (categoryStats[q.category] || 0) + 1;
});

const difficultyStats = {};
questions.forEach(q => {
  difficultyStats[q.difficulty] = (difficultyStats[q.difficulty] || 0) + 1;
});

const output = {
  version: '1.0',
  lastUpdated: new Date().toISOString().split('T')[0],
  totalQuestions: questions.length,
  description: 'Comprehensive pub trivia knowledge database',
  categories: categoryStats,
  difficultyBreakdown: difficultyStats,
  questions: questions
};

// Write to file
fs.writeFileSync(
  '/home/user/trivia-drill/data/questions.json',
  JSON.stringify(output, null, 2)
);

console.log('✓ Successfully converted ' + questions.length + ' questions');
console.log('✓ Categories: ' + Object.keys(categoryStats).join(', '));
console.log('✓ Category breakdown:');
Object.entries(categoryStats).forEach(([cat, count]) => {
  console.log('  - ' + cat + ': ' + count + ' questions');
});
console.log('✓ Difficulty breakdown:');
Object.entries(difficultyStats).forEach(([diff, count]) => {
  console.log('  - ' + diff + ': ' + count + ' questions');
});
