// Hooks
import { useMauticSdk } from "./hooks/use-mautic-sdk";

// Assets
import logo from "./assets/logo.svg";
import logoNegative from "./assets/logo-negative.svg";
import appPreview from "./assets/app-preview.png";

import feature01 from "./assets/features/01.svg";
import feature02 from "./assets/features/02.svg";
import feature03 from "./assets/features/03.svg";
import feature04 from "./assets/features/04.svg";
import feature05 from "./assets/features/05.svg";
import feature06 from "./assets/features/06.svg";

// Components
import { DownloadButtons } from "./components/download-button";

// Types
import type { ComponentChildren } from "preact";

const Content = ({ children }: { children: ComponentChildren }) => (
  <div class="max-w-screen-2xl m-auto px-8 md:px-16">{children}</div>
);

const Newsletter = () => (
  <form
    class="pt-8 md:flex md:gap-4"
    method="post"
    action="https://mautic.int.ethswarm.org/form/submit?formId=4"
    encType="multipart/form-data"
    id="mauticform_websitenewslettersubscription"
    data-mautic-form="websitenewslettersubscription"
  >
    <input
      class="md:grow px-3 text-2xl w-full md:w-auto p-3.5"
      placeholder="Add your email here…"
      style={{ color: "#b6b6b6" }}
      name="mauticform[email_address]"
      id="mauticform_input_websitenewslettersubscription_email_address"
      type="email"
    />
    <button
      class="negative mt-2 md:mt-0"
      type="submit"
      name="mauticform[submit]"
      id="mauticform_input_websitenewslettersubscription_submit"
    >
      Subscribe
    </button>

    {/* Success / error */}
    <div class="mt-4">
      <div
        class="text-red-400"
        id="mauticform_websitenewslettersubscription_error"
      />
      <div id="mauticform_websitenewslettersubscription_message" />
    </div>

    {/* Form metadata */}
    <input
      type="hidden"
      name="mauticform[formId]"
      id="mauticform_websitenewslettersubscription_id"
      value="4"
    />
    <input
      type="hidden"
      name="mauticform[return]"
      id="mauticform_websitenewslettersubscription_return"
      value={window.location.origin + window.location.pathname}
    />
    <input
      type="hidden"
      name="mauticform[formName]"
      id="mauticform_websitenewslettersubscription_name"
      value="websitenewslettersubscription"
    />

    {/* Checkboxes */}
    <input type="hidden" name="mauticform[gdpr_accepted]" value="1" />
    <input
      type="hidden"
      name="mauticform[i_consent_to_gathering_an]"
      value="1"
    />
  </form>
);

export const App = () => {
  useMauticSdk();

  return (
    <>
      <Content>
        <nav class="mt-8 md:mt-16">
          <img src={logo} class="m-auto" />
        </nav>
        <header class="text-center mt-16 md:mt-32">
          <h1>Swarm, for everyone.</h1>
          <p class="mt-8 text-2xl md:text-4xl">
            Swarm Desktop (Beta) offers an easy-to-use experience to gain
            decentralised access to the Swarm network.
          </p>
        </header>
        <section class="mt-8 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-8">
          <img src={appPreview} />
          <div class="mt-8 lg:mt-0">
            <p class="text-xl md:text-2xl">
              Run a lightweight Swarm node on your own computer, and you'll have
              direct peer-to-peer access to the network. You won't need to trust
              and rely on centralised gateways.
            </p>
            <p class="text-lg mt-4 md:mt-8">
              Swarm Desktop (Beta) starts a lightweight Swarm node service that
              runs in the background on your computer. Use your favourite web
              browser to manage your node, browse websites and upload and
              download data directly from other peers in the Swarm network.
            </p>
            <div class="mt-4 md:mt-8">
              <DownloadButtons repo="ethersphere/bee-desktop" />
            </div>
          </div>
        </section>
        <div class="line mt-16 md:mt-32" />
        <section class="mt-8 md:mt-16">
          <h2 class="text-center">Why Swarm Desktop (Beta)?</h2>
          <div class="features">
            <div>
              <div class="image">
                <img src={feature01} />
              </div>
              <h3>Join Swarm with just 1 click</h3>
              <p>
                Joining the Swarm network has never been easier, simply download
                and install Swarm Desktop (Beta) to get a lightweight Bee node
                running on your computer.
              </p>
            </div>
            <div>
              <div class="image">
                <img src={feature02} />
              </div>
              <h3>Unlimited access</h3>
              <p>
                Upload and share content without limitations on the Swarm
                network by funding your node with BZZ.
              </p>
            </div>
            <div>
              <div class="image">
                <img src={feature03} />
              </div>
              <h3>Manage your data's persistence</h3>
              <p>
                Swarm Desktop (Beta) makes it easy to buy and manage the stamps
                that will keep your content alive in the Swarm network.
              </p>
            </div>
            <div>
              <div class="image">
                <img src={feature04} />
              </div>
              <h3>Easily host websites</h3>
              <p>
                Upload your website to the unstoppable and censorship resistant
                Swarm network. Easily share it with preview URL's, or link it
                with your ENS name for easy discoverability.
              </p>
            </div>
            <div>
              <div class="image">
                <img src={feature05} />
              </div>
              <h3>Intuitively explore Swarm</h3>
              <p>
                Swarm Desktop (Beta) makes it simple for you to try out and
                explore the functionality of the Swarm network. Easily check
                your Swarm light-node's status, settings and wallet.
              </p>
            </div>
            <div>
              <div class="image">
                <img src={feature06} />
              </div>
              <h3>Upload and forget</h3>
              <p>
                No need to keep your node running. Once you have uploaded your
                content to Swarm, it will automatically be kept alive by a
                worldwide network of peers.
              </p>
            </div>
          </div>
        </section>
        <div class="line mt-16 md:mt-32" />
        <section class="my-16 md:my-32 text-center">
          <h1>Install Swarm now!</h1>
          <p class="mt-8 text-2xl md:text-4xl">
            Get up and running in just a few clicks.
          </p>
          <button class="primary mt-8 w-full md:w-auto">
            Download the app
          </button>
        </section>
      </Content>
      <footer class="bg-black py-8 md:py-16 text-center">
        <Content>
          <img src={logoNegative} class="m-auto" />
          <p class="mt-4 text-2xl">
            Storage, hosting and messaging for the decentralised web.
          </p>
          <div class="links">
            <div>
              <h5>Resources</h5>
              <a target="_blank" href="https://docs.ethswarm.org/docs/">
                Bee documentation
              </a>
              <a
                target="_blank"
                href="https://www.ethswarm.org/swarm-whitepaper.pdf"
              >
                Swarm white paper
              </a>
              <a
                target="_blank"
                href="https://www.ethswarm.org/The-Book-of-Swarm.pdf"
              >
                The Book of Swarm
              </a>
            </div>
            <div>
              <h5>Links</h5>
              <a target="_blank" href="https://gateway.ethswarm.org/">
                Swarm Gateway
              </a>
              <a target="_blank" href="https://github.com/ethersphere">
                Github
              </a>
              <a target="_blank" href="https://medium.com/ethereum-swarm">
                Blog
              </a>
              <a target="_blank" href="https://discord.gg/GU22h2utj6">
                Discord
              </a>
              <a target="_blank" href="https://twitter.com/ethswarm">
                Twitter
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCu6ywn9MTqdREuE6xuRkskA/"
              >
                YouTube
              </a>
              <a target="_blank" href="https://www.reddit.com/r/EthSwarm/">
                Reddit
              </a>
            </div>
            <div>
              <h5>Company</h5>
              <a target="_blank" href="https://www.ethswarm.org/#section-jobs">
                Jobs
              </a>
              <a target="_blank" href="https://www.ethswarm.org/ecosystem.html">
                Ecosystem &amp; grants
              </a>
              <a target="_blank" href="https://progress.ethswarm.org/">
                Roadmap
              </a>
              <a
                target="_blank"
                href="https://www.ethswarm.org/privacy-policy.html"
              >
                Privacy policy
              </a>
              <a target="_blank" href="https://www.ethswarm.org/faqs.html">
                FAQs
              </a>
            </div>
          </div>
          <div class="cta px-4 md:px-8 py-8 md:p-16 my-8 md:my-16">
            <p class="text-3xl md:text-4xl">Keep in touch!</p>
            <p class="text-xl md:text-2xl pt-2">
              Receive news and updates to your email.
            </p>
            <Newsletter />
            <p class="pt-4 md:pt-8 text-lg" style={{ color: "#787878" }}>
              By clicking on Subscribe you consent to usage of your given e-mail
              address for receiving communication and news about the Swarm
              project. Data will be controlled and processed by Swarm
              Foundation.
            </p>
          </div>
          <div
            class="flex flex-col-reverse md:flex-row md:justify-between text-lg"
            style={{ color: "#6a6a6a" }}
          >
            <p class="mt-2 md:mt-0">Swarm Foundation, 2022</p>
            <p class="italic">Peace, Love, Unity &amp; Respect</p>
          </div>
        </Content>
      </footer>
    </>
  );
};
