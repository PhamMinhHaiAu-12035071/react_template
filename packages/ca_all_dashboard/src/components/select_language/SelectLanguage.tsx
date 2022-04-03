import * as React from "react";
import {MenuItem, Select, SelectChangeEvent, useTheme} from "@mui/material";
import {Icon} from "./components/icon";

const languages = ["English", "Vietnam"];

const SelectLanguage = () => {
  const theme = useTheme();
  const [language, setLanguage] = React.useState(`${0}`);
  const [isShow, setIsShow] = React.useState<boolean>(false);

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
  };

  const _onClick = () => {
    setIsShow(!isShow);
  };
  const _onOpen = () => {
    setIsShow(true);
  };
  const _onClose = () => {
    setIsShow(false);
  };
  return (
    <Select
      open={isShow}
      labelId="select-language"
      id="select-language"
      onClose={_onClose}
      onOpen={_onOpen}
      value={language}
      onChange={handleChangeLanguage}
      IconComponent={() => {
        return <Icon onClick={_onClick} />;
      }}
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
