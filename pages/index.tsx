import { MainLayout } from '@/components/layout'
import { Box } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { NextPageWithLayout } from '../models'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      Home Page
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
