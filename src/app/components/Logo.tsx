import { envVariables } from '@/helpers/envVariables'
import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <Image
        src={envVariables.LOGO_IMAGE}
        alt="Logo"
        width={80}
        height={80}
        className="rounded-full border-2 shadow-lg"
        style={{
        borderColor: envVariables.PRIMARY_COLOR_MEDIUM,
        }}
    />
  )
}

export default Logo
