async function $try<T extends (...args: any[]) => any>(
  fn: T
): Promise<ReturnType<T>> {
  return await fn()
}

function divide(a: number, b: number) {
  if (b === 0) {
    throw new Error('DivisionByZero')
  }
  return a / b
}

async function foo() {
  const r = await $try(() => divide(10, 1)).catch((_) => 0)
  console.log(r)
}

foo()
