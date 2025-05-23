import {
	ButtonWrapper,
	Description,
	PlanCard,
	PlansGrid,
	PlansSection,
	PlanTitle,
	PriceItem,
	Button,
	Title,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

export function ServicePlan() {
	const navigate = useNavigate();

	function comprar(planId) {
		navigate(`/checkout/${planId}`);
	}

	return (
		<PlansSection>
			<Title>PLANOS E SERVIÇOS</Title>

			<PlansGrid>
				<PlanCard>
					<PlanTitle> Aula avulsa </PlanTitle>
					<Description> ✔ Aula online, ao vivo </Description>
					<Description> ✔ Agende pra quando quiser </Description>
					<Description> ✔ Sem acesso ao app</Description>
					<Description> ✔ Orientações pontuais</Description>

					<ButtonWrapper>
						<PriceItem> €35</PriceItem>
						<Button onClick={() => comprar("avulsa")}>Quero esse</Button>
					</ButtonWrapper>
				</PlanCard>
				<PlanCard>
					<PlanTitle>Plano Mensal </PlanTitle>
					<Description>
						✔ 1 aula ao vivo para avaliação e planejamento
					</Description>
					<Description>✔ Acesso ao app com aulas gravadas </Description>
					<Description>
						✔ Exercícios exclusivos pra você, de acordo com a fase da gestação e
						estilo de vida
					</Description>
					<Description>
						✔ Suporte via WhatsApp durante o período contratado para tirar
						dúvidas e ajustes
					</Description>

					<ButtonWrapper>
						<PriceItem> €120</PriceItem>

						<Button onClick={() => comprar("mensal")}>Quero esse</Button>
					</ButtonWrapper>
				</PlanCard>

				<PlanCard>
					<PlanTitle>
						Plano Trimestral{" "}
						<FontAwesomeIcon icon={faTrophy} style={{ color: "#f0ad4e" }} />
					</PlanTitle>
					<Description>
						✔ 3 aulas ao vivo para avaliação e planejamento{" "}
					</Description>
					<Description> ✔ Acesso ao app com aulas gravadas </Description>
					<Description>
						✔ Exercícios exclusivos pra você, de acordo com a fase da gestação e
						estilo de vida
					</Description>
					<Description>
						✔ Suporte via WhatsApp durante o período contratado para tirar
						dúvidas e ajustes
					</Description>
					<ButtonWrapper>
						<PriceItem> €312</PriceItem>

						<Button onClick={() => comprar("trimestral")}>Quero esse</Button>
					</ButtonWrapper>
				</PlanCard>
			</PlansGrid>
		</PlansSection>
	);
}
