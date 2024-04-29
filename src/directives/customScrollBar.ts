// Note: Share as NPM package
export default {
  mounted: (el: HTMLElement) => {
    const customScrollBarPlugin = () => {
      // Select the custom scrollbar element
      const scrollbarElement = document.querySelector('[data-scrollbar-type="dynamic"]');

      if (scrollbarElement) {
        // Add event listener on 'overflowed element' so it show custom scrollbar
        const handleMouseEnter = () => scrollbarElement.setAttribute('data-scrollbar', 'active');
        const handleMouseLeave = () => scrollbarElement.removeAttribute('data-scrollbar');

        scrollbarElement.addEventListener('mouseenter', handleMouseEnter);
        scrollbarElement.addEventListener('mouseleave', handleMouseLeave);
      } else {
        console.error('Scrollbar element not found');
      }
    }
    customScrollBarPlugin();
  }
}
