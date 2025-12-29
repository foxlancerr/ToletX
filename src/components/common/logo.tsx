import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo({ isWhiteVersion = false }: {
    isWhiteVersion: boolean
}) {
    return (

        <Link href="/" className="flex items-center space-x-2">
            {
                isWhiteVersion ? <Image
                    src={"/assets/images/logo-white.png"}
                    width={160}
                    height={80}
                    alt='Main Logo'
                ></Image> : <Image
                    src={"/assets/images/logo.png"}
                    width={160}
                    height={80}
                    alt='Main Logo'
                ></Image>
            }


        </Link>
    )
}

export default Logo