<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The Gateway communicates information about the outcome of processing a request
      using the <span class="code-green">messages</span> key in the returned JSON response. The <span class="code-green">messages</span> value is
      an array of JSON entities, each containing a single message.</p>

      <p>For example, a charge request may return failure information related to an invalid card number or missing required data.</p>

      <p>Each message contains a <span class="code-green">code</span> describing the specific problem. All of the codes are listed
      in the following sections. Each message also contains a <span class="code-green">level</span> describing the severity of
      the message. Levels include:</p>

      <ul>
        <li><b>info</b> - Informational, does not impact the outcome of processing the request.</li>
        <li><b>error</b> - A failure occurred while processing the request, preventing it from completing successfully.</li>
      </ul>

      <p>The <span class="code-green">facility</span> attribute specifies the Gateway subsystem from which the error originated. Facilities include:</p>

      <ul>
        <li><b>gateway</b> - The default facility, indicating no specific subsystem within the Gateway.</li>
        <li><b>payment_processor</b> - The backend payment processing network.</li>
      </ul>

      <p>An optional <span class="code-green">message</span> may be returned in the message. This value provides a text description
      intended for human consumption.</p>

      <p>Certain error codes include additional context data within the message. These additions are described
      in the documentation for the corresponding error code.</p>
    </div>
  </div>

  <blockquote>Failure due to invalid card number</blockquote>

  <pre><code class="json">{
      "messages": [
          {
              "code": "card_number_invalid",
              "level": "error",
              "message": "Card number is invalid",
              "facility": "gateway"
          }
      ],
      ...
  }</code>
  </pre>

  <blockquote>Failure due to missing required data:</blockquote>

  <pre><code class="json">{
      "messages": [
          {
              "context": "method.name",
              "code": "invalid_data",
              "sub_code": "not_blank",
              "level": "error",
              "message": "Name cannot be blank",
              "facility": "gateway"
          }, {
              "context": "method.address1",
              "code": "invalid_data",
              "sub_code": "not_blank",
              "level": "error",
              "message": "Street number cannot be blank",
              "facility": "gateway"
          }, {
              "context": "method.number",
              "code": "invalid_data",
              "sub_code": "invalid_length",
              "level": "error",
              "message": "Card number length is invalid",
              "facility": "gateway"
          }
      ],
      ...
  }</code>
  </pre>
</div>
