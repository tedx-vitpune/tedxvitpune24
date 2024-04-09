import Header from "@/components/CC/header";
import CCEventCard from "@/components/CC/ccEventCard";
import BTSSection from "@/components/CC/BTSSection";

export default function CC() {
  return (
    <div className="bg-white w-screen">
      <Header />
      <CCEventCard />
      <BTSSection />
    </div>
  );
}
