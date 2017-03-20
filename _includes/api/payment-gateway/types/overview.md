<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>All request and response content in the {{site.data.variables.brand.gateway-api}} use JSON representations for serialization to and from the server. The following sections detail the properties, data types, and constraints of each of the types present in the API.</p>

      <ul>
        <li><b>Boolean</b> - Boolean values are represented using the JSON literal values <span class="code-green">true</span> and <span class="code-green">false</span></li>
        <li><b>Date:</b> - Date values (with no time component) are represented using the format <span class="code-green">yyyy-mm-dd</span></li>
        <li><b>Timestamp:</b> - All timestamps sent or received by the Gateway use the ISO-8601 format <span class="code-green">yyyy-MM-dd'T'HH:mm:ss.SSS'Z'</span>, including fractional milliseconds, relative to the UTC time zone. For example, the timestamp <span class="code-green">2016-08-21T15:32:21.702Z</span> represents an occurrence on August 21, 2016 at 3:32:21.702 PM UTC.</li>
      </ul>
    </div>
  </div>
</div>
