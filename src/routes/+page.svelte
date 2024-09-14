<script>
    export let data;
  </script>





  <div class="overflow-x-auto">
    <table class="table table-zebra">
      <!-- head -->
      <thead>
        {#each data.countries as country}
        <tr>
          <th><label>
            <input type="checkbox" class="checkbox" />
          </label></th>
          <th>{country.id}</th>
          <th>{country.name}</th>
        </tr>
        {/each}
      </thead>
      <tbody>
        <!-- row 1 -->
       
  
      </tbody>
    </table>
  </div>