import Grid from "@mui/material/Grid";
import Joke from "../components/Joke";

export default function Home() {
  return (
    <Grid
      sx={{ height: "100vh" }}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Joke />
    </Grid>
  );
}
