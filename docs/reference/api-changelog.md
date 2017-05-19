---
layout: default
title: "API Changelog"
permalink: /reference/api-changelog.html
---

Updates may appear in the AffiniPay APIs at any time. All documented updates are backward compatible and shouldn't cause breaking changes to your code.<!--unless noted otherwise --> Bookmark this page and check back often to learn about the latest API updates.

Backward-compatible changes include:

-   New endpoints
-   New methods
-   New request parameters
-   New object types
-   New object properties

## 2017-03-28
Added a <a href="../reference/api.html#schedule-a-charge" target="&#95;blank"><span class="code-green">/charges/{chargeId}/schedule</span></a> endpoint to create a recurring charge using the details of a previously processed payment (i.e., <a href="../reference/api.html#charge" style="font-family:monospace" target="&#95;blank">charge</a> object)

## 2016-03-31
Added a <span class="code-green">currency</span> property to the <a href="../reference/api.html#merchant_account" style="font-family:monospace" target="&#95;blank">merchant_account</a> object

## 2016-10-09
Added an optional <span class="code-green">trust_account</span> property to the <a href="../reference/api.html#merchant_account" style="font-family:monospace" target="&#95;blank">merchant_account</a> and <a href="../reference/api.html#ach_account" style="font-family:monospace" target="&#95;blank">ach_account</a> objects

## 2015-04-14
Added a <span class="code-green">version_conflict</span> error code

## 2015-03-26
-   Added a <span class="code-green">/charges/holds</span> endpoint to return pending manual-capture authorizations
-   Support an optional <span class="code-green">capture_time</span> property when performing a manual capture, with values <span class="code-green">IMMEDIATE</span> or <span class="code-green">NEXT_AUTO_CAPTURE</span>, where <span class="code-green">NEXT_AUTO_CAPTURE</span> converts the transaction from manual to auto-capture
-   Added support for generation of one-time tokens using JSON content, rather than x-www-form-urlencoded content

## 2015-01-27
Added <span class="code-green">accepted_card_types</span> and swipe policy properties (<span class="code-green">swipe_cvv_policy</span>, <span class="code-green">swipe_avs_policy</span>, <span class="code-green">swipe_ignore_avs_failure_if_cvv_match</span>, <span class="code-green">swipe_required_payment_fields</span>) to the <a href="../reference/api.html#merchant_account" style="font-family:monospace" target="&#95;blank">merchant_account</a> object
