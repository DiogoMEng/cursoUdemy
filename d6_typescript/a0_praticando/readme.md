# EXERCICIOS

<a href="#rgb-hex-conversion">Questão 1: Conversão de RGB para Hex</a>

---

# <p id="rgb-hex-conversion">Conversão de RGB para Hex</p>

A função rgb está incompleta. Complete-a de forma que a passagem de valores decimais RGB resulte em uma representação hexadecimal. Os valores decimais válidos para RGB vão de 0 a 255. Quaisquer valores fora desse intervalo devem ser arredondados para o valor válido mais próximo.

> Observação: sua resposta deve ter sempre 6 caracteres; a abreviação com 3 não funcionará aqui.

```bash
# EXEMPLOS

255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
```

```typescript
// RESOLUÇÃO

type RGBConvert = (R: number, G: number, B: number) => string;

// Função irá garantir que value fique no intervalo de 0 a 255
const clamp = (value: number): number => {
  // Etapas
  // --> Garante que o valor não seja menor que 0.
  // --> Garante que o valor não seja maior que 255.
  // --> Arredonda o valor para o inteiro mais próximo.
  return Math.max(0, Math.min(255, Math.round(value)));
};

// toString(16) - converte o número para hexadecimal
// padStart(2, "0") - garante que o resultado tenho sempre dois dígitos

const rgb: RGBConvert = (R, G, B) => {
  const r = clamp(R).toString(16).padStart(2, "0");
  const g = clamp(G).toString(16).padStart(2, "0");
  const b = clamp(B).toString(16).padStart(2, "0");
  return (r + g + b).toUpperCase();
};

console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(0, 0, 0));      
console.log(rgb(148, 0, 211));  
```