window.onload = () => {
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "pt-BR";
  speech.volume = 10;

  let numbers = [];

  const maxNumber = 75;

  const afirmativePhrase = [
    "eu disse",
    "repetindo",
    "presta atenção",
    "novamente",
    "estou cansada, me ajuda Alexa",
    "só vou falar mais uma vez",
  ];

  const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];

  document.getElementById("new-number").onclick = async () => {
    if (numbers.length === maxNumber) {
      speech.text = "Acabaram os números, alguém já deveria ter bingado";
      window.speechSynthesis.speak(speech);
    }

    const color = colors[Math.floor(Math.random() * colors.length - 1) + 1];
    const currentNumber = getNumber();

    for (let i = 0; i < 10; i++) {
      document.getElementById("last-number").innerHTML = `
          <div class="res-circle-current" style="background: ${color}">
              <div class="circle-current-txt">${
                Math.floor(Math.random() * maxNumber) + 1
              }</div>
          </div>
      `;

      await sleep();
    }

    document.getElementById("last-number").innerHTML = `
        <div class="res-circle-current" style="background: ${color}">
            <div class="circle-current-txt">${currentNumber}</div>
        </div>
    `;

    document.getElementById("numbers-list").innerHTML = `
        <div class="res-circle" style="background: ${color}">
            <div class="circle-txt">${currentNumber}</div>
        </div>
        ${document.getElementById("numbers-list").innerHTML}
    `;

    if (currentNumber === 6) {
      speech.text = "meia dúzia" + currentNumber;
    } else if (currentNumber === 7) {
      speech.text = "os anões da branca de neve" + currentNumber;
    } else if (currentNumber === 10) {
      speech.text = "O número do craque, camisa" + currentNumber;
    } else if (currentNumber === 11) {
      speech.text = "1 atrás do outro" + currentNumber;
    } else if (currentNumber === 12) {
      speech.text = "uma dúzia" + currentNumber;
    } else if (currentNumber === 13) {
      speech.text = "Lula livre" + currentNumber;
    } else if (currentNumber === 22) {
      speech.text = "dois patinhos na lagoa" + currentNumber;
    } else if (currentNumber === 33) {
      speech.text = "A idade de cristo" + currentNumber;
    } else if (currentNumber === 40) {
      speech.text = "rasos" + currentNumber;
    } else if (currentNumber === 50) {
      speech.text = "rasos" + currentNumber;
    } else if (currentNumber === 51) {
      speech.text = "Uma boa ideia" + currentNumber;
    } else if (currentNumber === 71) {
      speech.text = "A casa da bruxa" + currentNumber;
    } else {
      speech.text = `${currentNumber}, ${
        afirmativePhrase[
          Math.floor(Math.random() * afirmativePhrase.length - 1) + 1
        ]
      }, ${currentNumber}`;
    }

    window.speechSynthesis.speak(speech);
  };

  document.getElementById("new-game").onclick = () => {
    const isNewGame = confirm(
      "Tem certeza que deseja iniciar uma nova rodada?"
    );

    if (isNewGame) {
      numbers = [];

      document.getElementById("last-number").innerHTML = "";
      document.getElementById("numbers-list").innerHTML = "";
    }
  };

  const sleep = () => {
    return new Promise((resolve) => setTimeout(resolve, 50));
  };

  const getNumber = () => {
    const newNumber = Math.floor(Math.random() * maxNumber) + 1;

    if (numbers.includes(newNumber)) {
      return getNumber();
    }

    numbers.push(newNumber);
    return newNumber;
  };
};
