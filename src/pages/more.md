---
layout: index
title: More
permalink: /more/
description: Levelling the playing field.
background_colour: bg-gray-800
---
{% for item in data.more %}

{% container "columns" %}

{% item "column max-w-xs" %}

{% image item.image "Logo" %}

{% enditem %}

{% item "column" %}

### {{ item.title }}

{{ item.description }}

{% enditem %}

{% endcontainer %}

---

{% endfor %}
