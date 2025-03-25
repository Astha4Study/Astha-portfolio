
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <div className="text-center max-w-md animate-fade-in">
        <div className="mb-8">
          <div className={cn(
            "relative w-24 h-24 mx-auto mb-6",
            "before:absolute before:inset-0 before:rounded-full before:bg-primary/10 before:animate-ping before:animation-delay-300"
          )}>
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
            <div className="absolute inset-3 rounded-full bg-primary/30"></div>
            <div className="absolute inset-0 flex items-center justify-center text-4xl font-semibold text-primary">
              404
            </div>
          </div>
          <h1 className="text-4xl font-display font-bold mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
