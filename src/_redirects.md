---
permalink: _redirects
templateEngineOverride: liquid
---

{%- for item in redirects.redirects -%}
  {{ item.source }} {{ item.destination }} {{ item.code }}
{% endfor -%}
