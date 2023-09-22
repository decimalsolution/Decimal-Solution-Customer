import { ServiceModal } from "@/components/landing-page/services-modal";
import InfoHeader from "./info-header";
import NavigationHeader from "./navigation-header";

export default function MainNav({ contactInfo }) {
  return (
    <header className="flex flex-col items-center bg-white py-2 2xl:py-0">
      <div className="max-w-[1720px] w-full px-2 lg:px-4 xl:px-8">
        <InfoHeader contactInfo={contactInfo} />
      </div>
      <div className="h-[1px] w-full bg-gray-400"></div>
      <div className="max-w-[1720px] w-full px-2 lg:px-4 xl:px-8">
        <NavigationHeader />
      </div>
    </header>
  );
}
