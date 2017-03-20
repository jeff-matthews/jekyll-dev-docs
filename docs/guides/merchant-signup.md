---
layout: default
title: "White Label Sign Up"
permalink: /guides/merchant-signup.html
---

Engage with potential customers who aren't already AffiniPay merchants and help them apply for merchant accounts using our API. Use this process if you prefer keeping users on your site or within your application instead of redirecting them to AffiniPay's sign up page.

## Overview

The <span class="code-green">https://secure.affinipay.com/api/v1/merchant_applications</span> endpoint allows you to facilitate the new merchant application process from within your application.

{{site.data.notes.note.oauth-client-credentials}}

After gathering all necessary details and submitting the merchant application to AffiniPay, we'll review it and POST an event to a URL you specify to notify you when we've made a determination.

See the following diagram for a high-level description of the onboarding process:

<img class="center" width="100%" src="../images/merchantOnboardingProcess.svg">

You can use our Merchant Application API to sign up new AffiniPay merchants through your application. Here's what you'll be doing in this tutorial:

1. Configuring a webhook to receive an event.
2. Learning the parameters and format to use to build the <a href="../reference/api.html#merchant_application" target="&#95;blank">`merchant_application`</a> object.
3. Submitting a <a href="../reference/api.html#merchant_application" target="&#95;blank">`merchant_application`</a> object to AffiniPay.
4. Gaining authorization to manage transactions on behalf of a newly provisioned AffiniPay merchant account.
5. Notifying users when payments are active on their account.
6. Testing your new merchant onboarding integration.

## Configure Webhooks

As soon as AffiniPay makes a determination about a merchant application, we'll send an event to a URL you specify in your OAuth Partner Application to notify you whether the application was approved or declined. Refer to <a href="../reference/api.html#Webhooks" target="&#95;blank">Webhooks</a> for more information.

Event details include an <span class="code-green">authorization_code</span>, which you'll need to exchange for an <span class="code-green">access_token</span> before your application can access any merchant account details or manage transactions on a merchant's behalf.

## Build the Merchant Application Object

You must gather information from users through your application and build a <a href="../reference/api.html#merchant_application" target="&#95;blank">`merchant_application`</a> JSON object.

<span class="panel-note"><b>Note:</b> You should ask users to verify their information before submitting the merchant application. Business information that doesn't match IRS records can have serious consequences for the merchant.</span>

## Submit a Merchant Application

After building the <a href="../reference/api.html#merchant_application" target="&#95;blank">`merchant_application`</a> JSON object, <span class="api-operation">POST</span> it to the <span class="code-green">https://secure.affinipay.com/api/v1/merchant_applications</span> endpoint. Click <a href="../reference/api.html#CreateaNewApplication" target="&#95;blank">here</a> to see an example.

<span class="panel-tip"><b>Tip:</b> Use <a href="https://github.com/thomasjbradley/signature-pad" target="&#95;blank">this</a> jQuery plugin to capture an applicant's signature and submit it in the merchant application JSON object. The plugin generates the value for the <span class="code-green">signature</span> parameter in the required JSON format. Refer to the plugin <a href="https://github.com/thomasjbradley/signature-pad/blob/gh-pages/documentation.md" target="&#95;blank">documentation</a> for implementation instructions.</span>

## Gain Authorized Access to a New Merchant Account

After AffiniPay provisions a new merchant account for a user, you must:

 - Request an <span class="code-green">access_token</span> to access their account details.
 - Request {{site.data.variables.brand.gateway}} credentials so your application can manage transactions on the merchant's behalf.

Refer to [Web Server OAuth Authentication](../basics/authentication.html#web-server) for more information.

## Notify Users

Send an email to the new client letting them know payments have been activated for their account.

## Integration Testing

You can add a <span class="code-green">test</span> attribute to the merchant application JSON object to test your application. The <span class="code-green">test</span> attribute has two possible values:
<ul>
 <li> <span class="code-green">validate</span> – Upon submission, the AffiniPay system will validate the provided values and will return an <b>HTTP 422</b> code if invalid along with additional validation messages. If valid, an <b>HTTP 200</b> code will be returned along with a fake <span class="code-green">merchant_application: ID</span> in the response body. After a short delay, a <span class="code-green">merchant.provisioned</span> event will be fired with a fake <span class="code-green">authorization_code</span>.

<pre><code class="json">{
  "merchant_application": {
      "test": "validate",
      "reference":"",
      "plan":"your_app_plan_id",
      "first_name":"John",
      "last_name":"Doe",
      "email":"john.doe@example.com",
// … additional fields omitted …
  }
}
</code></pre></li>

 <li> <span class="code-green">fail</span> – Upon submission, the AffiniPay system will return an <b>HTTP 200</b> if validation is successful, but will fire a <span class="code-green">merchant_application.declined</span> event after a short delay. This can be used to test a successful submission but a failure to underwrite.

<pre><code class="json">{
 "merchant_application": {
     "test": "fail",
     "reference":"",
     "plan":"your_app_plan_id",
     "first_name":"John",
     "last_name":"Doe",
     "email":"john.doe@example.com",
// … additional fields omitted …
 }
}
</code></pre></li>
</ul>
The short delays mentioned previously are for testing purposes only. In live deployment scenarios, these delays will be many hours (or days) long as the merchant application goes through underwriting.

Since test mode doesn't actually create a merchant application, merchant, or user in the AffiniPay system, the "fake" <span class="code-green">authorization_code</span> cannot be exchanged for an <span class="code-green">access_token</span>.

<span class="panel-tip"><b>Tip:</b> You should use test mode until you're ready to process live merchant applications. Processing merchant applications may require human involvement to finalize an underwriting decision.</span>

<!-- Scrollspy -->
<scrollspy-toc>
<div class="col hide-on-small-only m3 12">
  <div class="toc-wrapper pinned col s6 offset-s6" style="top: 150px;">
  <ul class="section table-of-contents" style="margin-right: 10px;">
      <li><a href="#overview">Overview</a></li>
      <li><a href="#configure-webhooks">Configure Webhooks</a></li>
      <li><a href="#build-the-merchant-application-object">Build the Merchant Application Object</a></li>
      <li><a href="#submit-a-merchant-application">Submit a Merchant Application</a></li>
      <li><a href="#gain-authorized-access-to-a-new-merchant-account">Gain Authorized Access to a New Merchant Account</a></li>
      <li><a href="#notify-users">Notify Users</a></li>
      <li><a href="#integration-testing">Integration Testing</a></li>
  </ul>
  </div>
</div>
</scrollspy-toc>
