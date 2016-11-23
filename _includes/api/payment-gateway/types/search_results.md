<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Results of a search performed on a resource type (such as charges).</p>

      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>page</td>
            <td>Number</td>
            <td>The logical "page" of the search results represented by this entity</td>
          </tr>
          <tr>
            <td>page_size</td>
            <td>Number</td>
            <td>The maximum number of results requested per page</td>
          </tr>
          <tr>
            <td>total_entries</td>
            <td>Number</td>
            <td>The total number of search results available</td>
          </tr>
          <tr>
            <td>results</td>
            <td>Array of resource types. The actual type varies with the API used.</td>
            <td>The page's search results</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
