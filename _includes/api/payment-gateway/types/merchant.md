<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A business which processes payments using associated merchant and ACH accounts.</p>

      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td><td>String</td><td>The ID of the entity <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>created</td><td>Timestamp</td><td>Date/time the entity was created <em>(read-only)</em></td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>created_by</td><td>String</td><td>User or remote IP that created the entity <em>(read-only)</em></td>
          </tr>
          {% endif %}
          <tr>
            <td>modified</td><td>Timestamp</td><td>Date/time the entity was last modified <em>(read-only)</em></td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>modified_by</td><td>String</td><td>User or remote IP that last modified the entity <em>(read-only)</em></td>
          </tr>
          {% endif %}
          <tr>
            <td>messages</td><td>Array of Strings</td><td>Validation or warning messages associated with an operation requested on this entity <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>name</td><td>String</td><td>Name of the Merchant</td>
          </tr>
          <tr>
            <td>public_key</td><td>String</td><td>Public identity of the Merchant, used to initialize the <a href="../guides/payment-form-getting-started.html">JavaScript library</a> for payment form integration</td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>status</td><td>String</td>
            <td>Status of the merchant <em>(read-only)</em>. Enumeration of:
              <ul>
                <li><b>ACTIVE</b> - The merchant is currently active.</li>
                <li><b>SUSPENDED</b> - The merchant has been suspended by the tenant. The merchant cannot perform any transactions.</li>
                <li><b>INACTIVE</b> - The merchant is no longer active.</li>
                <li><b>DELETED</b> - The merchant has been marked deleted by the tenant.</li>
              </dl>
            </td>
          </tr>
          {% endif %}
          <tr>
            <td>contact_name</td><td>String</td><td>Name of the contact at the Merchant</td>
          </tr>
          <tr>
            <td>contact_email</td><td>String</td><td>Email address used to contact the Merchant</td>
          </tr>
          <tr>
            <td>contact_phone</td><td>String</td><td>Phone number used to contact the Merchant, in E-164 format. Leading '+' is optional.</td>
          </tr>
          <tr>
            <td>address1</td><td>String</td><td>Mailing address of the Merchant</td>
          </tr>
          <tr>
            <td>address2</td><td>String</td><td>Additional address field <em>(optional)</em></td>
          </tr>
          <tr>
            <td>city</td><td>String</td><td>City in which the Merchant is located</td>
          </tr>
          <tr>
            <td>state</td><td>String</td><td>State or province. For US and Canada, this must be the 2-letter state or
            province code in which the Merchant is located.</td>
          </tr>
          <tr>
            <td>postal_code</td><td>String</td><td>Merchant zip or postal code, consisting of 3 to 9 alphanumeric characters,
            as well as spaces and dashes. The total length of the postal code cannot exceed 10 characters.</td>
          </tr>
          <tr>
            <td>country</td><td>String</td><td>2-letter ISO 3166 country code in which the Merchant's business is located</td>
          </tr>
          <tr>
            <td>timezone</td><td>String</td><td>Time zone ID associated with the Merchant (e.g., "America/New_York") used for settlement</td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>live_pass</td>
            <td>String</td>
            <td>Password for API authentication for use with production ("live") accounts. The password is only
              returned in response to a creation or password reset request.</td>
          </tr>
          <tr>
            <td>test_pass</td>
            <td>String</td>
            <td>Password for API authentication for use with <code>TEST</code> accounts. The password is only
              returned in response to a creation or password reset request.</td>
          </tr>
          {% endif %}
          <tr>
            <td>merchant_accounts</td><td>Array of <a href="#merchantaccount" style="font-family:monospace">merchant_account</a></td><td>The merchant's credit Accounts</td>
          </tr>
          <tr>
            <td>ach_accounts</td><td>Array of <a href="#achaccount" style="font-family:monospace">ach_account</a></td><td>The merchant's bank accounts for ACH transactions</td>
          </tr>
          <tr>
            <td>api_allowed_ip_address_ranges</td><td>String</td><td>Comma-delimited list of zero or more <a href="http://en.wikipedia.org/wiki/CIDR_notation" target="&#95;blank">CIDR-notation</a>
              IP address ranges from which the Merchant's API requests are allowed. Requests made by the Merchant from IPs outside
              the defined ranges are rejected. If no address ranges are defined, authenticated requests are accepted from any IP.</td>
          </tr>
          <tr>
            <td>live_events_urls</td><td>String</td><td>Comma-delimited list of URLs to which merchant live-mode events are POSTed.
            Note that while no sensitive payment information is ever sent within event content, personally identifiable information
            such as customer names and addresses is contained within events. For this reason, event URLs should always use the HTTPS
            scheme. The length of the value cannot exceed 1024 characters.</td>
          </tr>
          <tr>
            <td>test_events_urls</td><td>String</td><td>Comma-delimited list of URLs to which merchant test-mode events are POSTed.
            Note that while no sensitive payment information is ever sent within event content, personally identifiable information
            such as customer names and addresses is contained within events. For this reason, event URLs should always use the HTTPS
            scheme. The length of the value cannot exceed 1024 characters.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
