import { Grid2 } from "@mui/material";
import {Button} from "@mui/material";
import Divider from '@mui/material/Divider';
import Link from "next/link";

export default function Home() {
  return (
    <Grid2 container spacing={2} sx={{justifyContent: "center", alignItems: "center", height: "100%", textAlign: "end", padding: "5px", rowGap: "0px"}} className="home">
      <Grid2 size={{md: 12, lg: 6}}>
        <h1>Começe agora sua avaliação <br></br> fácil e rápida!</h1>
        <Divider variant="inset" className="mt-4"/>
        <Link href="/introduction">
          <Button variant="contained" className="mt-4">Vamos lá!</Button>
        </Link>
      </Grid2>
      <Grid2 size="grow">
      </Grid2>
    </Grid2>
  );
}