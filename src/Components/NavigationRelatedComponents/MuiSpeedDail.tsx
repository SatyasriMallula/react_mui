import React from "react";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import { CopyAll } from "@mui/icons-material";
import { ContentPaste } from "@mui/icons-material";
import { Share } from "@mui/icons-material";
import { Edit } from "@mui/icons-material";
export const MuiSpeedDail = () => {
  return (
    <div>
      <SpeedDial
        ariaLabel="Navigation"
        sx={{ position: "absolute", bottom: "10px", right: 6 }}
        icon={<SpeedDialIcon openIcon={<Edit></Edit>} />}
      >
        <SpeedDialAction icon={<CopyAll />} tooltipTitle="Copy" tooltipOpen />
        <SpeedDialAction
          icon={<ContentPaste />}
          tooltipTitle="Paste"
          tooltipOpen
        />
        <SpeedDialAction icon={<Share />} tooltipTitle="Share" tooltipOpen />
      </SpeedDial>
    </div>
  );
};
