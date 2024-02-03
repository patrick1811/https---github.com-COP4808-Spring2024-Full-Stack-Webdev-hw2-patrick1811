const cardPairs = [
    { question: "Start!", answer: "Press the next arrow to start the flashcards :)" },
    { question: "What is the process of a plant making its own food called?", answer: "Photosynthesis", difficulty: "easy" },
    { question: "Which gas do plants absorb from the air during photosynthesis?", answer: "Carbon dioxide", difficulty: "medium" },
    { question: "What is the name of the female reproductive part of a flower?", answer: "Pistil", difficulty: "medium" },
    { question: "What type of plant is a cactus?", answer: "Succulent", difficulty: "easy" },
    { question: "Which tree is known for shedding its leaves annually?", answer: "Deciduous tree", difficulty: "medium" },
    { question: "What is the main function of leaves in a plant?", answer: "Photosynthesis", difficulty: "easy" },
    { question: "Which plant is often associated with Christmas and is known for its prickly leaves?", answer: "Holly", difficulty: "medium" },
    { question: "What is the process of water movement through a plant called?", answer: "Transpiration", difficulty: "hard" },
    {
      question: (
        <div>
          <p>What type of plant is this?</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRRNvUtv0yuqg6kQu8YJLqNmaVdJwo9memRCxdaRC0EfurR5x1LfLoShRW5PMzf1bnAXRnfBGmK8aBquqA" 
            alt="Plant"
            style={{ maxWidth: "30%", height: "auto" }}
          />
        </div>
      ),
      answer: (
        <div>
          <p>This plant is a beautiful example of a tropical fern known for its vibrant green fronds and intricate leaf patterns.</p>
          <p>Plant Name: Tropical Fern</p>
        </div>
      ),
      difficulty: "hard",
    },
  ];
  
  export default cardPairs;
  