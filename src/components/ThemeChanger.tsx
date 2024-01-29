"use client";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const ThemeChanger = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTheme(event.target.value);
    Cookies.set("theme", event.target.value);
  };

  const getThemeFromAPI = async () => {
    const { data } = await axios.get("/api/theme");

    setCurrentTheme(data.theme);
    console.log(data);
  };

  useEffect(() => {
    Cookies.set("name", "Anderson");
    getThemeFromAPI();
  }, []);
  return (
    <Card>
      <CardContent>
        <FormControl>
          <FormLabel>Tema</FormLabel>
          <RadioGroup value={currentTheme} onChange={handleChangeTheme}>
            {["light", "dark", "custom"].map((theme) => (
              <FormControlLabel
                key={theme}
                value={theme}
                control={<Radio />}
                label={theme.charAt(0).toUpperCase() + theme.slice(1)}
              ></FormControlLabel>
            ))}
          </RadioGroup>
        </FormControl>
        <Button variant="contained" onClick={getThemeFromAPI}>
          Solicitar
        </Button>
      </CardContent>
    </Card>
  );
};

export default ThemeChanger;
