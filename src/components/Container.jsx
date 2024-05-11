import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");
  // const numberOfWords = text.split(/\s/).filter((word) => word !== "").length;
  const numberOfCharacters = text.length;
  console.log(numberOfCharacters);

  // const instagramCharactersLeft = 280 - numberOfCharacters;
  // const facebookCharactersLeft = 2200 - numberOfCharacters;

  const stats = {
    numberOfCharacters: text.length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - numberOfCharacters,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - numberOfCharacters,
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length
  };
  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
