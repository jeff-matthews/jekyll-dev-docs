<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The Gateway returns <span class="code-green">invalid_data</span> if the server is not able to parse the JSON request,
      the request is missing required keys, or the values of keys is invalid. If the failure is due to a specified key in the request, the message will indicate the problematic field in the <span class="code-green">context</span> key. Nested properties are indicated using a '.'.</p>

      <p>For example, the JSON request for a charge contains a "card" key with a nested "name". If the name is
      problematic, the <span class="code-green">context</span> will contain <span class="code-green">card.name</span>.</p>

      <p>A description of the field's problem is provided in the <span class="code-green">sub_code</span> key. Values for the
      <span class="code-green">sub_code</span> include:</p>

      <ul>
        <li><b>number_out_of_range</b> - The value given is not within the required numeric range of the field.</li>
        <li><b>invalid_length</b> - The length of the value is outside the accepted range.</li>
        <li><b>exceeds_maximum_value</b> - The value exceeds the maximum allowed.</li>
        <li><b>below_minimum_value</b> - The value is less than the minimum allowed.</li>
        <li><b>not_blank</b> - An empty/blank value is not allowed.</li>
        <li><b>not_null</b> - A null value is not allowed.</li>
        <li><b>invalid</b> - The value of the field is invalid, but no specific reason is available.</li>
      </ul>
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
              "context": "card.name",
              "code": "invalid_data",
              "sub_code": "not_blank",
              "level": "error",
              "message": "may not be empty",
              "facility": "gateway"
          }, {
              "context": "`card`.postal_code",
              "code": "invalid_data",
              "sub_code": "not_blank",
              "level": "error",
              "message": "may not be empty",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
