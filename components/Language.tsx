'use client'
import { useRouter, usePathname } from 'next-intl/client';

import React from 'react'

const languages = [
    {
        code: 'en',
        name: 'EN',
        country_code: 'en'
    },
    {
        code: 'ka',
        name: 'KA',
        country_code: 'ge'
    },
    {
      code: 'ru',
      name: 'RU',
      country_code: 'ru'
  }
]

export default function Language({
    locale
}: {
    locale: any
}) {

  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (value: any) => {
    router.push(pathname, {locale: value})
  }

  return (
    <div>
        <button onClick={() => handleChange('en')}>En</button>
        <button onClick={() => handleChange('ka')}>Ka</button>
        <button onClick={() => handleChange('ru')}>ru</button>
        <button onClick={() => handleChange('ar')}>ar</button>
    </div>
  )
}
