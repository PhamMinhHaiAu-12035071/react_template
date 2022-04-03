import * as React from "react";
import {MenuItem, Select, SelectChangeEvent, useTheme} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const IconDropdown = () => {
  return <KeyboardArrowDownIcon />;
};

const languages = ["English", "Vietnam"];

const SelectLanguage = () => {
  const theme = useTheme();
  const [language, setLanguage] = React.useState(`${0}`);

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };
  return (
    <Select
      labelId="select-language"
      id="select-language"
      value={language}
      onChange={handleChangeLanguage}
      IconComponent={IconDropdown}
      className={"select-language"}
      sx={{
        ...theme.typography.h6,
      }}
    >
      {languages.map((language, index) => {
        return (
          <MenuItem value={index} key={index.toString()}>
            {language}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export {SelectLanguage};
