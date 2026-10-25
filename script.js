cat > script.js <<'EOF'
const button = document.getElementById("testButton");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  result.textContent = "JavaScript ทำงานแล้ว!";
});
EOF
