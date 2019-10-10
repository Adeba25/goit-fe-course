function formatString(string) {
    let resultString = "";
    if (string.length <= 40) {
      resultString = string;
    } else {
      resultString = `${string.slice(0, 40)}...`;
    }
  
    return resultString;
  }
  
  console.log(formatString("Curabitur ligula sapien, tincidunt non."));
  // вернется оригинальная строка
  
  console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
  // вернется форматированная строка
  
  console.log(formatString("Curabitur ligula sapien."));
  // вернется оригинальная строка
  
  console.log(
    formatString(
      "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
    )
  );
  // вернется форматированная строка
  