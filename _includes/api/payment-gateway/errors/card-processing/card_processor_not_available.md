<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>If the Gateway cannot communicate with the payment processor associated with a
      merchant account to carry out a request, a <span class="code-green">card_processor_not_available</span>
      error is returned. This is typically a transient problem and can be retried at a
      later time. The ID of the failed transaction is returned in the <span class="code-green">entity_id</span>
      property.</p>
      <dl class="dl-horizontal">
        <dt>Level</dt>
        <dd>error</dd>
        <dt>HTTP Status Code</dt>
        <dd>500</dd>
      </dl>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "messages": [
          {
              "code": "card_processor_not_available",
              "level": "error",
              "facility": "payment_processor",
              "entity_id": "jCEP6Mn3Q2Cg4nS3qqqDuw"
          }
      ]
  }</code>
  </pre>
</div>
