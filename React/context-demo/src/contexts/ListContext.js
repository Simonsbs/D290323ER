import { createContext, useState } from "react";

export const ListContext = createContext();

function generateItemList(num) {
  const itemList = [];

  for (let i = 1; i <= num; i++) {
    const item = {
      id: i,
      title: generateRandomTitle(),
      image: "https://picsum.photos/200/100?random=" + i,
    };
    itemList.push(item);
  }

  return itemList;
}

function generateRandomTitle() {
  const words = [
    "Sunset",
    "Mountain",
    "Lake",
    "Forest",
    "Desert",
    "Beach",
    "Sky",
    "Dawn",
    "Dusk",
    "Valley",
    "River",
    "Meadow",
  ];
  const titleLength = Math.floor(Math.random() * 2) + 2; // Generates a random number between 2 and 3
  let title = "";

  for (let i = 0; i < titleLength; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    title += words[randomIndex] + " ";
    // Remove the word from the array to prevent repetition
    words.splice(randomIndex, 1);
  }

  return title.trim();
}

export function ListProvider({ children }) {
  const [items, setItems] = useState(generateItemList(20));
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <ListContext.Provider value={{ items, setSelectedItem, selectedItem }}>
      {children}
    </ListContext.Provider>
  );
}
