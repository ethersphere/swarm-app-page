import { osName } from "react-device-detect";
import { useMemo } from "preact/hooks";

// Assets
import windowsLogo from "../assets/platforms/windows.svg";
import macOsLogo from "../assets/platforms/macos.svg";

// Hooks
import { Asset, useGithubAssets } from "../hooks/use-github-assets";

const PLATFORMS = {
  Windows: {
    name: "Windows",
    logo: windowsLogo,
  },
  "Mac OS": {
    name: "Mac",
    logo: macOsLogo,
  },
};

const findAsset = (
  assets: Asset[] | undefined,
  platform: keyof typeof PLATFORMS
) => {
  if (!assets) {
    return null;
  }

  for (const asset of assets) {
    switch (platform) {
      case "Windows":
        if (
          asset.content_type === "application/x-msdos-program" &&
          asset.name.endsWith(".exe")
        ) {
          return asset;
        }
        break;

      case "Mac OS":
        if (asset.name.includes("-darwin-")) {
          return asset;
        }
        break;
    }
  }
};

type DownloadButtonProps = {
  repo: string;
  platform: keyof typeof PLATFORMS;
};

export const DownloadButton = ({ platform, repo }: DownloadButtonProps) => {
  const assets = useGithubAssets(repo);
  const asset = useMemo(
    () => findAsset(assets, platform),
    [repo, platform, assets]
  );
  const { name, logo } = PLATFORMS[platform];

  const classes =
    "primary w-full md:w-max block flex items-center gap-3 text-sm mb-2 button";
  const children = (
    <>
      <img src={logo} />
      Download for {name}
    </>
  );

  if (!asset) {
    return (
      <button disabled class={classes}>
        {children}
      </button>
    );
  }

  return (
    <a href={asset.browser_download_url} class={classes}>
      {children}
    </a>
  );
};

type DownloadButtonsProps = {
  repo: string;
};

export const DownloadButtons = ({ repo }: DownloadButtonsProps) => {
  const platform = osName as keyof typeof PLATFORMS;
  if (PLATFORMS[platform]) {
    return (
      <>
        <DownloadButton repo={repo} platform={platform} />

        <div class="text-sm mt-4" style={{ color: "#6c6c6c" }}>
          <p class="italic">
            Not looking for the latest {PLATFORMS[platform].name} version?
          </p>
          <a
            href="https://github.com/ethersphere/bee-desktop/releases"
            class="underline"
          >
            View all available download options on Github
          </a>
        </div>
      </>
    );
  }

  return (
    <>
      <DownloadButton repo={repo} platform="Windows" />
      <DownloadButton repo={repo} platform="Mac OS" />
      <a
        href="https://github.com/ethersphere/bee-desktop/releases"
        class="text-sm underline mt-4 block"
        style={{ color: "#6c6c6c" }}
      >
        View all available download options on Github
      </a>
    </>
  );
};
