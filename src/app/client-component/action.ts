'use server'
/**
 * 查询用户列表
 * @returns 
 */
export async function getUsers() {
  await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));
  return [
    { id: 1, name: `John_${Math.random()}` },
    { id: 2, name: `Mary_${Math.random()}` },
    { id: 3, name: `Tom_${Math.random()}` },
  ]
}
