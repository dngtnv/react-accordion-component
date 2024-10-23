import { ReactNode, createContext, useContext } from "react";

// Define the context type
interface AccordionItemContextType {
  id: string;
}

const AccordionItemContext = createContext<AccordionItemContextType>({
  id: "",
});

export function useAccordionItemContext(): AccordionItemContextType {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) {
    throw new Error(
      "useAccordionItemContext must be used within AccordionItem",
    );
  }
  return ctx;
}

const AccordionItem = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) => {
  return (
    <AccordionItemContext.Provider value={{ id }}>
      <li className="accordion__item">{children}</li>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
