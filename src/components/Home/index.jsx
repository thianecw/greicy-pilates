import {
	BenefitBox,
	ContainerImg,
	Info,
	MainContainer,
	Paragraph,
	InfoParagraph,
	Section1,
	Section2,
	Section3,
	SecondTitle,
	Title,
} from "./styles";
import exerciseImg from "../../assets/img1.png";
import {
	Chat,
	Handshake,
	DeviceMobile,
	GlobeHemisphereWest,
	ShieldCheck,
	Smiley,
	Repeat,
	Sun,
	Heartbeat,
} from "phosphor-react";

export function Home() {
	return (
		<MainContainer>
			<Section1>
				<Info>
					<Title> PORQUE FAZER EXERCÍCIOS DURANTE A GESTAÇÃO?</Title>
					<InfoParagraph>
						<Smiley size={28} /> Melhora da autoestima
					</InfoParagraph>
					<InfoParagraph>
						<Heartbeat size={28} /> Diminuição de dores corporais e doenças
						gestacionais
					</InfoParagraph>
					<InfoParagraph>
						<Sun size={28} /> Mais disposição, autonomia e bem-estar
					</InfoParagraph>
					<InfoParagraph>
						<Repeat size={28} /> Recuperação pós-parto mais rápida
					</InfoParagraph>
				</Info>
			</Section1>

			<Section2>
				<ContainerImg>
					<img
						src={exerciseImg}
						alt="Gestante se exercitando com a bola de pilates"
					/>
				</ContainerImg>
				<Info>
					<SecondTitle>
						COMO FUNCIONA O PILATES ONLINE{" "}
						<img
							width="50"
							height="50"
							src="https://img.icons8.com/ios/F4EEED/ask-question--v1.png"
							alt="ask-question--v1"
						/>
					</SecondTitle>
					<Paragraph>
						Flexibilidade de horário - treine quando quiser!
					</Paragraph>
					<Paragraph>Exercite-se no conforto do seu lar</Paragraph>
					<Paragraph>Exercícios adaptados pra você</Paragraph>
					<Paragraph>
						Acompanhamento individual com orientações e avaliações
					</Paragraph>
				</Info>
			</Section2>

			<Section3>
				<Title>
					PROFISSIONAL BRASILEIRA NA IRLANDA{" "}
					<img
						width="48"
						height="48"
						src="https://img.icons8.com/color/48/brazil-circular.png"
						alt="brazil-circular"
					/>
				</Title>

				<div>
					<BenefitBox>
						<InfoParagraph>
							<Chat size={28} /> Vamos nos comunicar com clareza
						</InfoParagraph>
					</BenefitBox>

					<BenefitBox>
						<InfoParagraph>
							<GlobeHemisphereWest size={28} /> Entendo a sua cultura e ajudo na
							sua adaptação
						</InfoParagraph>
					</BenefitBox>

					<BenefitBox>
						<InfoParagraph>
							<Handshake size={28} />
							Ofereço suporte especializado durante toda a sua gestação
						</InfoParagraph>
					</BenefitBox>

					<BenefitBox>
						<InfoParagraph>
							<ShieldCheck size={28} /> Sigo boas práticas por meio de
							evidências científicas
						</InfoParagraph>
					</BenefitBox>

					<BenefitBox>
						<InfoParagraph>
							<DeviceMobile size={28} /> Te oriento sempre que quiser via
							WhatsApp
						</InfoParagraph>
					</BenefitBox>
				</div>
			</Section3>
		</MainContainer>
	);
}
