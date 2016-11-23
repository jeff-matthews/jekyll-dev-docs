<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Provides all the details necessary to sign up a user for an AffiniPay merchant account.</p>

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
          <td>reference</td>
          <td>string</td>
          <td>This is the value your system generates to identify the merchant application. The <b>Event URL</b> you specify in your OAuth Partner Application plus this parameter equals the URL to which AffiniPay will send the event. (e.g., https://app.partner.com/&lt;reference_ID&gt;)
          </td>
        </tr>
        <tr>
          <td>plan</td>
          <td>string</td>
          <td>The identifier for your plan within the AffiniPay system. We will create this plan for you and provide you the correct ID to use.</td>
        </tr>
        <tr>
          <td>first_name</td>
          <td>string</td>
          <td>First name of the person associated with the merchant application.</td>
        </tr>
        <tr>
          <td>last_name</td>
          <td>string</td>
          <td>Last name of the person associated with the merchant application.</td>
        </tr>
        <tr>
          <td>email</td>
          <td>string</td>
          <td>Email address of the person associated with the merchant application.</td>
        </tr>
        <tr>
          <td>business_name</td>
          <td>string</td>
          <td>The business&#39;s legal name. This must match what is on record with the IRS.</td>
        </tr>
        <tr>
          <td>business_address1</td>
          <td>string</td>
          <td>The business&#39;s mailing address.</td>
        </tr>
        <tr>
          <td>business_address2</td>
          <td>string</td>
          <td>Additional address field.</td>
        </tr>
        <tr>
          <td>business_city</td>
          <td>string</td>
          <td>The city where the business is located.</td>
        </tr>
        <tr>
          <td>business_state</td>
          <td>string</td>
          <td>The state where the business is located.</td>
        </tr>
        <tr>
          <td>business_zip_code</td>
          <td>string</td>
          <td>The business&#39;s postal ZIP code.</td>
        </tr>
        <tr>
          <td>business_phone</td>
          <td>string</td>
          <td>The business&#39;s primary contact number.</td>
        </tr>
        <tr>
          <td>business_country</td>
          <td>string</td>
          <td>The country where the business is located.</td>
        </tr>
        <tr>
          <td>industry_code</td>
          <td>integer</td>
          <td>The business&#39;s Standard Industrial Classification (SIC) code (e.g., 8111 – Legal Services).</td>
        </tr>
        <tr>
          <td>goods_and_services</td>
          <td>string</td>
          <td>Send "Legal Fees".</td>
        </tr>
        <tr>
          <td>has_dba</td>
          <td>boolean</td>
          <td>Indicates whether a Doing Business As (DBA) name has been registered for the business; default is false.</td>
        </tr>
        <tr>
          <td>dba_name</td>
          <td>string</td>
          <td>The business&#39;s registered Doing Business As (DBA) name; optional if has_dba is false.</td>
        </tr>
        <tr>
          <td>dba_address1</td>
          <td>string</td>
          <td>The mailing address of the business with a registered Doing Business As (DBA) name; optional if has_dba is false.</td>
        </tr>
        <tr>
          <td>dba_address2</td>
          <td>string</td>
          <td>Additional address field; optional if has_dba is false.</td>
        </tr>
        <tr>
          <td>dba_city</td>
          <td>string</td>
          <td>The city where the business with a registered Doing Business As (DBA) name is located; optional if has_dba is false.</td>
        </tr>
        <tr>
          <td>dba_state</td>
          <td>string</td>
          <td>The state where the business with a registered Doing Business As (DBA) name is located (two-letter state code); optional if has_dba is false.</td>
        </tr>
        <tr>
          <td>dba_zip_code</td>
          <td>string</td>
          <td>The postal ZIP code of the business with a registered Doing Business As (DBA) name; optional if has_dba is false.</td>
        </tr>
        <tr>
          <td>dba_phone</td>
          <td>string</td>
          <td>The primary contact number of the business with a registered Doing Business As (DBA) name; optional if has_dba is false.</td>
        </tr>
        <tr>
          <td>structure</td>
          <td>string</td>
          <td>The business&#39;s structure. Accepts the following values:
            <ul>
              <li>SO – Sole Proprietor</li>
              <li>AE – Assoc / Estate / Trust</li>
              <li>G – Government</li>
              <li>CP – Private Corporation</li>
              <li>CU – Public Corporation</li>
              <li>P – Partnership</li>
              <li>TE – Tax Exempt</li>
              <li>SM – Single Member LLC</li>
              <li>MM – Multi Member LLC</li>
              <li>CA – Civic Association</li>
              <li>LP – Limited Partner</li>
              <li>PO – Political Organization</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>business_type</td>
          <td>string</td>
          <td>The type of industry in which the business engages. Accepts the following values:
            <ul>
              <li>R – Retail</li>
              <li>I – Internet</li>
              <li>M – Mail Order</li>
              <li>H – Lodging/Hotel</li>
              <li>F – Restaurant</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>federal_tax_id</td>
          <td>string</td>
          <td>The business&#39;s Federal Tax ID or the sole proprietor's Social Security Number (SSN). This must match the legal name on record with the IRS.</td>
        </tr>
        <tr>
          <td>number_of_locations</td>
          <td>string</td>
          <td>Number of locations where the business has operations.</td>
        </tr>
        <tr>
          <td>years_in_business</td>
          <td>string</td>
          <td>Number years the business has been in operation.</td>
        </tr>
        <tr>
          <td>business_website</td>
          <td>string</td>
          <td>The business&#39;s website.</td>
        </tr>
        <tr>
          <td>past_bankruptcy</td>
          <td>boolean</td>
          <td>Indicates whether the business has been through bankruptcy proceedings in the past.</td>
        </tr>
        <tr>
          <td>bankruptcy_date</td>
          <td>date</td>
          <td>The date the bankruptcy was finalized.</td>
        </tr>
        <tr>
          <td>owner_first_name</td>
          <td>string</td>
          <td>The business owner&#39;s legal first name.</td>
        </tr>
        <tr>
          <td>owner_last_name</td>
          <td>string</td>
          <td>The business owner&#39;s legal last name.</td>
        </tr>
        <tr>
          <td>owner_title</td>
          <td>string</td>
          <td>The business owner&#39;s title. Accepts the following values (no spaces):
            <ul>
              <li>President</li>
              <li>V.President</li>
              <li>Owner</li>
              <li>Partner</li>
              <li>Manager</li>
              <li>Treasurer</li>
              <li>Secretary</li>
              <li>Exec.Director</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>owner_date_of_birth</td>
          <td>date</td>
          <td>The business owner&#39;s date of birth.</td>
        </tr>
        <tr>
          <td>owner_social_security_number</td>
          <td>string</td>
          <td>The business owner&#39;s Social Security Number (SSN); used for credit check.</td>
        </tr>
        <tr>
          <td>owner_percentage_of_ownership</td>
          <td>integer</td>
          <td>The business owner&#39;s percentage of ownership.</td>
        </tr>
        <tr>
          <td>owner_address1</td>
          <td>string</td>
          <td>The business owner&#39;s mailing address.</td>
        </tr>
        <tr>
          <td>owner_address2</td>
          <td>string</td>
          <td>Additional address field.</td>
        </tr>
        <tr>
          <td>owner_city</td>
          <td>string</td>
          <td>The city where the business owner lives.</td>
        </tr>
        <tr>
          <td>owner_state</td>
          <td>string</td>
          <td>The state where the business owner lives.</td>
        </tr>
        <tr>
          <td>owner_zip_code</td>
          <td>string</td>
          <td>The business owner&#39;s postal ZIP code.</td>
        </tr>
        <tr>
          <td>owner_phone_number</td>
          <td>string</td>
          <td>The business owner&#39;s primary contact number.</td>
        </tr>
        <tr>
          <td>owner_email</td>
          <td>string</td>
          <td>The business owner&#39;s email address.</td>
        </tr>
        <tr>
          <td>owner_years_in_residence</td>
          <td>integer</td>
          <td>The number of years the business owner has resided at owner_address1.</td>
        </tr>
        <tr>
          <td>owner_drivers_license_number</td>
          <td>string</td>
          <td>The business owner&#39;s driver's license number; used to verify identity.</td>
        </tr>
        <tr>
          <td>owner_drivers_license_state</td>
          <td>string</td>
          <td>The state that issued the business owner&#39;s driver's license (two-letter state code).</td>
        </tr>
        <tr>
          <td>owner_drivers_license_expiration</td>
          <td>date</td>
          <td>The business owner&#39;s driver's license expiration date.</td>
        </tr>
        <tr>
          <td>owner_country_of_citizenship</td>
          <td>string</td>
          <td>The country where the business owner resides (e.g., USA).</td>
        </tr>
        <tr>
          <td>currently_accepting_cards</td>
          <td>boolean</td>
          <td>Indicates whether the business is currently accepting credit card payments through another processor.</td>
        </tr>
        <tr>
          <td>current_card_processor</td>
          <td>string</td>
          <td>The business&#39;s current credit card processor.</td>
        </tr>
        <tr>
          <td>wants_to_accept_amex</td>
          <td>boolean</td>
          <td>Indicates whether the business wants to accept American Express credit cards.</td>
        </tr>
        <tr>
          <td>current_amex_merchant_number</td>
          <td>string</td>
          <td>The business&#39;s current American Express merchant account number.</td>
        </tr>
        <tr>
          <td>operating_account_name</td>
          <td>string</td>
          <td>The name of the business&#39;s operating account.</td>
        </tr>
        <tr>
          <td>operating_account_routing_number</td>
          <td>string</td>
          <td>The routing number of the business&#39;s operating account.</td>
        </tr>
        <tr>
          <td>operating_account_bank_name</td>
          <td>string</td>
          <td>The name of the bank where the business holds an operating account.</td>
        </tr>
        <tr>
          <td>operating_account_number</td>
          <td>string</td>
          <td>The business&#39;s operating account number.</td>
        </tr>
        <tr>
          <td>trust_account_name</td>
          <td>string</td>
          <td>The name of the business&#39;s trust account.</td>
        </tr>
        <tr>
          <td>trust_account_routing_number</td>
          <td>string</td>
          <td>The routing number of the business&#39;s trust account; optional unless plan is a trust plan.</td>
        </tr>
        <tr>
          <td>trust_account_bank_name</td>
          <td>string</td>
          <td>The name of the bank where the business holds a trust account; optional unless plan is a trust plan.</td>
        </tr>
        <tr>
          <td>trust_account_number</td>
          <td>string</td>
          <td>The business&#39;s trust account number; optional unless plan is a trust plan.</td>
        </tr>
        <tr>
          <td>signed_by</td>
          <td>string</td>
          <td>The name of a business representative who's authorized to sign the merchant application; optional unless plan is a trust plan.</td>
        </tr>
        <tr>
          <td>signature</td>
          <td>string</td>
          <td>The signature of an authorized business representative. Uses default jQuery.signaturePad JSON format. Example: "[{"lx":5,"ly":51,"mx":5,"my":50}, {"lx":5,"ly":49,"mx":5,"my":51}]"</td>
        </tr>
      </tbody>
      </table>
    </div>
  </div>
</div>
