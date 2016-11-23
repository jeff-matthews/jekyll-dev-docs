<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>If the schedule provided for the update of an existing recurring charge would result
      in no further occurrences of scheduled payments, the Gateway returns a <span class="code-green">update_results_in_no_occurrences</span>
      error and rejects the request. In this case, the Merchant can cancel the recurring charge instead
      to prevent any further attempts to collect payments.</p>
      <dl class="dl-horizontal">
        <dt>Level</dt>
        <dd>error</dd>
        <dt>HTTP Status Code</dt>
        <dd>422</dd>
      </dl>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      ...
      "messages": [
          {
              "code": "update_results_in_no_occurrences",
              "level": "error",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
