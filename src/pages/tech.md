---
layout: index
title: Tech
permalink: /tech/
description: Levelling the playing field.
background_colour: bg-gray-800
---
{% for item in data.tech %}

{% container "columns" %}

{% item "column max-w-xs" %}

<div class="bg-white p-10">

{% image item.image "Logo" %}

</div>

{% enditem %}

{% item "column" %}

### {{ item.title }}

{{ item.description }}

{% enditem %}

{% endcontainer %}

---

{% endfor %}
