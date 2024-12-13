import React from "react";
import { useState } from "react";
import { Button, Box, Typography, Container, Paper } from "@mui/material";

function ColorGenerator() {
  const [color, setColor] = useState("rgb");

  function generateRandomColor(type) {
    switch (type) {
      case "rgb":
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColor(`rgb(${r}, ${g}, ${b})`);
        break;
      case "hex":
        const randomHex = Math.floor(Math.random() * 16777215).toString(16);
        setColor(`#${randomHex.padStart(6, "0")}`);
        break;
      case "hsl":
        const h = Math.floor(Math.random() * 360); // Hue: 0 - 360
        const s = Math.floor(Math.random() * 101); // Saturation: 0% - 100%
        const l = Math.floor(Math.random() * 101); // Lightness: 0% - 100%
        setColor(`hsl(${h}, ${s}%, ${l}%)`);
        break;
      default:
        throw new Error("Unsupported color type. Use 'rgb', 'hex', or 'hsl'.");
    }
  }

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
          textAlign: "center",
          mt: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Color Generator
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mb: 3,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => generateRandomColor("rgb")}
          >
            RGB
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => generateRandomColor("hex")}
          >
            HexColor
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={() => generateRandomColor("hsl")}
          >
            HslColor
          </Button>
        </Box>
        <Box
          sx={{
            height: "100px",
            backgroundColor: color,
            borderRadius: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" color="textSecondary">
            {color}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default ColorGenerator;
