"use client";

import { useTranslations } from 'next-intl';
import Language from '@/components/Language';

export default function Home({params: {locale}}: any) {
  const t = useTranslations('default');

  return (
    <div>
      123
    </div>
  );
}