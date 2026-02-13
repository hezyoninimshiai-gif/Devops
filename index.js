let count = 0;

function increaseCounter() {
  if (count < 10) {
    count++;
    document.getElementById("counter").innerText = count;
  }
  if (count === 10) 
  { alert("Counter reached 10. Closing page..."); window.close();
  }
}
