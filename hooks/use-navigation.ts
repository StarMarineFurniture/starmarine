"use client";

import { useCallback } from 'react';
import { scrollToNavigationItem, scrollToSection, scrollToContact, scrollToTop } from '@/lib/scroll-utils';

/**
 * Custom hook for navigation and scrolling functionality
 * Provides reusable scroll functions for components
 */
export const useNavigation = () => {
  /**
   * Navigate to a section by navigation item name
   */
  const navigateToSection = useCallback((navigationItem: string) => {
    scrollToNavigationItem(navigationItem, (item) => {
      // You can customize this callback for each component
      // For example, show a toast notification, track analytics, etc.
      console.log(`Navigation to "${item}" requested but section not available yet`);
    });
  }, []);

  /**
   * Navigate to a specific section by ID
   */
  const navigateToSectionById = useCallback((sectionId: string, offset?: number) => {
    scrollToSection(sectionId, offset);
  }, []);

  /**
   * Navigate to contact section
   */
  const navigateToContact = useCallback(() => {
    scrollToContact();
  }, []);

  /**
   * Navigate to top of page
   */
  const navigateToTop = useCallback(() => {
    scrollToTop();
  }, []);

  return {
    navigateToSection,
    navigateToSectionById,
    navigateToContact,
    navigateToTop,
  };
};

export default useNavigation;