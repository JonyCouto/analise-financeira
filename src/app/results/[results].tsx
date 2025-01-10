'use client';

import { Grid2 } from "@mui/material"
import {Button} from "@mui/material";
import Divider from '@mui/material/Divider';
import Link from "next/link";
import { useRouter } from 'next/router';

export default function Result() {
    const router = useRouter();
    const results = parseInt(router.query.results as string);  // Captura o valor da query string "results"
    const message = () => {
        if (results >= 40) {
           return "Sua gestão financeira parece bem estruturada, com poucos desafios.";
        } else if (results >= 30 && results < 40) {
           return "Há áreas para melhorar, mas sua escola está no caminho certo.";
        } else if (results >= 20 && results < 30) {
           return "Existem dificuldades significativas na gestão financeira que precisam ser tratadas.";
        } else {
           return "A gestão financeira enfrenta sérios desafios que podem estar comprometendo a eficiência administrativa e educacional.";
        }
    }
    return (
        <Grid2 container spacing={2} sx={{justifyContent: "center", alignItems: "center", height: "100%", textAlign: "center", padding: "5px", rowGap: "0px"}}>
            <Grid2 size={{md: 12, lg: 6}}>
                <h2>Resultado Final</h2>
                <h1>{results}</h1>
                <h2>{message()}</h2>
                <Divider variant="inset" className="mt-4"/>
                <Link href="/">
                    <Button variant="contained" className="mt-4">Finalizar</Button>
                </Link>
            </Grid2>
            <Grid2 size="grow">
            </Grid2>
        </Grid2>
    )
}