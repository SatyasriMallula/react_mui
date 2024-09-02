import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
export const Accordian = () => {
  const [expand, setExpand] = useState<string | boolean>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpand(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        sx={{ width: "700px" }}
        expanded={expand === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1"
          aria-controls="panel1-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            necessitatibus numquam excepturi voluptatem debitis reprehenderit
            praesentium saepe. Praesentium cum fugiat non amet, autem earum quod
            animi sint nostrum ut similique.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ width: "700px" }}
        expanded={expand === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2"
          aria-controls="panel2-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            necessitatibus numquam excepturi voluptatem debitis reprehenderit
            praesentium saepe. Praesentium cum fugiat non amet, autem earum quod
            animi sint nostrum ut similique.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ width: "700px" }}
        expanded={expand === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3"
          aria-controls="panel3-content"
          expandIcon={<ExpandMore />}
        >
          <Typography>Accordian3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
            necessitatibus numquam excepturi voluptatem debitis reprehenderit
            praesentium saepe. Praesentium cum fugiat non amet, autem earum quod
            animi sint nostrum ut similique.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
