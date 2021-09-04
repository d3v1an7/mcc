---
layout: index
title: Videos
permalink: /videos/
description: Levelling the playing field.
background_colour: bg-gray-800
---

#### Videos

{% for item in videos.videos %}

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
