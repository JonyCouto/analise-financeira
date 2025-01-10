import Link from "next/link";
import { Grid2, SvgIcon } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center footer">
            <Grid2
                container
                spacing={2}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Grid2 size={{ xs: 12, lg: 3 }}>
                    <span>Desenvolvido por Jonathan Couto</span>
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 3 }}>
                    <Link href="https://github.com/JonyCouto" target="_blank" rel="noopener">
                        GitHub
                        <SvgIcon component={ArrowRightAlt} />
                    </Link>
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 3 }}>
                    <Link href="https://www.linkedin.com/in/jonathan-vinicius-couto-a4900119b/" target="_blank" rel="noopener">
                        LinkedIn
                        <SvgIcon component={ArrowRightAlt} />
                    </Link>
                </Grid2>
                <Grid2 size={{ xs: 12, lg: 3 }}>
                    <Link href="https://wa.me/5516991310563?text=Olá, vi um de seus trabalhos de desenvolvedor e gostaria de falar mais sobre" target="_blank" rel="noopener">
                        Contato Comercial
                        <SvgIcon component={ArrowRightAlt} />
                    </Link>
                </Grid2>
            </Grid2>
        </footer>
    );
}