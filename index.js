const human = {
  name: "Usain Bolt",
  age: 32,

  run: function() {
    console.log(`${human.name} is running in a marathon`);
  },

  speed: function(pace) {
    console.log(`He ran ${pace} km/h!`);
  }
};
human.run();
human.speed(44.16);
