"use client";

import { MantineProvider } from "@mantine/core";

export interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default Providers;
