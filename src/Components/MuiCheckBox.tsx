import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { Bookmark } from "@mui/icons-material";
import { BookmarkBorder } from "@mui/icons-material";
export const MuiCheckBox = () => {
  const [accept, setAccept] = useState(false);
  const [Skills, setSkills] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccept((prev) => !prev);
  };
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...Skills, event.target.value]);
    } else {
      setSkills(Skills.filter((skill) => skill !== event.target.value));
    }
    console.log(index);
  };
  console.log(Skills);
  return (
    <Box>
      <FormControlLabel
        control={<Checkbox onChange={handleChange} />}
        value={accept}
        label="agree terms and conditions"
      ></FormControlLabel>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={accept}
          onChange={handleChange}
        ></Checkbox>
      </Box>
      <Box>
        <FormControl>
          <FormLabel id="Skills">Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Skills.includes("HTML")}
                  onChange={handleSkillChange}
                />
              }
              label="HTML"
              value="HTML"
            ></FormControlLabel>
            <FormControlLabel
              control={<Checkbox onChange={handleSkillChange} />}
              label="CSS"
              value="CSS"
            ></FormControlLabel>
            <FormControlLabel
              control={<Checkbox onChange={handleSkillChange} />}
              label="JavaScript"
              value="Javascript"
            ></FormControlLabel>
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
