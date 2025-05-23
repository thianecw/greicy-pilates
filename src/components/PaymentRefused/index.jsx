import { useEffect } from "react";
import { toast } from "react-toastify";
import { Container, Description, WhatsApp } from "./styles";

export function PaymentRefused() {
	useEffect(() => {
		toast.error("Pagamento cancelado ou não aprovado.");
	}, []);

	return (
		<Container>
			<Description>Que pena, algo deu errado.</Description>
			<Description>
				{" "}
				Tente novamente ou entre em contato para que eu possa te ajudar 🤞
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
