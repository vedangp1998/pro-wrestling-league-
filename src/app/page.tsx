import HomePage from "./home/page";
import LeagueTable from "./league-table/page";
import LatestNews from "./latest-news/page";

export default function Home() {
  return (
    <div>
      <HomePage />
      <LeagueTable />
      <LatestNews />
    </div>
  );
}
