const beshifier = (input) => {
  let beshified = "";

  for (text of input) {
    beshified += text != " " ? text : " 🤸‍♀️ ";
  }

  return beshified;
};

document.querySelector("#inputText").addEventListener("input", (e) => {
  let textValue = e.target.value;
  document.querySelector("#beshifiedOutput").value = beshifier(textValue);
});

document.querySelector(".copy_btn").addEventListener("click", (e) => {
  const beshifiedText = document.querySelector("#beshifiedOutput");

  beshifiedText.select();
  beshifiedText.setSelectionRange(0, 99999);

  try {
    document.execCommand("copy");
    console.log("Text successfully copied to clipboard!");
  } catch (err) {
    console.error("Error copying text: ", err);
  }
});
