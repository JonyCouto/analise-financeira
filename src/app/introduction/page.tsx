import { Grid2 } from "@mui/material"
import {Button} from "@mui/material";
import Divider from '@mui/material/Divider';
import Link from "next/link";

export default function Introduction() {
    return (
        <Grid2 container spacing={2} sx={{justifyContent: "center", alignItems: "center", height: "100%", textAlign: "end", padding: "5px", rowGap: "0px"}} className="introduction">
            <Grid2 size={{md: 12, lg: 6}}>
                <h2>Funciona da seguinte forma:</h2>
                <h2>Avalie de 1 a 5 o quanto você concorda com cada afirmação</h2>
                <h2>Sendo 1 - Discordo totalmente | 2 - Discordo | 3 - Neutro | 4 - Concordo | 5 - Concordo totalmente</h2>
                <Divider variant="inset" className="mt-4"/>
                <Link href="/questions">
                <Button variant="contained" className="mt-4">Entendi!</Button>
                </Link>
            </Grid2>
            <Grid2 size="grow">
            </Grid2>
        </Grid2>
    )
}