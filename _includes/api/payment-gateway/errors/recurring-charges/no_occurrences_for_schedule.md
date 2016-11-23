<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>If the schedule provided for the creation of a new recurring charge would result
      in no occurrences of scheduled payments, the Gateway returns a <span class="code-green">no_occurrences_for_schedule</span>
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
      ...
      "messages": [
          {
              "code": "no_occurrences_for_schedule",
              "level": "error",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
