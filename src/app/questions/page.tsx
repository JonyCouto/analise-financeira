'use client';

import { Grid2 } from "@mui/material"
import {Button} from "@mui/material";
import Divider from '@mui/material/Divider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Link from "next/link";
import IQuestions from "@/interface/questions";

export default function Questions() {
    function handleAnswer(e: any, index: number) { 
        questions[index].answer = parseInt(e.target.value)
    }
    function redirectIf(e: any){
        e.preventDefault();
        const finish = questions.filter(question => question.answer == 0);
        if (finish.length > 0) {
            alert("Por favor, responda todas as perguntas antes de finalizar.");
            return;
        } else {
            window.location.href = `/results/${sumAnswers()}`;
        }
    }
    function sumAnswers(){
        const sum = questions.reduce((acc, question) => acc + question.answer, 0);
        return sum.toString();
    }
    const questions: Array<IQuestions> = [
        {
            question: "Minha escola consegue manter um fluxo de caixa estável ao longo do ano.",
            answer: 0
        },
        {
            question: "Os processos atuais de cobrança e recebimento de mensalidades são eficientes e organizados.",
            answer: 0
        },
        {
            question: "A inadimplência dos pais não impacta significativamente as finanças da escola.",
            answer: 0
        },
        {
            question: "Conseguimos prever e planejar adequadamente despesas e receitas futuras.",
            answer: 0
        },
        {
            question: "Temos ferramentas adequadas para acompanhar as finanças de forma prática e confiável.",
            answer: 0
        },
        {
            question: "A gestão financeira da escola permite que foquemos mais na qualidade da educação do que em resolver problemas financeiros.",
            answer: 0
        },
        {
            question: "Não temos dificuldade em implementar soluções financeiras novas ou atualizadas.",
            answer: 0
        },
        {
            question: "Os processos financeiros atuais não consomem tempo excessivo da equipe administrativa.",
            answer: 0
        },
        {
            question: "Estamos satisfeitos com o suporte que recebemos de parceiros ou sistemas financeiros utilizados.",
            answer: 0
        },
        {
            question: "A escola está financeiramente preparada para lidar com imprevistos e despesas inesperadas.",
            answer: 0
        }
    ]
    return (
        <Grid2 container spacing={2} sx={{justifyContent: "center", alignItems: "center", height: "100%", textAlign: "center", padding: "5px", rowGap: "0px"}}>
            {
                questions.map((question, index) => (
                    <Grid2 key={index} size={12}>
                        <FormControl sx={{ alignItems: 'center' }}>
                            <FormLabel id={`question-`+ index}>{question.question}</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby={`question-`+ index}
                                content="center"
                                defaultValue="0"
                                onChange={(e) => handleAnswer(e, index)}
                            >
                                <FormControlLabel value={1} control={<Radio />} label="1" />
                                <FormControlLabel value={2} control={<Radio />} label="2" />
                                <FormControlLabel value={3} control={<Radio />} label="3" />
                                <FormControlLabel value={4} control={<Radio />} label="4" />
                                <FormControlLabel value={5} control={<Radio />} label="5" />
                            </RadioGroup>
                            </FormControl>
                            <Divider className="mt-4 mb-4"/>
                    </Grid2>
                ))
            }
            <Grid2 size={12}>
                <Link href={`/results/${sumAnswers()}`} onClick={(e) => redirectIf(e)}>
                    <Button variant="contained" className="mt-4">Finalizar</Button>
                </Link>
            </Grid2>
        </Grid2>
    )
}