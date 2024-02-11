'use client';

import { NFTRenderer } from '@rmrk-team/nft-renderer';

export default function TokenDisplay({
  params,
}: {
  params: { tokenId: string };
}) {
  const { tokenId } = params;

  return (
    <div className="token-container">
      <div className="token-container-inner">
        <NFTRenderer
          chainId={1284}
          contractAddress={'0x8f64ce931f0d36430b971548b81264eef3bd9b97'}
          tokenId={BigInt(tokenId)}
        />
      </div>
    </div>
  );
}
