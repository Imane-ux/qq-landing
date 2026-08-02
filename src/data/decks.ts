export type Deck = {
  id: string;
  name: string;
  tagline: string;
  questions: string[];
};

export const freeDecks: Deck[] = [
  {
    id: "icebreakers",
    name: "Icebreakers",
    tagline: "Light, warm, and easy — the doorway in.",
    questions: [
      "Given the choice of anyone in the world, whom would you want as a dinner guest?",
      'What would constitute a "perfect" day for you?',
      "What's one thing that always makes you smile?",
      "What's your favorite animal and why? What 3 criteria make it your favorite?",
      "If you were invisible for a day, what would you do?",
      "What is a small thing that instantly makes your day better?",
      "What's your favorite way to spend time with someone?",
      "Draw your mental state right now (or describe it). Why?",
      "What would you title a book about your life?",
      "What's the happiest memory from your childhood?",
      "What's something you've always wanted to try but haven't?",
      "If today was your last day to live, and you couldn't contact anyone, who would you regret not reaching out to?",
      "What's your favourite hadith that comes to mind?",
      "What's an ayah that feels comforting to your heart?",
      "What makes you laugh the most?",
      "What's a childhood memory you cherish?",
      "If you could master any skill instantly, what would it be?",
      "What's one thing on your bucket list?",
      "How do you like to celebrate your birthday?",
      "Are you more introverted or extroverted?",
      "How do you recharge after a long day?",
      "What's your favorite way to show or receive love?",
    ],
  },
  {
    id: "spontaneous",
    name: "Spontaneous",
    tagline: "Playful sparks — laughter first, depth later.",
    questions: [
      "If you could only eat one meal forever, what would it be?",
      "What's your favorite conspiracy theory (just for fun)?",
      "What's a silly fear you have?",
      "If we had a couple's YouTube channel, what would it be called?",
      "What's your go-to karaoke song?",
      "Who would play you in a movie about your life?",
      "What's a weird talent you have?",
      "If you were an animal, what would you be?",
      "What's your guilty pleasure TV show?",
      "Do you believe in soulmates?",
      "What's the weirdest dream you've ever had?",
      "How do you feel about pineapple on pizza?",
    ],
  },
  {
    id: "beliefs",
    name: "Beliefs",
    tagline: "Values, boundaries, and the deen you build on.",
    questions: [
      "What values do you live your life by?",
      "How do you define trust?",
      "What are your boundaries in a relationship?",
      "How do you feel about gender roles in marriage?",
      "Is there anything that's a non-negotiable for you in a partner?",
      "How do you define loyalty?",
      "What does modesty mean to you?",
      "How do you express disagreement respectfully?",
      "What would you never tolerate in a relationship?",
      "Do you believe in emotional independence in a marriage?",
      "Do you think a couple should share everything?",
      "How do you define personal growth?",
      "What is your greatest personal accomplishment?",
      "What does love/marriage mean to you?",
      "What are you currently working on to improve yourself?",
      "What do you need in a relationship when you feel hurt or insecure?",
      "How do you rebuild after conflict?",
      "How do you define emotional maturity?",
      "How do you navigate culture versus Islam?",
      "Who are your primary Islamic teachers/sources?",
      "What is your relationship with Allah like?",
      "What would you die for? What do you live for?",
      "What spiritual work have you done on yourself?",
      "How do you understand barakah and how do you protect it?",
      "Do you have any kind of addictions?",
    ],
  },
];

/** Hints that appear inside the locked decks, one teaser question each. */
export const lockedDecks = [
  { name: "Faith", teaser: "What role does Islam play in your daily life?" },
  { name: "Feelings", teaser: "How do you usually process difficult emotions?" },
  { name: "Marriage", teaser: "What does “being ready for marriage” mean to you?" },
  {
    name: "Future",
    teaser: "If you could imagine your life in 5 or 10 years, what would it be like?",
  },
  { name: "Healing", teaser: "What’s something you’re healing from?" },
  { name: "Raw", teaser: "What’s something people get wrong about you?" },
  {
    name: "Health",
    teaser: "Is there anything about your health you believe a spouse must know before marriage?",
  },
  {
    name: "Dealbreakers",
    teaser: "What truth would you consider a dealbreaker if revealed later?",
  },
  { name: "Finances", teaser: "How should money be shared, saved, and spoken about?" },
];

/** Extra insight shown under specific questions. */
export const questionNotes: Record<string, string> = {
  "What's your favorite animal and why? What 3 criteria make it your favorite?":
    "Twist: most people end up revealing what they long for in a partner — or traits they value in themselves.",
};
