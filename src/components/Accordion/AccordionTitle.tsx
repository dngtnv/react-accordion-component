import { ReactNode } from "react";
import { useAccordionContext } from "../Accordion";
import { useAccordionItemContext } from "./AccordionItem";

const AccordionTitle = ({ children }: { children: ReactNode }) => {
  const { id } = useAccordionItemContext();
  const { activeIndex, toggleActive } = useAccordionContext();
  const isOpen = activeIndex === id;

  function handleClick() {
    toggleActive(id);
  }
  return (
    <button className="accordion__item-button" onClick={handleClick}>
      <div className="accordion__title">
        <span className="accordion__title-text">{children}</span>
        <span
          className={
            isOpen ? "accordion__title-icon rotate" : "accordion__title-icon"
          }
        ></span>
      </div>
    </button>
  );
};

export default AccordionTitle;
