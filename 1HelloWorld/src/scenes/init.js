class SceneInit extends Phaser.Scene {
  constructor() {
    super("init");
  }
  preload() {
    this.load.image("sky", "assets/images/gb_space.png");
    this.load.image("logo", "assets/images/phaser3_logo.png");
    this.load.image("red", "assets/effects/particle_red.png");
  }

  create() {
    this.add.image(400, 300, "sky");

    const particles = this.add.particles("red");

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: "ADD",
    });

    const logo = this.physics.add.image(400, 100, "logo");

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }
}
