const soldier = {
  name: "SoldierBoy",
  health: 10,
  weapon: { nameWeapon: "m4a1", ammo: 30 },
  clip: 3,
  shoot() {
    if (soldier.weapon.ammo > 0) {
      soldier.weapon.ammo--;
      console.log("bang-bang");
    } else {
      console.log("Обойма пуста. Перезарядитесь");
    }
  },

  reload() {
    soldier.weapon.ammo=30
    clip--
  },
  wounded() {
soldier.health--
if(soldier.health<=0){
    console.log('Ты проиграл')
}
  },
};
