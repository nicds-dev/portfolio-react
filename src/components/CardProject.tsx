import ButtonFilled from "@/components/ButtonFilled"
import ButtonOutline from "@/components/ButtonOutline"
import { useTranslation } from "react-i18next"

interface CardProjectProps {
	title: string,
	image: string,
	description: string,
	technologies: string[],
	demoLink: string,
	codeLink: string,
}

function CardProject(props: CardProjectProps) {
  const { t } = useTranslation()

	return (
		<div className="card">
			<h3 className="card-title">{props.title}</h3>
			<div className="card-image">
				<img src={props.image} alt="project photo" className="w-full h-full object-cover object-center rounded"/>
			</div>
			<div className="card-tags">
				{props.technologies.map((tech, techIndex) => (
					<div
						key={techIndex}
						className="badge font-medium text-xs py-0.5 px-2.5"
					>
						{tech}
					</div>
				))}
			</div>
			<p className="text-sm text-paragraph mb-6">{props.description}</p>
			<div className="card-footer text-xs">
				<ButtonOutline
					href={props.demoLink}
					text={t('projects.buttons.demo')}
				/>
				<ButtonFilled
					href={props.codeLink}
					text={t('projects.buttons.code')}
          target="_blank"
				/>
			</div>
		</div>
	)
}

export default CardProject