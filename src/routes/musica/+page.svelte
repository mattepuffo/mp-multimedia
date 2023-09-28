<script lang="ts">
    // https://gridjs.io/docs/integrations/svelte?ref=madewithsvelte.com
    import {DataHandler, Datatable, Th, type State} from '@vincjo/datatables/remote';
    import {reload} from "../../api";

    export let data: any[];

    const handler = new DataHandler(data, {rowsPerPage: 50});
    const rows = handler.getRows();
    handler.onChange((state: State) => reload(state));
</script>

<div class="row">
  <div class="col-12">
    <div class="card shadow">
      <div class="card-header">
        Musica
      </div>

      <div class="card-body">

        <Datatable {handler} search={false}>
          <table class="table table-striped table-bordered table-hover">

            <thead class="table-dark">
              <tr>
                <th>Titolo</th>
                <th>Autore</th>
                <th>Genere</th>
              </tr>
            </thead>

            <tbody>
              {#each $rows as row}
                <tr>
                  <td>{row.id}</td>
                  <td><b>{row.name}</b></td>
                  <td>{row.email}</td>
                </tr>
              {/each}
            </tbody>

          </table>
        </Datatable>

      </div>
    </div>
  </div>
</div>