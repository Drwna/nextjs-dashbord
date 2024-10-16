export default async function Page() {

  const getNumber = new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(10)
    }, 3000)
  })

  const number = await getNumber

  return <p>Customer Page -- {number}</p>

}