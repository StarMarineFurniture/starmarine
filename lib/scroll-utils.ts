/**
 * Utility functions for smooth scrolling to sections
 */

// Section ID mapping - centralized configuration
export const SECTION_IDS = {
  HOME: "home",
  ABOUT_US: "about-us",
  OUR_CLIENTS: "our-clients", 
  OUR_PROCESS: "our-process",
  CONTACT_US: "contact-us",
  WHY_US: "why-us",
  FACILITY: "facility",
  OUR_PRODUCTS: "our-products"
} as const;

// Navigation item to section ID mapping
export const NAVIGATION_SECTION_MAP: { [key: string]: string } = {
  "Home": SECTION_IDS.HOME,
  "About us": SECTION_IDS.ABOUT_US,
  "Why Us": SECTION_IDS.WHY_US,
  "Facility": SECTION_IDS.FACILITY,
  "Our Products": SECTION_IDS.OUR_PRODUCTS,
  "Our Process": SECTION_IDS.OUR_PROCESS,
  "Contact Us": SECTION_IDS.CONTACT_US
};

// Calculate the total height of fixed headers
const FIXED_HEADER_HEIGHT = 144; // header: 64px + nav: 80px

/**
 * Scrolls to a specific section by its ID
 * @param sectionId - The ID of the section to scroll to
 * @param offset - Additional offset in pixels (default: FIXED_HEADER_HEIGHT)
 */
export const scrollToSection = (sectionId: string, offset: number = FIXED_HEADER_HEIGHT): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.offsetTop - offset;
    
    window.scrollTo({
      top: Math.max(0, elementPosition), // Ensure we don't scroll to negative position
      behavior: 'smooth'
    });
  } else {
    console.warn(`Section with ID "${sectionId}" not found`);
  }
};

/**
 * Scrolls to a section based on navigation item name
 * @param navigationItem - The navigation item name (e.g., "About us", "Contact Us")
 * @param onSectionNotFound - Callback for when section doesn't exist
 */
export const scrollToNavigationItem = (
  navigationItem: string, 
  onSectionNotFound?: (item: string) => void
): void => {
  const sectionId = NAVIGATION_SECTION_MAP[navigationItem];
  
  if (sectionId) {
    scrollToSection(sectionId);
  } else {
    // Handle special cases
    if (navigationItem === "Home") {
      scrollToTop();
    } else {
      console.log(`"${navigationItem}" section coming soon!`);
      onSectionNotFound?.(navigationItem);
    }
  }
};

/**
 * Scrolls to the top of the page
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Scrolls to the contact section specifically
 */
export const scrollToContact = (): void => {
  scrollToSection(SECTION_IDS.CONTACT_US);
};