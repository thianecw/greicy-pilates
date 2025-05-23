import {
	MainContainer,
	ContainerLeft,
	ContainerRight,
	DescriptionBox,
	Title,
	TitleAfter,
	TitleWrapper,
	Description,
} from "./styles";
import mainImg from "../../assets/main.png";

export function Main() {
	return (
		<MainContainer>
			<ContainerLeft>
				<TitleWrapper>
					<Title>Greicy </Title>
					<TitleAfter>Pilates & Maternidade </TitleAfter>
				</TitleWrapper>
				<DescriptionBox>
					<p>
						<strong>Você está gestando?</strong>
					</p>
					<p>
						<strong>Morando na Irlanda?</strong>
					</p>
					<p>
						<strong>Quer uma gestação ativa?</strong>
					</p>
				</DescriptionBox>

				<Description>
					No desafio de <strong> gestar fora do Brasil</strong>, escolher quem
					te orienta e apoia é essencial para viver essa experiência com
					segurança.
				</Description>
			</ContainerLeft>

			<ContainerRight>
				<img
					src={mainImg}
					alt="Gestante se exercitando com a bola de pilates"
				/>
			</ContainerRight>
		</MainContainer>
	);
}
