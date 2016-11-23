<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The Gateway returns a <span class="code-green">not_valid_for_transaction_status</span> error code if the
      current state of a transaction does not permit a given request to be performed. For
      example, a charge cannot be voided once it is in a <span class="code-green">COMPLETED</span> state.</p>
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
      "messages": [
          {
              "code": "not_valid_for_transaction_status",
              "level": "error",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
