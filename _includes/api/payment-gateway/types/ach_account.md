<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A merchant ACH account's parameters, used to interact with payment processors to move funds between the
      merchant's bank account and customer bank accounts.</p>
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
            <td>trust_account</td>
            <td>Boolean</td>
            <td>Whether or not this is a trust account. If unknown, the property is not returned <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>status</td><td>String</td>
            <td>Status of the bank account <em>(read-only)</em>. Enumeration of:
              <ul>
                <li><b>ACTIVE</b> - The bank account is currently active</li>
                <li><b>INACTIVE</b> - The bank account is no longer active</li>
                <li><b>DELETED</b> - The bank account has been marked deleted</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>name</td><td>String</td><td>Descriptive name for the account, for display purposes only</td>
          </tr>
          <tr>
            <td>primary</td>
            <td>Boolean</td><td>Whether this account is the
              Merchant's primary ACH account. Exactly one ACH account must always be marked as primary.
              The primary account is used for bank transactions that do not specify an account ID.
            </td>
          </tr>
          <tr>
            <td>routing_number</td><td>String</td><td>9-digit routing number of the merchant's bank
              {% if user == 'merchant' %}
              <em>(read-only)</em>
              {% endif %}
            </td>
          </tr>
          <tr>
            <td>account_number</td><td>String</td><td>Merchant's bank account number. The value may be 4-17 digits, with no punctuation or other characters.
              {% if user == 'merchant' %}
              <em>(Read-only)</em>
              {% endif %}
            </td>
          </tr>
          <tr>
            <td>account_type</td><td>String</td>
            <td>The type of the merchant bank account specified, either checking or savings
              {% if user == 'merchant' %}
              <em>(read-only)</em>{% endif %}. Enumeration of:
              <ul>
                <li>CHECKING</li>
                <li>SAVINGS</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>bank_name</td><td>String</td><td>Name of the bank associated with the given routing number. The Gateway will attempt to populate this value automatically based on the routing number provided. <em>(Read-only)</em></td>
          </tr>
          <tr>
            <td>required_payment_fields</td><td>String</td><td>Comma-delimited list of zero or more <a href="#bank" style="font-family:monospace">bank</a> properties on an
              ACH transaction that are required to be present. The following property names of <a href="#bank" style="font-family:monospace">bank</a> may be included in the list
              contents:
              <ul>
                <li>name</li>
                <li>address1</li>
                <li>city</li>
                <li>state</li>
                <li>postal_code</li>
                <li>country</li>
                <li>email</li>
                <li>phone</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>transaction_allowed_countries</td><td>String</td><td>Comma-delimited list of zero or more 2-letter ISO 3166 country codes for which remote client IP addresses are accepted for ACH transaction operations on this account. The country is determined by geographic IP lookup. Transaction operations include Charge, Void, Capture, and Refund . If no countries are defined, the Merchant's Tenant may define a default list of countries. (read-only)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
