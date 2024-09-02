import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
type skillType = {
  id: number;
  label: string;
};
const Skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const skillArray = Skills.map((item, index) => ({
  id: index + 1,
  label: item,
}));

export const MuiAutoComplete = () => {
  const [skill, setSkill] = useState<string | null>();
  const [value, setValue] = useState<skillType[]>([]);
  console.log(skill);
  console.log(value);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={Skills}
        renderInput={(props) => (
          <TextField {...props} label="Skills" value={skill} />
        )}
        onChange={(e: {}, newvalue: string | null) => setSkill(newvalue)}
      />
      <Autocomplete
        options={skillArray}
        multiple
        // getOptionLabel={(Option) => Option.label}
        renderInput={(props) => (
          <TextField {...props} label="Skills" value={skill} />
        )}
        value={value}
        onChange={(e: any, newvalue: skillType[]) => setValue(newvalue)}
      />
    </Stack>
  );
};
