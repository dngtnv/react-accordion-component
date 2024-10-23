import { useState, ReactNode, useContext } from "react";
import { createContext } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

// Define the type for context value
interface AccordionContextValue {
  activeIndex: string | null;
  toggleActive: (index: string) => void;
}

const AccordionContext = createContext<AccordionContextValue | undefined>(
  undefined,
);

export function useAccordionContext(): AccordionContextValue {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error(
      "useAccordionContext must be used within AccordionProvider",
    );
  }
  return ctx;
}

const Accordion = ({ children }: { children: ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  function toggleActive(index: string) {
    setActiveIndex((prev) => (prev === index ? null : index));
  }

  const contextValue = {
    activeIndex,
    toggleActive,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className="accordion">
        <ul className="accordion__list">{children}</ul>
      </div>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;

export default Accordion;
