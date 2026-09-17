# 🐻 Oso Curioso: Ilustración SVG que Sigue el Cursor

Ilustración SVG interactiva de un oso cuyos ojos, cabeza, orejas y hocico giran suavemente para "mirar" hacia la posición del cursor. Construida con **HTML, CSS y JavaScript puro**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🔗 Proyecto en vivo

👉 [Ver proyecto en vivo](https://cursor-follow-svg-bear.netlify.app/)

## ✨ Características

- Ilustración 100% en **SVG** de un oso, con partes independientes (ojos, cabeza, orejas, hocico) que reaccionan al cursor.
- Cálculo en tiempo real de la distancia entre el centro de cada elemento y la posición del cursor (`getBoundingClientRect`), aplicando un `translate()` proporcional a esa distancia.
- Cada parte del oso se mueve con un ratio distinto (las orejas casi no se mueven, la cabeza se mueve más sutil, los ojos más notoriamente), dando una sensación de profundidad y movimiento natural.
- **Cursor personalizado** definido en CSS a partir de un SVG propio.
- Soporte para **eventos táctiles** (`touchmove`), permitiendo la misma interacción en dispositivos móviles.

## 🛠️ Tecnologías utilizadas

- **HTML5 / SVG** — ilustración vectorial del oso, estructurada en grupos (`<g>`) para poder animar cada parte por separado.
- **CSS3** — cursor personalizado (`cursor: url(...)`) y transición suave del contenedor principal.
- **JavaScript (Vanilla)** — cálculo de posición relativa del cursor respecto a cada elemento y aplicación de transformaciones (`transform: translate()`) en tiempo real.

## 📂 Estructura del proyecto

```
├── index.html
├── style.css
├── main.js
├── cursor.svg
├── oso.svg
└── README.md
```

## 🚀 Cómo usarlo localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/carlos-daniel07/cursor-follow-svg-bear.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd cursor-follow-svg-bear
   ```
3. Abre `index.html` en tu navegador (o usa la extensión Live Server en VS Code).

## 🧠 Qué aprendí / practiqué

- Manipular grupos SVG (`<g>`) individualmente desde JavaScript como si fueran elementos HTML normales.
- Calcular la posición relativa de un elemento respecto al cursor usando `getBoundingClientRect()` y convertir esa distancia en un porcentaje de la pantalla para que el efecto sea consistente en cualquier resolución.
- Diferenciar la "velocidad" de reacción de varios elementos (mediante ratios distintos) para lograr un efecto de profundidad más creíble que si todos se movieran igual.
- Manejar tanto eventos de mouse (`mousemove`) como táctiles (`touchmove`) para una misma interacción.

## 📸 Vista previa

<img width="1920" height="1536" alt="image" src="https://github.com/user-attachments/assets/82bf515c-6118-4ac2-a14e-f219f665bcf0" />

## 📄 Licencia

Este proyecto es de uso libre con fines educativos y de portfolio. La ilustración del oso es un recurso SVG de uso propio/libre.

---

Hecho con 💻 por [Carlos Daniel](https://github.com/carlos-daniel07)
