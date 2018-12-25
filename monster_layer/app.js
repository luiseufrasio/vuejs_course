new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
            this.turns = []
        },
        attack: function() {
            var damage = this.damage(10, 3)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster for ' + damage
            })
            if (this.isGameOver()) return 
            
            this.monsterAttacks()
        },
        specialAttack: function() {
            var damage = this.damage(20, 10)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits Monster hard for ' + damage
            })
            if (this.isGameOver()) return
            
            this.monsterAttacks()
        },
        heal: function() {
            this.playerHealth = this.playerHealth > 90 ? 
                100 : this.playerHealth + 10
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            })
            this.monsterAttacks()
        },
        giveUp: function() {
            if (confirm('Are You Sure?')) {
                this.gameIsRunning = false
                this.turns = []
            }
        },
        monsterAttacks: function() {
            var damage = this.damage(12, 5)
            this.playerHealth -= damage
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits Player for ' + damage
            })
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
                    this.turns = []
                }
                return true
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                    this.turns = []
                }
                return true
            }
            return false
        }
    }
})