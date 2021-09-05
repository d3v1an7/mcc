---
layout: index
title: Videos
permalink: /videos/
description: Levelling the playing field.
background_colour: bg-gray-800
---
{% for item in data.videos %}

{% container "columns" %}

{% item "column" %}

{{ item.url }}

{% enditem %}

{% item "column" %}

### {{ item.title }}

{{ item.description }}

{% enditem %}

{% endcontainer %}

---

{% endfor %}
