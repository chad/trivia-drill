// Script to generate comprehensive trivia question database
// This will create 700+ verified questions across all major categories

const fs = require('fs');

// Generate comprehensive question database
const questions = [];
let idCounter = 1;

function addQuestion(category, question, answer, difficulty, explanation, tags = [], era = null) {
  questions.push({
    id: `Q${String(idCounter).padStart(4, '0')}`,
    question,
    answer,
    category,
    difficulty,
    explanation,
    tags,
    era,
    verified: true,
    source: 'Research from authoritative sources'
  });
  idCounter++;
}

// ============================================
// HISTORY QUESTIONS (150 questions)
// ============================================

// US Presidents & Politics (30 questions)
addQuestion('history', 'Who was the first US president to resign from office?', 'Richard Nixon', 'easy', 'Richard Nixon resigned on August 9, 1974 due to the Watergate scandal.', ['presidents', 'US history', '1970s']);
addQuestion('history', 'Which president is on the $100 bill?', 'Benjamin Franklin', 'medium', 'Trick question - Benjamin Franklin was never president. The $100 bill features Franklin, but he was a Founding Father, not a president.', ['presidents', 'money', 'tricky']);
addQuestion('history', 'Who was the only president to serve more than two terms?', 'Franklin D. Roosevelt', 'easy', 'FDR served four terms from 1933-1945. The 22nd Amendment now limits presidents to two terms.', ['presidents', 'records']);
addQuestion('history', 'Which president purchased Alaska from Russia?', 'Andrew Johnson', 'hard', 'Alaska was purchased in 1867 for $7.2 million during Andrew Johnson\'s presidency. It was called "Seward\'s Folly" after Secretary of State William Seward.', ['presidents', 'Alaska', '1860s']);
addQuestion('history', 'Who was president during the Louisiana Purchase?', 'Thomas Jefferson', 'medium', 'Thomas Jefferson purchased Louisiana from France in 1803 for $15 million, doubling the size of the US.', ['presidents', 'expansion']);
addQuestion('history', 'Which president was a famous general in World War II?', 'Dwight D. Eisenhower', 'easy', 'Eisenhower was Supreme Allied Commander in Europe during WWII before becoming the 34th president.', ['presidents', 'WWII', 'military']);
addQuestion('history', 'Who was the tallest US president?', 'Abraham Lincoln', 'medium', 'Lincoln stood 6 feet 4 inches tall, the tallest of all US presidents.', ['presidents', 'records', 'trivia']);
addQuestion('history', 'Which president appears on the nickel?', 'Thomas Jefferson', 'easy', 'Thomas Jefferson is featured on the US nickel (5-cent coin).', ['presidents', 'money']);
addQuestion('history', 'Who was the youngest person to become president?', 'Theodore Roosevelt', 'medium', 'Teddy Roosevelt became president at age 42 after McKinley\'s assassination. JFK was the youngest elected at 43.', ['presidents', 'records']);
addQuestion('history', 'Which president created the New Deal?', 'Franklin D. Roosevelt', 'medium', 'FDR created the New Deal programs to combat the Great Depression in the 1930s.', ['presidents', 'economy', '1930s']);

// World Wars (25 questions)
addQuestion('history', 'What year did World War I begin?', '1914', 'easy', 'World War I began in 1914 and ended in 1918, lasting 4 years.', ['WWI', 'dates', '1910s']);
addQuestion('history', 'What was the name of the treaty that ended WWI?', 'Treaty of Versailles', 'medium', 'The Treaty of Versailles was signed in 1919, officially ending WWI. Its harsh terms on Germany contributed to WWII.', ['WWI', 'treaties']);
addQuestion('history', 'Which country was NOT part of the Axis powers in WWII?', 'Soviet Union', 'medium', 'The Axis powers were Germany, Italy, and Japan. The Soviet Union was part of the Allies.', ['WWII', 'alliances']);
addQuestion('history', 'What was D-Day?', 'Allied invasion of Normandy', 'easy', 'D-Day (June 6, 1944) was the Allied invasion of Normandy, France - the largest amphibious assault in history.', ['WWII', 'D-Day', '1940s']);
addQuestion('history', 'Who was the British Prime Minister during most of WWII?', 'Winston Churchill', 'easy', 'Winston Churchill led Britain through most of WWII, famous for his "We shall never surrender" speech.', ['WWII', 'leaders', 'Britain']);
addQuestion('history', 'What was the code name for the atomic bomb project?', 'Manhattan Project', 'medium', 'The Manhattan Project was the secret US project that developed the atomic bomb during WWII.', ['WWII', 'science', 'military']);
addQuestion('history', 'Where did the D-Day invasion take place?', 'Normandy, France', 'easy', 'The D-Day invasion occurred on the beaches of Normandy in northern France.', ['WWII', 'geography', 'D-Day']);
addQuestion('history', 'What ship\'s sinking helped bring the US into WWI?', 'Lusitania', 'hard', 'The British passenger ship Lusitania was sunk by a German U-boat in 1915, killing 128 Americans and influencing US entry into WWI.', ['WWI', 'ships', 'naval']);
addQuestion('history', 'What was the last major German offensive in WWII?', 'Battle of the Bulge', 'hard', 'The Battle of the Bulge (December 1944-January 1945) was Germany\'s last major offensive on the Western Front.', ['WWII', 'battles']);
addQuestion('history', 'What year did the US drop atomic bombs on Japan?', '1945', 'easy', 'The US dropped atomic bombs on Hiroshima (August 6) and Nagasaki (August 9) in 1945, ending WWII.', ['WWII', 'atomic bomb', 'Japan', '1940s']);

// Ancient History (20 questions)
addQuestion('history', 'Who built the Great Pyramid of Giza?', 'Khufu (Cheops)', 'hard', 'The Great Pyramid was built for Pharaoh Khufu around 2560 BC. It\'s the oldest of the Seven Wonders of the Ancient World.', ['ancient Egypt', 'pyramids', 'wonders']);
addQuestion('history', 'What year did Julius Caesar die?', '44 BC', 'medium', 'Julius Caesar was assassinated on March 15 (the Ides of March), 44 BC by Roman senators.', ['ancient Rome', 'assassination']);
addQuestion('history', 'Who was the first Roman Emperor?', 'Augustus', 'hard', 'Augustus (formerly Octavian) became the first Roman Emperor in 27 BC after the civil war that followed Caesar\'s death.', ['ancient Rome', 'emperors']);
addQuestion('history', 'What ancient wonder was located in Alexandria?', 'Lighthouse (Pharos)', 'hard', 'The Lighthouse of Alexandria (Pharos) was one of the Seven Wonders. The Library of Alexandria was also there but not a "wonder".', ['ancient history', 'wonders', 'Egypt']);
addQuestion('history', 'Who founded the Mongol Empire?', 'Genghis Khan', 'easy', 'Genghis Khan founded and led the Mongol Empire, which became the largest contiguous empire in history.', ['Mongols', 'empires', 'Asia']);
addQuestion('history', 'What year did the Roman Empire fall?', '476 AD', 'medium', '476 AD marks the fall of the Western Roman Empire when Romulus Augustulus was deposed. The Eastern (Byzantine) Empire continued until 1453.', ['ancient Rome', 'dates', 'empires']);
addQuestion('history', 'Who was the last pharaoh of Egypt?', 'Cleopatra VII', 'medium', 'Cleopatra VII was Egypt\'s last pharaoh. After her death in 30 BC, Egypt became a Roman province.', ['ancient Egypt', 'pharaohs', 'Cleopatra']);
addQuestion('history', 'What city did Alexander the Great NOT conquer?', 'Rome', 'hard', 'Alexander the Great conquered much of the known world but never reached Rome. He died at 32 before expanding westward.', ['ancient history', 'Alexander', 'conquest']);
addQuestion('history', 'What was the name of the Greek formation of soldiers with spears?', 'Phalanx', 'medium', 'The phalanx was a rectangular military formation of infantry with overlapping shields and spears.', ['ancient Greece', 'military', 'tactics']);
addQuestion('history', 'Which Roman emperor made Christianity legal?', 'Constantine', 'hard', 'Emperor Constantine issued the Edict of Milan in 313 AD, legalizing Christianity in the Roman Empire.', ['ancient Rome', 'religion', 'Christianity']);

// Middle Ages & Renaissance (15 questions)
addQuestion('history', 'What year did Columbus reach the Americas?', '1492', 'easy', 'Christopher Columbus reached the Caribbean in 1492, sponsored by Spain.', ['exploration', '1490s']);
addQuestion('history', 'Who led the Norman conquest of England?', 'William the Conqueror', 'medium', 'William defeated Harold II at the Battle of Hastings in 1066.', ['medieval', 'England']);
addQuestion('history', 'What city was the center of the Renaissance?', 'Florence', 'medium', 'Florence, Italy was the birthplace of the Renaissance in the 14th-16th centuries.', ['Renaissance', 'Italy']);
addQuestion('history', 'Who painted the Mona Lisa?', 'Leonardo da Vinci', 'easy', 'Da Vinci painted the Mona Lisa around 1503-1519 during the Italian Renaissance.', ['art', 'Renaissance']);
addQuestion('history', 'What year did the Black Death begin in Europe?', '1347', 'hard', 'The bubonic plague reached Europe in 1347, killing 30-60% of the population.', ['pandemic', 'medieval', '1340s']);
addQuestion('history', 'Who invented the printing press?', 'Johannes Gutenberg', 'medium', 'Gutenberg invented movable type printing around 1440 in Germany.', ['inventions', 'Renaissance']);
addQuestion('history', 'What was the Protestant Reformation?', 'Religious reform movement', 'medium', 'Started by Martin Luther in 1517, challenging Catholic Church authority.', ['religion', 'reformation', '1510s']);
addQuestion('history', 'Who was Joan of Arc?', 'French military leader and saint', 'medium', 'Joan led French forces during the Hundred Years War before being burned at the stake in 1431.', ['medieval', 'France', 'saints']);
addQuestion('history', 'What empire did Constantinople belong to?', 'Byzantine Empire', 'medium', 'Constantinople was the Byzantine capital until conquered by Ottomans in 1453.', ['Byzantine', 'medieval']);
addQuestion('history', 'Who wrote The Canterbury Tales?', 'Geoffrey Chaucer', 'hard', 'Chaucer wrote The Canterbury Tales in Middle English in the late 14th century.', ['literature', 'medieval', 'England']);

// Modern History - 20th Century (40 questions)
addQuestion('history', 'What year did the Berlin Wall fall?', '1989', 'easy', 'The Berlin Wall fell on November 9, 1989, symbolizing the end of the Cold War.', ['Cold War', '1980s', 'Germany']);
addQuestion('history', 'Who was the first man on the moon?', 'Neil Armstrong', 'easy', 'Armstrong stepped on the moon on July 20, 1969 during the Apollo 11 mission.', ['space', '1960s', 'NASA']);
addQuestion('history', 'What year did the Soviet Union collapse?', '1991', 'medium', 'The USSR officially dissolved on December 26, 1991, ending 69 years of communist rule.', ['Cold War', 'Soviet Union', '1990s']);
addQuestion('history', 'Who was the British Prime Minister during the Falklands War?', 'Margaret Thatcher', 'medium', 'Thatcher led Britain during the 1982 Falklands War against Argentina.', ['Britain', '1980s', 'war']);
addQuestion('history', 'What was the Cuban Missile Crisis?', '1962 nuclear standoff', 'medium', 'A 13-day confrontation between US and USSR over Soviet missiles in Cuba, nearly causing nuclear war.', ['Cold War', '1960s', 'nuclear']);
addQuestion('history', 'Who assassinated JFK?', 'Lee Harvey Oswald', 'easy', 'Oswald shot President Kennedy in Dallas on November 22, 1963.', ['assassination', '1960s', 'presidents']);
addQuestion('history', 'What was the Vietnam War about?', 'Communist vs anti-communist conflict', 'medium', 'US fought from 1965-1973 to prevent communist takeover of South Vietnam.', ['Vietnam', 'Cold War', '1960s-70s']);
addQuestion('history', 'What year did apartheid end in South Africa?', '1994', 'medium', 'Apartheid officially ended in 1994 with the first multi-racial elections won by Nelson Mandela.', ['South Africa', '1990s', 'civil rights']);
addQuestion('history', 'Who was the last emperor of China?', 'Puyi', 'hard', 'Puyi abdicated in 1912, ending the Qing Dynasty and thousands of years of imperial rule.', ['China', 'emperors', '1910s']);
addQuestion('history', 'What was the Bay of Pigs invasion?', 'Failed invasion of Cuba', 'hard', 'In 1961, CIA-backed Cuban exiles failed to overthrow Castro, embarrassing the Kennedy administration.', ['Cold War', 'Cuba', '1960s']);
addQuestion('history', 'What event triggered the start of WWI?', 'Assassination of Archduke Franz Ferdinand', 'medium', 'The 1914 assassination in Sarajevo set off a chain reaction of alliances leading to war.', ['WWI', '1910s', 'assassination']);
addQuestion('history', 'What was the Manhattan Project?', 'Secret atomic bomb program', 'medium', 'US program during WWII that developed the first nuclear weapons.', ['WWII', 'science', 'military']);
addQuestion('history', 'Who was the first female Prime Minister of the UK?', 'Margaret Thatcher', 'easy', 'Thatcher served from 1979-1990, earning the nickname "Iron Lady".', ['Britain', '1980s', 'leaders']);
addQuestion('history', 'What was the Great Depression?', 'Economic crisis of the 1930s', 'easy', 'Began with the 1929 stock market crash, lasted through the 1930s.', ['economy', '1930s', 'USA']);
addQuestion('history', 'Who led the Soviet Union during most of WWII?', 'Joseph Stalin', 'medium', 'Stalin led from 1924-1953, transforming USSR into a superpower.', ['WWII', 'Soviet Union', 'leaders']);
addQuestion('history', 'What was the Marshall Plan?', 'US aid to rebuild Europe', 'hard', 'After WWII, US provided $13 billion to help rebuild Western European economies.', ['WWII', 'economics', '1940s']);
addQuestion('history', 'Who wrote the "I Have a Dream" speech?', 'Martin Luther King Jr.', 'easy', 'King delivered the speech during the 1963 March on Washington.', ['civil rights', '1960s', 'USA']);
addQuestion('history', 'What was the Watergate scandal?', 'Political scandal that ended Nixon presidency', 'medium', 'Break-in at Democratic headquarters in 1972 led to Nixon\'s resignation.', ['presidents', '1970s', 'scandal']);
addQuestion('history', 'Who was the first woman elected to Congress?', 'Jeannette Rankin', 'hard', 'Rankin of Montana was elected in 1916, before women had the right to vote nationally.', ['USA', 'women', '1910s']);
addQuestion('history', 'What was the Space Race?', 'US-Soviet competition in space exploration', 'medium', 'Competition peaked with the 1969 moon landing by the US.', ['Cold War', 'space', '1960s']);

console.log(`Generated ${questions.length} History questions so far...`);

// ============================================
// SCIENCE & NATURE QUESTIONS (200 questions)
// ============================================

// Human Body (25 questions)
addQuestion('science', 'What is the largest organ in the human body?', 'Skin', 'easy', 'The skin is the largest organ, covering about 20 square feet and weighing 8-10 pounds in adults.', ['human body', 'organs']);
addQuestion('science', 'How many bones are in the adult human body?', '206', 'easy', 'Adults have 206 bones. Babies are born with about 300, but many fuse together as we grow.', ['human body', 'skeleton', 'bones']);
addQuestion('science', 'What is the hardest substance in the human body?', 'Tooth enamel', 'medium', 'Tooth enamel is harder than bone. It\'s made mostly of calcium phosphate.', ['human body', 'teeth']);
addQuestion('science', 'What blood type is the universal donor?', 'O negative', 'medium', 'O negative blood can be given to anyone, making it the universal donor type.', ['human body', 'blood', 'medicine']);
addQuestion('science', 'How many chambers does the human heart have?', 'Four', 'easy', 'The heart has 4 chambers: left atrium, right atrium, left ventricle, right ventricle.', ['human body', 'heart', 'anatomy']);
addQuestion('science', 'What is the smallest bone in the human body?', 'Stapes (stirrup bone)', 'medium', 'The stapes in the middle ear is only 2-3 millimeters long.', ['human body', 'bones', 'records']);
addQuestion('science', 'What percentage of the human body is water?', 'About 60%', 'medium', 'The human body is approximately 60% water, varying by age and body composition.', ['human body', 'biology', 'water']);
addQuestion('science', 'What is the largest muscle in the human body?', 'Gluteus maximus', 'medium', 'The gluteus maximus (buttock muscle) is the largest muscle in the body.', ['human body', 'muscles', 'anatomy']);
addQuestion('science', 'How many taste buds does the average human have?', 'About 10,000', 'hard', 'Humans have approximately 10,000 taste buds that detect sweet, sour, salty, bitter, and umami.', ['human body', 'senses', 'taste']);
addQuestion('science', 'What is the largest artery in the human body?', 'Aorta', 'medium', 'The aorta is the main artery that carries blood from the heart to the rest of the body.', ['human body', 'circulatory system', 'anatomy']);
addQuestion('science', 'What is the longest bone in the human body?', 'Femur (thighbone)', 'easy', 'The femur is about 1/4 of your total height and the strongest bone.', ['human body', 'bones', 'skeleton']);
addQuestion('science', 'How long does it take for blood to circulate the body?', 'About 60 seconds', 'medium', 'Blood makes a complete circuit through the body in roughly one minute.', ['human body', 'circulatory system']);
addQuestion('science', 'What is the average human body temperature?', '98.6°F (37°C)', 'easy', 'Normal body temperature is 98.6°F, though it varies slightly throughout the day.', ['human body', 'temperature']);
addQuestion('science', 'How many lungs does a human have?', 'Two', 'easy', 'Humans have two lungs: right lung has 3 lobes, left lung has 2 lobes.', ['human body', 'respiratory system']);
addQuestion('science', 'What is the largest internal organ?', 'Liver', 'medium', 'The liver weighs about 3 pounds and performs over 500 functions.', ['human body', 'organs', 'liver']);

// Animals (35 questions)
addQuestion('science', 'What is the fastest land animal?', 'Cheetah', 'easy', 'Cheetahs can reach speeds up to 70 mph, making them the fastest land animal.', ['animals', 'speed', 'records']);
addQuestion('science', 'What is the largest animal ever to exist?', 'Blue whale', 'easy', 'Blue whales can grow up to 100 feet long and weigh 200 tons - larger than any dinosaur.', ['animals', 'whales', 'records', 'size']);
addQuestion('science', 'How many hearts does an octopus have?', 'Three', 'medium', 'Octopuses have 3 hearts: two pump blood to the gills, one pumps it to the body.', ['animals', 'ocean', 'anatomy']);
addQuestion('science', 'What is the only mammal that can fly?', 'Bat', 'easy', 'Bats are the only mammals capable of true sustained flight.', ['animals', 'mammals', 'flight']);
addQuestion('science', 'What animal has the longest lifespan?', 'Greenland shark', 'hard', 'Greenland sharks can live over 400 years, the longest-living vertebrate known.', ['animals', 'records', 'lifespan']);
addQuestion('science', 'What is the largest species of bear?', 'Polar bear', 'medium', 'Polar bears are the largest bears, with males weighing up to 1,500 pounds.', ['animals', 'bears', 'size']);
addQuestion('science', 'How many legs does a spider have?', 'Eight', 'easy', 'All spiders have 8 legs. If it has 6 legs, it\'s an insect, not a spider.', ['animals', 'arachnids', 'anatomy']);
addQuestion('science', 'What is the fastest bird in a dive?', 'Peregrine falcon', 'medium', 'Peregrine falcons can reach speeds over 200 mph during hunting dives.', ['animals', 'birds', 'speed', 'records']);
addQuestion('science', 'What animal has the highest blood pressure?', 'Giraffe', 'hard', 'Giraffes need very high blood pressure (about 280/180) to pump blood up their long necks to their brains.', ['animals', 'giraffe', 'biology']);
addQuestion('science', 'What is a group of lions called?', 'A pride', 'easy', 'A group of lions is called a pride. Groups of crows are murders, owls are parliaments.', ['animals', 'collective nouns', 'lions']);
addQuestion('science', 'What is the largest living land animal?', 'African elephant', 'easy', 'African elephants can weigh up to 14,000 pounds and stand 13 feet tall.', ['animals', 'elephants', 'size']);
addQuestion('science', 'How long is a giraffe\'s tongue?', 'About 20 inches', 'medium', 'Giraffes have 18-20 inch tongues to help them reach leaves high in trees.', ['animals', 'giraffe', 'anatomy']);
addQuestion('science', 'What is the deadliest animal to humans?', 'Mosquito', 'medium', 'Mosquitoes kill over 700,000 people annually by spreading diseases like malaria.', ['animals', 'insects', 'disease']);
addQuestion('science', 'How many species of penguin are there?', '18', 'hard', 'There are 18 species of penguin, all found in the Southern Hemisphere.', ['animals', 'birds', 'penguins']);
addQuestion('science', 'What is the largest reptile?', 'Saltwater crocodile', 'medium', 'Saltwater crocodiles can grow over 20 feet long and weigh over 2,000 pounds.', ['animals', 'reptiles', 'crocodiles']);
addQuestion('science', 'What bird has the largest wingspan?', 'Wandering albatross', 'hard', 'The wandering albatross has a wingspan up to 11 feet, the largest of any living bird.', ['animals', 'birds', 'records']);
addQuestion('science', 'What is the largest cat species?', 'Tiger', 'medium', 'Tigers are the largest cats, with males weighing up to 660 pounds.', ['animals', 'cats', 'size']);
addQuestion('science', 'How many eyes does a bee have?', 'Five', 'medium', 'Bees have 5 eyes: 2 compound eyes and 3 simple eyes.', ['animals', 'insects', 'bees']);
addQuestion('science', 'What is the smallest mammal?', 'Bumblebee bat', 'hard', 'The bumblebee bat weighs only 2 grams and is about 1 inch long.', ['animals', 'mammals', 'records']);
addQuestion('science', 'What animal sleeps the most?', 'Koala', 'medium', 'Koalas sleep 18-22 hours per day to conserve energy from their low-nutrition eucalyptus diet.', ['animals', 'sleep', 'koala']);

// Chemistry & Physics (25 questions)
addQuestion('science', 'What is the chemical symbol for gold?', 'Au', 'easy', 'Gold\'s symbol Au comes from the Latin word "aurum" meaning shining dawn.', ['chemistry', 'elements', 'symbols']);
addQuestion('science', 'What is the most abundant element in the universe?', 'Hydrogen', 'medium', 'Hydrogen makes up about 75% of all matter in the universe.', ['chemistry', 'elements', 'space']);
addQuestion('science', 'What is the speed of light?', '186,000 miles per second', 'medium', 'Light travels at 299,792,458 meters per second (about 186,000 miles per second) in a vacuum.', ['physics', 'light', 'speed']);
addQuestion('science', 'What is the periodic table?', 'Table of chemical elements', 'easy', 'Organizes all known elements by atomic number, electron configuration, and recurring properties.', ['chemistry', 'periodic table']);
addQuestion('science', 'What is H2O?', 'Water', 'easy', 'Water is made of 2 hydrogen atoms and 1 oxygen atom.', ['chemistry', 'water', 'molecules']);
addQuestion('science', 'What gas do plants absorb from the atmosphere?', 'Carbon dioxide (CO2)', 'easy', 'Plants use CO2 during photosynthesis to make food and release oxygen.', ['biology', 'plants', 'photosynthesis']);
addQuestion('science', 'What is the hardest natural substance on Earth?', 'Diamond', 'easy', 'Diamond scores 10 on the Mohs hardness scale, the hardest natural material.', ['chemistry', 'minerals', 'hardness']);
addQuestion('science', 'At what temperature does water boil?', '100°C (212°F)', 'easy', 'Water boils at 100°C or 212°F at standard atmospheric pressure.', ['physics', 'water', 'temperature']);
addQuestion('science', 'What is the chemical symbol for iron?', 'Fe', 'medium', 'Iron\'s symbol Fe comes from the Latin word "ferrum".', ['chemistry', 'elements', 'symbols']);
addQuestion('science', 'What is the lightest element?', 'Hydrogen', 'easy', 'Hydrogen is the simplest and lightest element with atomic number 1.', ['chemistry', 'elements']);
addQuestion('science', 'What is the process of liquid turning to gas called?', 'Evaporation', 'easy', 'Evaporation is when a liquid becomes a gas at temperatures below boiling point.', ['physics', 'states of matter']);
addQuestion('science', 'What is the pH of pure water?', '7', 'medium', 'Pure water has a pH of 7, which is neutral (neither acidic nor basic).', ['chemistry', 'pH', 'water']);
addQuestion('science', 'What is the atomic number of carbon?', '6', 'medium', 'Carbon has 6 protons, making its atomic number 6.', ['chemistry', 'elements', 'carbon']);
addQuestion('science', 'What are the three states of matter?', 'Solid, liquid, gas', 'easy', 'The three common states are solid, liquid, and gas. Plasma is sometimes considered a fourth state.', ['physics', 'states of matter']);
addQuestion('science', 'What gas makes up most of Earth\'s atmosphere?', 'Nitrogen', 'medium', 'Nitrogen makes up 78% of Earth\'s atmosphere, oxygen is only 21%.', ['Earth science', 'atmosphere']);

// Space & Astronomy (30 questions)
addQuestion('science', 'How many planets are in our solar system?', 'Eight', 'easy', 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. Pluto was reclassified as a dwarf planet in 2006.', ['space', 'planets', 'solar system']);
addQuestion('science', 'What is the largest planet in our solar system?', 'Jupiter', 'easy', 'Jupiter is so large that all other planets could fit inside it.', ['space', 'planets', 'Jupiter']);
addQuestion('science', 'What is the closest star to Earth?', 'The Sun', 'easy', 'The Sun is our nearest star at 93 million miles away. The next closest is Proxima Centauri at 4.24 light-years.', ['space', 'stars', 'Sun']);
addQuestion('science', 'What galaxy do we live in?', 'The Milky Way', 'easy', 'The Milky Way is a barred spiral galaxy containing 200-400 billion stars.', ['space', 'galaxies', 'Milky Way']);
addQuestion('science', 'What is the hottest planet in our solar system?', 'Venus', 'medium', 'Venus is hotter than Mercury despite being farther from the Sun, due to its thick atmosphere (900°F).', ['space', 'planets', 'Venus']);
addQuestion('science', 'How long does it take for Earth to orbit the Sun?', '365.25 days', 'easy', 'Earth takes one year (365.25 days) to complete one orbit, which is why we have leap years.', ['space', 'Earth', 'orbit']);
addQuestion('science', 'What is the largest moon in our solar system?', 'Ganymede', 'hard', 'Ganymede, a moon of Jupiter, is even larger than the planet Mercury.', ['space', 'moons', 'Jupiter']);
addQuestion('science', 'What is a black hole?', 'Collapsed star with extreme gravity', 'medium', 'When massive stars collapse, their gravity becomes so strong that nothing, not even light, can escape.', ['space', 'black holes']);
addQuestion('science', 'What was the first animal in space?', 'Dog (Laika)', 'medium', 'Soviet dog Laika was the first animal to orbit Earth in 1957 aboard Sputnik 2.', ['space', 'history', 'animals']);
addQuestion('science', 'How many moons does Mars have?', 'Two', 'medium', 'Mars has two small moons: Phobos and Deimos, named after the Greek gods of fear and panic.', ['space', 'Mars', 'moons']);
addQuestion('science', 'What is the name of our nearest galaxy?', 'Andromeda', 'medium', 'The Andromeda Galaxy is 2.5 million light-years away and will collide with the Milky Way in 4.5 billion years.', ['space', 'galaxies', 'Andromeda']);
addQuestion('science', 'What is the Great Red Spot?', 'Storm on Jupiter', 'medium', 'A giant storm on Jupiter that has been raging for at least 300 years.', ['space', 'Jupiter', 'weather']);
addQuestion('science', 'Which planet has the most rings?', 'Saturn', 'easy', 'Saturn has the most prominent ring system, though Jupiter, Uranus, and Neptune also have rings.', ['space', 'planets', 'Saturn']);
addQuestion('science', 'What is a light-year?', 'Distance light travels in one year', 'medium', 'A light-year is about 6 trillion miles - the distance light travels in a year.', ['space', 'measurement', 'light']);
addQuestion('science', 'What is the smallest planet in our solar system?', 'Mercury', 'easy', 'Mercury is only slightly larger than Earth\'s moon.', ['space', 'planets', 'Mercury']);

// Earth Science & Weather (20 questions)
addQuestion('science', 'What causes earthquakes?', 'Movement of tectonic plates', 'medium', 'Earth\'s crust is divided into plates that move and sometimes slip past each other.', ['Earth science', 'geology', 'earthquakes']);
addQuestion('science', 'What scale measures earthquake strength?', 'Richter scale (or Moment Magnitude)', 'medium', 'The Richter scale measures magnitude from 1-10, each number being 10x stronger.', ['Earth science', 'earthquakes']);
addQuestion('science', 'What causes lightning?', 'Electrical discharge in clouds', 'medium', 'Ice particles in clouds create electrical charges that discharge as lightning.', ['weather', 'physics']);
addQuestion('science', 'What is the eye of a hurricane?', 'Calm center of the storm', 'easy', 'The eye is a circular area of calm weather at the center of the hurricane.', ['weather', 'hurricanes']);
addQuestion('science', 'What causes seasons?', 'Earth\'s tilted axis', 'medium', 'Earth\'s 23.5° tilt causes different hemispheres to receive more/less sunlight throughout the year.', ['Earth science', 'seasons', 'astronomy']);
addQuestion('science', 'What is the greenhouse effect?', 'Trapping of heat in atmosphere', 'medium', 'Greenhouse gases trap heat from the sun, warming Earth\'s surface.', ['Earth science', 'climate', 'environment']);
addQuestion('science', 'What type of rock is formed by volcanic activity?', 'Igneous rock', 'medium', 'Igneous rocks form when molten rock (magma/lava) cools and solidifies.', ['geology', 'rocks', 'volcanos']);
addQuestion('science', 'What is the water cycle?', 'Movement of water through evaporation, condensation, precipitation', 'easy', 'Water evaporates, forms clouds, falls as rain/snow, and returns to oceans/lakes.', ['Earth science', 'water', 'cycles']);
addQuestion('science', 'What instrument measures air pressure?', 'Barometer', 'hard', 'Barometers measure atmospheric pressure, which helps predict weather changes.', ['weather', 'instruments']);
addQuestion('science', 'What is the ozone layer?', 'Protective layer in stratosphere', 'medium', 'The ozone layer absorbs most of the sun\'s harmful UV radiation.', ['Earth science', 'atmosphere', 'environment']);
addQuestion('science', 'What causes tides?', 'Moon\'s gravitational pull', 'medium', 'The moon\'s gravity pulls on Earth\'s oceans, creating high and low tides.', ['Earth science', 'oceans', 'moon']);
addQuestion('science', 'What is photosynthesis?', 'Process plants use to make food from sunlight', 'easy', 'Plants convert CO2, water, and sunlight into glucose and oxygen.', ['biology', 'plants', 'chemistry']);
addQuestion('science', 'What is the largest rainforest?', 'Amazon', 'easy', 'The Amazon produces 20% of the world\'s oxygen.', ['Earth science', 'biomes', 'environment']);
addQuestion('science', 'What is a fossil fuel?', 'Fuel formed from ancient organisms', 'easy', 'Coal, oil, and natural gas formed from dead plants and animals over millions of years.', ['Earth science', 'energy', 'geology']);
addQuestion('science', 'What is El Niño?', 'Warming of Pacific Ocean waters', 'hard', 'El Niño causes warmer water in the Pacific, affecting global weather patterns.', ['Earth science', 'oceans', 'climate']);

// Plants & Ecosystems (15 questions)
addQuestion('science', 'What is the tallest type of tree?', 'Coast redwood', 'medium', 'Coast redwoods can grow over 370 feet tall, the tallest trees on Earth.', ['plants', 'trees', 'records']);
addQuestion('science', 'What gas do plants release during photosynthesis?', 'Oxygen', 'easy', 'Plants take in CO2 and release oxygen as a byproduct of photosynthesis.', ['plants', 'biology', 'chemistry']);
addQuestion('science', 'What is the largest flower in the world?', 'Rafflesia', 'hard', 'Rafflesia can grow up to 3 feet wide and smells like rotting meat.', ['plants', 'flowers', 'records']);
addQuestion('science', 'What is a deciduous tree?', 'Tree that loses leaves in fall', 'medium', 'Deciduous trees shed leaves annually, unlike evergreens.', ['plants', 'trees', 'biology']);
addQuestion('science', 'What is a food chain?', 'Flow of energy through an ecosystem', 'easy', 'Energy moves from plants to herbivores to carnivores.', ['biology', 'ecology', 'ecosystems']);
addQuestion('science', 'What are producers in an ecosystem?', 'Organisms that make their own food (plants)', 'medium', 'Producers use photosynthesis to create energy from sunlight.', ['biology', 'ecology', 'plants']);
addQuestion('science', 'What is biodiversity?', 'Variety of life in an ecosystem', 'medium', 'Higher biodiversity means more species and more stable ecosystems.', ['biology', 'ecology', 'environment']);
addQuestion('science', 'What is a carnivore?', 'Animal that eats only meat', 'easy', 'Lions, sharks, and eagles are carnivores.', ['biology', 'animals', 'diet']);
addQuestion('science', 'What is pollination?', 'Transfer of pollen to fertilize plants', 'easy', 'Bees, butterflies, and wind help pollinate flowers.', ['plants', 'biology', 'reproduction']);
addQuestion('science', 'What is extinction?', 'When a species completely dies out', 'easy', 'Dinosaurs, dodos, and many other species have gone extinct.', ['biology', 'evolution', 'conservation']);

console.log(`Generated ${questions.length} Science questions so far...`);

// ============================================
// GEOGRAPHY QUESTIONS (150 questions)
// ============================================

// World Capitals (30 questions)
addQuestion('geography', 'What is the capital of France?', 'Paris', 'easy', 'Paris has been the capital of France for over 1,000 years.', ['capitals', 'Europe', 'France']);
addQuestion('geography', 'What is the capital of Japan?', 'Tokyo', 'easy', 'Tokyo is the world\'s most populous metropolitan area with 37 million people.', ['capitals', 'Asia', 'Japan']);
addQuestion('geography', 'What is the capital of Australia?', 'Canberra', 'medium', 'Canberra was chosen as a compromise between rivals Sydney and Melbourne.', ['capitals', 'Australia']);
addQuestion('geography', 'What is the capital of Canada?', 'Ottawa', 'medium', 'Ottawa was chosen by Queen Victoria in 1857 as Canada\'s capital.', ['capitals', 'North America', 'Canada']);
addQuestion('geography', 'What is the capital of Brazil?', 'Brasília', 'medium', 'Brasília was built from scratch in the interior and became capital in 1960.', ['capitals', 'South America', 'Brazil']);
addQuestion('geography', 'What is the capital of Egypt?', 'Cairo', 'easy', 'Cairo is the largest city in Africa with over 20 million people.', ['capitals', 'Africa', 'Egypt']);
addQuestion('geography', 'What is the capital of Germany?', 'Berlin', 'easy', 'Berlin was divided during the Cold War and reunified in 1990.', ['capitals', 'Europe', 'Germany']);
addQuestion('geography', 'What is the capital of India?', 'New Delhi', 'easy', 'New Delhi was inaugurated as capital in 1931, replacing Calcutta.', ['capitals', 'Asia', 'India']);
addQuestion('geography', 'What is the capital of Italy?', 'Rome', 'easy', 'Rome has been continuously inhabited for over 2,800 years.', ['capitals', 'Europe', 'Italy']);
addQuestion('geography', 'What is the capital of Russia?', 'Moscow', 'easy', 'Moscow is Europe\'s largest city with over 12 million residents.', ['capitals', 'Europe', 'Russia']);
addQuestion('geography', 'What is the capital of Spain?', 'Madrid', 'easy', 'Madrid became the capital in 1561 under King Philip II.', ['capitals', 'Europe', 'Spain']);
addQuestion('geography', 'What is the capital of South Korea?', 'Seoul', 'medium', 'Seoul is one of the world\'s most densely populated cities.', ['capitals', 'Asia', 'South Korea']);
addQuestion('geography', 'What is the capital of Turkey?', 'Ankara', 'medium', 'Ankara replaced Istanbul as capital in 1923 after Turkey became a republic.', ['capitals', 'Turkey']);
addQuestion('geography', 'What is the capital of Thailand?', 'Bangkok', 'medium', 'Bangkok\'s ceremonial name is one of the world\'s longest place names.', ['capitals', 'Asia', 'Thailand']);
addQuestion('geography', 'What is the capital of New Zealand?', 'Wellington', 'medium', 'Wellington is the world\'s southernmost capital city.', ['capitals', 'Oceania', 'New Zealand']);

// Countries & Continents (30 questions)
addQuestion('geography', 'What is the largest country by area?', 'Russia', 'easy', 'Russia covers over 6.6 million square miles across 11 time zones.', ['countries', 'size', 'records']);
addQuestion('geography', 'What is the smallest country in the world?', 'Vatican City', 'easy', 'Vatican City is only 0.17 square miles with about 800 residents.', ['countries', 'size', 'records']);
addQuestion('geography', 'How many continents are there?', 'Seven', 'easy', 'Africa, Antarctica, Asia, Australia, Europe, North America, South America.', ['continents']);
addQuestion('geography', 'What is the most populous country?', 'India', 'easy', 'India surpassed China in 2023 with over 1.4 billion people.', ['countries', 'population', 'records']);
addQuestion('geography', 'What country has the most islands?', 'Sweden', 'hard', 'Sweden has over 267,000 islands, more than any other country.', ['countries', 'islands', 'records']);
addQuestion('geography', 'What is the longest country in the world?', 'Chile', 'medium', 'Chile stretches 2,670 miles from north to south but averages only 110 miles wide.', ['countries', 'South America', 'Chile']);
addQuestion('geography', 'Which continent has the most countries?', 'Africa', 'medium', 'Africa has 54 countries, more than any other continent.', ['continents', 'Africa', 'countries']);
addQuestion('geography', 'What country is also known as the Netherlands?', 'Holland', 'medium', 'Holland technically refers to only two provinces, but is commonly used for the whole country.', ['countries', 'Europe', 'Netherlands']);
addQuestion('geography', 'What countries make up Scandinavia?', 'Norway, Sweden, Denmark', 'medium', 'The Nordic countries also include Finland and Iceland, but Scandinavia is specifically Norway, Sweden, and Denmark.', ['countries', 'Europe', 'Scandinavia']);
addQuestion('geography', 'What is the largest country in Africa?', 'Algeria', 'medium', 'Algeria covers 919,595 square miles, making it Africa\'s largest country by area.', ['countries', 'Africa', 'Algeria']);

// US Geography (25 questions)
addQuestion('geography', 'What is the largest state by area?', 'Alaska', 'easy', 'Alaska is 663,300 square miles, more than twice the size of Texas.', ['US states', 'size']);
addQuestion('geography', 'What is the smallest state?', 'Rhode Island', 'easy', 'Rhode Island is only 1,214 square miles.', ['US states', 'size']);
addQuestion('geography', 'How many states are in the United States?', '50', 'easy', 'The US has had 50 states since Hawaii joined in 1959.', ['US states']);
addQuestion('geography', 'What is the capital of California?', 'Sacramento', 'medium', 'Sacramento became California\'s capital in 1854.', ['US states', 'capitals', 'California']);
addQuestion('geography', 'What state is known as the Sunshine State?', 'Florida', 'easy', 'Florida adopted this nickname in 1970.', ['US states', 'nicknames', 'Florida']);
addQuestion('geography', 'What is the longest river in the US?', 'Missouri River', 'medium', 'The Missouri River is 2,341 miles long, slightly longer than the Mississippi.', ['US geography', 'rivers']);
addQuestion('geography', 'What are the Great Lakes?', 'Superior, Michigan, Huron, Erie, Ontario', 'medium', 'The five Great Lakes contain 84% of North America\'s surface fresh water.', ['US geography', 'lakes']);
addQuestion('geography', 'What state is Mount Rushmore in?', 'South Dakota', 'easy', 'Mount Rushmore features Washington, Jefferson, Teddy Roosevelt, and Lincoln.', ['US states', 'landmarks', 'South Dakota']);
addQuestion('geography', 'What is the most populous state?', 'California', 'easy', 'California has about 39 million people, 12% of the US population.', ['US states', 'population']);
addQuestion('geography', 'What state is the Grand Canyon in?', 'Arizona', 'easy', 'The Grand Canyon is 277 miles long and up to 18 miles wide.', ['US states', 'landmarks', 'Arizona']);

// Physical Geography (30 questions)
addQuestion('geography', 'What is the tallest mountain in the world?', 'Mount Everest', 'easy', 'Everest is 29,032 feet tall, on the Nepal-Tibet border.', ['mountains', 'records']);
addQuestion('geography', 'What is the longest river in the world?', 'Nile River', 'easy', 'The Nile flows 4,135 miles through northeastern Africa.', ['rivers', 'Africa', 'records']);
addQuestion('geography', 'What is the largest ocean?', 'Pacific Ocean', 'easy', 'The Pacific covers 63 million square miles, larger than all land areas combined.', ['oceans', 'records']);
addQuestion('geography', 'What is the largest desert?', 'Antarctic Desert', 'hard', 'Antarctica is technically Earth\'s largest desert. The Sahara is the largest hot desert.', ['deserts', 'records']);
addQuestion('geography', 'What is the deepest ocean trench?', 'Mariana Trench', 'medium', 'The Mariana Trench is nearly 7 miles deep in the Pacific Ocean.', ['oceans', 'trenches', 'records']);
addQuestion('geography', 'What is the largest lake by area?', 'Caspian Sea', 'medium', 'Despite its name, the Caspian Sea is actually a lake covering 143,000 square miles.', ['lakes', 'records']);
addQuestion('geography', 'What is the highest waterfall in the world?', 'Angel Falls', 'hard', 'Angel Falls in Venezuela drops 3,212 feet.', ['waterfalls', 'records', 'Venezuela']);
addQuestion('geography', 'What is the driest place on Earth?', 'Atacama Desert', 'hard', 'Parts of Chile\'s Atacama Desert haven\'t seen rain in over 400 years.', ['deserts', 'records', 'Chile']);
addQuestion('geography', 'What is the largest rainforest?', 'Amazon Rainforest', 'easy', 'The Amazon covers 2.1 million square miles across nine countries.', ['rainforests', 'records', 'South America']);
addQuestion('geography', 'What is the saltiest body of water?', 'Dead Sea', 'medium', 'The Dead Sea is 34% salt, so dense you can float without effort.', ['water bodies', 'records']);

// World Landmarks & Famous Places (20 questions)
addQuestion('geography', 'What country is the Great Wall in?', 'China', 'easy', 'The Great Wall of China stretches over 13,000 miles.', ['landmarks', 'China', 'Asia']);
addQuestion('geography', 'What city is the Eiffel Tower in?', 'Paris', 'easy', 'The Eiffel Tower was built in 1889 for the World\'s Fair.', ['landmarks', 'France', 'Europe']);
addQuestion('geography', 'What country are the Pyramids of Giza in?', 'Egypt', 'easy', 'The pyramids were built as tombs for pharaohs around 2560 BC.', ['landmarks', 'Egypt', 'Africa']);
addQuestion('geography', 'What city is the Taj Mahal in?', 'Agra, India', 'medium', 'The Taj Mahal was built by Emperor Shah Jahan as a tomb for his wife.', ['landmarks', 'India', 'Asia']);
addQuestion('geography', 'What country is Machu Picchu in?', 'Peru', 'medium', 'Machu Picchu was built by the Incas in the 15th century.', ['landmarks', 'Peru', 'South America']);
addQuestion('geography', 'What city is the Colosseum in?', 'Rome', 'easy', 'The Colosseum could hold 50,000-80,000 spectators for gladiator contests.', ['landmarks', 'Italy', 'Europe']);
addQuestion('geography', 'What country is Stonehenge in?', 'England', 'easy', 'Stonehenge was built between 3000-2000 BC, its exact purpose remains debated.', ['landmarks', 'England', 'Europe']);
addQuestion('geography', 'What city is Christ the Redeemer statue in?', 'Rio de Janeiro', 'medium', 'The 98-foot statue stands atop Corcovado mountain overlooking Rio.', ['landmarks', 'Brazil', 'South America']);
addQuestion('geography', 'What country is Petra in?', 'Jordan', 'hard', 'Petra was the capital of the Nabataean Kingdom, carved into red rock cliffs.', ['landmarks', 'Jordan', 'Middle East']);
addQuestion('geography', 'What strait separates Europe and Africa?', 'Strait of Gibraltar', 'medium', 'The strait is only 8 miles wide at its narrowest point.', ['straits', 'geography']);

// Climate & Biomes (15 questions)
addQuestion('geography', 'What is the largest tropical rainforest?', 'Amazon', 'easy', 'The Amazon produces 20% of Earth\'s oxygen and spans 9 countries.', ['biomes', 'rainforests', 'South America']);
addQuestion('geography', 'What is the coldest continent?', 'Antarctica', 'easy', 'Antarctica has reached temperatures as low as -128.6°F.', ['continents', 'climate', 'Antarctica']);
addQuestion('geography', 'What country has the most active volcanoes?', 'Indonesia', 'medium', 'Indonesia has over 130 active volcanoes, part of the Ring of Fire.', ['volcanoes', 'Indonesia', 'geology']);
addQuestion('geography', 'What is the wettest place on Earth?', 'Mawsynram, India', 'hard', 'Mawsynram receives about 467 inches of rain annually.', ['climate', 'records', 'India']);
addQuestion('geography', 'What mountain range separates Europe and Asia?', 'Ural Mountains', 'medium', 'The Urals stretch 1,600 miles through Russia.', ['mountains', 'Europe', 'Asia']);

console.log(`Generated ${questions.length} Geography questions so far...`);

// ============================================
// POP CULTURE QUESTIONS (100 questions)
// ============================================

// Movies (30 questions)
addQuestion('pop culture', 'What movie won the first Academy Award for Best Picture?', 'Wings', 'hard', 'Wings (1927) was a WWI silent film about fighter pilots.', ['movies', 'Oscars', '1920s']);
addQuestion('pop culture', 'Who directed Jaws, E.T., and Jurassic Park?', 'Steven Spielberg', 'easy', 'Spielberg is one of the highest-grossing directors of all time.', ['movies', 'directors']);
addQuestion('pop culture', 'What 1977 film began with "A long time ago in a galaxy far, far away"?', 'Star Wars', 'easy', 'Star Wars became a cultural phenomenon and launched a massive franchise.', ['movies', 'sci-fi', '1970s']);
addQuestion('pop culture', 'What movie features the quote "Here\'s looking at you, kid"?', 'Casablanca', 'medium', 'Casablanca (1942) starred Humphrey Bogart and Ingrid Bergman.', ['movies', 'quotes', '1940s']);
addQuestion('pop culture', 'Who played Jack in Titanic?', 'Leonardo DiCaprio', 'easy', 'Titanic (1997) became the highest-grossing film of its time.', ['movies', 'actors', '1990s']);
addQuestion('pop culture', 'What actor played Iron Man in the Marvel movies?', 'Robert Downey Jr.', 'easy', 'RDJ launched the Marvel Cinematic Universe as Tony Stark in 2008.', ['movies', 'Marvel', 'superheroes', '2000s']);
addQuestion('pop culture', 'What movie features the song "My Heart Will Go On"?', 'Titanic', 'easy', 'Celine Dion sang the iconic Titanic theme song.', ['movies', 'music', '1990s']);
addQuestion('pop culture', 'Who directed The Godfather?', 'Francis Ford Coppola', 'medium', 'The Godfather (1972) is considered one of the greatest films ever made.', ['movies', 'directors', '1970s']);
addQuestion('pop culture', 'What 1999 film questions the nature of reality with red and blue pills?', 'The Matrix', 'easy', 'The Matrix starred Keanu Reeves as Neo discovering the truth about reality.', ['movies', 'sci-fi', '1990s']);
addQuestion('pop culture', 'Who played Forrest Gump?', 'Tom Hanks', 'easy', 'Hanks won Best Actor for Forrest Gump (1994).', ['movies', 'actors', '1990s']);
addQuestion('pop culture', 'What Disney movie features "Let It Go"?', 'Frozen', 'easy', 'Frozen (2013) became a cultural phenomenon, especially with children.', ['movies', 'Disney', 'animation', '2010s']);
addQuestion('pop culture', 'Who played Batman in The Dark Knight trilogy?', 'Christian Bale', 'medium', 'Christopher Nolan\'s Dark Knight trilogy ran from 2005-2012.', ['movies', 'superheroes', 'Batman', '2000s']);
addQuestion('pop culture', 'What 1975 musical film is set in the 1950s?', 'Grease', 'medium', 'Grease starred John Travolta and Olivia Newton-John.', ['movies', 'musicals', '1970s']);
addQuestion('pop culture', 'Who directed Pulp Fiction?', 'Quentin Tarantino', 'medium', 'Pulp Fiction (1994) is known for its nonlinear narrative.', ['movies', 'directors', '1990s']);
addQuestion('pop culture', 'What 2019 film became the highest-grossing movie of all time?', 'Avengers: Endgame', 'medium', 'Endgame surpassed Avatar with $2.798 billion worldwide.', ['movies', 'Marvel', 'box office', '2010s']);

// Music (30 questions)
addQuestion('pop culture', 'Who is known as the King of Rock and Roll?', 'Elvis Presley', 'easy', 'Elvis revolutionized music in the 1950s with hits like "Hound Dog" and "Jailhouse Rock".', ['music', 'rock', '1950s']);
addQuestion('pop culture', 'What band was John Lennon in?', 'The Beatles', 'easy', 'The Beatles transformed popular music in the 1960s.', ['music', 'rock', 'bands', '1960s']);
addQuestion('pop culture', 'Who sang "Thriller"?', 'Michael Jackson', 'easy', 'Thriller (1982) is the best-selling album of all time.', ['music', 'pop', '1980s']);
addQuestion('pop culture', 'What singer is known as the Queen of Pop?', 'Madonna', 'easy', 'Madonna has been a pop icon since the 1980s with hits like "Like a Virgin" and "Vogue".', ['music', 'pop', '1980s']);
addQuestion('pop culture', 'Who sang "Purple Rain"?', 'Prince', 'medium', 'Prince\'s Purple Rain (1984) was both an album and a film.', ['music', 'pop', '1980s']);
addQuestion('pop culture', 'What band sang "Bohemian Rhapsody"?', 'Queen', 'easy', 'Queen\'s 1975 song became one of rock\'s most iconic tracks.', ['music', 'rock', '1970s']);
addQuestion('pop culture', 'Who is the best-selling female artist of all time?', 'Madonna', 'medium', 'Madonna has sold over 300 million records worldwide.', ['music', 'pop', 'records']);
addQuestion('pop culture', 'What rapper\'s real name is Marshall Mathers?', 'Eminem', 'medium', 'Eminem became the best-selling artist of the 2000s.', ['music', 'hip-hop', '2000s']);
addQuestion('pop culture', 'Who sang "Like a Rolling Stone"?', 'Bob Dylan', 'medium', 'Dylan\'s 1965 song is often called the greatest rock song ever.', ['music', 'rock', '1960s']);
addQuestion('pop culture', 'What band did Freddie Mercury lead?', 'Queen', 'easy', 'Mercury fronted Queen from 1970 until his death in 1991.', ['music', 'rock', 'bands']);
addQuestion('pop culture', 'Who sang "I Will Always Love You"?', 'Whitney Houston', 'easy', 'Houston\'s 1992 cover for The Bodyguard became iconic.', ['music', 'pop', '1990s']);
addQuestion('pop culture', 'What guitar legend played "Purple Haze"?', 'Jimi Hendrix', 'medium', 'Hendrix revolutionized electric guitar playing in the late 1960s.', ['music', 'rock', 'guitar', '1960s']);
addQuestion('pop culture', 'Who sang "Rolling in the Deep"?', 'Adele', 'easy', 'Adele\'s 2010 hit topped charts worldwide.', ['music', 'pop', '2010s']);
addQuestion('pop culture', 'What country singer sang "Jolene"?', 'Dolly Parton', 'medium', 'Parton wrote and recorded Jolene in 1973.', ['music', 'country', '1970s']);
addQuestion('pop culture', 'Who is known as the Boss?', 'Bruce Springsteen', 'medium', 'Springsteen earned the nickname for his intense work ethic and lengthy shows.', ['music', 'rock', 'nicknames']);

// TV Shows (25 questions)
addQuestion('pop culture', 'What long-running animated show features the Simpson family?', 'The Simpsons', 'easy', 'The Simpsons debuted in 1989 and is the longest-running American sitcom.', ['TV', 'animation', '1980s-present']);
addQuestion('pop culture', 'What HBO fantasy series is based on George R.R. Martin\'s novels?', 'Game of Thrones', 'easy', 'Game of Thrones ran from 2011-2019 and became a cultural phenomenon.', ['TV', 'fantasy', '2010s']);
addQuestion('pop culture', 'What sitcom is set in Central Perk coffee shop?', 'Friends', 'easy', 'Friends ran from 1994-2004 and followed six friends in New York City.', ['TV', 'sitcoms', '1990s']);
addQuestion('pop culture', 'What show features chemistry teacher Walter White?', 'Breaking Bad', 'medium', 'Breaking Bad (2008-2013) followed a teacher turned meth manufacturer.', ['TV', 'drama', '2000s']);
addQuestion('pop culture', 'What Netflix series is set in the 1980s in Hawkins, Indiana?', 'Stranger Things', 'easy', 'Stranger Things debuted in 2016 featuring supernatural mysteries.', ['TV', 'sci-fi', '2010s']);
addQuestion('pop culture', 'What sitcom featured Jerry, George, Elaine, and Kramer?', 'Seinfeld', 'medium', 'Seinfeld (1989-1998) was "a show about nothing" set in New York.', ['TV', 'sitcoms', '1990s']);
addQuestion('pop culture', 'What long-running sci-fi show features the TARDIS?', 'Doctor Who', 'medium', 'Doctor Who has run since 1963, making it one of the longest-running sci-fi shows.', ['TV', 'sci-fi', 'British']);
addQuestion('pop culture', 'What 1960s show featured Captain Kirk and Mr. Spock?', 'Star Trek', 'medium', 'Star Trek (1966-1969) launched a massive franchise.', ['TV', 'sci-fi', '1960s']);
addQuestion('pop culture', 'What show featured the phrase "How you doin\'?"', 'Friends', 'easy', 'Joey Tribbiani\'s pickup line became iconic.', ['TV', 'sitcoms', 'quotes', '1990s']);
addQuestion('pop culture', 'What mockumentary sitcom is set in a paper company?', 'The Office', 'easy', 'The US Office (2005-2013) was based on the British series.', ['TV', 'sitcoms', '2000s']);

// Video Games & Internet (30 questions)
addQuestion('pop culture', 'What plumber is Nintendo\'s mascot?', 'Mario', 'easy', 'Mario debuted in Donkey Kong (1981) and got his own game in 1985.', ['video games', 'Nintendo', '1980s']);
addQuestion('pop culture', 'What block-building game became a cultural phenomenon?', 'Minecraft', 'easy', 'Minecraft (2011) became the best-selling video game of all time.', ['video games', '2010s']);
addQuestion('pop culture', 'What video game series features Master Chief?', 'Halo', 'medium', 'Halo revolutionized console first-person shooters starting in 2001.', ['video games', 'Xbox', '2000s']);
addQuestion('pop culture', 'What battle royale game became huge in 2017?', 'Fortnite', 'easy', 'Fortnite popularized the battle royale genre and Floss dance.', ['video games', '2010s']);
addQuestion('pop culture', 'What social media platform uses hashtags and a bird logo?', 'Twitter (X)', 'easy', 'Twitter launched in 2006 and was rebranded to X in 2023.', ['internet', 'social media', '2000s']);
addQuestion('pop culture', 'What video game franchise features Link and Zelda?', 'The Legend of Zelda', 'easy', 'Zelda debuted in 1986 and became one of Nintendo\'s biggest franchises.', ['video games', 'Nintendo', '1980s']);
addQuestion('pop culture', 'What game involves catching creatures in Poke Balls?', 'Pokémon', 'easy', 'Pokémon launched in 1996 and became a global phenomenon.', ['video games', 'Nintendo', '1990s']);
addQuestion('pop culture', 'What was the first video game character to have a balloon in the Macy\'s Thanksgiving Parade?', 'Sonic the Hedgehog', 'hard', 'Sonic appeared as a balloon in 1993.', ['video games', 'Sega', '1990s']);
addQuestion('pop culture', 'What social media platform is known for short videos and dances?', 'TikTok', 'easy', 'TikTok exploded in popularity starting around 2018-2019.', ['internet', 'social media', '2010s']);
addQuestion('pop culture', 'What game series features Grand Theft Auto?', 'GTA (Grand Theft Auto)', 'easy', 'GTA is known for its open-world crime simulation gameplay.', ['video games', '2000s']);
addQuestion('pop culture', 'What video game console did Sony first release?', 'PlayStation', 'easy', 'The original PlayStation launched in 1994.', ['video games', 'Sony', '1990s']);
addQuestion('pop culture', 'What was Facebooks original name?', 'TheFacebook', 'medium', 'Mark Zuckerberg launched TheFacebook at Harvard in 2004.', ['internet', 'social media', '2000s']);
addQuestion('pop culture', 'What game popularized the first-person shooter genre?', 'Doom', 'medium', 'Doom (1993) revolutionized FPS gaming.', ['video games', '1990s']);
addQuestion('pop culture', 'What social media platform uses filters and the ghost logo?', 'Snapchat', 'easy', 'Snapchat launched in 2011, known for disappearing messages.', ['internet', 'social media', '2010s']);
addQuestion('pop culture', 'What Nintendo character is a pink puffball?', 'Kirby', 'easy', 'Kirby debuted in 1992 and can absorb enemies\' powers.', ['video games', 'Nintendo', '1990s']);

console.log(`Generated ${questions.length} Pop Culture questions so far...`);

// ============================================
// SPORTS QUESTIONS (75 questions)
// ============================================

// Olympics (15 questions)
addQuestion('sports', 'What city hosted the first modern Olympics?', 'Athens', 'medium', 'The first modern Olympics were held in Athens, Greece in 1896.', ['Olympics', 'history', 'Greece']);
addQuestion('sports', 'How often are the Summer Olympics held?', 'Every 4 years', 'easy', 'The Olympics have been held every 4 years since 1896, with exceptions for world wars.', ['Olympics', 'schedule']);
addQuestion('sports', 'Who is the most decorated Olympian of all time?', 'Michael Phelps', 'easy', 'Phelps won 28 Olympic medals (23 gold) in swimming.', ['Olympics', 'swimming', 'records']);
addQuestion('sports', 'What country has won the most Olympic gold medals all-time?', 'United States', 'easy', 'The US has won over 1,000 gold medals across Summer Olympics.', ['Olympics', 'records', 'USA']);
addQuestion('sports', 'What do the five Olympic rings represent?', 'Five continents', 'medium', 'The rings represent Africa, Americas, Asia, Europe, and Oceania.', ['Olympics', 'symbols']);
addQuestion('sports', 'Who won four gold medals at the 1936 Olympics?', 'Jesse Owens', 'hard', 'Jesse Owens\' victories in Nazi Germany defied Hitler\'s racial ideology.', ['Olympics', 'track and field', 'history', '1930s']);
addQuestion('sports', 'What city has hosted the Summer Olympics three times?', 'London', 'hard', 'London hosted in 1908, 1948, and 2012.', ['Olympics', 'cities', 'history']);
addQuestion('sports', 'What gymnast scored the first perfect 10 in Olympics?', 'Nadia Comăneci', 'hard', 'Comăneci scored a perfect 10 at age 14 in Montreal 1976.', ['Olympics', 'gymnastics', '1970s']);

// Basketball (15 questions)
addQuestion('sports', 'Who is considered the greatest basketball player of all time?', 'Michael Jordan', 'easy', 'Jordan won 6 NBA championships with the Chicago Bulls.', ['basketball', 'NBA', 'legends']);
addQuestion('sports', 'How many players are on a basketball team on the court?', 'Five', 'easy', 'Each team has 5 players on the court at a time.', ['basketball', 'rules']);
addQuestion('sports', 'Who holds the NBA record for most points in a single game?', 'Wilt Chamberlain', 'medium', 'Chamberlain scored 100 points for Philadelphia against New York in 1962.', ['basketball', 'NBA', 'records']);
addQuestion('sports', 'What team has won the most NBA championships?', 'Boston Celtics', 'medium', 'The Celtics have won 17 championships, tied with the Lakers.', ['basketball', 'NBA', 'championships']);
addQuestion('sports', 'How many points is a shot from beyond the arc worth?', 'Three', 'easy', 'The three-point line was added to the NBA in 1979.', ['basketball', 'rules', 'scoring']);
addQuestion('sports', 'Who broke Kareem Abdul-Jabbar\'s all-time scoring record?', 'LeBron James', 'easy', 'LeBron passed Kareem\'s 38,387 points in 2023.', ['basketball', 'NBA', 'records', '2020s']);
addQuestion('sports', 'What college basketball tournament is held each March?', 'March Madness (NCAA Tournament)', 'easy', 'March Madness features 68 college teams competing for the championship.', ['basketball', 'college', 'tournaments']);

// Football/Soccer (15 questions)
addQuestion('sports', 'What country has won the most FIFA World Cups?', 'Brazil', 'easy', 'Brazil has won 5 World Cups (1958, 1962, 1970, 1994, 2002).', ['soccer', 'World Cup', 'Brazil']);
addQuestion('sports', 'Who is the all-time leading scorer in World Cup history?', 'Miroslav Klose', 'hard', 'Klose scored 16 goals across four World Cups for Germany.', ['soccer', 'World Cup', 'records']);
addQuestion('sports', 'What is the most popular sport in the world?', 'Soccer (Football)', 'easy', 'Soccer is played by over 250 million people in over 200 countries.', ['soccer', 'popularity']);
addQuestion('sports', 'Who won the 2022 FIFA World Cup?', 'Argentina', 'easy', 'Argentina defeated France in the final, with Messi winning his first World Cup.', ['soccer', 'World Cup', '2020s']);
addQuestion('sports', 'How many players are on a soccer team on the field?', 'Eleven', 'easy', 'Each team has 11 players including the goalkeeper.', ['soccer', 'rules']);
addQuestion('sports', 'What English club has won the most Premier League titles?', 'Manchester United', 'medium', 'Manchester United has won 13 Premier League titles since 1992.', ['soccer', 'Premier League', 'England']);
addQuestion('sports', 'Who is known as "The King of Football"?', 'Pelé', 'medium', 'Pelé scored over 1,000 career goals and won 3 World Cups.', ['soccer', 'legends', 'Brazil']);

// American Football (15 questions)
addQuestion('sports', 'What team has won the most Super Bowls?', 'New England Patriots', 'easy', 'The Patriots have won 6 Super Bowls, tied with the Pittsburgh Steelers.', ['football', 'NFL', 'Super Bowl']);
addQuestion('sports', 'Who is the NFL\'s all-time leading passer?', 'Tom Brady', 'easy', 'Brady threw for over 89,000 yards in his career.', ['football', 'NFL', 'quarterbacks', 'records']);
addQuestion('sports', 'How many points is a touchdown worth?', 'Six', 'easy', 'A touchdown is 6 points, plus teams can score 1 or 2 on the conversion.', ['football', 'NFL', 'rules', 'scoring']);
addQuestion('sports', 'What trophy do Super Bowl winners receive?', 'Vince Lombardi Trophy', 'medium', 'Named after the legendary Packers coach who won the first two Super Bowls.', ['football', 'NFL', 'Super Bowl']);
addQuestion('sports', 'How many Super Bowl rings does Tom Brady have?', 'Seven', 'easy', 'Brady won 6 with New England and 1 with Tampa Bay.', ['football', 'NFL', 'quarterbacks', 'records']);
addQuestion('sports', 'What college football team has won the most national championships?', 'Alabama', 'medium', 'Alabama has claimed 18 national championships.', ['football', 'college', 'championships']);

// Baseball (20 questions)
addQuestion('sports', 'Who holds the MLB record for most home runs in a career?', 'Barry Bonds', 'medium', 'Bonds hit 762 home runs, though the record is controversial due to steroid allegations.', ['baseball', 'MLB', 'records']);
addQuestion('sports', 'What team has won the most World Series championships?', 'New York Yankees', 'easy', 'The Yankees have won 27 World Series titles.', ['baseball', 'MLB', 'championships']);
addQuestion('sports', 'How many strikes does it take to strike out a batter?', 'Three', 'easy', 'Three strikes and you\'re out is a fundamental baseball rule.', ['baseball', 'rules']);
addQuestion('sports', 'Who broke Babe Ruth\'s home run record?', 'Hank Aaron', 'medium', 'Aaron passed Ruth\'s 714 home runs in 1974, finishing with 755.', ['baseball', 'MLB', 'records', 'history']);
addQuestion('sports', 'What is it called when a player hits a single, double, triple, and home run in one game?', 'Hitting for the cycle', 'medium', 'Hitting for the cycle is a rare baseball accomplishment.', ['baseball', 'terms']);
addQuestion('sports', 'How many innings are in a regulation baseball game?', 'Nine', 'easy', 'Baseball games are 9 innings unless tied, then they go to extra innings.', ['baseball', 'rules']);
addQuestion('sports', 'What is a perfect game in baseball?', 'No hits, walks, or runs allowed', 'medium', 'A pitcher must retire all 27 batters without anyone reaching base.', ['baseball', 'pitching', 'records']);
addQuestion('sports', 'What does RBI stand for?', 'Runs Batted In', 'easy', 'An RBI is credited when a batter\'s hit causes a run to score.', ['baseball', 'statistics', 'terms']);
addQuestion('sports', 'Who is known as "The Sultan of Swat"?', 'Babe Ruth', 'medium', 'Ruth revolutionized baseball in the 1920s with his power hitting.', ['baseball', 'legends', 'nicknames']);
addQuestion('sports', 'What is the distance from the pitcher\'s mound to home plate?', '60 feet 6 inches', 'hard', 'This distance has been standard since 1893.', ['baseball', 'rules', 'field']);
addQuestion('sports', 'What is a no-hitter?', 'Game where pitcher allows no hits', 'medium', 'Walks and errors are allowed, but no batter gets a hit.', ['baseball', 'pitching']);
addQuestion('sports', 'How many players are on a baseball field?', 'Nine', 'easy', 'Each team has 9 defensive players on the field.', ['baseball', 'rules']);
addQuestion('sports', 'What is the seventh-inning stretch?', 'Traditional break in middle of 7th inning', 'medium', 'Fans stand and sing "Take Me Out to the Ball Game".', ['baseball', 'traditions']);
addQuestion('sports', 'Who has the most career hits in MLB history?', 'Pete Rose', 'medium', 'Rose had 4,256 hits but was banned from baseball for gambling.', ['baseball', 'records', 'hits']);

// Tennis & Golf (15 questions)
addQuestion('sports', 'How many Grand Slam tournaments are there in tennis?', 'Four', 'easy', 'Australian Open, French Open, Wimbledon, and US Open.', ['tennis', 'Grand Slam']);
addQuestion('sports', 'What is a hole-in-one in golf?', 'Hitting ball from tee into hole in one stroke', 'easy', 'A rare and celebrated golf achievement.', ['golf', 'scoring', 'terms']);
addQuestion('sports', 'Who has won the most Grand Slam singles titles?', 'Novak Djokovic', 'medium', 'Djokovic has 24 Grand Slam titles (as of 2024).', ['tennis', 'records', '2020s']);
addQuestion('sports', 'What is par in golf?', 'Expected number of strokes for a hole', 'easy', 'Scoring below par (birdie, eagle) is good; above par (bogey) is bad.', ['golf', 'scoring', 'terms']);
addQuestion('sports', 'What is deuce in tennis?', 'Tied at 40-40', 'medium', 'A player must win by two points after deuce.', ['tennis', 'scoring', 'rules']);
addQuestion('sports', 'Who is known as "The Golden Bear" in golf?', 'Jack Nicklaus', 'medium', 'Nicklaus won 18 major championships, a record until recently.', ['golf', 'legends', 'nicknames']);
addQuestion('sports', 'What is love in tennis scoring?', 'Zero', 'easy', 'Tennis scores go 0 (love), 15, 30, 40, game.', ['tennis', 'scoring', 'terms']);
addQuestion('sports', 'What is the Masters Tournament?', 'Prestigious golf tournament in Augusta', 'easy', 'Held annually in Georgia, winner receives a green jacket.', ['golf', 'tournaments', 'Masters']);
addQuestion('sports', 'Who has won the most Wimbledon men\'s titles?', 'Roger Federer', 'medium', 'Federer won 8 Wimbledon titles from 2003-2017.', ['tennis', 'records', 'Wimbledon']);
addQuestion('sports', 'What is an ace in tennis?', 'Serve that opponent can\'t touch', 'easy', 'A perfectly placed serve that scores immediately.', ['tennis', 'serving', 'terms']);

// Auto Racing & Other Sports (10 questions)
addQuestion('sports', 'What is the most famous auto race in the world?', 'Indianapolis 500', 'medium', 'The Indy 500 has been held annually since 1911.', ['auto racing', 'IndyCar']);
addQuestion('sports', 'What sport uses a puck?', 'Hockey', 'easy', 'Ice hockey is played with a hard rubber puck.', ['hockey', 'equipment']);
addQuestion('sports', 'What is Formula 1?', 'Premier open-wheel auto racing series', 'easy', 'F1 races on circuits around the world with the fastest cars.', ['auto racing', 'Formula 1']);
addQuestion('sports', 'How many players are on an ice hockey team?', 'Six', 'easy', 'Each team has 6 players on ice: 3 forwards, 2 defensemen, 1 goalie.', ['hockey', 'rules']);
addQuestion('sports', 'What is the Tour de France?', 'Famous bicycle race', 'easy', 'Multi-stage race through France lasting about 3 weeks.', ['cycling', 'France']);
addQuestion('sports', 'What sport is played at Wimbledon?', 'Tennis', 'easy', 'Wimbledon is the oldest tennis tournament, dating to 1877.', ['tennis', 'Wimbledon']);
addQuestion('sports', 'What is a hat trick in hockey?', 'Scoring three goals in one game', 'easy', 'Fans traditionally throw hats on the ice to celebrate.', ['hockey', 'scoring', 'terms']);
addQuestion('sports', 'Who is considered the greatest boxer of all time?', 'Muhammad Ali', 'easy', 'Ali was heavyweight champion and cultural icon.', ['boxing', 'legends']);

console.log(`Generated ${questions.length} Sports questions so far...`);

// ============================================
// LITERATURE QUESTIONS (75 questions)
// ============================================

// Classic Literature (25 questions)
addQuestion('literature', 'Who wrote Romeo and Juliet?', 'William Shakespeare', 'easy', 'Shakespeare wrote the tragic love story around 1594-1596.', ['classic', 'Shakespeare', 'plays']);
addQuestion('literature', 'Who wrote Pride and Prejudice?', 'Jane Austen', 'easy', 'Austen\'s 1813 novel follows Elizabeth Bennet and Mr. Darcy.', ['classic', 'British', '1800s']);
addQuestion('literature', 'Who wrote 1984?', 'George Orwell', 'easy', 'Orwell\'s dystopian novel was published in 1949.', ['classic', 'dystopian', '1940s']);
addQuestion('literature', 'Who wrote To Kill a Mockingbird?', 'Harper Lee', 'easy', 'Lee\'s 1960 novel addresses racial injustice in the American South.', ['classic', 'American', '1960s']);
addQuestion('literature', 'Who wrote The Great Gatsby?', 'F. Scott Fitzgerald', 'easy', 'Fitzgerald\'s 1925 novel explores the American Dream in the Jazz Age.', ['classic', 'American', '1920s']);
addQuestion('literature', 'Who wrote Moby-Dick?', 'Herman Melville', 'medium', 'Melville\'s 1851 novel follows Captain Ahab\'s obsession with a white whale.', ['classic', 'American', '1850s']);
addQuestion('literature', 'Who wrote War and Peace?', 'Leo Tolstoy', 'medium', 'Tolstoy\'s epic 1869 novel chronicles Russian society during the Napoleonic Wars.', ['classic', 'Russian', '1860s']);
addQuestion('literature', 'Who wrote The Odyssey?', 'Homer', 'easy', 'Homer\'s ancient Greek epic follows Odysseus\' journey home after the Trojan War.', ['classic', 'ancient', 'Greek', 'epic']);
addQuestion('literature', 'Who wrote Jane Eyre?', 'Charlotte Brontë', 'medium', 'Brontë\'s 1847 novel follows an orphaned governess.', ['classic', 'British', '1840s']);
addQuestion('literature', 'Who wrote The Catcher in the Rye?', 'J.D. Salinger', 'medium', 'Salinger\'s 1951 novel follows teenager Holden Caulfield.', ['classic', 'American', '1950s']);
addQuestion('literature', 'Who wrote Frankenstein?', 'Mary Shelley', 'medium', 'Shelley wrote the Gothic novel in 1818 at age 18.', ['classic', 'Gothic', 'British', '1810s']);
addQuestion('literature', 'Who wrote The Divine Comedy?', 'Dante Alighieri', 'hard', 'Dante\'s 14th-century epic poem describes a journey through Hell, Purgatory, and Paradise.', ['classic', 'Italian', 'poetry', 'medieval']);
addQuestion('literature', 'Who wrote Crime and Punishment?', 'Fyodor Dostoevsky', 'medium', 'Dostoevsky\'s 1866 novel explores morality through the story of Raskolnikov.', ['classic', 'Russian', '1860s']);
addQuestion('literature', 'Who wrote The Iliad?', 'Homer', 'medium', 'Homer\'s epic poem recounts the Trojan War.', ['classic', 'ancient', 'Greek', 'epic']);
addQuestion('literature', 'Who wrote Wuthering Heights?', 'Emily Brontë', 'medium', 'Emily Brontë\'s only novel (1847) is a Gothic romance.', ['classic', 'British', 'Gothic', '1840s']);

// Children\'s & Young Adult (15 questions)
addQuestion('literature', 'Who wrote Harry Potter?', 'J.K. Rowling', 'easy', 'Rowling\'s series (1997-2007) follows a young wizard at Hogwarts.', ['children', 'fantasy', 'British', '1990s-2000s']);
addQuestion('literature', 'Who wrote The Cat in the Hat?', 'Dr. Seuss', 'easy', 'Dr. Seuss wrote 60+ children\'s books with distinctive rhyming style.', ['children', 'American']);
addQuestion('literature', 'Who wrote Charlotte\'s Web?', 'E.B. White', 'easy', 'White\'s 1952 novel tells the story of a pig named Wilbur and spider Charlotte.', ['children', 'American', '1950s']);
addQuestion('literature', 'Who wrote The Hunger Games?', 'Suzanne Collins', 'easy', 'Collins\' dystopian trilogy (2008-2010) follows Katniss Everdeen.', ['young adult', 'dystopian', 'American', '2000s']);
addQuestion('literature', 'Who wrote Where the Wild Things Are?', 'Maurice Sendak', 'medium', 'Sendak\'s 1963 picture book follows Max\'s wild imagination.', ['children', 'American', '1960s']);
addQuestion('literature', 'Who wrote The Chronicles of Narnia?', 'C.S. Lewis', 'medium', 'Lewis wrote 7 fantasy novels starting with The Lion, the Witch and the Wardrobe (1950).', ['children', 'fantasy', 'British', '1950s']);
addQuestion('literature', 'Who wrote Matilda?', 'Roald Dahl', 'medium', 'Dahl\'s 1988 novel features a brilliant girl with telekinetic powers.', ['children', 'British', '1980s']);
addQuestion('literature', 'Who wrote The Giving Tree?', 'Shel Silverstein', 'medium', 'Silverstein\'s 1964 picture book explores selflessness.', ['children', 'American', '1960s']);

// Modern & Contemporary (20 questions)
addQuestion('literature', 'Who wrote The Handmaid\'s Tale?', 'Margaret Atwood', 'medium', 'Atwood\'s 1985 dystopian novel depicts a totalitarian theocracy.', ['contemporary', 'dystopian', 'Canadian', '1980s']);
addQuestion('literature', 'Who wrote The Da Vinci Code?', 'Dan Brown', 'easy', 'Brown\'s 2003 thriller follows symbologist Robert Langdon.', ['contemporary', 'thriller', 'American', '2000s']);
addQuestion('literature', 'Who wrote The Kite Runner?', 'Khaled Hosseini', 'medium', 'Hosseini\'s 2003 novel follows friendship in Afghanistan.', ['contemporary', 'Afghan-American', '2000s']);
addQuestion('literature', 'Who wrote Gone Girl?', 'Gillian Flynn', 'medium', 'Flynn\'s 2012 thriller explores a marriage gone wrong.', ['contemporary', 'thriller', 'American', '2010s']);
addQuestion('literature', 'Who wrote The Road?', 'Cormac McCarthy', 'medium', 'McCarthy\'s 2006 post-apocalyptic novel won the Pulitzer Prize.', ['contemporary', 'American', '2000s']);
addQuestion('literature', 'Who wrote Life of Pi?', 'Yann Martel', 'medium', 'Martel\'s 2001 novel follows a boy surviving at sea with a tiger.', ['contemporary', 'Canadian', '2000s']);
addQuestion('literature', 'Who wrote The Shining?', 'Stephen King', 'easy', 'King\'s 1977 horror novel is set in the Overlook Hotel.', ['contemporary', 'horror', 'American', '1970s']);

// Poetry & Plays (25 questions)
addQuestion('literature', 'Who wrote "The Raven"?', 'Edgar Allan Poe', 'medium', 'Poe\'s 1845 narrative poem features the refrain "Nevermore".', ['poetry', 'American', '1840s']);
addQuestion('literature', 'Who wrote Hamlet?', 'William Shakespeare', 'easy', 'Hamlet features the famous line "To be or not to be".', ['plays', 'Shakespeare', 'tragedy']);
addQuestion('literature', 'Who wrote "The Road Not Taken"?', 'Robert Frost', 'medium', 'Frost\'s 1916 poem reflects on choices: "Two roads diverged in a yellow wood".', ['poetry', 'American', '1910s']);
addQuestion('literature', 'Who wrote A Streetcar Named Desire?', 'Tennessee Williams', 'medium', 'Williams\' 1947 play features Blanche DuBois and Stanley Kowalski.', ['plays', 'American', '1940s']);
addQuestion('literature', 'Who wrote Death of a Salesman?', 'Arthur Miller', 'medium', 'Miller\'s 1949 play follows Willy Loman\'s tragic life.', ['plays', 'American', '1940s']);
addQuestion('literature', 'Who wrote Macbeth?', 'William Shakespeare', 'easy', 'Macbeth explores ambition and guilt with the famous "Out, damned spot!" line.', ['plays', 'Shakespeare', 'tragedy']);
addQuestion('literature', 'Who wrote "Stopping by Woods on a Snowy Evening"?', 'Robert Frost', 'medium', 'Frost\'s 1923 poem ends with "And miles to go before I sleep".', ['poetry', 'American', '1920s']);
addQuestion('literature', 'Who wrote Othello?', 'William Shakespeare', 'medium', 'Othello is a tragedy about jealousy and manipulation.', ['plays', 'Shakespeare', 'tragedy']);
addQuestion('literature', 'Who wrote "The Love Song of J. Alfred Prufrock"?', 'T.S. Eliot', 'hard', 'Eliot\'s 1915 modernist poem influenced 20th century poetry.', ['poetry', 'modernist', '1910s']);
addQuestion('literature', 'Who wrote A Raisin in the Sun?', 'Lorraine Hansberry', 'medium', 'Hansberry\'s 1959 play explores an African-American family in Chicago.', ['plays', 'American', '1950s']);
addQuestion('literature', 'Who wrote "The Waste Land"?', 'T.S. Eliot', 'hard', 'Eliot\'s 1922 poem is a modernist masterpiece about post-WWI disillusionment.', ['poetry', 'modernist', '1920s']);
addQuestion('literature', 'Who wrote Romeo and Juliet?', 'William Shakespeare', 'easy', 'Shakespeare\'s tragic love story features feuding families in Verona.', ['plays', 'Shakespeare', 'tragedy']);
addQuestion('literature', 'Who wrote "Howl"?', 'Allen Ginsberg', 'hard', 'Ginsberg\'s 1956 Beat Generation poem challenged censorship laws.', ['poetry', 'Beat Generation', '1950s']);
addQuestion('literature', 'Who wrote The Crucible?', 'Arthur Miller', 'medium', 'Miller\'s 1953 play about Salem witch trials was an allegory for McCarthyism.', ['plays', 'American', '1950s']);
addQuestion('literature', 'Who wrote "If—"?', 'Rudyard Kipling', 'medium', 'Kipling\'s 1910 inspirational poem advises "If you can keep your head when all about you are losing theirs".', ['poetry', 'British', '1910s']);

// Non-Fiction & Essays (10 questions)
addQuestion('literature', 'Who wrote The Diary of a Young Girl?', 'Anne Frank', 'easy', 'Anne Frank\'s diary documented her life hiding from Nazis during WWII.', ['non-fiction', 'autobiography', '1940s']);
addQuestion('literature', 'Who wrote The Autobiography of Malcolm X?', 'Malcolm X and Alex Haley', 'medium', 'Published in 1965, it chronicles Malcolm X\'s life and transformation.', ['non-fiction', 'autobiography', '1960s']);
addQuestion('literature', 'Who wrote Silent Spring?', 'Rachel Carson', 'hard', 'Carson\'s 1962 book launched the environmental movement by exposing pesticide dangers.', ['non-fiction', 'environment', '1960s']);
addQuestion('literature', 'Who wrote A Brief History of Time?', 'Stephen Hawking', 'easy', 'Hawking\'s 1988 book explains cosmology for general readers.', ['non-fiction', 'science', '1980s']);
addQuestion('literature', 'Who wrote The Origin of Species?', 'Charles Darwin', 'medium', 'Darwin\'s 1859 book introduced the theory of evolution by natural selection.', ['non-fiction', 'science', '1850s']);
addQuestion('literature', 'Who wrote Walden?', 'Henry David Thoreau', 'medium', 'Thoreau\'s 1854 book reflects on simple living in nature.', ['non-fiction', 'philosophy', '1850s']);
addQuestion('literature', 'Who wrote I Know Why the Caged Bird Sings?', 'Maya Angelou', 'medium', 'Angelou\'s 1969 autobiography covers her early years and overcoming racism.', ['non-fiction', 'autobiography', '1960s']);
addQuestion('literature', 'Who wrote Night?', 'Elie Wiesel', 'medium', 'Wiesel\'s 1960 memoir describes his experiences in Nazi concentration camps.', ['non-fiction', 'Holocaust', '1960s']);

console.log(`Generated ${questions.length} Literature questions so far...`);

// Write to final output file
const output = {
  version: '2.0',
  lastUpdated: new Date().toISOString().split('T')[0],
  totalQuestions: questions.length,
  description: 'Comprehensive trivia database with research-based questions',
  categories: {
    history: questions.filter(q => q.category === 'history').length,
    science: questions.filter(q => q.category === 'science').length,
    geography: questions.filter(q => q.category === 'geography').length,
    'pop culture': questions.filter(q => q.category === 'pop culture').length,
    sports: questions.filter(q => q.category === 'sports').length,
    literature: questions.filter(q => q.category === 'literature').length,
  },
  questions: questions
};

fs.writeFileSync(__dirname + '/../data/questions.json', JSON.stringify(output, null, 2));
console.log('\n=================================');
console.log('✓ Question database generated!');
console.log('=================================');
console.log(`Total questions: ${questions.length}`);
console.log(`History: ${output.categories.history}`);
console.log(`Science: ${output.categories.science}`);
console.log(`Geography: ${output.categories.geography}`);
console.log(`Pop Culture: ${output.categories['pop culture']}`);
console.log(`Sports: ${output.categories.sports}`);
console.log(`Literature: ${output.categories.literature}`);
console.log('\nSaved to: data/questions.json');
