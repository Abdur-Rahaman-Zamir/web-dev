// ===== Popup Control =====
function openPopup(id) {
  document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

// ===== Close popup when clicking outside =====
window.onclick = function(event) {
  const popups = document.querySelectorAll(".popup");
  popups.forEach(p => {
    if (event.target === p) {
      p.style.display = "none";
    }
  });
};