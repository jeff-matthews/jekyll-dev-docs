<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>An operation was performed on a REST entity that could not be completed due to the entity's current status.</p>

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
              "code": "unavailable_for_current_status",
              "level": "error",
              "message": "The current status of the entity does not allow the requested operation",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
