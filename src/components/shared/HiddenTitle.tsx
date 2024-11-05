import { useTranslations } from "next-intl";

interface Props{
  variantTitle: 'Why_juniors' | 'Contacts';
}

export default function HiddenTitle({variantTitle}: Props): JSX.Element {
  const t = useTranslations(variantTitle)

  return <h1 className="sr-only">{t('title')}</h1>
}