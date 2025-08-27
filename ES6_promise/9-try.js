/* eslint-disable */
export default function guardrail(mathFunction) {
  const queue = [];
  let i = 0;
  function capture() {
    try {
      queue.push(mathFunction());
    } catch (e) {
      queue.push(`Error: ${e.message}`);
    } finally {
      i += 1;
      if (i === 0) {
        return capture(), queue;
      }
    }
    return queue.push('Guardrail was processed'), queue;
  }
  return capture();
}
