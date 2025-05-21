const mockBooks = [
  
  {
    "id": 1,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "description": "A classic novel about manners, marriage, and societal expectations in 19th-century England.",
    "category": "Fiction",
    "rating": "4.5",
    "img": "https://covers.openlibrary.org/b/id/8226191-L.jpg"
  },
  {
    "id": 2,
    "title": "1984",
    "author": "George Orwell",
    "description": "A dystopian novel set in a totalitarian society under constant surveillance.",
    "category": "Fiction",
    "rating": "4.6",
    "img": "https://covers.openlibrary.org/b/id/7222246-L.jpg"
  },
  {
    "id": 3,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "description": "A novel about racial injustice in the Deep South, seen through the eyes of a young girl.",
    "category": "Fiction",
    "rating": "4.8",
    "img": "https://covers.openlibrary.org/b/id/8228691-L.jpg"
  },
  {
    "id": 4,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "description": "A story of wealth, love, and the American Dream in the 1920s.",
    "category": "Fiction",
    "rating": "4.4",
    "img": "https://covers.openlibrary.org/b/id/7222161-L.jpg"
  },
  {
    "id": 5,
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "description": "An epic tale of obsession and revenge between a sea captain and a white whale.",
    "category": "Fiction",
    "rating": "4.2",
    "img": "https://covers.openlibrary.org/b/id/7222251-L.jpg"
  },
  {
    "id": 6,
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "description": "A novel following the experiences of its eponymous heroine, including her growth to adulthood and love for Mr. Rochester.",
    "category": "Fiction",
    "rating": "4.7",
    "img": "https://covers.openlibrary.org/b/id/8231856-L.jpg"
  },
  {
    "id": 7,
    "title": "Wuthering Heights",
    "author": "Emily Brontë",
    "description": "A tale of passion and revenge set on the Yorkshire moors.",
    "category": "Fiction",
    "rating": "4.3",
    "img": "https://covers.openlibrary.org/b/id/8231857-L.jpg"
  },
  {
    "id": 8,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "description": "A story about teenage angst and alienation.",
    "category": "Fiction",
    "rating": "4.0",
    "img": "https://covers.openlibrary.org/b/id/8231858-L.jpg"
  },
  {
    "id": 9,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "description": "A fantasy novel about the adventures of Bilbo Baggins.",
    "category": "Fiction",
    "rating": "4.8",
    "img": "https://covers.openlibrary.org/b/id/8231859-L.jpg"
  },
  {
    "id": 10,
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "description": "A dystopian novel about a future where books are banned and burned.",
    "category": "Fiction",
    "rating": "4.5",
    "img": "https://covers.openlibrary.org/b/id/8231860-L.jpg"
  },
  {
    "id": 11,
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "description": "A novel depicting a futuristic society driven by technological advancements and controlled by a totalitarian regime.",
    "category": "Fiction",
    "rating": "4.4",
    "img": "https://covers.openlibrary.org/b/id/8231861-L.jpg"
  },
  {
    "id": 12,
    "title": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "description": "An epic fantasy trilogy about the quest to destroy the One Ring.",
    "category": "Fiction",
    "rating": "4.9",
    "img": "https://covers.openlibrary.org/b/id/8231862-L.jpg"
  },
  {
    "id": 13,
    "title": "Animal Farm",
    "author": "George Orwell",
    "description": "An allegorical novella reflecting events leading up to the Russian Revolution.",
    "category": "Fiction",
    "rating": "4.6",
    "img": "https://covers.openlibrary.org/b/id/8231863-L.jpg"
  },
  {
    "id": 14,
    "title": "The Chronicles of Narnia",
    "author": "C.S. Lewis",
    "description": "A series of fantasy novels set in the magical land of Narnia.",
    "category": "Fiction",
    "rating": "4.7",
    "img": "https://covers.openlibrary.org/b/id/8231864-L.jpg"
  },
  {
    "id": 15,
    "title": "Dracula",
    "author": "Bram Stoker",
    "description": "A gothic horror novel introducing the character of Count Dracula.",
    "category": "Fiction",
    "rating": "4.3",
    "img": "https://covers.openlibrary.org/b/id/8231865-L.jpg"
  },
  {
    "id": 16,
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "description": "A novel about a young scientist who creates a sapient creature in an unorthodox experiment.",
    "category": "Fiction",
    "rating": "4.4",
    "img": "https://covers.openlibrary.org/b/id/8231866-L.jpg"
  },
  {
    "id": 17,
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "description": "A novel about a man who remains young while his portrait ages.",
    "category": "Fiction",
    "rating": "4.5",
    "img": "https://covers.openlibrary.org/b/id/8231867-L.jpg"
  },
  {
    "id": 18,
    "title": "Les Misérables",
    "author": "Victor Hugo",
    "description": "A novel set in 19th-century France, focusing on the struggles of ex-convict Jean Valjean.",
    "category": "Fiction",
    "rating": "4.6",
    "img": "https://covers.openlibrary.org/b/id/8231868-L.jpg"
  },
  {
    "id": 19,
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "description": "A historical novel that chronicles the French invasion of Russia.",
    "category": "Fiction",
    "rating": "4.7",
    "img": "https://covers.openlibrary.org/b/id/8231869-L.jpg"
  },
  {
    "id": 20,
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "description": "A novel about the mental anguish of a man who commits a murder.",
    "category": "Fiction",
    "rating": "4.8",
    "img": "https://covers.openlibrary.org/b/id/8231870-L.jpg"
  }
 ,
  {
    id: 21,
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    description: "A poignant diary by Anne Frank, chronicling her family's two years in hiding during the German occupation of the Netherlands in World War II.",
    category: "Non-Fiction",
    rating: "4.2",
    img: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
  },
  {
    id: 22,
    title: "The Art of War",
    author: "Sun Tzu",
    description: "An ancient Chinese military treatise emphasizing strategy, deception, and the importance of understanding both oneself and the enemy.",
    category: "Non-Fiction",
    rating: "4.0",
    img: "https://covers.openlibrary.org/b/id/10034517-L.jpg"
  },
  {
    id: 23,
    title: "The Communist Manifesto",
    author: "Karl Marx, Friedrich Engels",
    description: "A political pamphlet advocating for the proletariat's rise against bourgeois oppression, laying the foundation for modern socialism.",
    category: "Non-Fiction",
    rating: "4.1",
    img: "https://covers.openlibrary.org/b/id/10844431-L.jpg"
  },
  {
    id: 24,
    title: "The Prince",
    author: "Niccolò Machiavelli",
    description: "A treatise offering pragmatic advice to new princes and rulers on maintaining power and political survival.",
    category: "Non-Fiction",
    rating: "4.3",
    img: "https://covers.openlibrary.org/b/id/12184242-L.jpg"
  },
  {
    id: 25,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    description: "An exploration of cosmology, discussing the universe's origin, black holes, and the nature of time in accessible language.",
    category: "Non-Fiction",
    rating: "4.5",
    img: "https://covers.openlibrary.org/b/id/8231991-L.jpg"
  },
  {
    id: 26,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description: "A narrative tracing the history of Homo sapiens, examining how biology and history have defined human understanding.",
    category: "Non-Fiction",
    rating: "4.6",
    img: "https://covers.openlibrary.org/b/id/8392461-L.jpg"
  },
  {
    id: 27,
    title: "The Story of My Experiments with Truth",
    author: "Mahatma Gandhi",
    description: "An autobiography detailing Gandhi's journey towards self-realization and his experiments with truth and non-violence.",
    category: "Non-Fiction",
    rating: "4.4",
    img: "https://covers.openlibrary.org/b/id/9022133-L.jpg"
  },
  {
    id: 28,
    title: "Night",
    author: "Elie Wiesel",
    description: "A harrowing account of Wiesel's experiences in Nazi concentration camps during the Holocaust.",
    category: "Non-Fiction",
    rating: "4.5",
    img: "https://covers.openlibrary.org/b/id/8225427-L.jpg"
  },
  {
    id: 29,
    title: "Long Walk to Freedom",
    author: "Nelson Mandela",
    description: "Mandela's autobiography detailing his early life, education, and 27 years in prison before becoming South Africa's president.",
    category: "Non-Fiction",
    rating: "4.7",
    img: "https://covers.openlibrary.org/b/id/8099351-L.jpg"
  },
  {
    id: 30,
    title: "Freakonomics",
    author: "Steven D. Levitt, Stephen J. Dubner",
    description: "An exploration of hidden economic forces behind everyday phenomena, challenging conventional wisdom.",
    category: "Non-Fiction",
    rating: "4.3",
    img: "https://covers.openlibrary.org/b/id/8099361-L.jpg"
  },
  {
    id: 31,
    title: "Outliers",
    author: "Malcolm Gladwell",
    description: "An analysis of the factors contributing to high levels of success, emphasizing the role of opportunity and culture.",
    category: "Non-Fiction",
    rating: "4.2",
    img: "https://covers.openlibrary.org/b/id/8099371-L.jpg"
  },
  {
    id: 32,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description: "A deep dive into the two systems of thought that drive our decisions: the fast, intuitive system and the slow, deliberate system.",
    category: "Non-Fiction",
    rating: "4.4",
    img: "https://covers.openlibrary.org/b/id/8099381-L.jpg"
  },
  {
    id: 33,
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    description: "A gene-centered view of evolution, proposing that genes drive the process of natural selection.",
    category: "Non-Fiction",
    rating: "4.3",
    img: "https://covers.openlibrary.org/b/id/8099391-L.jpg"
  },
  {
    id: 34,
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    description: "An analysis of how environmental and geographical factors have shaped the modern world.",
    category: "Non-Fiction",
    rating: "4.5",
    img: "https://covers.openlibrary.org/b/id/8099401-L.jpg"
  },
  {
    id: 35,
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    description: "The story of Henrietta Lacks and the immortal cell line, HeLa, that came from her cancer cells.",
    category: "Non-Fiction",
    rating: "4.6",
    img: "https://covers.openlibrary.org/b/id/8099411-L.jpg"
  },
  {
    id: 36,
    title: "The Wright Brothers",
    author: "David McCullough",
    description: "A biography of the Wright brothers, detailing their invention of the first successful airplane.",
    category: "Non-Fiction",
    rating: "4.4",
    img: "https://covers.openlibrary.org/b/id/8099421-L.jpg"
  },
  {
    id: 37,
    title: "Educated",
    author: "Tara Westover",
    description: "A memoir about a woman who, kept out of school, leaves her survivalist family and earns a PhD from Cambridge University.",
    category: "Non-Fiction",
    rating: "4.7",
    img: "https://covers.openlibrary.org/b/id/8099431-L.jpg"
  },
  {
    id: 38,
    title: "The Man Who Mistook His Wife for a Hat",
    author: "Oliver Sacks",
    description: "A collection of case studies of individuals with neurological disorders, exploring the human mind.",
    category: "Non-Fiction",
    rating: "4.2",
    img: "https://covers.openlibrary.org/b/id/8099441-L.jpg"
  },
  {
    id: 39,
    title: "Into the Wild",
    author: "Jon Krakauer",
    description: "The true story of Christopher McCandless, who ventured into the Alaskan wilderness with little more than a backpack.",
    category: "Non-Fiction",
    rating: "4.3",
    img: "https://covers.openlibrary.org/b/id/8099451-L.jpg"
  },
  {
    id: 40,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    description: "An exploration of the science behind habit formation and how habits can be changed.",
    category: "Non-Fiction",
    rating: "4.5",
    img: "https://covers.openlibrary.org/b/id/8099461-L.jpg"
  },
   {
    id: 61,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    description: "Explores fundamental questions about the universe, black holes, and time.",
    category: "Science",
    rating: "4.6",
    img: "https://covers.openlibrary.org/b/id/8231991-L.jpg"
  },
  {
    id: 62,
    title: "Cosmos",
    author: "Carl Sagan",
    description: "A journey through space, time, and the human desire to understand the universe.",
    category: "Science",
    rating: "4.7",
    img: "https://covers.openlibrary.org/b/id/10494780-L.jpg"
  },
  {
    id: 63,
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    description: "Explains evolutionary biology and how genes influence natural selection.",
    category: "Science",
    rating: "4.4",
    img: "https://covers.openlibrary.org/b/id/8226191-L.jpg"
  },
  {
    id: 64,
    title: "The Origin of Species",
    author: "Charles Darwin",
    description: "Foundation of evolutionary biology, proposing natural selection as the driving force.",
    category: "Science",
    rating: "4.5",
    img: "https://covers.openlibrary.org/b/id/11122093-L.jpg"
  },
  {
    id: 65,
    title: "The Elegant Universe",
    author: "Brian Greene",
    description: "Introduction to string theory and the fabric of the cosmos.",
    category: "Science",
    rating: "4.3",
    img: "https://covers.openlibrary.org/b/id/240726-L.jpg"
  },
  {
    id: 66,
    title: "The Universe in a Nutshell",
    author: "Stephen Hawking",
    description: "A follow-up to A Brief History of Time, expanding on cosmology and quantum theory.",
    category: "Science",
    rating: "4.2",
    img: "https://covers.openlibrary.org/b/id/7545033-L.jpg"
  },
  {
    id: 67,
    title: "The Gene",
    author: "Siddhartha Mukherjee",
    description: "Traces the history and impact of genetics on humanity.",
    category: "Science",
    rating: "4.6",
    img: "https://covers.openlibrary.org/b/id/8678901-L.jpg"
  },
  {
    id: 68,
    title: "Surely You're Joking, Mr. Feynman!",
    author: "Richard Feynman",
    description: "A collection of anecdotes from a Nobel-winning physicist, filled with wit and curiosity.",
    category: "Science",
    rating: "4.4",
    img: "https://covers.openlibrary.org/b/id/8372211-L.jpg"
  },
  {
    id: 69,
    title: "Astrophysics for People in a Hurry",
    author: "Neil deGrasse Tyson",
    description: "Simplifies complex topics about the universe into short, engaging chapters.",
    category: "Science",
    rating: "4.5",
    img: "https://covers.openlibrary.org/b/id/9055386-L.jpg"
  },
  {
    id: 70,
    title: "The Body",
    author: "Bill Bryson",
    description: "A fascinating tour through the human body and its wonders.",
    category: "Science",
    rating: "4.3",
    img: "https://covers.openlibrary.org/b/id/10544367-L.jpg"
  },
  {
    id: 71,
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    description: "How HeLa cells revolutionized science and the life of the woman behind them.",
    category: "Science",
    rating: "4.5",
    img: "https://covers.openlibrary.org/b/id/8099411-L.jpg"
  },
  {
    id: 72,
    title: "The Sixth Extinction",
    author: "Elizabeth Kolbert",
    description: "Chronicles species loss and human impact on the planet.",
    category: "Science",
    rating: "4.4",
    img: "https://covers.openlibrary.org/b/id/9250191-L.jpg"
  },
  {
    id: 73,
    title: "Chaos: Making a New Science",
    author: "James Gleick",
    description: "Introduces the fascinating world of chaos theory and its pioneers.",
    category: "Science",
    rating: "4.1",
    img: "https://covers.openlibrary.org/b/id/9783476-L.jpg"
  },
  {
    id: 74,
    title: "Why We Sleep",
    author: "Matthew Walker",
    description: "Explains the science of sleep and its crucial role in our lives.",
    category: "Science",
    rating: "4.7",
    img: "https://covers.openlibrary.org/b/id/10678213-L.jpg"
  },
  {
    id: 75,
    title: "Packing for Mars",
    author: "Mary Roach",
    description: "Explores the bizarre science of life in space travel.",
    category: "Science",
    rating: "4.2",
    img: "https://covers.openlibrary.org/b/id/10145485-L.jpg"
  },
  {
    id: 76,
    title: "The Double Helix",
    author: "James D. Watson",
    description: "An inside look at the discovery of DNA's structure.",
    category: "Science",
    rating: "4.3",
    img: "https://covers.openlibrary.org/b/id/7232346-L.jpg"
  },
  {
    id: 77,
    title: "The Demon-Haunted World",
    author: "Carl Sagan",
    description: "A passionate plea for scientific thinking and skepticism.",
    category: "Science",
    rating: "4.6",
    img: "https://covers.openlibrary.org/b/id/8226181-L.jpg"
  },
  {
    id: 78,
    title: "The Fabric of the Cosmos",
    author: "Brian Greene",
    description: "Explores the nature of space, time, and reality.",
    category: "Science",
    rating: "4.3",
    img: "https://covers.openlibrary.org/b/id/8232343-L.jpg"
  },
  {
    id: 79,
    title: "The Hidden Life of Trees",
    author: "Peter Wohlleben",
    description: "Reveals the secret social life of forests and how trees communicate.",
    category: "Science",
    rating: "4.5",
    img: "https://covers.openlibrary.org/b/id/10654291-L.jpg"
  },
  {
    id: 80,
    title: "The Hot Zone",
    author: "Richard Preston",
    description: "A terrifying look at Ebola and deadly viruses from the rainforests.",
    category: "Science",
    rating: "4.4",
    img: "https://covers.openlibrary.org/b/id/7293232-L.jpg"
  },
   {
    id: 81,
    title: "The Guns of August",
    author: "Barbara W. Tuchman",
    description: "A gripping account of the early days of World War I and how miscalculations led to massive conflict.",
    category: "History",
    rating: "4.6",
    img: "https://covers.openlibrary.org/b/id/8228351-L.jpg"
  },
  {
    id: 82,
    title: "Team of Rivals",
    author: "Doris Kearns Goodwin",
    description: "Explores Abraham Lincoln’s presidency and the unlikely alliance he built with political opponents.",
    category: "History",
    rating: "4.7",
    img: "https://covers.openlibrary.org/b/id/8099302-L.jpg"
  },
  {
    id: 83,
    title: "The Rise and Fall of the Third Reich",
    author: "William L. Shirer",
    description: "A thorough chronicle of Nazi Germany, from its inception to its downfall.",
    category: "History",
    rating: "4.5",
    img: "https://covers.openlibrary.org/b/id/8384161-L.jpg"
  },
  {
    id: 84,
    title: "A People's History of the United States",
    author: "Howard Zinn",
    description: "Tells U.S. history from the perspective of everyday people, rather than political leaders.",
    category: "History",
    rating: "4.4",
    img: "https://covers.openlibrary.org/b/id/8384171-L.jpg"
  },
  {
    id: 85,
    title: "Genghis Khan and the Making of the Modern World",
    author: "Jack Weatherford",
    description: "Reveals how Genghis Khan’s empire shaped the world and contributed to modern civilization.",
    category: "History",
    rating: "4.3",
    img: "https://covers.openlibrary.org/b/id/8076381-L.jpg"
  },
  {
    id: 86,
    title: "The Wright Brothers",
    author: "David McCullough",
    description: "A biography of the two brothers who invented and flew the first successful airplane.",
    category: "History",
    rating: "4.5",
    img: "https://covers.openlibrary.org/b/id/8099421-L.jpg"
  },
  {
    id: 87,
    title: "1776",
    author: "David McCullough",
    description: "An inspiring narrative of the year of American independence and the leadership of George Washington.",
    category: "History",
    rating: "4.4",
    img: "https://covers.openlibrary.org/b/id/8228371-L.jpg"
  },
  {
    id: 88,
    title: "The Liberation Trilogy",
    author: "Rick Atkinson",
    description: "A three-volume history of the U.S. Army in the European Theater during World War II.",
    category: "History",
    rating: "4.6",
    img: "https://covers.openlibrary.org/b/id/8099452-L.jpg"
  },
  {
    id: 89,
    title: "SPQR: A History of Ancient Rome",
    author: "Mary Beard",
    description: "A sweeping and accessible account of Rome’s founding, politics, and society.",
    category: "History",
    rating: "4.5",
    img: "https://covers.openlibrary.org/b/id/8232661-L.jpg"
  },
  {
    id: 90,
    title: "The Silk Roads",
    author: "Peter Frankopan",
    description: "A new take on global history through the lens of trade routes and civilizations in the East.",
    category: "History",
    rating: "4.3",
    img: "https://covers.openlibrary.org/b/id/8232669-L.jpg"
  },
  {
    id: 91,
    title: "The Diary of Anne Frank",
    author: "Anne Frank",
    description: "The firsthand account of a Jewish girl's life in hiding during the Holocaust.",
    category: "History",
    rating: "4.7",
    img: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
  },
  {
    id: 92,
    title: "Destiny Disrupted",
    author: "Tamim Ansary",
    description: "A history of the Islamic world from the time of the Prophet Muhammad to the modern era.",
    category: "History",
    rating: "4.4",
    img: "https://covers.openlibrary.org/b/id/8232672-L.jpg"
  },
  {
    id: 93,
    title: "Alexander Hamilton",
    author: "Ron Chernow",
    description: "The inspiration for the Broadway hit musical, this biography covers the life of Hamilton in depth.",
    category: "History",
    rating: "4.6",
    img: "https://covers.openlibrary.org/b/id/8099471-L.jpg"
  },
  {
    id: 94,
    title: "The Warmth of Other Suns",
    author: "Isabel Wilkerson",
    description: "Chronicles the Great Migration of African Americans from the South to the North and West.",
    category: "History",
    rating: "4.5",
    img: "https://covers.openlibrary.org/b/id/8099481-L.jpg"
  },
  {
    id: 95,
    title: "1491",
    author: "Charles C. Mann",
    description: "Reimagines the Americas before the arrival of Columbus based on recent archaeological findings.",
    category: "History",
    rating: "4.4",
    img: "https://covers.openlibrary.org/b/id/8099491-L.jpg"
  },
  {
    id: 96,
    title: "Postwar",
    author: "Tony Judt",
    description: "A comprehensive history of Europe after World War II.",
    category: "History",
    rating: "4.3",
    img: "https://covers.openlibrary.org/b/id/8099501-L.jpg"
  },
  {
    id: 97,
    title: "The Crusades Through Arab Eyes",
    author: "Amin Maalouf",
    description: "Offers a unique perspective on the Crusades from the viewpoint of the Muslim world.",
    category: "History",
    rating: "4.2",
    img: "https://covers.openlibrary.org/b/id/8099511-L.jpg"
  },
  {
    id: 98,
    title: "King Leopold's Ghost",
    author: "Adam Hochschild",
    description: "Uncovers the brutal colonization of the Congo under Belgian rule.",
    category: "History",
    rating: "4.5",
    img: "https://covers.openlibrary.org/b/id/8099521-L.jpg"
  },
  {
    id: 99,
    title: "The History of the Ancient World",
    author: "Susan Wise Bauer",
    description: "Covers the rise and fall of the world’s earliest civilizations.",
    category: "History",
    rating: "4.3",
    img: "https://covers.openlibrary.org/b/id/8099531-L.jpg"
  },
  {
    id: 100,
    title: "Jerusalem: The Biography",
    author: "Simon Sebag Montefiore",
    description: "A sweeping history of one of the world’s most contested cities.",
    category: "History",
    rating: "4.4",
    img: "https://covers.openlibrary.org/b/id/8099541-L.jpg"
  }
];

export default mockBooks;
