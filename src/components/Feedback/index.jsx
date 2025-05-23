import {
	FeedbackSection,
	Title,
	FeedbackList,
	FeedbackCard,
	Name,
	QuoteIcon,
	Footer,
	Location,
} from "./styles";

export const Feedback = () => {
	const feedback = [
		{
			id: 1,
			text: "Fazer Pilates online com a Greicy foi incrível! Senti que cada exercício era feito pensando nas minhas necessidades durante a gestação.",
			name: "Carla M.",
			location: "Dublin",
		},
		{
			id: 2,
			text: "Engravidei na Irlanda e fiquei perdida!! Encontrar a Greicy foi maravilhoso porque ela me orientou super bem sobre várias coisas da gestação e sobre gestar na Irlanda kkkk Ameiiii",
			name: "Fernanda S.",
			location: "Bray",
		},
		{
			id: 3,
			text: "Estou na 34 semana e noto muito mais disposição e menos desconforto. Sinto que estou cuidando bem do meu corpo e do meu bebê.",
			name: "Juliana R.",
			location: "Swords",
		},
		{
			id: 4,
			text: "Ser atendida por uma brasileira durante a gestação fez toda a diferença. Outro ponto também foi a flexibilidade para poder fazer os exercícios quando eu podia. Façam sem medo!!",
			name: "Amanda P.",
			location: "Limerick",
		},
	];

	return (
		<FeedbackSection>
			<Title>FEEDBACKS</Title>
			<FeedbackList>
				{feedback.map(({ id, text, name, location }) => (
					<FeedbackCard key={id}>
						<QuoteIcon
							width="30"
							height="30"
							src="https://img.icons8.com/ios/50/quote--v1.png"
							alt="quote--v1"
						/>
						{text}
						<Footer>
							<Name>{name}</Name>
							<Location>{location}</Location>
						</Footer>
					</FeedbackCard>
				))}
			</FeedbackList>
		</FeedbackSection>
	);
};
