document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelectorAll('.flash').forEach(flash => {
      flash.style.opacity = "0";
      flash.style.transform = "translateY(-10px)";
      flash.style.transition = "0.4s ease";

      setTimeout(() => {
        flash.remove();
      }, 400); // remove after fade-out
    });
  }, 3000);
});