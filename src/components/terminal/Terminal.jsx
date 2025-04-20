import { useEffect, useState } from "react";

const lines = [
  {
    command: "~ echo $CURRENTLY",
    output: "Building sleek websites and leveling up my development skills.",
  },
  {
    command: "~ echo $PREVIOUSLY",
    output: "Student at TECHSTUDIO ACADEMY",
  },
  {
    command: "~ echo $HOBBIES",
    output: "Tech 👩🏾‍💻, Video Games 🎮, Basketball 🏀",
  },
];

const TerminalSection = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isCommand, setIsCommand] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const currentText = isCommand
      ? lines[currentLine].command
      : lines[currentLine].output;

    if (index < currentText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + currentText[index]);
        setIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        if (!isCommand) {
          setCurrentLine((prev) => prev + 1);
        }
        setIsCommand((prev) => !prev);
        setTypedText("");
        setIndex(0);
      }, 800);
      return () => clearTimeout(delay);
    }
  }, [index, isCommand, currentLine]);

  return (
    <div className="bg-white text-black font-mono rounded-lg shadow-lg max-w-70 md:max-w-full mx-auto p-6">
      <div className="bg-white text-black px-6 py-3 rounded-t-md text-xl  border-b border-gray-700">
        Hi There
      </div>
      <div className="px-6 py-4 space-y-2 md:text-xl leading-relaxed min-h-[220px]">
        {lines.slice(0, currentLine).map((line, i) => (
          <div key={i}>
            <div className=" text-purple-400">{line.command}</div>
            <div className="terminal-output">{highlightText(line.output)}</div>
          </div>
        ))}
        {currentLine < lines.length && (
          <div className="flex terminal-output">
            <div className="text-purple-400">{isCommand ? "" : ""}</div>
            <div>
              <span>{highlightText(typedText)}</span>
              <span className="blinking-cursor">|</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function highlightText(text) {
  return text.split(" ").map((word, i) => {
    const clean = word.replace(/[.,]/g, "");
    const punct = word.match(/[.,]$/);
    const end = punct ? punct[0] : "";

    if (clean === "TECHSTUDIO")
      return (
        <span key={i} className="text-green-400">
          TECHSTUDIO{end + " "}
        </span>
      );
    if (clean === "ACADEMY")
      return (
        <span key={i} className="text-yellow-400">
          ACADEMY{end + " "}
        </span>
      );
    if (clean === "Tech")
      return (
        <span key={i} className="text-green-400">
          Tech{end + " "}
        </span>
      );
    if (clean === "Video")
      return (
        <span key={i} className="text-yellow-400">
          Video{end + " "}
        </span>
      );
    if (clean === "Games")
      return (
        <span key={i} className="text-yellow-400">
          Games{end + " "}
        </span>
      );
    if (clean === "Basketball")
      return (
        <span key={i} className="text-purple-400">
          Basketball{end + " "}
        </span>
      );
    return word + " ";
  });
}

export default TerminalSection;
