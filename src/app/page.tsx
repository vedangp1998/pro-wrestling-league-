import HomePage from "./home/page";
import LeagueTable from "./components/league-table/page";
import LatestNews from "./components/latest-news/page";

export default function Home() {
  return (
    <div>
      <HomePage />
      <LeagueTable />
      <LatestNews />
    </div>
  );
}
