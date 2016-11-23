<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The Gateway returns a <span class="code-green">card_declined_processing_error</span> error if the payment processor indicates a card has been declined due to a processing error.</p>
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
              "code": "card_declined_processing_error",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
