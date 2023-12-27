import { Rubik, Poppins } from 'next/font/google'

export const rubik = Rubik({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['300', '500'],
  display: 'swap',
  variable: '--heading-font'
})

export const poppins = Poppins({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400'],
  display: 'swap',
  variable: '--body-font'
})
