import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import PageLayout from '@/components/PageLayout';
import {Link} from '@/i18n/navigation';

export default function Index() {
  const t = useTranslations('BANNER');
  const locale = useLocale();

  return (
    <PageLayout title={t('title')}>
      <p>{t('title')}</p>
      <LocaleSwitcher />
    </PageLayout>
  );
}
