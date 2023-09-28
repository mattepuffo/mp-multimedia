<script lang="ts">
    import {onMount} from "svelte";
    import config from "../config";

    // let libri: any[] = [];

    let cntMusica = 0;
    let cntFilms = 0;

    onMount(async () => {
        const urlMusica = config.urlMusica;
        const respMusica = await fetch(urlMusica);
        const dataMusica = await respMusica.json();
        cntMusica = dataMusica.data.length;

        const urlFilms = config.urlFilms;
        const respFilms = await fetch(urlFilms);
        const dataFilms = await respFilms.json();
        cntFilms = dataFilms.data.length;
    });
</script>

<div class="row">

  <div class="col-12 col-md-6 mb-2">
    <div class="card shadow">
      <div class="card-header">
        Musica
      </div>
      <div class="card-body">
        <h5 class="card-title mb-3">Totale canzoni: {cntMusica}</h5>
        <a href="/musica" class="btn btn-warning">Visualizza</a>
      </div>
    </div>
  </div>

  <div class="col-12 col-md-6 mb-2">
    <div class="card shadow">
      <div class="card-header">
        Films
      </div>
      <div class="card-body">
        <h5 class="card-title mb-3">Totale films: {cntFilms}</h5>
        <a href="/films" class="btn btn-info">Visualizza</a>
      </div>
    </div>
  </div>

</div>