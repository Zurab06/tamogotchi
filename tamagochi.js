const tamogotchi = {
  name: "Radik",
  meal: 1,
  energy: 2,
  mood: 4,
  getStatus() {
    if (tamogotchi.meal <= 0 || tamogotchi.mood <= 0 || tamogotchi.energy <= 0)
      console.log(`${tamogotchi.name} умер:(`);
    else {
      console.log(
        `Имя: ${tamogotchi.name}, Еда: ${
          tamogotchi.meal < 3 ? "Я голоден" : "Я не голоден"
        } (${tamogotchi.meal}), Энергия:${
          tamogotchi.energy < 3 ? "Я хочу спать" : "Я не хочу спать"
        } (${tamogotchi.energy}), Настроение: ${
          tamogotchi.mood < 3 ? "Мне скучно" : "Мне не скучно"
        } (${tamogotchi.mood}). `
      );
    }
  },
  setName(neu) {
    tamogotchi.name = neu;
  },
  eat() {
    if (tamogotchi.meal < 5) {
      tamogotchi.mood--;
      tamogotchi.meal++;
    }
  },
  sleep() {
    if (tamogotchi.energy < 5) {
      tamogotchi.energy++;
      tamogotchi.meal--;
    }
  },
  play() {
    if (tamogotchi.mood < 5) {
      tamogotchi.mood++;
      tamogotchi.energy--;
    }
  },
  overeat(){
   
      tamogotchi.meal=-100
  }
};
