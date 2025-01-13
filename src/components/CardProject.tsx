import ButtonWhite from "@/components/ButtonWhite"
import ButtonDark from "@/components/ButtonDark"
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
		<div className="flex flex-col bg-zinc-900 rounded-lg p-6">
			<div className="min-h-14 mb-4">
				<h3 className="text-lg font-semibold">{props.title}</h3>
			</div>
			<div className="relative pb-[56.25%] mb-4">
				<img src={props.image} alt="project photo" className="absolute inset-0 w-full h-full object-cover rounded"/>
			</div>
			<div className="mb-4">
				<p className="text-zinc-400">{props.description}</p>
			</div>
			<div className="mb-6 flex flex-wrap gap-2">
				{props.technologies.map((tech, techIndex) => (
					<div
						key={techIndex}
						className="rounded-full bg-[#27272A] border border-transparent font-medium text-xs py-0.5 px-2.5"
					>
						{tech}
					</div>
				))}
			</div>
			<div className="mt-auto flex justify-between text-sm gap-4">
				<ButtonDark
					href={props.demoLink}
					text={t('projects.buttons.demo')}
				/>
				<ButtonWhite
					href={props.codeLink}
					text={t('projects.buttons.code')}
          target="_blank"
				/>
			</div>
		</div>
	)
}

export default CardProject