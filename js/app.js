const { createApp } = Vue;

createApp({
  data() {
    return {
      places: [],
      highlightedId: null,
      search: "",
      activeCategory: "Todos",
      categories: ["Todos", "Edificios", "Aulas", "Oficinas", "Laboratorios", "Auditorios", "Cafeterías", "Plazas y deportes", "Servicios", "Baños", "Oasis", "Parqueos", "Entradas"],
      selectedPlace: null,
      zoom: 1,
      loading: true,
      apiMessage: ""
    };
  },
  computed: {
    filteredPlaces() {
      const term = this.search.trim().toLocaleLowerCase("es");
      return this.places.filter(place => {
        const matchesCategory = this.activeCategory === "Todos" ||
          place.categoria === this.activeCategory ||
          (this.activeCategory === "Edificios" && ["edificio", "Aulas", "Oficinas"].includes(place.categoriaSlug) && place.categoria === "Edificios");
        const matchesSearch = !term || `${place.nombre} ${place.categoria} ${place.descripcion} ${(place.niveles || []).flatMap(n => n.servicios || []).join(" ")}`.toLocaleLowerCase("es").includes(term);
        return matchesCategory && matchesSearch;
      });
    }
  },
  methods: {
    closePlace() { this.selectedPlace = null; },
    selectPlace(place) {
      this.selectedPlace = place;
      this.highlightedId = place.id;
      this.$nextTick(() => this.$refs.placeDialog?.focus());
    },
    async loadPlaces() {
      // AJAX moderno: fetch solicita los datos a la API REST simulada.
      // La página consume la API; JSON Server utiliza data/edificios.json como base de datos.
      try {
        const response = await fetch("http://localhost:3000/edificios");
        if (!response.ok) throw new Error("Respuesta HTTP " + response.status);
        this.places = await response.json();
        this.apiMessage = "Datos recibidos desde la API REST local (JSON Server).";
      } catch (error) {
        this.places = [];
        this.apiMessage = "No se pudo conectar con la API. Enciende JSON Server con «npm run api» y vuelve a cargar la página.";
      } finally {
        this.loading = false;
        // La ficha solo se abre al seleccionar un lugar, nunca automáticamente.
      }
    }
  },
  mounted() {
    this.loadPlaces();
  }
}).mount("#app");
