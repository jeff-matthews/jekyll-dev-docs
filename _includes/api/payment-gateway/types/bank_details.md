<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Provides details for a customer and bank account for use in payment methods.</p>

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
          <tr>
            <td>modified</td><td>Timestamp</td><td>Date/time the entity was last modified <em>(read-only)</em></td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>modified_by</td><td>String</td><td>User or remote IP that last modified the entity <em>(read-only)</em></td>
          </tr>
          {% endif %}
          <tr>
            <td>type</td><td>String</td><td>The type of the payment method. For bank details, this is always <span class="code-green">bank</span>.</td>
          </tr>
          <tr>
            <td>token_id</td><td>String</td><td>ID of a one-time payment token from which to create the Bank <em>(optional)</em></td>
          </tr>
          <tr>
            <td>routing_number</td><td>String</td><td>9-digit routing number of the customer's bank</td>
          </tr>
          <tr>
            <td>account_number</td><td>String</td><td>Customer's bank account number. The value may be 4-17 digits, with no punctuation or other characters.</td>
          </tr>
          <tr>
            <td>account_type</td><td>String</td>
            <td>The type of the customer bank account specified, either checking or savings. Enumeration of:
              <ul>
                <li>CHECKING</li>
                <li>SAVINGS</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>bank_name</td><td>String</td><td>Name of the bank associated with the given routing number. The Gateway will attempt to populate this value
              automatically based on the routing number provided. <em>(Read-only)</em></td>
          </tr>
          <tr>
            <td>fingerprint</td><td>String</td><td>A unique fingerprint for the bank routing and account number used. This fingerprint
            may be used to find other transactions with the merchant that used the same customer bank account. <em>(Read-only)</em></td>
          </tr>
          <tr>
            <td>name</td><td>String</td><td>Customer name <em>(optional)</em></td>
          </tr>
          <tr>
            <td>address1</td><td>String</td><td>Customer address <em>(optional)</em></td>
          </tr>
          <tr>
            <td>address2</td><td>String</td><td>Additional address line <em>(optional)</em></td>
          </tr>
          <tr>
            <td>city</td><td>String</td><td>Customer city <em>(optional)</em></td>
          </tr>
          <tr>
            <td>state</td><td>String</td><td>Customer state. For US and Canada, this must be the 2-letter state or
            province code. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>postal_code</td><td>String</td><td>Customer zip or postal code, consisting of 3 to 9 alphanumeric characters,
            as well as spaces and dashes. The total length of the postal code cannot exceed 10 characters. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>country</td><td>String</td><td>Customer 2-letter ISO 3166 country code <em>(optional)</em></td>
          </tr>
          <tr>
            <td>email</td><td>String</td><td>Customer email address <em>(optional)</em></td>
          </tr>
          <tr>
            <td>phone</td><td>String</td><td>Customer phone number. No specific format is required, but the total length cannot exceed 22 characters. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>reference</td><td>String</td><td>A reference for the bank details, limited to 64 characters. This property
            is only used when creating a saved Bank instance, and can be used to retrieve the instance. For example, the
            reference can be set to a customer ID within the integrating merchant system, allowing all saved Banks for a
            given customer to be retrieved. <em>(Optional)</em></td>
          </tr>
          <tr>
            <td>description</td><td>String</td><td>Description for the bank details, limited to 64 characters. Only used
            when creating a saved Bank instance. <em>(Optional)</em></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
