import { useEffect, useMemo, useState } from "preact/hooks";
import { osName } from "react-device-detect";

// Hooks
import { Asset, useGithubAssets } from "./use-github-assets";

type OsAsset = {
  osName: string;
  asset?: Asset;
};

const findAsset = (assets: Asset[] | undefined) => {
  if (!assets) {
    return;
  }

  for (const asset of assets) {
    switch (osName) {
      case "Windows":
        if (asset.content_type === "application/x-msdos-program") {
          return { osName, asset };
        }
        break;

      case "Mac OS":
        if (asset.name.includes("-darwin-")) {
          return { osName, asset };
        }
        break;

      default:
        return { osName: "Unknown" };
    }
  }
};

export const useOsAsset = (repo: string) => {
  const assets = useMemo(() => useGithubAssets(repo), [repo]);
  const [asset, setAsset] = useState<OsAsset | undefined>();

  useEffect(() => setAsset(findAsset(assets)), [assets]);

  return asset;
};
