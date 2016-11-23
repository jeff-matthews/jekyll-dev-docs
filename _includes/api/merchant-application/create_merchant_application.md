<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p><span class="api-operation">POST</span> <span class="code-green">/user/merchant_applications</span></p>

      <p>Create a new <a href="#merchantapplication"><span style="font-family: courier;">merchant_application</span></a> object and submit it to AffiniPay for review and approval.</p>
    </div>  
  </div>

<blockquote>Example request</blockquote>
<pre><code>{
  "merchant_application": {
      "test": "validate",
      "plan": "partner_specific_plan_id",
      "first_name": "Dave",
      "last_name": "Bowman",
      "email": "dave@techwritersarecool.com",
      "business_name": "Tech Writers Are Cool",
      "structure": "SO",
      "business_address1": "123 Main St",
      "business_city": "Austin",
      "business_zip_code": "78780",
      "business_phone": "5122232342",
      "industry_code": "9311",
      "federal_tax_id": "123456789",
      "years_in_business": "5",
      "business_state": "TX",
      "goods_and_services": "Goods and services Description",
      "owner_email": "owner@apimerchant.com",
      "owner_first_name": "Owner",
      "owner_last_name": "APIMerchant",
      "owner_title": "Owner",
      "owner_date_of_birth": "1989-03-14",
      "owner_address1": "1050 Spicewood Springs",
      "owner_city": "Austin",
      "owner_state": "TX",
      "owner_zip_code": "78792",
      "owner_years_in_residence": "2",
      "owner_phone_number": "5123212356",
      "owner_social_security_number": "232835746",
      "owner_drivers_license_number": "284729257",
      "owner_drivers_license_state": "TX",
      "owner_drivers_license_expiration": "2020-03-30",
      "operating_account_name": "Test Account",
      "operating_account_routing_number": "000000013",
      "operating_account_bank_name": "Test Bank",
      "operating_account_number": "1000000001",
      "signed_by": "Owner",
      "signature": "[{\"lx\":97,\"ly\":162,\"mx\":97,\"my\":161},{\"lx\":99,\"ly\":157,\"mx\":97,\"my\":162},{\"lx\":105,\"ly\":149,\"mx\":99,\"my\":157},{\"lx\":114,\"ly\":139,\"mx\":105,\"my\":149},{\"lx\":131,\"ly\":121,\"mx\":114,\"my\":139},{\"lx\":154,\"ly\":97,\"mx\":131,\"my\":121},{\"lx\":182,\"ly\":72,\"mx\":154,\"my\":97},{\"lx\":199,\"ly\":56,\"mx\":182,\"my\":72},{\"lx\":208,\"ly\":51,\"mx\":199,\"my\":56},{\"lx\":211,\"ly\":50,\"mx\":208,\"my\":51},{\"lx\":213,\"ly\":52,\"mx\":211,\"my\":50},{\"lx\":217,\"ly\":62,\"mx\":213,\"my\":52},{\"lx\":224,\"ly\":79,\"mx\":217,\"my\":62},{\"lx\":233,\"ly\":96,\"mx\":224,\"my\":79},{\"lx\":248,\"ly\":119,\"mx\":233,\"my\":96},{\"lx\":260,\"ly\":134,\"mx\":248,\"my\":119},{\"lx\":279,\"ly\":148,\"mx\":260,\"my\":134},{\"lx\":293,\"ly\":151,\"mx\":279,\"my\":148},{\"lx\":310,\"ly\":153,\"mx\":293,\"my\":151},{\"lx\":330,\"ly\":148,\"mx\":310,\"my\":153},{\"lx\":351,\"ly\":141,\"mx\":330,\"my\":148},{\"lx\":379,\"ly\":127,\"mx\":351,\"my\":141},{\"lx\":401,\"ly\":112,\"mx\":379,\"my\":127},{\"lx\":420,\"ly\":93,\"mx\":401,\"my\":112},{\"lx\":436,\"ly\":75,\"mx\":420,\"my\":93},{\"lx\":449,\"ly\":57,\"mx\":436,\"my\":75},{\"lx\":458,\"ly\":45,\"mx\":449,\"my\":57},{\"lx\":461,\"ly\":38,\"mx\":458,\"my\":45},{\"lx\":462,\"ly\":35,\"mx\":461,\"my\":38},{\"lx\":460,\"ly\":35,\"mx\":462,\"my\":35},{\"lx\":449,\"ly\":38,\"mx\":460,\"my\":35},{\"lx\":419,\"ly\":53,\"mx\":449,\"my\":38},{\"lx\":392,\"ly\":69,\"mx\":419,\"my\":53},{\"lx\":357,\"ly\":96,\"mx\":392,\"my\":69},{\"lx\":334,\"ly\":117,\"mx\":357,\"my\":96},{\"lx\":298,\"ly\":142,\"mx\":334,\"my\":117},{\"lx\":264,\"ly\":162,\"mx\":298,\"my\":142},{\"lx\":234,\"ly\":173,\"mx\":264,\"my\":162},{\"lx\":208,\"ly\":177,\"mx\":234,\"my\":173},{\"lx\":193,\"ly\":178,\"mx\":208,\"my\":177},{\"lx\":178,\"ly\":178,\"mx\":193,\"my\":178},{\"lx\":165,\"ly\":176,\"mx\":178,\"my\":178},{\"lx\":151,\"ly\":175,\"mx\":165,\"my\":176},{\"lx\":140,\"ly\":173,\"mx\":151,\"my\":175},{\"lx\":133,\"ly\":172,\"mx\":140,\"my\":173},{\"lx\":130,\"ly\":171,\"mx\":133,\"my\":172},{\"lx\":128,\"ly\":170,\"mx\":130,\"my\":171},{\"lx\":126,\"ly\":166,\"mx\":128,\"my\":170},{\"lx\":125,\"ly\":162,\"mx\":126,\"my\":166},{\"lx\":122,\"ly\":152,\"mx\":125,\"my\":162},{\"lx\":119,\"ly\":143,\"mx\":122,\"my\":152},{\"lx\":116,\"ly\":127,\"mx\":119,\"my\":143},{\"lx\":115,\"ly\":115,\"mx\":116,\"my\":127},{\"lx\":113,\"ly\":99,\"mx\":115,\"my\":115},{\"lx\":113,\"ly\":87,\"mx\":113,\"my\":99},{\"lx\":112,\"ly\":81,\"mx\":113,\"my\":87},{\"lx\":113,\"ly\":78,\"mx\":112,\"my\":81},{\"lx\":114,\"ly\":78,\"mx\":113,\"my\":78},{\"lx\":117,\"ly\":78,\"mx\":114,\"my\":78},{\"lx\":128,\"ly\":82,\"mx\":117,\"my\":78},{\"lx\":151,\"ly\":95,\"mx\":128,\"my\":82},{\"lx\":174,\"ly\":107,\"mx\":151,\"my\":95},{\"lx\":211,\"ly\":121,\"mx\":174,\"my\":107},{\"lx\":238,\"ly\":130,\"mx\":211,\"my\":121},{\"lx\":271,\"ly\":136,\"mx\":238,\"my\":130},{\"lx\":295,\"ly\":139,\"mx\":271,\"my\":136},{\"lx\":333,\"ly\":143,\"mx\":295,\"my\":139},{\"lx\":371,\"ly\":146,\"mx\":333,\"my\":143},{\"lx\":398,\"ly\":147,\"mx\":371,\"my\":146},{\"lx\":420,\"ly\":146,\"mx\":398,\"my\":147},{\"lx\":434,\"ly\":142,\"mx\":420,\"my\":146},{\"lx\":451,\"ly\":135,\"mx\":434,\"my\":142},{\"lx\":463,\"ly\":128,\"mx\":451,\"my\":135},{\"lx\":472,\"ly\":123,\"mx\":463,\"my\":128},{\"lx\":475,\"ly\":120,\"mx\":472,\"my\":123},{\"lx\":476,\"ly\":118,\"mx\":475,\"my\":120},{\"lx\":476,\"ly\":116,\"mx\":476,\"my\":118},{\"lx\":477,\"ly\":116,\"mx\":476,\"my\":116}]",
  "reference": "1hhta8u1"
  }
}</code></pre>

<blockquote>Example response</blockquote>
<pre><code>{
    "merchant_application": {
        "id": "12234"
    }
}</code></pre>
</div>