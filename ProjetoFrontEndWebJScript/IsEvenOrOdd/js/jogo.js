window.addEventListener("load", function () {

    var isRunningGame = false;
    var timeChronometer = null;
    var numberChronometer = null;
    var difficultyLevel;
    var minutes = 0;
    var seconds = 0;
    var levels = {
        default: { min: 0, sec: 0, timer: 0 },
        easy: { min: 1, sec: 30, timer: 1200 },
        medium: { min: 1, sec: 15, timer: 700 },
        difficulty: { min: 0, sec: 30, timer: 500 }
    }

var score = {
    correctCount: 0,
    errorCount: 0,
    evenNumbers: 0,
    accuracy: 0
}

    const level = document.getElementById("difficulty-options");
    const startButton = document.getElementById("start-button");
    const pauseButton = document.getElementById("pause-button");
    const stopButton = document.getElementById("stop-button");
    const exitButton = document.getElementById("exit-button");
    const numberDisplay = document.getElementById("number-display");

    level.addEventListener("change", changeTimer);
    startButton.addEventListener("click", startGame);
    pauseButton.addEventListener("click", pauseGame);
    stopButton.addEventListener("click", stopGame);
    exitButton.addEventListener("click", function () {window.open("index.html","_self")});
    numberDisplay.addEventListener("click", checkClickedNumber);
    enableBtns(true, false, false);


    function resetScore() {
        score.correctCount = 0;
        score.errorCount = 0;
        score.evenNumbers = 0;
        score.accuracy = 0;
    }

    function uptadeScoreGame() {
        document.getElementById("correct-count").innerHTML = score.correctCount;
        document.getElementById("error-count").innerHTML = score.errorCount;
        document.getElementById("even-numbers").innerHTML = score.evenNumbers;
        document.getElementById("accuracy").innerHTML = score.accuracy + "%";
    }
    function changeTimer() {
        if (isRunningGame) {
            var level = document.getElementById("difficulty-options").selectedIndex;
            stopGame();
            document.getElementById("difficulty-options").selectedIndex = level;
        }
        var levelGame = document.getElementById("difficulty-options").value;
        var level = levels.default;

      playAudio("audio/click.mp3");

        switch (levelGame) {
            case "easy":
                level = levels.easy;
                break;
            case "medium":
                level = levels.medium;
                break;
            case "hard":
                level = levels.difficulty;
                break;
        }
        changeTimeGame(level);
    }
    function changeTimeGame(level) {
        minutes = level.min;
        seconds = level.sec;
        difficultyLevel = level.timer;
        updateGamePanel();
    }
    function updateGamePanel() {
        document.getElementById("min").innerHTML = (String(minutes).length == 1)?"0"+minutes:minutes;
        document.getElementById("sec").innerHTML = (String(seconds).length == 1)?"0"+seconds:seconds;
    }

    function startGame() {
        isRunningGame = true;
        if (document.getElementById("difficulty-options").value != "default") {
            enableBtns(false, true, true);
           playAudio("audio/gameStart.mp3");
            numberChronometer = setInterval(changeNumber, difficultyLevel);
            timeChronometer = setInterval(updateTime, 1000);
        }
        else {
           playAudio("audio/negativeBeeps.mp3");
            alertWifi(`Para iniciar, selecione o nível de dificuldade!`, false, 0,"",30, "");
            document.getElementById("difficulty-options").focus();
        }
    }
    function changeNumber() {
        var number = parseInt(Math.random() * 100) + 1;
        animateScore("");

        document.getElementById("number-display").style.color = "black";
        document.getElementById("number-display").innerHTML = number;

        if (number % 2 == 0) score.evenNumbers++;
        score.accuracy = ((score.correctCount / score.evenNumbers) * 100).toFixed(1);
        uptadeScoreGame();
    }
    function checkClickedNumber() {
        if (isRunningGame) {
            var value = parseInt(document.getElementById("number-display").innerHTML);
            if (document.getElementById("start-button").disabled) {
                if (value % 2 == 0) {
                    playAudio("audio/sucess.mp3");
                    score.correctCount++;
                    uptadeScoreGame();
                    document.getElementById("number-display").style.color = "green";
                }
                else if (value % 2 == 1) {
                 playAudio("audio/lose.mp3");
                    score.errorCount++;
                    uptadeScoreGame();
                    document.getElementById("number-display").style.color = "red";
                    animateScore("shakeNumber");
                }
            }
        }
    }
    
    function animateScore(type) {
        document.getElementById("number-display").className = "";
        if (type != "") document.getElementById("number-display").classList.add(type);
    }
    function pauseGame() {
        enableBtns(true, false, true);
        clearInterval(numberChronometer);
        clearInterval(timeChronometer);
        playAudio("audio/click.mp3");
    }
    function stopGame() {
        changeTimeGame(levels.default);
        document.getElementById("difficulty-options").selectedIndex = 0;
        document.getElementById("number-display").innerHTML = "_";
        resetScore();
        uptadeScoreGame();
       pauseGame();
        enableBtns(true, false, false);
        isRunningGame = false;
        playAudio("audio/click.mp3");
    }
    function updateTime() {
        seconds--;
        if (seconds == 0 && minutes == 0) {
            clearInterval(numberChronometer);
            clearInterval(timeChronometer);
            isRunningGame = false;
            playAudio("audio/gameWin.mp3");
            alertWifi(`Fim de jogo!`, false, 0,"", 30, "");
        }
        else {
            if (seconds == -1) {
                minutes--;
                seconds = 59;
            }
        }
        updateGamePanel();
    }

    function enableBtns(btnPlay, btnPause, btnStop) {
        document.getElementById("start-button").disabled = !btnPlay;
        document.getElementById("pause-button").disabled = !btnPause;
        document.getElementById("stop-button").disabled = !btnStop;
    }
});