import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: {
      works: {
        data: [
          {
            brand: "Audemars Piguet",
            name: "Cactus Jack",
            production: "Thibault Grevet",
            crew: "Division",
            preview: "https://vxxnyr.n0c.world/previews/preview_audemars.mp4",
            film: "https://vxxnyr.n0c.world/films/film_audemars.mp4",
            path: "film/audemars_travis",
            aria: "Audemars Piguet - Cactus Jack",
          },
          {
            brand: "Travis Scott",
            name: "God's Country",
            production: "Arnaud Bresson",
            crew: "North of now",
            preview:
              "https://vxxnyr.n0c.world/previews/preview_godscountry.mp4",
            film: "https://vxxnyr.n0c.world/films/film_godscountry.mp4",
            path: "film/godscountry",
            aria: "Travis Scott - God's Country",
          },
          {
            brand: "Alpine",
            name: "A290",
            production: "Anton Tammi",
            crew: "Phantasm",
            preview: "https://vxxnyr.n0c.world/previews/preview_alpine.mp4",
            film: "https://vxxnyr.n0c.world/films/film_alpine.mp4",
            path: "film/alpine",
            aria: "Alpine - A290",
          },
          {
            brand: "YSL",
            name: "Sakura",
            production: "Nathalie Canguilhem",
            crew: "Nvrd",
            preview: "https://vxxnyr.n0c.world/previews/preview_sakura.mp4",
            film: "https://vxxnyr.n0c.world/films/film_sakura.mp4",
            path: "film/sakura",
            aria: "YSL - Sakura",
          },
          {
            brand: "Zeg P ft SCH",
            name: "Juste une minute",
            production: "Jason Yan Francis",
            crew: "Chaos",
            preview: "https://vxxnyr.n0c.world/previews/preview_jsm.mp4",
            film: "https://vxxnyr.n0c.world/films/film_jsm.mp4",
            path: "film/jsm",
            aria: "Zeg P ft SCH - Juste une minute",
          },
          {
            brand: "Sorare",
            name: "",
            production: "Valentin Petit",
            crew: "Ocurens",
            preview: "https://vxxnyr.n0c.world/previews/preview_sorare.mp4",
            film: "https://vxxnyr.n0c.world/films/film_sorare.mp4",
            path: "film/sorare",
            aria: "Sorare",
          },
          {
            brand: "Galeries Lafayette",
            name: "A quoi je rêve",
            production: "BRTHR",
            crew: "Hamlet",
            preview: "https://vxxnyr.n0c.world/previews/preview_lafayette.mp4",
            film: "https://vxxnyr.n0c.world/films/film_lafayette.mp4",
            path: "film/lafayette",
            aria: "Galeries Lafayette - A quoi je rêve",
          },
          {
            brand: "Perrier",
            name: "Vue en terrasse",
            production: "Thomas Lachambre",
            crew: "Obvious",
            preview: "https://vxxnyr.n0c.world/previews/preview_perrier.mp4",
            film: "https://vxxnyr.n0c.world/films/film_perrier.mp4",
            path: "film/perrier",
            aria: "Perrier - Vue en terrasse",
          },
          {
            brand: "Adidas",
            name: "Forever",
            production: "Remi Besse",
            crew: "Iconoclast",
            preview:
              "https://vxxnyr.n0c.world/previews/preview_adidas_forever.mp4",
            film: "https://vxxnyr.n0c.world/films/film_adidas_forever.mp4",
            path: "film/adidas_forever",
            aria: "Adidas - Forever",
          },
          {
            brand: "A$AP Ferg",
            name: "Floor Seats",
            production: "Valentin Petit",
            crew: "Division",
            preview: "https://vxxnyr.n0c.world/previews/preview_ferg.mp4",
            film: "https://vxxnyr.n0c.world/films/film_ferg.mp4",
            path: "film/ferg",
            aria: "A$AP Ferg - Floor Seats",
          },
          {
            brand: "Bentley",
            name: "Continental GT",
            production: "Valentin Petit",
            crew: "Ocurens",
            preview: "https://vxxnyr.n0c.world/previews/preview_bentley.mp4",
            film: "https://vxxnyr.n0c.world/films/film_bentley.mp4",
            path: "film/bentley_continental",
            aria: "Bentley - Continental GT",
          },
          {
            brand: "Betclic",
            name: "Bascule dans le game",
            production: "Keith MacCarthy",
            crew: "Stink Paris",
            preview: "https://vxxnyr.n0c.world/previews/preview_betclic.mp4",
            film: "https://vxxnyr.n0c.world/films/film_betclic.mp4",
            path: "film/betclic",
            aria: "Betclic - Bascule dans le game",
          },
          {
            brand: "Beabadoobee",
            name: "Last day on Earth",
            production: "Arnaud Bresson",
            crew: "Division",
            preview:
              "https://vxxnyr.n0c.world/previews/preview_beabadoobee.mp4",
            film: "https://vxxnyr.n0c.world/films/film_beabadoobee.mp4",
            path: "film/beabadoobee",
            aria: "Beabadoobee - Last day on Earth",
          },
          {
            brand: "Ubisoft",
            name: "Rainsbow 6",
            production: "Pierre Davy",
            crew: "Pavillon Noir",
            preview: "https://vxxnyr.n0c.world/previews/preview_rainsbow6.mp4",
            film: "https://vxxnyr.n0c.world/films/film_rainsbow6.mp4",
            path: "film/rainsbow6",
            aria: "Ubisoft - Rainsbow 6",
          },
          {
            brand: "Flatbush Zombies",
            name: "Afterlife",
            production: "Arnaud Bresson",
            crew: "Division",
            preview: "https://vxxnyr.n0c.world/previews/preview_flatbush.mp4",
            film: "https://vxxnyr.n0c.world/films/film_flatbush.mp4",
            path: "film/flatbush",
            aria: "Flatbush Zombies - Afterlife",
          },
          {
            brand: "Adidas",
            name: "Paris la nuit",
            production: "Pierre Davy",
            crew: "Pavillon Noir",
            preview:
              "https://vxxnyr.n0c.world/previews/preview_adidas_paris.mp4",
            film: "https://vxxnyr.n0c.world/films/film_adidas_paris.mp4",
            path: "film/adidas_paris",
            aria: "Adidas - Paris la nuit",
          },
          {
            brand: "Heetch",
            name: "Banlieue rose",
            production: "Valentin Petit",
            crew: "Ocurens",
            preview: "https://vxxnyr.n0c.world/previews/preview_heetch.mp4",
            film: "https://vxxnyr.n0c.world/films/film_heetch.mp4",
            path: "film/heetch",
            aria: "Heetch - Banlieue rose",
          },
          {
            brand: "Chanel",
            name: "Dreaming",
            production: "Thurstan Redding",
            crew: "",
            preview: "https://vxxnyr.n0c.world/previews/preview_chanel.mp4",
            film: "https://vxxnyr.n0c.world/films/film_chanel.mp4",
            path: "film/chanel",
            aria: "Chanel - Dreaming",
          },
          {
            brand: "HP",
            name: "OMEN",
            production: "BRTHR",
            crew: "Serial Pictures",
            preview: "https://vxxnyr.n0c.world/previews/preview_hp.mp4",
            film: "https://vxxnyr.n0c.world/films/film_hp.mp4",
            path: "film/hp_omen",
            aria: "HP - OMEN",
          },
          {
            brand: "Socios",
            name: "Be more than a fan",
            production: "We are from LA",
            crew: "Iconoclast",
            preview: "https://vxxnyr.n0c.world/previews/preview_socios.mp4",
            film: "https://vxxnyr.n0c.world/films/film_socios.mp4",
            path: "film/socios",
            aria: "Socios - Be more than a fan",
          },
        ],
      },
    },
    autoScrollEnabled: false,
    showName: true, // État global pour afficher/masquer le nom
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
    toggleAutoScroll() {
      this.autoScrollEnabled = true;
    },
    // Action pour nettoyer le listener lorsque ce n'est plus nécessaire
    removeMouseMoveListener() {
      window.removeEventListener("mousemove", this.handleMouseMove);
    },
  },
});
