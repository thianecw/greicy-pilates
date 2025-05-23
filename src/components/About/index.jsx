import {
	MainContainer,
	Content,
	ContainerLeft,
	ContainerRight,
	Title,
} from "./styles";

import aboutImg from "../../assets/about.jpeg";

export function About() {
	return (
		<MainContainer>
			<Title> Deixa eu me apresentar...</Title>
			<Content>
				<ContainerLeft>
					<img src={aboutImg} alt="Foto Greicy" />
				</ContainerLeft>
				<ContainerRight>
					<p>
						{" "}
						Sou a Greicy, fisioterapeuta e instrutora de{" "}
						<strong> Pilates</strong> com mais de 10 anos de experiência,
						apaixonada por movimento, cuidado e bem-estar.
					</p>
					<p>
						{" "}
						Sou <strong>mãe</strong> e moro na Irlanda há 5 anos, onde tive a
						oportunidade de unir minha experiência profissional com a vivência
						da maternidade, me especializando no atendimento a gestantes.
					</p>
					<p>
						Acredito que cada fase da vida merece atenção especial, e por isso,
						<strong> desenvolvi um método de Pilates Online </strong>acolhedor,
						seguro e adaptado para o momento único da gestação.
					</p>
				</ContainerRight>
			</Content>
		</MainContainer>
	);
}
