<script lang="ts">
  import config from "../../config";
  import Grid from "gridjs-svelte";

  const columns = [
    {name: 'Titolo', sort: true},
    {name: 'Autore', sort: true},
    {name: 'Genere', sort: true},
    {
      name: 'Data aggiunta',
      formatter: cell => {
        return new Date(cell).toLocaleString('it-IT', {
          day: "2-digit",
          month: 'short',
          year: 'numeric',
          hour: "2-digit",
          minute: "2-digit"
        })
      }
    }
  ];
</script>

<div class="row">
  <div class="col-12">
    <div class="card shadow">
      <div class="card-header">
        Musica
      </div>

      <div class="card-body">

        <Grid {columns}
              sort
              search
              pagination={{ enabled: true, limit: 50 }}
              server={{
                url: config.urlMusica,
                then: data => data.data.map(item => {
                    return [item.canzone_titolo, item.canzone_autore, item.canzone_genere, item.canzone_data_aggiunta]
                })
              }}
        />

      </div>
    </div>
  </div>
</div>