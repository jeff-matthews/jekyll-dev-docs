<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">DELETE</span> <span class="code-green">/v1/recurring/charges/{id}</span></p>

      <p>A Merchant may delete a recurring charge by sending a DELETE to <span class="code-green">/v1/recurring/charges/{id}</span>, substituting the ID of the
      recurring charge for <span class="code-green">id</span>. Once deleted no further attempts are made to collect payments for the recurring charge and
      the recurring charge no longer appears when <a href="#list-recurring-charges">listing</a> recurring charges for the
      Merchant.</p>
    </div>
  </div>

  <blockquote>Example request</blockquote>
  <pre id="del-recur"><code class="json">curl -X DELETE --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/recurring/charges/pmx4nID6QtSNvB4lljqA0A</code></pre>
  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#del-recur" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>


  <blockquote>Example response</blockquote>
  <pre><code class="json">{
      "id": "pmx4nID6QtSNvB4lljqA0A",
      "status": "DELETED",
      "account_id": "wKgFeDz5HF-BPPl08dcADQ",
      ...
  }</code>
  </pre>
</div>
