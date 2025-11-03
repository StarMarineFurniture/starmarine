/**
 * Example of how other components can use the navigation utilities
 * This can be used as a reference for implementing navigation in any component
 */

"use client";

import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/use-navigation";
import { SECTION_IDS, scrollToSection } from "@/lib/scroll-utils";

export const NavigationExample = () => {
  // Using the custom hook
  const { navigateToSection, navigateToContact, navigateToTop, navigateToSectionById } = useNavigation();

  // Example 1: Navigate by navigation item name
  const handleAboutClick = () => {
    navigateToSection("About us");
  };

  // Example 2: Navigate by section ID directly
  const handleProcessClick = () => {
    navigateToSectionById(SECTION_IDS.OUR_PROCESS);
  };

  // Example 3: Navigate with custom offset
  const handleCustomOffsetClick = () => {
    navigateToSectionById(SECTION_IDS.CONTACT_US, 200); // Extra 56px offset
  };

  // Example 4: Using utility function directly (without hook)
  const handleDirectUtilityClick = () => {
    scrollToSection(SECTION_IDS.ABOUT_US, 100);
  };

  return (
    <div className="space-y-4 p-4">
      <h3 className="text-lg font-semibold">Navigation Examples</h3>
      
      {/* Using hook methods */}
      <Button onClick={handleAboutClick}>
        Go to About (via hook)
      </Button>
      
      <Button onClick={handleProcessClick}>
        Go to Process (via section ID)
      </Button>
      
      <Button onClick={navigateToContact}>
        Go to Contact (direct hook method)
      </Button>
      
      <Button onClick={navigateToTop}>
        Go to Top
      </Button>
      
      <Button onClick={handleCustomOffsetClick}>
        Go to Contact (custom offset)
      </Button>
      
      {/* Using utility directly */}
      <Button onClick={handleDirectUtilityClick}>
        Go to About (direct utility)
      </Button>
    </div>
  );
};

export default NavigationExample;