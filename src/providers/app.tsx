import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast';

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <NextUIProvider>
            <Toaster position='top-right' />
                <Router>{children}</Router>
            </NextUIProvider>
        </QueryClientProvider>
    )
}