'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState, type ReactNode } from 'react';
import { WagmiProvider } from 'wagmi';
import { config } from '@/wagmi';
import { NETWORK_CONTRACTS_PROPS, RMRKUtilityContracts } from '@rmrk-team/rmrk-evm-utils';
import { hardhat } from 'wagmi/chains';
import { RMRKContextProvider } from '@rmrk-team/rmrk-hooks';

// You can pass custom utility contracts to the RMRKContextProvider
const customUtilityContracts = {} satisfies RMRKUtilityContracts;

const rmrkConfig = {
  utilityContracts: customUtilityContracts,
};

const queryClient = new QueryClient();

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RMRKContextProvider config={rmrkConfig}>{children}</RMRKContextProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
