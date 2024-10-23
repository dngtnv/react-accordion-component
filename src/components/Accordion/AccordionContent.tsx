import { ReactNode } from "react";
import { useAccordionContext } from "../Accordion";
import { useAccordionItemContext } from "./AccordionItem";

const AccordionContent = ({ children }: { children: ReactNode }) => {
  const { activeIndex } = useAccordionContext();
  const { id } = useAccordionItemContext();
  const isOpen = activeIndex === id;

  return (
    <div className={isOpen ? "accordion__content--open" : "accordion__content"}>
      {children}
    </div>
  );
};

export default AccordionContent;
