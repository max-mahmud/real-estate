import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import data from "../../utils/accordion";
import './Accordian.css'
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import { AiFillCaretDown } from "react-icons/ai";

const Accordian = () => {
  return (
    <div className="accordia-wrapper">
      <h3 className="orangeText ">Our Value</h3>
      <h2 className="primaryText py-3">Value We Give to You</h2>
      <p className="secondaryText pb-3">
        We always ready to help by providijng the best services for you. <br />{" "}
        We beleive a good blace to live can make your life better
      </p>
      <Accordion >
        {data.map((item, i) => {
          return (
            <AccordionItem key={i} className="ac-wrapper">
              <AccordionItemHeading >
                <AccordionItemButton className="my-accordian">
                 <span>{item.icon}</span> <h4 >{item.heading}</h4> <span><AiFillCaretDown /></span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="secondaryText">
                  {item.detail}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Accordian;
