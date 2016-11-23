<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>If neither card details nor a valid payment token are provided on a charge
      or credit request, the Gateway returns a <span class="code-green">no_card_details_or_token_present</span>
      error and rejects the request.</p>
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
              "code": "no_card_details_or_token_present",
              "level": "error",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
