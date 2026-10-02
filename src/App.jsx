import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  // const formatUserName = (userName) => `@${userName}`;
  // const [nombre, setNombre] = useState("joeltorresdev");
  return (
    <section className="App">
      <>
        <TwitterFollowCard userName="zer0cr4ck" initialIsFollowing>
          Joel Torres
        </TwitterFollowCard>
        <TwitterFollowCard userName="goncy" initialIsFollowing={false}>
          Gonzalo
        </TwitterFollowCard>
      </>
    </section>
  );
}
