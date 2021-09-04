---
layout: index
title: More
permalink: /more/
description: Levelling the playing field.
background_colour: bg-gray-800
---

#### More

{% for item in more.more %}

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
