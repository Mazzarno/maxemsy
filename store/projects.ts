import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
projects: {
  works: {
    enable: true,
    data: [
      {
        id: 1,
        brand: "Audemars Piguet",
        name: "Cactus Jack",
        production: "Thibault Grevet",
        crew: "Division",
        preview: "https://vxxnyr.n0c.world/previews/preview_audemars.mp4",
        film: "https://vxxnyr.n0c.world/films/film_audemars.mp4",
        path: "film/audemars_travis",
      },
      {
        id: 2,
        brand: "Travis Scott",
        name: "God's Country",
        production: "Arnaud Bresson",
        crew: "North of now",
        preview: "https://vxxnyr.n0c.world/previews/preview_godscountry.mp4",
        film: "https://vxxnyr.n0c.world/films/film_godscountry.mp4",
        path: "film/godscountry",
      },
      {
        id: 3,
        brand: "YSL",
        name: "Sakura",
        production: "Nathalie Canguilhem",
        crew: "Nvrd",
        preview: "https://vxxnyr.n0c.world/previews/preview_sakura.mp4",
        film: "https://vxxnyr.n0c.world/films/film_sakura.mp4",
        path: "film/sakura",
      },
      {
        id: 4,
        brand: "Sorare",
        name: "",
        production: "Valentin Petit",
        crew: "Ocurens",
        preview: "https://vxxnyr.n0c.world/previews/preview_sorare.mp4",
        film: "https://vxxnyr.n0c.world/films/film_sorare.mp4",
        path: "film/sorare",
      },
      {
        id: 5,
        brand: "Galeries Lafayette",
        name: "A quoi je rêve",
        production: "BRTHR",
        crew: "Hamlet",
        preview: "https://vxxnyr.n0c.world/previews/preview_lafayette.mp4",
        film: "https://vxxnyr.n0c.world/films/film_lafayette.mp4",
        path: "film/lafayette",
      },
      {
        id: 6,
        brand: "Perrier",
        name: "Vue en terrasse",
        production: "Thomas Lachambre",
        crew: "Obvious",
        preview: "https://vxxnyr.n0c.world/previews/preview_perrier.mp4",
        film: "https://vxxnyr.n0c.world/films/film_perrier.mp4",
        path: "film/perrier",
      },
      {
        id: 7,
        brand: "Adidas",
        name: "Forever",
        production: "Remi Besse",
        crew: "Iconoclast",
        preview: "https://vxxnyr.n0c.world/previews/preview_adidas_forever.mp4",
        film: "https://vxxnyr.n0c.world/films/film_adidas_forever.mp4",
        path: "film/adidas_forever",
      },
      {
        id: 8,
        brand: "A$AP Ferg",
        name: "Floor Seats",
        production: "Valentin Petit",
        crew: "Division",
        preview: "https://vxxnyr.n0c.world/previews/preview_ferg.mp4",
        film: "https://vxxnyr.n0c.world/films/film_ferg.mp4",
        path: "film/ferg",
      },
      {
        id: 9,
        brand: "Bentley",
        name: "Continental GT",
        production: "Valentin Petit",
        crew: "Ocurens",
        preview: "https://vxxnyr.n0c.world/previews/preview_bentley.mp4",
        film: "https://vxxnyr.n0c.world/films/film_bentley.mp4",
        path: "film/bentley_continental",
      },
      {
        id: 10,
        brand: "Betclic",
        name: "Bascule dans le game",
        production: "Keith MacCarthy",
        crew: "Stink Paris",
        preview: "https://vxxnyr.n0c.world/previews/preview_betclic.mp4",
        film: "https://vxxnyr.n0c.world/films/film_betclic.mp4",
        path: "film/betclic",
      },
      {
        id: 11,
        brand: "Beabadoobee",
        name: "Last day on Earth",
        production: "Arnaud Bresson",
        crew: "Division",
        preview: "https://vxxnyr.n0c.world/previews/preview_beabadoobee.mp4",
        film: "https://vxxnyr.n0c.world/films/film_beabadoobee.mp4",
        path: "film/beabadoobee",
      },
      {
        id: 12,
        brand: "Ubisoft",
        name: "Rainsbow 6",
        production: "Pierre Davy",
        crew: "Pavillon Noir",
        preview: "https://vxxnyr.n0c.world/previews/preview_rainsbow6.mp4",
        film: "https://vxxnyr.n0c.world/films/film_rainsbow6.mp4",
        path: "film/rainsbow6",
      },
      {
        id: 13,
        brand: "Flatbush Zombies",
        name: "Afterlife",
        production: "Arnaud Bresson",
        crew: "Division",
        preview: "https://vxxnyr.n0c.world/previews/preview_flatbush.mp4",
        film: "https://vxxnyr.n0c.world/films/film_flatbush.mp4",
        path: "film/flatbush",
      },
      {
        id: 14,
        brand: "Adidas",
        name: "Paris la nuit",
        production: "Pierre Davy",
        crew: "Pavillon Noir",
        preview: "https://vxxnyr.n0c.world/previews/preview_adidas_paris.mp4",
        film: "https://vxxnyr.n0c.world/films/film_adidas_paris.mp4",
        path: "film/adidas_paris",
      },
      {
        id: 15,
        brand: "Heetch",
        name: "Banlieue rose",
        production: "Valentin Petit",
        crew: "Ocurens",
        preview: "https://vxxnyr.n0c.world/previews/preview_heetch.mp4",
        film: "https://vxxnyr.n0c.world/films/film_heetch.mp4",
        path: "film/heetch",
      },
      {
        id: 16,
        brand: "Chanel",
        name: "Dreaming",
        production: "Thurstan Redding",
        crew: "",
        preview: "https://vxxnyr.n0c.world/previews/preview_chanel.mp4",
        film: "https://vxxnyr.n0c.world/films/film_chanel.mp4",
        path: "film/chanel",
      },
      {
        id: 17,
        brand: "HP",
        name: "OMEN",
        production: "BRTHR",
        crew: "Serial Pictures",
        preview: "https://vxxnyr.n0c.world/previews/preview_hp.mp4",
        film: "https://vxxnyr.n0c.world/films/film_hp.mp4",
        path: "film/hp_omen",
      },
      {
        id: 18,
        brand: "Socios",
        name: "Be more than a fan",
        production: "We are from LA",
        crew: "Iconoclast",
        preview: "https://vxxnyr.n0c.world/previews/preview_socios.mp4",
        film: "https://vxxnyr.n0c.world/films/film_socios.mp4",
        path: "film/socios",
      },
    ],
  },
showName: true,  // État global pour afficher/masquer le nom
},
    currentProject: {},
  }),
   actions: {
    setCurrentProject(project) {
      this.currentProject = project;
    },
    findProjectByPath(path) {
      return this.projects.works.data.find((work) => work.path === path);
     },
     // Action pour gérer l'affichage en fonction de l'activité de la souris
    handleMouseMove() {
      this.showName = true;
      clearTimeout(this.mouseTimeout);
      this.mouseTimeout = setTimeout(() => {
        this.showName = false;
      }, 2400);
    },

    // Action pour initialiser le gestionnaire de mouvement de la souris
    initMouseMoveListener() {
      window.addEventListener("mousemove", this.handleMouseMove);
      this.handleMouseMove(); // Assure que le nom est visible au chargement
    },

    // Action pour nettoyer le listener lorsque ce n'est plus nécessaire
    removeMouseMoveListener() {
      window.removeEventListener("mousemove", this.handleMouseMove);
    }
  },
});