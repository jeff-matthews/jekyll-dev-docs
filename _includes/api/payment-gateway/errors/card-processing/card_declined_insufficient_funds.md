<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Attempts to create a charge using a card with insufficient funds available results in a <span class="code-green">card_declined_insufficient_funds</span> being returned by the Gateway.</p>
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
              "code": "card_declined_insufficient_funds",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
