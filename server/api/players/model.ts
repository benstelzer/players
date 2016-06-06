export let players: IPlayer [] = [];
export function reset() {
  players.length = 0;
};

export function remove (id: number) {
  players = players.filter((item) => item.id !== id);
}

export function seed () {

  players.push( {
    id: 1,
    firstName: "Tyrone",
    lastName: "Black",
    age: 19,
    sport: "Basketball",
    position: "Point Guard",
    height: 200,
    weight: 240,
    number: 18,
    image: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/110.png&w=350&h=254",
    teamName: "Cobras",
    college: "Harvard",
    nationality: "Cameroonian"},
    {
      id: 2,
      firstName: "Temescal",
      lastName: "James",
      age: 23,
      sport: "Baseball",
      position: "Pitcher",
      height: 210,
      weight: 230,
      number: 20,
      image: "http://3.bp.blogspot.com/-0F57iW0U3dg/TjGyD1yoL_I/AAAAAAAAANM/syFrfE_s9Xw/s1600/toriihunter.jpg",
      teamName: "Panthers",
      college: "Yale",
      nationality: "Iraqi"


    },

    {
      id: 3,
      firstName: "Henry",
      lastName: "Porter",
      age: 21,
      sport: "Soccer",
      position: "Striker",
      height: 190,
      weight: 210,
      number: 28,
      image: "http://static.independent.co.uk/s3fs-public/thumbnails/image/2014/08/28/23/Demba-Ba.jpg",
      teamName: "Rangers",
      college: "Princeton",
      nationality: "Sweden"

    },
    {
      id: 4,
      firstName: "Demba",
      lastName: "Ba",
      age: 25,
      sport: "Football",
      position: "Quarterback",
      height: 180,
      weight: 240,
      number: 22,
      image: "http://media.premiumtimesng.com/wp-content/files/2012/10/kanu-nwankwo.jpg",
      teamName: "Snakes",
      college: "Berkeley",
      nationality: "Canada"

    },
  {
    id: 5,
    firstName: "Jamal",
    lastName: "Knowles",
    age: 22,
    sport: "Waterpolo",
    position: "Goalkeeper",
    height: 190,
    weight: 260,
    number: 29,
    image: "http://pragmaticobotsunite.com/wp-content/uploads/2015/06/waterpolo.jpg",
    teamName: "Raptors",
    college: "Stanford",
    nationality: "Barbados"

  });
};
