"use client";
import { SessionProvider } from "next-auth/react";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
//import { useRouter } from "next/router";
import { useRouter } from 'next/navigation'

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
	const router = useRouter()

	return (
		<NextUIProvider navigate={router.push}>
			<NextThemesProvider {...themeProps}>
				<SessionProvider>{children}</SessionProvider>
			</NextThemesProvider>
		</NextUIProvider>
	);
}
