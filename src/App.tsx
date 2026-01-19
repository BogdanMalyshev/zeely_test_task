import { Image } from "lucide-react";
import { Button } from "@/components/ui";
import {
  AvatarBackgroundSidebar,
  BackgroundProvider,
  useBackground,
} from "@/features/avatar-background";

const AppContent = () => {
  const { toggleSidebar } = useBackground();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100">
      <Button
        onClick={() => toggleSidebar(true)}
        variant="secondary"
        className="rounded-full bg-white shadow-lg transition-transform hover:scale-105"
      >
        <Image className="h-4 w-4" />
        Change background
      </Button>

      <AvatarBackgroundSidebar />
    </div>
  );
};

const App = () => {
  return (
    <BackgroundProvider>
      <AppContent />
    </BackgroundProvider>
  );
};

export default App;
