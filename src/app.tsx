import logo from "./assets/logo.svg";
import logoNegative from "./assets/logo-negative.svg";

// Types
import type { ComponentChildren } from "preact";

const Placeholder = ({ height }: { height: number }) => (
  <div
    style={{
      width: "100%",
      height: `${height}px`,
      background: "#f5f5f5",
    }}
  />
);

const Content = ({ children }: { children: ComponentChildren }) => (
  <div class="max-w-screen-2xl m-auto px-8 md:px-16">{children}</div>
);

export const App = () => {
  return (
    <>
      <Content>
        <nav class="mt-8 md:mt-16">
          <img src={logo} class="m-auto" />
        </nav>
        <header class="text-center mt-16 md:mt-32">
          <h1>Swarm, for everyone.</h1>
          <p class="mt-8 text-2xl md:text-4xl">
            Swarm Desktop offers an easy-to-use experience, enabling everyone to
            get completely decentralised access to the Swarm network.
          </p>
        </header>
        <section class="mt-8 md:mt-16 md:grid md:grid-cols-2 md:gap-8">
          <Placeholder height={430} />
          <div class="mt-8 md:mt-0">
            <p class="text-xl md:text-2xl">
              Get the best out of Swarm by running a lightweight Swarm node on
              on your own computer, giving you direct peer-to-peer
              access to the network: no need to trust and rely on centralised
              gateways.
            </p>
            <p class="text-lg mt-4 md:mt-8">
              Bee Desktop starts a lightweight Swarm node service that runs in
              the background on your computer. Use your favourite web browser to
              manage your node, browse websites and upload and download data
              directly from other peers in the Swarm network.
            </p>
            <div class="mt-4 md:mt-8">
              <button class="primary w-full md:w-auto">Download</button>
              <button class="secondary mt-4 md:mt-0 md:ml-4 w-full md:w-auto">
                GitHub Page
              </button>
            </div>
          </div>
        </section>
        <div class="line mt-16 md:mt-32" />
        <section class="mt-8 md:mt-16">
          <h2 class="text-center">Why Swarm Desktop?</h2>
          <div class="features">
            <div>
              <Placeholder height={200} />
              <h3>Join Swarm with just 1 click</h3>
              <p>
                Joining the Swarm network has never been easier, simply download
                and install Swarm Desktop to get a lightweight Bee node running
                on your computer.
              </p>
            </div>
            <div>
              <Placeholder height={200} />
              <h3>Unlimited access</h3>
              <p>
                Upload and share content without limitations on the Swarm
                network by funding your node with BZZ.
              </p>
            </div>
            <div>
              <Placeholder height={200} />
              <h3>Manage your data's persistence</h3>
              <p>
                Swarm for Desktop makes it easy to buy and manage the stamps
                that will keep your content alive in the swarm network.
              </p>
            </div>
            <div>
              <Placeholder height={200} />
              <h3>Easily host websites</h3>
              <p>
                Upload your website to the unstoppable and censorship resistant
                Swarm network. Easily share it with preview URL's, or link it
                with your ENS name for easy discoverability.
              </p>
            </div>
            <div>
              <Placeholder height={200} />
              <h3>Intuitively explore Swarm</h3>
              <p>
                Swarm Desktop makes it simple for you to try and out and explore
                the functionality of the Swarm network. Easily your Swarm
                light-node's status, settings and wallet.
              </p>
            </div>
            <div>
              <Placeholder height={200} />
              <h3>Upload and forget</h3>
              <p>
                No need to keep your node running. Once you have uploaded your
                content to Swarm, it will be automatically be kept alive by a
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
              <a href="#">Build with Swarm</a>
              <a href="#">Earn with Swarm</a>
              <a href="#">Swarm documentation</a>
              <a href="#">Swarm white paper</a>
              <a href="#">The Book of Swarm</a>
            </div>
            <div>
              <h5>Links</h5>
              <a href="#">Swarm Desktop</a>
              <a href="#">Swarm Gateway</a>
              <a href="#">Github</a>
              <a href="#">Blog</a>
              <a href="#">Discord</a>
              <a href="#">Twitter</a>
              <a href="#">YouTube</a>
              <a href="#">Reddit</a>
            </div>
            <div>
              <h5>Company</h5>
              <a href="#">Jobs</a>
              <a href="#">Ecosystem &amp; grants</a>
              <a href="#">Roadmap</a>
              <a href="#">Privacy policy</a>
              <a href="#">FAQs</a>
            </div>
          </div>
          <div class="cta px-4 md:px-8 py-8 md:p-16 my-8 md:my-16">
            <p class="text-3xl md:text-4xl">Keep in touch!</p>
            <p class="text-xl md:text-2xl pt-2">
              Receive news and updates to your email.
            </p>
            <div class="pt-8 md:flex md:gap-4">
              <input
                class="md:grow px-3 text-2xl w-full md:w-auto p-3.5"
                placeholder="Add your email here…"
                style={{ color: "#b6b6b6" }}
              />
              <button class="negative mt-2 md:mt-0">Subscribe</button>
            </div>
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
