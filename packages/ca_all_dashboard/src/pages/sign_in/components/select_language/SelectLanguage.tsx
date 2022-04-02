import * as React from "react";
import {MenuItem, Select, SelectChangeEvent, useTheme} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const IconDropdown = () => {
  return <KeyboardArrowDownIcon />;
};
const SelectLanguage = () => {
  const theme = useTheme();
  const [language, setLanguage] = React.useState("1");

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };
  return (
    <Select
      labelId="select-language"
      id="demo-simple-select"
      value={language}
      onChange={handleChangeLanguage}
      IconComponent={IconDropdown}
      sx={{
        width: "160px",
        height: "40px",
        borderRadius: theme.borderRadius.md,
        backgroundColor: theme.palette.yellow.light600,
        padding: "0 12px",
        ...theme.typography.h6,

        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.yellow.light900,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.yellow.light900,
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.yellow.light600,
        },
      }}
    >
      <MenuItem value={1}>English</MenuItem>
      <MenuItem value={2}>Vietnam</MenuItem>
    </Select>
  );
};

export {SelectLanguage};
