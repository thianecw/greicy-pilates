import { useEffect } from "react";
import { toast } from "react-toastify";
import { Container, Description, WhatsApp } from "./styles";

export function PaymentCompleted() {
	useEffect(() => {
		toast.success("Pagamento aprovado com sucesso! 🎉");
	}, []);

	return (
		<Container>
			<Description>Seu pagamento foi aprovado.</Description>
			<Description>
				Em breve entrarei em contato para agendar nossa primeira aula
			</Description>
			<Description>
				Se tiver alguma dúvida, fique a vontade pra entrar em contato 💖
			</Description>

			<a
				href="https://bit.ly/3EtK8Db"
				target="_blank"
				rel="noopener noreferrer"
			>
				<WhatsApp
					width="48"
					height="48"
					src="https://img.icons8.com/color/48/whatsapp--v1.png"
					alt="whatsapp--v1"
				/>
			</a>
		</Container>
	);
}
