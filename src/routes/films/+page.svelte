<script lang="ts">
    import config from "../../config";
    import Grid from "gridjs-svelte";

    const columns = [
        {name: 'Titolo', sort: true},
        {name: 'Fromat', sort: true},
        {name: 'Codec', sort: true},
        {name: 'Size', sort: true},
        {name: 'Width', sort: true},
        {name: 'Height', sort: true},
        {name: 'Durata', sort: true},
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
        Films
      </div>

      <div class="card-body">

        <Grid {columns}
              sort
              search
              pagination={{ enabled: true, limit: 50 }}
              server={{
                url: config.urlFilms,
                then: data => data.data.map(item => {
                    return [
                        item.video_titolo,
                        item.video_format,
                        item.video_codec,
                        item.video_size,
                        item.video_width,
                        item.video_height,
                        item.video_duration,
                        item.video_data_aggiunta
                    ]
                })
              }}
        />

      </div>
    </div>
  </div>
</div>