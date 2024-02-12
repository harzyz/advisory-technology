import CallToAction from './components/callToAction/callToAction';
import Footer from './components/footer/footer';
import Herosection from './components/heroSection/herosection';
import MeetOurTeam from './components/meetOurTeam/meetOurTeam';
import ReachOutToUs from './components/reachOutToUs/reachOutToUs';
import WhatWeDo from './components/whatWeDo/whatWeDo';
import WhoAreWe from './components/whoAreWe/whoAreWe';
import WhyChooseUs from './components/whyChooseUs/whyChooseUs';
import './index.css';

function App() {
  return (
    <main>
      <Herosection />
      <WhoAreWe />
      <WhatWeDo />
      <CallToAction />
      <WhyChooseUs />
      <MeetOurTeam />
      <ReachOutToUs />
      <Footer />
    </main>
  );
}

export default App;
