<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>If a payment processor reports a failure to process a request on behalf of the Gateway,
      a <span class="code-green">card_processing_error</span> error is returned to the caller. Unlike failures to
      communicate with the processor, retrying the operation may not resolve the issue. The ID
      of the failed transaction is returned in the <span class="code-green">entity_id</span> property.</p>
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
              "code": "card_processing_error",
              "level": "error",
              "facility": "payment_processor",
              "entity_id": "jCEP6Mn3Q2Cg4nS3qqqDuw"
          }
      ]
  }</code>
  </pre>
</div>
