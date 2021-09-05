---
layout: index
title: Books
permalink: /books/
description: Levelling the playing field.
background_colour: bg-gray-800
---
{% for item in data.books %}

{% container "columns" %}

{% item "column max-w-xs" %}

{% image item.image "Book image" %}

{% enditem %}

{% item "column" %}

### {{ item.title }}

*By {{ item.author }}*

{{ item.description }}

{% enditem %}

{% endcontainer %}

---

{% endfor %}
