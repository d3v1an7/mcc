---
layout: index
title: Tech
permalink: /tech/
description: Levelling the playing field.
background_colour: bg-gray-800
---

#### Tech

{% for item in tech.tech %}

{% container "columns" %}

{% item "column max-w-xs" %}

<div class="bg-white p-10"><img src="{{ item.image }}"></div>

{% enditem %}

{% item "column" %}

### {{ item.title }}

{{ item.description }}

{% enditem %}

{% endcontainer %}

---

{% endfor %}
