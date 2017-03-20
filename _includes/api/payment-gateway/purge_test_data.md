<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/v1/merchant/purge-test-data</span></p>

      <p>Testing your integration via our API can result in a lot of data being generated associated with your account: payment methods, transactions, recurring charges, etc. This data can sometimes make it more difficult to verify that your integration is working as expected. Using the <span class="code-green">/v1/merchant/purge-test-data</span> endpoint, you can discard all of your test data and return to a clean slate.</p>

      <p><span class="panel-note"><b>Note:</b> Live-mode data is never modified by this endpoint.</span></p>
    </div>
  </div>
  <blockquote>Example request</blockquote>
  <pre id="delete-test-data"><code class="json">curl -X POST -H "Content-Type:application/json" --user secret_key: https://api.chargeio.com/v1/merchant/purge-test-data</code></pre>

  <blockquote><button id="btn" class="btn copy" data-clipboard-target="#delete-test-data" onclick="Materialize.toast('Copied!', 2000)">Copy</button></blockquote>

  <blockquote>Example response</blockquote>
  <pre><code class="html">Returns an HTTP 204 No Content status code and an empty response body when successful.</code></pre>
</div>
