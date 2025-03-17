import localFont from 'next/font/local'

export const Poppins = localFont({
  src: [
    {
      path: '../public/fonts/Poppins/Poppins-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins/Poppins-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins/Poppins-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    // {
    //   path: '../public/fonts/Poppins/',
    //   weight: '700',
    //   style: 'normal',
    // },
    // {
    //   path: '../public/fonts/Poppins/',
    //   weight: '800',
    //   style: 'normal',
    // },
    // {
    //   path: '../public/fonts/Poppins/',
    //   weight: '900',
    //   style: 'normal',
    // },
  ],
})

export const MonaSansWide = localFont({
  src: [
    {
      path: '../public/fonts/MonaSans/Mona-Sans-RegularWide.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MonaSans/Mona-Sans-MediumWide.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/MonaSans/Mona-Sans-SemiBoldWide.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/MonaSans/Mona-Sans-BoldWide.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/MonaSans/Mona-Sans-ExtraBoldWide.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/MonaSans/Mona-Sans-BlackWide.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})