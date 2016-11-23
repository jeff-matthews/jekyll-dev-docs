<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>An administrative unit that owns and manages [Merchants](#merchant).</p>

      <table>
        <colgroup>
          <col span="1" class="col_types_name"/>
          <col span="1" class="col_types_type"/>
          <col span="1" class="col_types_desc"/>
        </colgroup>
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
            <td>created</td><td><a href="#timestamp-section">Timestamp</a></td><td>Date/time the entity was created <em>(read-only)</em></td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>created_by</td><td>String</td><td>User or remote IP that created the entity <em>(read-only)</em></td>
          </tr>
          {% endif %}
          <tr>
            <td>modified</td><td><a href="#timestamp-section">Timestamp</a></td><td>Date/time the entity was last modified <em>(read-only)</em></td>
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
            <td>name</td><td>String</td><td>Name of the Tenant</td>
          </tr>
          <tr>
            <td>contact_name</td><td>String</td><td>Name of the contact at the Tenant</td>
          </tr>
          <tr>
            <td>contact_email</td><td>String</td><td>Email address used to contact the Tenant</td>
          </tr>
          <tr>
            <td>contact_phone</td><td>String</td><td>Phone number used to contact the Tenant, in E-164 format. Leading '+' is optional.</td>
          </tr>
          <tr>
            <td>address1</td><td>String</td><td>Mailing address of the Tenant</td>
          </tr>
          <tr>
            <td>address2</td><td>String</td><td>Additional address field <em>(optional)</em></td>
          </tr>
          <tr>
            <td>city</td><td>String</td><td>City in which the Tenant is located</td>
          </tr>
          <tr>
            <td>state</td><td>String</td><td>State or province. For US and Canada, this must be the 2-letter state or
            province code in which the Tenant is located.</td>
          </tr>
          <tr>
            <td>postal_code</td><td>String</td><td>Tenant zip or postal code, consisting of 3 to 9 alphanumeric characters,
            as well as spaces and dashes. The total length of the postal code cannot exceed 10 characters.</td>
          </tr>
          <tr>
            <td>country</td><td>String</td><td>2-letter ISO 3166 country code in which the Tenant is located</td>
          </tr>
          <tr>
            <td>auth_user</td><td>String</td><td>Username of the Tenant for API authentication</td>
          </tr>
          <tr>
            <td>status</td><td>String</td>
            <td>Status of the Tenant <em>(read-only)</em>. Enumeration of:
              <dl>
                <dt>ACTIVE</dt>
                <dd>The Tenant is currently active</dd>
                <dt>DELETED</dt>
                <dd>The Tenant has been marked deleted</dd>
              </dl>
            </td>
          </tr>
          <tr>
            <td>api_allowed_ip_address_ranges</td><td>String</td><td>Comma-delimited list of zero or more <a href="http://en.wikipedia.org/wiki/CIDR_notation">CIDR-notation</a>
              IP address ranges from which Tenant API requests are allowed. Requests made by authenticated Tenants from IPs outside the defined
              ranges are rejected. If no address ranges are defined, authenticated requests are accepted from any IP.</td>
          </tr>
          <tr>
            <td>transaction_allowed_countries</td><td>String</td><td>Comma-delimited list of zero or more 2-letter ISO 3166 country codes
              for which remote client IP addresses are accepted for transaction operations. The country is determined by geographic IP lookup.
              Transaction operations include Authorize, Void, Capture, Refund, and Credit. This list defines the default country restrictions
              for all Merchant accounts, unless overridden on the account. If no country codes are defined, transactions are accepted from all
              countries subject to the Gateway's global transaction policies.
            </td>
          </tr>
          <tr>
            <td>events_url</td><td>String</td><td>URL to which application Events are POSTed. Note that while no sensitive payment information
            is ever sent within event content, personally identifiable information such as customer names and addresses is contained within
            events. For this reason, event URLs should always use the HTTPS scheme. The length of the value cannot exceed 1024 characters.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
