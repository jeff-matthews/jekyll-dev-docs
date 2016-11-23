<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">

      <p>An <span class="code-green">invalid_data_encryption</span> error is returned if an API is invoked that contains encrypted content but decryption could not be performed by the Gateway.</p>

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
              "code": "invalid_data_encryption",
              "level": "error",
              "message": "The value could not be decrypted",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
