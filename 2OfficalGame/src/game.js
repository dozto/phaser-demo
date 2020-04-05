const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [SceneMain],
};

let score = 0;
let scoreText;

const game = new Phaser.Game(config);
