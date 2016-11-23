<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">GET</span> <span class="code-green">/v1/transactions</span></p>

      <p>The transactions associated with the authenticated
      <a href="#merchant" style="font-family:monospace">merchant</a> are returned via a GET request to
      <span class="code-green">/v1/transactions</span>. Transactions may be returned for a specific account
      or from all the Merchant's accounts. The API supports pagination over the
      result set by allowing the client to specify the number of results per
      logical "page", the page to view, sort order and filtering. The following
      URL parameters are supported:</p>

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
            <td>q</td>
            <td>A search query string to be matched against transactions. The given text is matched against all
              fields of the transactions. For matching on specific fields, use the <span class="code-green">qf</span> parameter instead.
              <em>(Optional)</em>
            </td>
          </tr>
          <tr>
            <td>qf</td>
            <td>A search term to be matched. The value is composed of a name of a property to match, followed by
              a ':' character, followed by the text to match. For example, transactions involving a
              customer whose last name starts with "Targ" would be found using the URL:
              <span class="code-green">/v1/transactions?qf=name:Targ</span>. The parameter can be specified multiple times to create a
              more constrained search across multiple terms. For example, the previous search could be
              narrowed to those customers in the US state of Texas: <span class="code-green">/v1/transactions?qf=name:Targ&amp;qf=state:TX</span>.

              <p>Nested properties can be specified by separating the properties with a '.' character. For example,
              transactions using a bank payment method would be returned using the URL:
              <span class="code-green">/v1/transactions?qf=method.type:bank</span>. <em>(Optional)</em></p>
            </td>
          </tr>
          <tr>
            <td>start_date</td>
            <td>Only transactions created after the specified date/time are returned. The timestamp must be in
                the format <span class="code-green">yyyy-MM-dd'T'HH:mm:ss.SSS'Z'</span>. All transactions are returned by default.
            </td>
          </tr>
          <tr>
            <td>end_date</td>
            <td>Only transactions created before the specified date/time are returned. The timestamp must be in
                the format <span class="code-green">yyyy-MM-dd'T'HH:mm:ss.SSS'Z'</span>. All transactions are returned by default.
            </td>
          </tr>
          <tr>
            <td>account_id</td>
            <td>If specified, only transactions processed through the specified account are returned;
                if omitted, transactions are returned associated with all of the Merchant's accounts.
            </td>
          </tr>
          <tr>
            <td>order_by</td>
            <td>A comma-separated list of properties used to sort the results. By default, the results are
                sorted in ascending order by the property. Each property may optionally be preceded by a '-' or '+' character
                to specify descending or ascending sort order.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <blockquote>Retrieve the 5 most recent transactions:</blockquote>

  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/transactions?page=1&amp;page_size=5&amp;order_by=-created</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "page": 1,
      "page_size": 5,
      "total_entries": 82,
      "results": [
          {
              "id": "wKgFnjz8GamBPP0ViHAACQ",
              "type": "REFUND",
              "created": "2013-02-24T14:36:27.000-06:00",
              "account_id": "wKgFeDz5HF-BPPl08dcADQ",
              "status": "COMPLETED",
              "amount": 18,
              "currency": "USD",
              "charge_id" : "wKgFnjz8GamBPP0SBFoABw",
              "method": {
                  "type": "card",
                  "number": "************0057",
                  "fingerprint": "EEsXiql10dDbe1773r5d",
                  "card_type": "MASTERCARD",
                  "exp_month": 12,
                  "exp_year": 2017,
                  "name": "Sample Customer",
                  "address1": "123 Main St",
                  "postal_code": "78730"
              }
          }, {
              "id": "wKgFnjz8GamBPP0S54gACA",
              "type": {% if user == 'tenant' %}"CREDIT"{% else %}"CHARGE"{% endif %},
              "created": "2013-02-21T08:06:19.000-06:00",
              "account_id": "7eyWpvRpEeKcOfUBJK8FBw",
              "status": "COMPLETED",
              "amount": 2100,
              "currency": "USD",
              "method": {
                  "type": "bank",
                  "routing_number": "******013",
                  "account_number": "******0003",
                  "account_type": "SAVINGS",
                  "fingerprint": "4LPFVT7k2aQB3J70ZBGH",
                  "bank_name": "FIRST BANK OF TESTING",
                  "name": "Some Customer"
              }
          }, {
              "id": "wKgFnjz8GamBPP0SBFoABw",
              "type": "CHARGE",
              "created": "2013-02-21T08:04:41.000-06:00",
              "account_id": "wKgFeDz5HF-BPPl08dcADQ",
              "status": "COMPLETED",
              "amount": 95,
              "currency": "USD",
              "auto_capture": true,
              "amount_refunded": 18,
              "authorization_code": "LV1AFL",
              "method": {
                  "type": "card",
                  "number": "************4242",
                  "fingerprint": "CmsP3lYV4akuOz12pFa8",
                  "card_type": "VISA",
                  "exp_month": 10,
                  "exp_year": 2017,
                  "name": "Sample Customer",
                  "address1": "123 Main St",
                  "postal_code": "78730"
              }
          }, {
              "id": "wKgBZTynEtOBPKi_AjoABg",
              "type": "CHARGE",
              "created": "2013-02-17T23:05:55.000-06:00",
              ...
          }, {
              "id": "wKgBZTynEtOBPKhlyA0AAQ",
              "type": "CHARGE",
              "created": "2013-02-04T21:28:28.000-06:00",
              "account_id": "wKgeRDynFnyBPKdn4XsABA",
              "status": "COMPLETED",
              "amount": 100,
              "currency": "USD",
              "auto_capture": true,
              "amount_refunded": 0,
              "authorization_code": "UKNTTH",
              "method": {
                  "type": "card",
                  "number": "************4242",
                  "fingerprint": "CmsP3lYV4akuOz12pFa8",
                  "card_type": "VISA",
                  "exp_month": 10,
                  "exp_year": 2017,
                  "name": "Some Customer"
              }
          }
      ]
  }</code>
  </pre>


  <blockquote>Retrieve the 5 most recent Charges</blockquote>

  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/transactions?page=1&amp;page_size=5&amp;order_by=-created&amp;qf=type:CHARGE</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "page": 1,
      "page_size": 5,
      "total_entries": 82,
      "results": [
          {
              "id": "wKgFnjz8GamBPP0SBFoABw",
              "type": "CHARGE",
              "created": "2013-02-21T08:04:41.000-06:00",
              "account_id": "wKgFeDz5HF-BPPl08dcADQ",
              "status": "COMPLETED",
              "amount": 95,
              "currency": "USD",
              "auto_capture": true,
              "amount_refunded": 18,
              "authorization_code": "LV1AFL",
              "method": {
                  "type": "card",
                  "number": "************4242",
                  "fingerprint": "CmsP3lYV4akuOz12pFa8",
                  "card_type": "VISA",
                  "exp_month": 10,
                  "exp_year": 2017,
                  "name": "Sample Customer",
                  "address1": "123 Main St",
                  "postal_code": "78730"
              }
          }, {
              "id": "wKgBZTynEtOBPKi_AjoABg",
              "type": "CHARGE",
              "created": "2013-02-17T23:05:55.000-06:00",
              ...
          }, {
              "id": "wKgBZTynEtOBPKhlyA0AAQ",
              "type": "CHARGE",
              "created": "2013-02-04T21:28:28.000-06:00",
              ...
          }, {
              "id": "EcE2jKH3QeOBhOvnvAugpQ",
              "type": "CHARGE",
              "created": "2013-02-03T17:43:19.000-06:00",
              ...
          }, {
              "id": "lyh3fKDSTi-S4EbAqNdKCg",
              "type": "CHARGE",
              "created": "2013-02-03T17:29:01.000-06:00",
              ...
          }
      ]
  }</code>
  </pre>


  <blockquote>Retrieve the 5 most recent credit card refunds</blockquote>

  <pre><code>curl --user secret_key: {{site.data.variables.apiurl.gateway}}/v1/transactions?page=1&amp;page_size=5&amp;order_by=-created&amp;qf=type:REFUND&amp;qf=method.type:card</code>
  </pre>

  <blockquote>Example response</blockquote>
  <pre><code>{
      "page": 1,
      "page_size": 5,
      "total_entries": 82,
      "results": [
          {
              "id": "wKgFnjz8GamBPP0ViHAACQ",
              "type": "REFUND",
              "created": "2013-02-24T14:36:27.000-06:00",
              "account_id": "wKgFeDz5HF-BPPl08dcADQ",
              "status": "COMPLETED",
              "amount": 18,
              "currency": "USD",
              "charge_id" : "wKgFnjz8GamBPP0SBFoABw",
              "method": {
                  "type": "card",
                  "number": "************0057",
                  "fingerprint": "EEsXiql10dDbe1773r5d",
                  "card_type": "MASTERCARD",
                  "exp_month": 12,
                  "exp_year": 2017,
                  "name": "Sample Customer",
                  "address1": "123 Main St",
                  "postal_code": "78730"
              }
          }, {
              "id": "-adgFlH-TUSV3M4_sVXvKQ",
              "type": "REFUND",
              "created": "2013-02-01T08:55:19.000-06:00",
              ...,
              "method": {
                  "type": "card",
                  ...
              }
          }, {
              "id": "y4CfMEZERXuTeXEqMkUd2w",
              "type": "REFUND",
              "created": "2013-02-01T07:36:08.000-06:00",
              ...,
              "method": {
                  "type": "card",
                  ...
              }
          }, {
              "id": "DOPApiYlEeOfvhLxg70sog",
              "type": "REFUND",
              "created": "2013-01-30T18:04:44.000-06:00",
              ...,
              "method": {
                  "type": "card",
                  ...
              }
          }, {
              "id": "lbBObpbATdCj1lfX9fM6Aw",
              "type": "REFUND",
              "created": "2013-01-30T12:11:26.000-06:00",
              ...,
              "method": {
                  "type": "card",
                  ...
              }
          }
      ]
  }</code>
  </pre>
</div>
