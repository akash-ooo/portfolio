export default {
  mounted: function (el: HTMLElement, binding: { value: string }) {
    const text = binding.value || 'Default value!'
    el.textContent = ''
    let index = 0

    function type() {
      if (index < text.length) {
        el.textContent += text.charAt(index)
        index++
        if (index < text.length) {
          setTimeout(type, 500)
        }
      }
    }

    requestAnimationFrame(function () {
      setTimeout(type, 700)
    })
  }
}