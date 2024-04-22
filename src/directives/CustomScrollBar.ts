// Note: use this function structure for realease a separate package
export default {
  mounted: (el) => {
    // Function to add or remove the attribute based on hover
    const customScrollBarPlugin = () => {
      const scrollbarElement = document.querySelector('[data-scrollbar-type="dynamic"]')

      // Check if the element exists
      if (scrollbarElement) {
        scrollbarElement.addEventListener('mouseenter', function () {
          scrollbarElement.setAttribute('data-scrollbar', 'active')
        })

        scrollbarElement.addEventListener('mouseleave', function () {
          scrollbarElement.removeAttribute('data-scrollbar')
        })
      }
    }

    // Init the custoom scrollbar
    // onMounted(customScrollBarPlugin)
    customScrollBarPlugin()
  }
}
