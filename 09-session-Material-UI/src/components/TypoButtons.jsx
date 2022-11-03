import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <div>
      {/* sx:stil verme yeridir. stili nasil yazarsan yaz alir. */}
      <Container maxWidth="md">
        <Typography
          variant="h1"
          sx={{
            background: "#eee",
            marginTop: "4px",
            border: "1px solid green",
          }}
          color="error"
          align="center"
        >
          Typography, Button, Container, box
        </Typography>

        {/* body: p etiketidir, body1 daha büyük fontlu, body2 daha kücük fontlu button=span etiketidir+büyük harf */}
        <Typography variant="button" color="primary.dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat
        </Typography>
        <Typography variant="body1" color="purple" align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam placeat
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          veniam.
        </Typography>
      </Container>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 4 }}
      >
        <Button variant="contained" color="error" startIcon={<SendIcon />}>
          SEND{" "}
        </Button>
        <Button variant="outlined" color="success" endIcon={<DeleteIcon />}>
          DELETE
        </Button>
      </Box>
    </div>
  );
};

export default TypoButtons;
