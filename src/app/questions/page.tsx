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
import { useState } from "react";

export default function Questions() {
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [questions, setAsnwer]: [IQuestions[], React.Dispatch<React.SetStateAction<IQuestions[]>>] = useState([
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
    ]);
    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      };
      const handlePrev = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      };
    function handleAnswer(e: any, index: number) { 
        setAsnwer((prevQuestions) => { // setAnswer aceita uma função que recebe o estado anterior e retorna o novo estado
            return prevQuestions.map((question, i) => { // retornará o novo array
                if (i === index){ // encontra a pergunta que foi respondida
                    return { ...question, answer: parseInt(e.target.value) }; // retorna a pergunta com a resposta atualizada, 
                    // utilizando um destructure para manter as outras propriedades da pergunta e atualizar somente a resposta
                }
                return question; // retorna as perguntas que não foram respondidas
            });
        });
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
        let sum = 0;
        questions.forEach(question => {
            sum += question.answer;
        });
        return sum.toString();
    }
    
    return (
        <Grid2 container spacing={2} sx={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "5px", rowGap: "0px"}} className="questions">
            {
                questions.map((question, index) => (
                    <Grid2 key={index} size={12}>
                        <FormControl sx={{ alignItems: 'center' }} style={
                            {display: currentIndex === index ? "flex" : "none",
                            transition: "opacity 0.3s"}}>
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
                            <Grid2 size={12} sx={{display: "flex", justifyContent: "space-around", alignItems: "center", textAlign: "center"}}>
                                <Button variant="contained" onClick={handlePrev} disabled={currentIndex === 0}>
                                    Anterior
                                </Button>
                                <Button variant="contained" onClick={handleNext} disabled={currentIndex === questions.length - 1}>
                                    Próximo
                                </Button>    
                            </Grid2>
                            </FormControl>
                    </Grid2>
                ))
            }
            <Grid2 size={12} style={
                {display: currentIndex === 9 ? "block" : "none",
                transition: "opacity 0.3s"}}>
                <Link href={`/results/${sumAnswers()}`} onClick={e => redirectIf(e)} passHref>
                    <Button variant="contained" className="mt-4">Finalizar</Button>
                </Link>
            </Grid2>
        </Grid2>
    )
}