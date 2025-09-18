export const schoolProjects = [
  {
    title: "AI Housing Assistant",
  description:
    "A conversational AI assistant built to help unhoused and low-income users navigate affordable housing applications. Uses LLMs to ask questions, explain program options, and streamline the intake process.",
  tech: [
    "NestJS",
    "Next.js",
    "Prisma",
    "PostgreSQL",
    "TypeScript",
    "LLM (Phi-3 via Ollama)",
    "React"
  ],
    imageUrl: "/images/housing-assistant.png",
    // videoUrl: "/videos/housing-assistant.mp4",
    github: "https://github.com/jtcCapstone/bloomCapstone",
    link: "https://github.com/jtcCapstone/bloomCapstone",
  },
  {
    title: "Local Weather Prediction App",
    description:
      "A machine learning-powered web app that predicts next-day temperatures using historical weather data. It features a Python FastAPI backend with a k-Nearest Neighbors (k-NN) model and a responsive React frontend styled with shadcn/ui.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "scikit-learn",
      "Tailwind CSS",
      "Axios",
      "WeatherAPI",
    ],
    imageUrl: "/images/weather.jpg",
    github: "https://github.com/pamelaAugustine/weather-prediction-app",
    link: "https://github.com/pamelaAugustine/weather-prediction-app",
  },
  {
    title: "Zero-Shot Classification with CLIP",
    description:
      "Used OpenAI's CLIP model to classify flower images using natural language prompts—no training or fine-tuning required. This project explored zero-shot learning with a real-world image dataset.",
    tech: ["Python", "Hugging Face Transformers", "CLIP", "PyTorch", "PIL"],
    github: "https://github.com/pamelaAugustine/clip-zero-shot-flowers",
    imageUrl: "/images/beautiful-flowers-orchid.webp",
    link: "https://github.com/pamelaAugustine/clip-zero-shot-flowers",
  },
  {
    title: "NLP Text Classifier – 20 Newsgroups",
    description:
      "Built an end-to-end NLP pipeline to classify news articles into 20 categories using scikit-learn. Included preprocessing, TF-IDF vectorization, and model evaluation with Naive Bayes.",
    tech: ["Python", "scikit-learn", "TF-IDF", "NLP", "Naive Bayes"],
    github: "https://github.com/pamelaAugustine/nlp-workshop",
    imageUrl: "/images/nlp-classifier.png",
    link: "https://github.com/pamelaAugustine/nlp-workshop",
  },
  //   {
  //   title: "Deep Q-Network on CartPole",
  //   description:
  //     "Implemented a Deep Q-Network agent using TensorFlow to solve the CartPole-v1 environment. Features experience replay, target network updates, and custom reward shaping.",
  //   tech: ["Python", "TensorFlow", "Gymnasium", "Deep Q-Network", "Reinforcement Learning"],
  //   github: "https://github.com/pamelaAugustine/dqn-cartpole", // replace with actual
  //   imageUrl: "/images/dqn-cartpole.png", // placeholder, can use your reward plot or a training gif
  //   link: "https://github.com/pamelaAugustine/dqn-cartpole"
  // },
  {
    title: "React Patterns – Pet Adoption Center",
    description:
      "A fun React project demonstrating advanced component patterns like Context API, Higher Order Components, and Render Props. Users can browse galactic pets, view power levels, and submit adoption forms.",
    tech: [
      "React",
      "Tailwind CSS",
      "Context API",
      "HOC",
      "Render Props",
      "Jest",
    ],
    github: "https://github.com/pamelaAugustine/pet-adoption-center",
    imageUrl: "/images/pet-adoption.png",
    link: "https://github.com/pamelaAugustine/pet-adoption-center",
  },
  // More projects to come
];
