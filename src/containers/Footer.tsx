import { useTranslation, Trans } from "react-i18next"

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="max-w-6xl mx-auto pt-20">
      <div className="h-16 border-t border-gray-200 px-5">
        <p className="text-center py-4">
          {t('footer.title')}
          <br />
          <Trans
            i18nKey='footer.subtitle'
            components={[<span className="text-[#8fe9c2]"/>,]}
          />
        </p>
      </div>
    </footer>
  )
}

export default Footer