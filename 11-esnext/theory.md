# ES Next

## structuredClone
Para hacer copias de objetos que tienen dentro de ellos arreglos, estos al pasar por referencia, si queremos hacer una copia y modificar la copia, por culpa de la referencia, tb me cambiará el original
Hay dos(sencillas) maneras de hacer copias que dependen de los elementos que hayan dentro:
  - Usamos **spread -> [...]** cuando **son** objetivos **primitivos**
  - usamos **structureClone(elemento a clonar)** cunado **no son** priimitivos y sabemos que **pasan por refererencia**

## array: with
Nueva función que permite cambiar un elemento del array al generar una copia del mismo. El problema del ' with() ' es que tenemos que darle todos los parámetros y cambiar solo el que queremos 

## method: at()
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at>