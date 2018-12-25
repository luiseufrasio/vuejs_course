new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
        },
        attack: function() {
            this.monsterHealth -= this.damage(10, 3)
            if (this.isGameOver()) return 
            
            this.monsterAttacks()
        },
        specialAttack: function() {
            this.monsterHealth -= this.damage(10, 20)
            if (this.isGameOver()) return
            
            this.monsterAttacks()
        },
        heal: function() {
            this.playerHealth = this.playerHealth > 90 ? 
                100 : this.playerHealth + 10
            this.monsterAttacks()
        },
        giveUp: function() {
            if (confirm('Are You Sure?')) this.gameIsRunning = false
        },
        monsterAttacks: function() {
            this.playerHealth -= this.damage(12, 5)
            this.isGameOver()
        },
        damage: function(max, min) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        isGameOver: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true
            }
            return false
        }
    }
})