import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Placeholder components for future routes
const ReclaimPage = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-serif font-bold text-primary mb-4">Ritual Interface</h1>
      <p className="text-muted-foreground">AI-powered wealth recovery coming soon...</p>
    </div>
  </div>
);

const VaultsPage = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-serif font-bold text-primary mb-4">Regen Vaults</h1>
      <p className="text-muted-foreground">Regenerative vault explorer coming soon...</p>
    </div>
  </div>
);

const SanctumPage = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-serif font-bold text-primary mb-4">Atlas Sanctum</h1>
      <p className="text-muted-foreground">Sacred storytelling portal coming soon...</p>
    </div>
  </div>
);

const MovementPage = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-serif font-bold text-primary mb-4">Custodians Network</h1>
      <p className="text-muted-foreground">Global guardians community coming soon...</p>
    </div>
  </div>
);

const InvestPage = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-serif font-bold text-primary mb-4">Partner Portal</h1>
      <p className="text-muted-foreground">Investment & partnership opportunities coming soon...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/reclaim" element={<ReclaimPage />} />
          <Route path="/vaults" element={<VaultsPage />} />
          <Route path="/sanctum" element={<SanctumPage />} />
          <Route path="/movement" element={<MovementPage />} />
          <Route path="/invest" element={<InvestPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
