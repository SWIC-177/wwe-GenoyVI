const CHAMPIONS = [
    "Axiom",
    "Ilja Dragunov",
    "Charlie Dempsey",
    "Nathan Frazer",
    "Roxanne Perez",
    "Damien Priest",
    "Cody Rhodes",
    "Awesome Truth",
    "A-Town Down Under",
    "The Kabuki Warriors",




   


  const BELTS = [
    "Undisputed WWE Champion",
    "World Heavyweight Champion",
    "Women's World Champion",
    "WWE Women’s Champion",
    "Intercontinental Champion",
    "United States Champion",
    "World Tag Team Champions",
    "SmackDown Tag Team Champions",
    "WWE Women's Tag Team Champions",
    "NXT Champion",
    "NXT Women's Champion",
    "NXT North American Champion",
    "NXT Tag Team Champions",
    "NXT Heritage Cup Champion",
  ];




 
const CHAMPIONCHIPS = CHAMPIONS
    .filter((champion, index) => BELTS[index] !== "World Tag Team Champions")
    .map((champion, index) => {
        return {
            title: BELTS[index],
            champion: champion,
        };
    });





