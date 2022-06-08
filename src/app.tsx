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
  <div class="max-w-3xl m-auto">{children}</div>
);

export const App = () => {
  return (
    <>
      <Content>
        <nav class="mt-16">
          <img src={logo} class="m-auto" />
        </nav>
        <header class="text-center mt-32">
          <h1>Swarm, for everyone.</h1>
          <p class="mt-8 text-2xl">
            Swarm Desktop offers an easy-to-use experience, giving everyone
            truly decentralised access to the Swarm network.
          </p>
        </header>
        <section class="mt-16 grid grid-cols-2 gap-8">
          <Placeholder height={430} />
          <div>
            <p class="text-lg">
              Get the best of Swarm by running an easy to install Bee light-node
              on your desktop, laptop or spare hardware to give you direct p2p
              access to the network, without the need to trust centralised
              gateways.
            </p>
            <p class="text-sm mt-8">
              Easily upload content and manage your node's postage stamps from
              our beautiful visual interface. Keep a lightweight Swarm node
              running in the background on your computer so that other
              applications and your web browser can access data direct from the
              swarm.
            </p>
            <div class="mt-8">
              <button class="primary">Download</button>
              <button class="secondary ml-4">GitHub Page</button>
            </div>
          </div>
        </section>
        <div class="line mt-32" />
        <section class="mt-16">
          <h2 class="text-center">Why Swarm Desktop</h2>
          <div class="features">
            <div>
              <Placeholder height={200} />
              <h3>The easiest way to Swarm</h3>
              <p>
                With our desktop application, you can now also easily access
                content on the Swarm network,without having to understand a
                complex set up provess.
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
              <h3>Manage your own node</h3>
              <p>
                Swarm for Desktop allows you to easily and securely buy and
                manage stamps that keep your content alive in the swarm network.
              </p>
            </div>
          </div>
        </section>
        <div class="line mt-32" />
        <section class="my-32 text-center">
          <h1>Install Swarm now!</h1>
          <p class="mt-8 text-2xl">
            Donec feugiat eros mollis, ullamcorper nulla sed, eleifend mi.
          </p>
          <button class="primary mt-8">Download the app</button>
        </section>
      </Content>
      <footer class="bg-black py-16 text-center">
        <Content>
          <img src={logoNegative} class="m-auto" />
          <p class="mt-4 text-lg">
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
        </Content>
      </footer>
    </>
  );
};
