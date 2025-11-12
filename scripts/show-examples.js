const fs = require('fs');
const data = JSON.parse(fs.readFileSync('/home/user/trivia-drill/data/questions.json', 'utf8'));

// Get one example from each category
const categories = {};
data.questions.forEach(q => {
  if (!categories[q.category]) {
    categories[q.category] = q;
  }
});

console.log('\n=== EXAMPLE QUESTIONS FROM EACH CATEGORY ===\n');

Object.entries(categories).forEach(([category, question]) => {
  const catName = category.toUpperCase().replace(/_/g, ' ');
  console.log('📚 CATEGORY: ' + catName);
  console.log('─────────────────────────────────────────────────');
  console.log('ID: ' + question.id);
  console.log('Question: ' + question.question);
  console.log('Answer: ' + question.answer);
  console.log('Difficulty: ' + question.difficulty);
  console.log('\nExplanation: ' + question.explanation);
  console.log('\nTags: ' + question.tags.join(', '));
  console.log('Sources: ' + question.source);
  console.log('\n');
});

console.log('==============================================\n');
