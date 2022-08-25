
import { LayoutProps } from '@/models/index';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { Header } from '../common';
import { Footer } from '../common/footer';

export function MainLayout ({children}: LayoutProps) {
  return (
    <Stack>
        <Header />

        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/blog">
            <a>Blog</a>
        </Link>
        <Link href="/works">
            <a>Works</a>
        </Link>

        <Box component="main">
        {children}
        </Box>

        <Footer />
    </Stack>
  );
}
