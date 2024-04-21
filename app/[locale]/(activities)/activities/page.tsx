"use client";

import Language from '@/components/Language';

export default function Home({params: {locale}}: any) {
//   const t = useTranslations('default');

  return (
    <div>
      {/* <h1>{t('home')}</h1> */}
      <Language locale={locale}/>
      ...
    </div>
  );
}