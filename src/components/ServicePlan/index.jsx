import {
	Description,
	PlanCard,
	PlansGrid,
	PlansSection,
	PlanTitle,
	PriceItem,
	Button,
	Title,
} from "./styles";

import { Check } from "phosphor-react";

export function ServicePlan() {
	return (
		<PlansSection>
			<Title>PLANOS E SERVIÇOS</Title>

			<PlansGrid>
				<PlanCard>
					<PlanTitle> Aula avulsa</PlanTitle>
					<Description> ✔ Aula online, ao vivo </Description>
					<Description> ✔ Sem acesso ao app</Description>
					<PriceItem> €35</PriceItem>
					<Button> Quero esse </Button>
				</PlanCard>
				<PlanCard>
					<PlanTitle> Plano Mensal </PlanTitle>
					<Description>
						✔ 1 aula ao vivo para avaliação e planejamento{" "}
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

					<PriceItem> €120</PriceItem>
					<Button> Quero esse </Button>
				</PlanCard>

				<PlanCard>
					<PlanTitle> Plano Trimestral</PlanTitle>
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
					<PriceItem> €312</PriceItem>
					<Button> Quero esse </Button>
				</PlanCard>
			</PlansGrid>
		</PlansSection>
	);
}
