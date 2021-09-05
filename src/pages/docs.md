---
layout: index
title: Docs
permalink: /docs/
description: Levelling the playing field.
background_colour: bg-gray-800
---
{% for item in data.docs %}

{% container "columns" %}

{% item "column max-w-xs" %}

<img src="{{ item.image }}">

{% enditem %}

{% item "column" %}

### {{ item.title }}

{{ item.description }}

{% enditem %}

{% endcontainer %}

---

{% endfor %}
