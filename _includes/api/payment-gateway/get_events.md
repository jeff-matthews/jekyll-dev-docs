<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">/v1/events</span></p>

      <p>The <a href="#event" style="font-family:monospace">events</a> associated with the authenticated Merchant
      are returned via a GET request to <span class="code-green">/v1/events</span>.</p>

      <p>The API supports pagination over the result set by allowing the client to specify the number of results per
      logical "page" and the page to view. By default the Events are returned in reverse chronological order, such
      that the most recent Events appear first. However, if the <span class="code-green">start_date</span> parameter is specified, only events occurring after the given timestamp are returned, and the results are returned in chronological order. The of the in-order <span class="code-green">start_date</span>-based retrieval is intended to simplify synchronization of Gateway state with external systems.</p>

      <p>The following URL parameters are supported:</p>

      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>page</td>
            <td>The page number to view, starting from 1 <em>(optional, defaults to 1)</em></td>
          </tr>
          <tr>
            <td>page_size</td>
            <td>The number of results to return per logical page <em>(optional, defaults to 20)</em></td>
          </tr>
          <tr>
            <td>start_date</td>
            <td>Only events created after the specified date/time are returned. The timestamp must be in
                the format <span class="code-green">yyyy-MM-dd'T'HH:mm:ss.SSS'Z'</span>. All events are returned by default.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <blockquote>Retrieve the 2 most recent events</blockquote>

  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/events?page=1&amp;page_size=2</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "page": 1,
      "page_size": 2,
      "total_entries": 736,
      "results": [
          {
              "id": "LhBgkp4oScmr3wEeyHKzZw",
              "created": "2013-10-25T17:46:33.792Z",
              "type": "transaction.authorized",
              "data": {
                  "id": "AfLZQYR2RLGRqBxDo4IKIQ",
                  "created": "2013-10-25T17:46:33.786Z",
                  "modified": "2013-10-25T17:46:33.786Z",
                  "account_id": "8IO47jzCEeOfvhLxg70sog",
                  "status": "AUTHORIZED",
                  "amount": 100,
                  "currency": "USD",
                  "auto_capture": true,
                  "amount_refunded": 0,
                  "authorization_code": "U2QF6A",
                  "type": "CHARGE",
                  "method": {
                      "name": "Some Customer",
                      "address1": "123 Main St",
                      "postal_code": "78730",
                      "type": "card",
                      "number": "************4242",
                      "fingerprint": "GunPelYVthifNV63LEw1",
                      "card_type": "VISA",
                      "exp_month": 10,
                      "exp_year": 2020,
                      "cvv": "&#42;&#42;&#42;"
                  }
              }
          }, {
              "id": "L6vN5PwhRDG9SDKxDwghJQ",
              "created": "2013-10-25T17:46:33.781Z",
              "type": "transaction.created",
              "data": {
                  "id": "AfLZQYR2RLGRqBxDo4IKIQ",
                  "created": "2013-10-25T17:46:33.778Z",
                  "modified": "2013-10-25T17:46:33.778Z",
                  "account_id": "8IO47jzCEeOfvhLxg70sog",
                  "status": "PENDING",
                  "amount": 100,
                  "currency": "USD",
                  "auto_capture": true,
                  "amount_refunded": 0,
                  "authorization_code": "U2QF6A",
                  "type": "CHARGE",
                  "method": {
                      "name": "Some Customer",
                      "address1": "123 Main St",
                      "postal_code": "78730",
                      "type": "card",
                      "number": "************4242",
                      "fingerprint": "GunPelYVthifNV63LEw1",
                      "card_type": "VISA",
                      "exp_month": 10,
                      "exp_year": 2020,
                      "cvv": "&#42;&#42;&#42;"
                  }
              }
          }
      ]
  }</code>
  </pre>


  <blockquote>Retrieve the next 5 Events starting from Oct 1, 2013 at 14:33:29.105 UTC</blockquote>
  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/events?page=1&amp;page_size=5&amp;start_date=2013-10-01T14:33:29.105Z</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "page": 1,
      "page_size": 5,
      "total_entries": 136,
      "results": [
          {
              "id": "RsRwETpFSJ2L3lyuPaFO0Q",
              "type": "transaction.created",
              "created": "2013-10-25T18:08:22.199Z",
              "data": {
                  "id": "z2jUj9JyRNG_nIQZr9L_CA",
                  "created": "2013-10-25T18:08:22.148Z",
                  "modified": "2013-10-25T18:08:22.148Z",
                  "account_id": "TU0BOD2gEeOfvhLxg70sog",
                  "status": "PENDING",
                  "amount": 1256,
                  "currency": "USD",
                  "auto_capture": false,
                  "reference": "auth ref 1256",
                  "amount_refunded": 0,
                  "authorization_code": "ZXSKRB",
                  "type": "CHARGE",
                  "method": {
                      "name": "Some Customer",
                      "address1": "123 Main St",
                      "postal_code": "78730",
                      "type": "card",
                      "number": "************4242",
                      "fingerprint": "GunPelYVthifNV63LEw1",
                      "card_type": "VISA",
                      "exp_month": 10,
                      "exp_year": 2020,
                      "cvv": "&#42;&#42;&#42;"
                  }
              }
          }, {
              "id": "h00xvpjLS6usI3_Uv1TMlw",
              "created": "2013-10-25T18:08:22.293Z",
              "type": "transaction.authorized",
              ...
          }, {
              "id": "WjqzlbTwSHqB0xYS1BznXw",
              "created": "2013-10-25T18:08:22.436Z",
              "type": "transaction.created",
              ...
          }, {
              "id": "3mLZet76SrOMg0Gs3QsTbA",
              "created": "2013-10-25T18:08:22.473Z",
              "type": "transaction.authorized",
              ...
          }, {
              "id": "0QkrSnlaRW2F6GdiUd8w0Q",
              "created": "2013-10-25T18:08:22.567Z",
              "type": "transaction.created",
              ...
          }
      ]
  }</code>
  </pre>
</div>
