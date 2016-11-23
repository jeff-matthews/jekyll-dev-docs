<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/v1/merchant/purge-test-data</span></p>

      <p>Testing your integration via our API can result in a lot of data being generated associated with your account: payment methods, transactions, recurring charges, etc. This data can sometimes make it more difficult to verify that your integration is working as expected. Using the <span class="code-green">/v1/merchant/purge-test-data</span> endpoint, you can discard all of your test data and return to a clean slate.</p>

      <p><span class="panel-note"><b>Note:</b> Live-mode data is never modified by this endpoint.</span></p>
    </div>
  </div>
  <blockquote>Example request</blockquote>
  <pre><code>curl -X POST --user secret_key: -H "Content-Type: application/json" https://api.chargeio.com/v1/merchant/purge-test-data</code></pre>

  <blockquote>Example response</blockquote>
  <pre><code>An HTTP 204 response is returned to indicate
  that the test data has been successfully deleted.</code></pre>
</div>
