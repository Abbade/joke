import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import { IJoke } from "../interfaces/IJoke";

export default function Joke() {
  const [joke, setJoke] = useState({} as IJoke);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    let resp = await axios.get<IJoke>("/Any?safe-mode");
    if (resp.status) {

      setJoke(resp.data);
    }
  };
  
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Feeling Sad?
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {joke.setup}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {joke.delivery}
        </Typography>
      </CardContent>
    </Card>
  );
}
