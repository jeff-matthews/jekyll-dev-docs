<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">

      <p>The Gateway returns a <span class="code-green">exceeds_authorized_amount</span> error code if a capture request is made specifying an amount greater than the amount that was originally authorized.</p>
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
              "code": "exceeds_authorized_amount",
              "level": "error",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
