import {
  Navbar,
  Welcome,
  Footer,
  Services,
  Transactions,
  Leaderboard,
} from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Leaderboard />
    <Services />

    <Footer />
  </div>
);

export default App;
