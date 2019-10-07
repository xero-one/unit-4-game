$(document).ready(() => {
    /*Random number generator for variable "#randomnumber"*/
    var randomNumber = Math.random();
    randomNumber = randomNumber * ((120-19)+1)+19;
    randomNumber = Math.floor(randomNumber) + 1;
    console.log(randomNumber);
    $("#randNum").html(randomNumber);

    /*Random number generator for gem variables @ "#crystalArray"*/
    var ruby = Math.random();
    ruby = ruby * 12;
    ruby = Math.floor(ruby) + 1;
    console.log(ruby);

    var emld = Math.random();
    emld = emld * 12;
    emld = Math.floor(emld) + 1;
    console.log(emld);

    var sapphire = Math.random();
    sapphire = sapphire * 12;
    sapphire = Math.floor(sapphire) + 1;
    console.log(sapphire);

    var citrine = Math.random();
    citrine = citrine * 12;
    citrine = Math.floor(citrine) + 1;
    console.log(citrine);

    /*Wins and losses tracker*/
    var wins = 0;
    var losses = 0;

    /*Total score tracker*/
    var totalScore = 0;
    $("totalScore").text(totalScore);

    var song;

        function youWin() {
            wins = wins + 1;
            $("#wins").text(wins);
            resetTotalScore();
            resetCharacters();
        }

        function youLose() {
            losses = losses + 1;
            $("#losses").text(losses);
            resetTotalScore();
            resetCharacters();
        }

        function resetTotalScore() {
            totalScore = 0;
            $("#totalScore").text(totalScore);
        }

        function resetCharacters() {
            randomNumber = Math.random();
            randomNumber = randomNumber * ((120-19)+1)+19;
            randomNumber = Math.floor(randomNumber) + 1;
            console.log(randomNumber);
            $("#randNum").html(randomNumber);
        }

        function setup() {
            song = loadSound("spyro-theme-song.mp3", loaded);  
        }

        function loaded() {
            song.loop();
            song.setVolume(0.5);
        }

    $("#ruby").click(() => {
        totalScore = totalScore + ruby;
        $("#totalScore").text(totalScore);
        if(totalScore === randomNumber) {
            youWin();
            resetTotalScore();
            resetCharacters();
        }   
        else if (totalScore > randomNumber) {
            youLose();
            resetTotalScore();
            resetCharacters();
        }
    });

    $("#emld").click(() => {
        totalScore = totalScore + emld;
        $("#totalScore").text(totalScore);
        if(totalScore === randomNumber) {
            youWin();
            resetTotalScore();
            resetCharacters();
        }   
        else if (totalScore > randomNumber) {
            youLose();
            resetTotalScore();
            resetCharacters();
        }
    });

    $("#sapphire").click(() => {
        totalScore = totalScore + sapphire;
        $("#totalScore").text(totalScore);
        if(totalScore === randomNumber) {
            youWin();
            resetTotalScore();
            resetCharacters();
        }   
        else if (totalScore > randomNumber) {
            youLose();
            resetTotalScore();
            resetCharacters();
        }
    });

    $("#citrine").click(() => {
        totalScore = totalScore + citrine;
        $("#totalScore").text(totalScore);
        if(totalScore === randomNumber) {
            youWin();
            resetTotalScore();
            resetCharacters();
        }   
        else if (totalScore > randomNumber) {
            youLose();
            resetTotalScore();
            resetCharacters();
        }
    });

/*This is the JQuery script to link element fade by scoll*/
    $(document).on("scroll", function () {
        var pageTop = $(document).scrollTop()
        var pageBottom = pageTop + $(window).height()
        var tags = $("section")
        
        for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]
        
        if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible")
        } else {
          $(tag).removeClass("visible")
        }
        }
        })
});
