var TennisGame1 = function (player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;

    var scoreToTextTable = ["Love", "Fifteen", "Thirty", "Forty"];

};

TennisGame1.prototype.wonPoint = function (playerName) {
    if (playerName === this.player1Name) {
        this.m_score1 += 1;
    }
    else {
        this.m_score2 += 1;
    }
};

TennisGame1.prototype.getScore = function () {
    var score = "";
    if (this.m_score1 == this.m_score2 && this.m_score1 < 3) {
        score = this.scoreToTextTable[this.m_score1] + "-" + "all";
    } else if (this.m_score1 == this.m_score2 && this.m_score1 > 3) {
        score = "Deuce";
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4){
        var minusResult = this.m_score1 - this.m_score2;
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    }
    else {
        score = this.scoreToTextTable[this.m_score1] + "-" + this.scoreToTextTable[this.m_score2];
    };

    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}