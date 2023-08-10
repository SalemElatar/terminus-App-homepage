import {
  About,
  Navbar,
  Feedback,
  GetStarted,
  Hero,
  WhatsNew,
  World,
  Footer,
} from "../sections";

const Page = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <GetStarted />
      <WhatsNew />
      <World />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Page;
